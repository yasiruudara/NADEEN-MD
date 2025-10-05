const { cmd } = require("../command");
const axios = require("axios");
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

