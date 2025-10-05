const { cmd } = require("../command");
const axios = require("axios");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions');
const fs = require("fs");

cmd({
    pattern: "getpp",
    desc: "Fetch the profile picture of a tagged or replied user.",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { quoted, isGroup, sender, isMe, isOwner, isSudo, participants, reply }) => {
    try {
        //Owner only
        if (!isMe && isOwner && isSudo) return reply("*THIS COMMAND ONLY OWNER*");

        // Determine the target user
        const targetJid = quoted ? quoted.sender : sender;

        if (!targetJid) return reply("⚠️ Please reply to a message to fetch the profile picture.");

        // Fetch the user's profile picture URL
        const userPicUrl = await conn.profilePictureUrl(targetJid, "image").catch(() => null);

        if (!userPicUrl) return reply("⚠️ No profile picture found for the specified user.");

        // Send the user's profile picture
        await conn.sendMessage(m.chat, {
            image: { url: userPicUrl },
            caption: "🖼️ ʜᴇʀᴇ ɪꜱ ᴛʜᴇ ᴘʀᴏꜰɪʟᴇ ᴘɪᴄᴛᴜʀᴇ ᴏꜰ ᴛʜᴇ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴜꜱᴇʀ.\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*"
        });
    } catch (e) {
        console.error("Error fetching user profile picture:", e);
        reply("❌ An error occurred while fetching the profile picture. Please try again later.");
    }
});

const Jimp = require('jimp')

cmd({
    pattern: "fullpp",
    react: "⚡",
    category: "owner",
    use: '.fullpp <mention your photo>',
    filename: __filename
}, async (conn, mek, m, context) => {
    const { from } = context;

    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        if (!mime || !mime.startsWith('image')) {
            return await conn.sendMessage(from, { text: '❌ Reply to an image with *fullpp*' }, { quoted: m });
        }

        // Download image buffer
        let imgBuffer = await q.download();

        // Read image with Jimp
        let image = await Jimp.read(imgBuffer);

        // Resize & crop to WhatsApp size (640x640)
        image.cover(640, 640);

        // Save to buffer
        let finalBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);

        // Update bot profile picture
        await conn.updateProfilePicture(conn.user.id, finalBuffer);

        await conn.sendMessage(from, { text: '✅ Bot profile picture updated successfully!\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*' }, { quoted: m });
    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { text: '❌ Failed to update bot profile picture.' }, { quoted: m });
    }
});

cmd({
    pattern: "tempmail",
    alias: ["genmail"],
    desc: "Generate a new temporary email address",
    category: "other",
    react: "📧",
    filename: __filename
},
async (conn, mek, m, { from, reply, prefix }) => {
    try {
        const response = await axios.get('https://apis.davidcyriltech.my.id/temp-mail');
        const { email, session_id, expires_at } = response.data;

        // Format the expiration time and date
        const expiresDate = new Date(expires_at);
        const timeString = expiresDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        const dateString = expiresDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        // Create the complete message
        const message = `
📧 *TEMPORARY EMAIL GENERATED*

✉️ *Email Address:*
${email}

⏳ *Expires:*
${timeString} • ${dateString}

🔑 *Session ID:*
\`\`\`${session_id}\`\`\`

📥 *Check Inbox:*
.inbox ${session_id}

_Email will expire after 24 hours_
${config.FOOTER}
`;

        await conn.sendMessage(
            from,
            { 
                text: message,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304606757133@newsletter',
                        newsletterName: 'NADEEN-MD',
                        serverMessageId: 101
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.error('TempMail error:', e);
        reply(`❌ Error: ${e.message}`);
    }
});
cmd({
    pattern: "checkmail",
    alias: ["inbox", "tmail", "mailinbox"],
    desc: "Check your temporary email inbox",
    category: "other",
    react: "📬",
    filename: __filename
},
async (conn, mek, m, { from, reply, args }) => {
    try {
        const sessionId = args[0];
        if (!sessionId) return reply('🔑 Please provide your session ID\nExample: .checkmail YOUR_SESSION_ID');

        const inboxUrl = `https://apis.davidcyriltech.my.id/temp-mail/inbox?id=${encodeURIComponent(sessionId)}`;
        const response = await axios.get(inboxUrl);

        if (!response.data.success) {
            return reply('❌ Invalid session ID or expired email');
        }

        const { inbox_count, messages } = response.data;

        if (inbox_count === 0) {
            return reply('📭 Your inbox is empty');
        }

        let messageList = `📬 *You have ${inbox_count} message(s)*\n\n`;
        messages.forEach((msg, index) => {
            messageList += `━━━━━━━━━━━━━━━━━━\n` +
                          `📌 *Message ${index + 1}*\n` +
                          `👤 *From:* ${msg.from}\n` +
                          `📝 *Subject:* ${msg.subject}\n` +
                          `⏰ *Date:* ${new Date(msg.date).toLocaleString()}\n\n` +
                          `📄 *Content:*\n${msg.body}\n\n ` +
                          `*㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 〽️𝙳*`;
        });

        await reply(messageList);

    } catch (e) {
        console.error('CheckMail error:', e);
        reply(`❌ Error checking inbox: ${e.response?.data?.message || e.message}`);
    }
});

cmd({
    pattern: "readmore",
    desc: "Readmore message",
    category: "convert",
    use: '.readmore < text >',
    react: "📝",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender
}) => {
    try {
        // Get the message text after the command (.readmore text)
        let readmoreText = q ? q : "No text provided";

        // Create the "Readmore" effect by adding a special character to split the text
        let readmore = "\u200B".repeat(4000); // This creates a large gap between text

        // Full message to send
        let replyText = `${readmore}${readmoreText}`;

        // Send the message with the "Readmore" functionality
        await conn.sendMessage(from, { text: replyText }, { quoted: mek });

        // React to the message
        await conn.sendMessage(from, { react: { text: "", key: mek.key } });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
cmd({
  pattern: "srepo",
  desc: "Fetch information about a GitHub repository.",
  category: "search",
  react: "🍃",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    const repoName = args.join(" ");
    if (!repoName) {
      return reply("❌ Please provide a GitHub repository in the format 📌 `owner/repo`.");
    }

    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const { data } = await axios.get(apiUrl);

    let responseMsg = `📁 *GitHub Repository Info* 📁\n\n`;
    responseMsg += `📌 *Name*: ${data.name}\n`;
    responseMsg += `🔗 *URL*: ${data.html_url}\n`;
    responseMsg += `📝 *Description*: ${data.description || "No description"}\n`;
    responseMsg += `⭐ *Stars*: ${data.stargazers_count}\n`;
    responseMsg += `🍴 *Forks*: ${data.forks_count}\n`;
    responseMsg += `👤 *Owner*: ${data.owner.login}\n`;
    responseMsg += `📅 *Created At*: ${new Date(data.created_at).toLocaleDateString()}\n`;
    responseMsg += `\n> ${config.FOOTER}`;

    await conn.sendMessage(from, { text: responseMsg }, { quoted: m });
  } catch (error) {
    console.error("GitHub API Error:", error);
    reply(`❌ Error fetching repository data: ${error.response?.data?.message || error.message}`);
  }
});

cmd({
  pattern: "story",
  desc: "Post a WhatsApp status (story) as text, image, or video",
  category: "owner",
  use: ".story <text|url> [caption]",
  filename: __filename
}, async (conn, mek, m, { isOwner, args, quoted }) => {
  if (!isOwner) return;
  try {
    if (quoted && quoted.message.imageMessage) {
      // Image story from quoted message
      const image = await conn.downloadMediaMessage(quoted);
      const caption = args.join(' ') || '';
      await conn.sendMessage("status@broadcast", { image, caption });
    } else if (quoted && quoted.message.videoMessage) {
      // Video story from quoted message
      const video = await conn.downloadMediaMessage(quoted);
      const caption = args.join(' ') || '';
      await conn.sendMessage("status@broadcast", { video, caption });
    } else if (args.length && /^https?:\/\/\S+\.\S+/i.test(args[0])) {
      // Media story (image/video by URL)
      const url = args[0];
      const caption = args.slice(1).join(' ') || '';
      const res = await axios.head(url);
      const mime = res.headers['content-type'];
      if (mime.startsWith("image")) {
        await conn.sendMessage("status@broadcast", { image: { url }, caption });
      } else if (mime.startsWith("video")) {
        await conn.sendMessage("status@broadcast", { video: { url }, caption });
      } else {

      }
    } else {
      // Text story
      const text = args.join(' ');
      await conn.sendMessage("status@broadcast", { text });
    }
    
  } catch (e) {
    console.error("Failed to send status update:", e);
    
  }
});
