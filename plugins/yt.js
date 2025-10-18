const config = require('../config'),
  fs = require('fs'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  { cmd, commands } = require('../command'),
  sadiya_apikey = 'sadiya-key-666'
sizetoo = '_This file size is too big_'
const yts = require('ytsearch-venom')
const { ytmp3, tiktok, facebook, instagram, twitter, ytmp4 } = require('sadaslk-dlcore')
let wm = config.FOOTER,
  newsize = config.MAX_SIZE * 2048 * 2048
function ytreg(_0x3f851d) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(
    _0x3f851d
  )
}
cmd(
  {
    pattern: 'yts',
    alias: ['ytsearch'],
    use: '.yts lelena',
    react: '\uD83D\uDD0E',
    desc: 'Search songs',
    category: 'search',
    filename: __filename,
  },
  async (
    _0x3a8e5a,
    _0x50e9ea,
    _0x342a22,
    {
      from: _0x2c4452,
      l: _0x315b50,
      quoted: _0x186cd4,
      body: _0x246589,
      isCmd: _0x16119c,
      command: _0x191366,
      args: _0x393fa7,
      q: _0x442f28,
      isGroup: _0x570ca3,
      sender: _0x238f53,
      senderNumber: _0x170f42,
      botNumber2: _0x45d845,
      botNumber: _0x3cdb06,
      pushname: _0xd6cf7a,
      isMe: _0x54316d,
      isOwner: _0x1308b6,
      groupMetadata: _0x1060b6,
      groupName: _0x517421,
      participants: _0x17568a,
      groupAdmins: _0x280b5a,
      isBotAdmins: _0x185964,
      isAdmins: _0x3387c1,
      reply: _0x417208,
    }
  ) => {
    try {
      if (!_0x442f28) {
        return await _0x417208(imgmsg)
      }
      if (isUrl(_0x442f28) && !ytreg(_0x442f28)) {
        return await _0x417208(imgmsg)
      }
      try {
        let _0x54d683 = require('ytsearch-venom')
        var _0x1ec364 = await _0x54d683(_0x442f28)
      } catch (_0x55c1ce) {
        return (
          _0x315b50(_0x55c1ce),
          await _0x3a8e5a.sendMessage(
            _0x2c4452,
            { text: '*Error !!*' },
            { quoted: _0x50e9ea }
          )
        )
      }
      var _0x4c2f07 = ''
      _0x1ec364.all.map((_0x59739f) => {
        _0x4c2f07 +=
          ' *🔍️' +
          _0x59739f.title +
          '*\n\uD83D\uDD17 ' +
          _0x59739f.url +
          '\n\n'
      })
      await _0x3a8e5a.sendMessage(
        _0x2c4452,
        { text: _0x4c2f07 },
        { quoted: _0x50e9ea }
      )
    } catch (_0x5aeb46) {
      _0x315b50(_0x5aeb46)
      _0x417208('*Error !!*')
    }
  }
)
cmd({
    pattern: "song",
    alias: ["ytsong"],
    use: '.song <query or url>',
    react: "🎧",
    desc: "Download high-quality songs from YouTube",
    category: "Download",
    filename: __filename
},

async(conn, mek, m, {
  from, prefix, q, reply
}) => {
  try {
    if (!q) return await reply('🔎 *Please provide a song name or YouTube link!*');

    const url = q.replace(/\?si=[^&]*/, '');
    const results = await yts(url);
    const result = results.videos[0];
    const wm = config.FOOTER;

    let caption = `\`🎧 🄽🄰🄳🄴🄴🄽 🅂🄾🄽🄶 🄳🄾🅆🄽🄻🄾🄳🄴🅁 🎧\`	
*┌────────────────────┐*
*├ \`🎶 Title\` : ${result.title}*
*├ \`🐼 Views\` : ${result.views}*
*├ \`⌛ Duration\` : ${result.duration}*
*├ \`📎 URL\` : ${result.url}*
*└────────────────────┘*`;

    const buttons = [
      {
        buttonId: `${prefix}ytaa ${result.url}`,
        buttonText: { displayText: '*Audio Format 🎶*' },
        type: 1
      },
      {
        buttonId: `${prefix}ytad ${result.url}&${result.thumbnail}&${result.title}`,
        buttonText: { displayText: '*Document Format 📂*' },
        type: 1
      },
		 {
        buttonId: `${prefix}ytaap ${result.url}`,
        buttonText: { displayText: '*Voice Format 🎤*' },
        type: 1
      }
    ];

    const buttonMessage = {
      image: { url: result.thumbnail },
      caption: caption,
      footer: wm,
      buttons: buttons,
      headerType: 4
    };

const listButtons = {
  title: "🎵 Choose an audio format",
  sections: [
    {
      title: "Audio Formats 🎶",
      rows: [
        {
          title: "Audio Format",
          description: "Send as audio (music)",
          id: `${prefix}ytaa ${result.url}`
        },
        {
          title: "Document Format",
          description: "Send as document file",
          id: `${prefix}ytad ${result.url}&${result.thumbnail}&${result.title}`
        },
        {
          title: "Voice Note",
          description: "Send as voice message",
          id: `${prefix}ytaap ${result.url}`
        }
      ]
    }
  ]
};


	  
if (config.BUTTON === 'true') {
  return await conn.sendMessage(from, {
        image: {url: result.thumbnail },
        caption,
        footer: config.FOOTER,
        buttons: [
          {
            buttonId: "Song formats list",
            buttonText: { displayText: "🎥 Select Option" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify(listButtons)
            }
          }
        ],
        headerType: 1,
        viewOnce: true
      }, { quoted: mek });


} else if (config.BUTTON === 'false') {
   await conn.buttonMessage(from, buttonMessage, mek);
}

   

  } catch (e) {
    console.error(e);
    reply('❌ *Song not found or an error occurred.*');
  }
});


cmd({
    pattern: "ytaa",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    if (!q) return await reply('*Need a YouTube URL!*');

    try {
        const prog = await fetchJson(`https://yt-five-tau.vercel.app/download?q=${q}&format=mp3&apikey=sadas2007`)
        if (!prog || !prog.result.download) return await reply('*Conversion failed, try again!*');

        try {
            const bytes = await checkFileSize(prog.result.download, config.MAX_SIZE);
            const sizeInMB = (bytes / (1024 * 1024)).toFixed(2);

            // This check is redundant now, but left for safety
            if (sizeInMB > config.MAX_SIZE) {
                return reply(`*⚠️ File too large!*\n\n*📌 Maximum allowed: \`${config.MAX_SIZE}\` MB*`);
            }

        } catch (err) {
            return reply(`*⚠️ File too large or cannot determine size!*\n\n*📌 Maximum allowed: \`${config.MAX_SIZE}\` MB*`);
        }

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(
            from,
            { audio: { url: prog.result.download }, mimetype: 'audio/mpeg' },
            { quoted: mek }
        );

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        reply(N_FOUND);
        console.log(e);
    }
});

cmd({
  pattern: "ytaap",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
  if (!q) return await reply('*Need a youtube url!*');

  try {
    const prog = await fetchJson(`https://yt-five-tau.vercel.app/download?q=${encodeURIComponent(q)}&format=mp3&apikey=sadas2007`);
    if (!prog?.result?.download) throw new Error('No download URL');

    await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

    const res = await fetch(prog.result.download);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await conn.sendMessage(
      from,
      {
        audio: buffer,
        mimetype: 'audio/ogg; codecs=opus',
        ptt: true
      },
      { quoted: mek }
    );

    await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
  } catch (e) {
    await reply('❌ Failed: ' + (e.message || e));
    console.log(e);
  }
});
cmd({
    pattern: "ytad",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Need a YouTube URL!*');

        const datae = q.split("&")[0];
        const datas = q.split("&")[1];
        const title = q.split("&")[2];

        // --- Thumbnail fetch ---
        const botimgResponse = await fetch(datas);
        const botimgBuffer = await botimgResponse.buffer();

        // --- Get audio download link ---
        const prog = await fetchJson(`https://yt-five-tau.vercel.app/download?q=${datae}&format=mp3&apikey=sadas2007`);
       

        // --- File size check with filesizeurl ---
        const bytes = await file_size_url(prog.result.download);
        const sizeInMB = (bytes / (1024 * 1024)).toFixed(2);

        if (sizeInMB > config.MAX_SIZE) {
            return await reply(
                `*⚠️ File too large!*\n\n📂 Size: ${sizeInMB} MB\n📌 Maximum allowed: ${config.MAX_SIZE} MB`
            );
        }

        // --- Send audio file ---
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(
            from,
            {
                document: { url: prog.result.download },
                jpegThumbnail: botimgBuffer,
                mimetype: 'audio/mpeg',
                caption: wm || config.FOOTER,
                fileName: `${title}.mp3`
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.log(e);
        await reply('*❌ Error occurred while processing your request.*');
    }
});


  cmd({
    pattern: "directmp3",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
try {
           if (!q) return await reply('*Need a youtube url!*')
	
 

	await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
	const up_mg =  await conn.sendMessage(from, { text : `*Uploading request ..⬆️*` }, {quoted: mek} )
           
	await conn.sendMessage(from, { audio:{ url: q }, caption: config.FOOTER , mimetype: 'audio/mpeg' , caption: wm, fileName: `test.mp3` });
        await conn.sendMessage(from, { delete: up_mg.key })
	await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
} catch (e) {
	       console.log(e)
        }
    })
cmd(
  {
    pattern: '40k',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3a3175,
    _0x38b0d0,
    _0x2c2ee2,
    { from: _0x2fbbc9, q: _0x3154a6, reply: _0x5abb42 }
  ) => {
    try {
      if (!_0x3154a6) {
        return await _0x5abb42('*Need a youtube url!*')
      }
      const _0x12d12c = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x3154a6 + '&apikey=d4a5c39da3e24d13&format=2160'
      )
      await _0x3a3175.sendMessage(
        _0x2fbbc9,
        {
          video: { url: _0x12d12c.data.result.download },
          caption: '\n*4K*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x38b0d0 }
      )
    } catch (_0x5e1619) {
      console.log(_0x5e1619)
    }
  }
)
cmd(
  {
    pattern: '1080p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=1080'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*1080p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '240p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=240'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*240p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '480p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=480'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*480p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '360p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=360'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*360p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '140K',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=1440'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*1440p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '36p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=360'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*360p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '48p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=480'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*480p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '108p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=1080'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*1080p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '24p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=240'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*240p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '1440p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3c5ffe,
    _0x12e91e,
    _0x1cbf6a,
    {
      from: _0x29b69d,
      quoted: _0x14c02f,
      body: _0x181f29,
      isCmd: _0x2fa563,
      command: _0x254bc6,
      args: _0x31287f,
      q: _0x16559b,
      isGroup: _0x425c9d,
      sender: _0x59978b,
      senderNumber: _0x298503,
      botNumber2: _0x460f00,
      botNumber: _0x117104,
      pushname: _0x3b9407,
      isMe: _0x394804,
      isOwner: _0x416c96,
      groupMetadata: _0x1ad423,
      groupName: _0x91e47,
      participants: _0x4c07f9,
      groupAdmins: _0x169d12,
      isBotAdmins: _0x535e79,
      isAdmins: _0x4f2869,
      reply: _0x5f3b99,
    }
  ) => {
    try {
      const _0x2888a4 = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' +
            _0x16559b +
            '&apikey=d4a5c39da3e24d13&format=1440'
        ),
        _0x334252 = _0x2888a4.data.result.download
      await _0x3c5ffe.sendMessage(
        _0x29b69d,
        {
          video: { url: _0x334252 },
          mimetype: 'video/mp4',
          caption: '*1440p*\n\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x12e91e }
      )
    } catch (_0x1ae6ff) {
      console.log(_0x1ae6ff)
      _0x5f3b99("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x3c5ffe.sendMessage(
        _0x117104 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x1ae6ff },
        { quoted: _0x12e91e }
      )
    }
  }
)
cmd(
  {
    pattern: '4k',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=2160'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*4K*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd({
    pattern: "video",
    alias: ["ytvideo"],
    use: '.video lelena',
    react: "📽️",
      desc: "Download videoss",
    category: "download",
    filename: __filename
},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{            
    if (!q) return await reply('*Please enter a query or a url!*')
    const url = q.replace(/\?si=[^&]*/, '');
    var results = await yts(url);
    let wm = config.FOOTER
    var result = results.videos[0]
     let caption = `*📹 🅅🄸🅂🄿🄴🅁 🅅🄸🄳🄴🄾 🄳🄾🅆🄽🄻🄾🄰🄳🄴🅁 📹*
*┌─────────────────────┐*
*├ \`📹 Title\` : ${result.title}* 
*├ \`🐼 Views\` : ${result.views}*
*├ \`⌛Duration\` : ${result.duration}*
*├ \`📎 URL\` : ${result.url}*
*└─────────────────────┘*`
const sections = [
  {
title: "`Video type 📽️`",
rows: [{
title: '```144p Video```',
rowId: prefix + `videodl144 ${result.url}` 
},
{
title: '```240p Video```',
rowId: prefix + `videodl240 ${result.url}`
},
{
title: '```360p Video```',
rowId: prefix + `videodl360 ${result.url}`
},
{
title: '```720p Video```',
rowId: prefix + `videodl720 ${result.url}`
},       
{
title: '```1080p Video```',
rowId: prefix + `videodl1080 ${result.url}`
}
       
]},  

{
title: "`Document type 📁`",
rows: [{
title: '```144p Document```',
rowId: prefix + `docdl144 ${result.url}&${result.thumbnail}&${result.title}`
},
{
title: '```240p Document```',
rowId: prefix + `docdl240 ${result.url}&${result.thumbnail}&${result.title}`
},
{
title: '```360p Document```',
rowId: prefix + `docdl360 ${result.url}&${result.thumbnail}&${result.title}`
},
{
title: '```720p Document```',
rowId: prefix + `docdl720 ${result.url}&${result.thumbnail}&${result.title}`
},       
{
title: '```1080p Document```',
rowId: prefix + `docdl1080 ${result.url}&${result.thumbnail}&${result.title}`
}
       
]}  	
]
const listMessage = {
text: caption,
image: {url: result.thumbnail },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*\n',
sections
}

const listButtons = {
  title: "❯❯ Choose a video quality ❮❮",
  sections: [
    {
      title: "Video Type 📽️",
      rows: [
        { title: "144p Video", "description":"144p quality download", id: prefix + `videodl144 ${result.url}` },
        { title: "240p Video",  "description":"240p quality download",id: prefix + `videodl240 ${result.url}` },
        { title: "360p Video", "description":"360p quality download", id: prefix + `videodl360 ${result.url}` },
        { title: "720p Video", "description":"720p quality download",id: prefix + `videodl720 ${result.url}` },
        { title: "1080p Video","description":"1080p quality download", id: prefix + `videodl1080 ${result.url}` }
      ]
    },
    {
      title: "Document Type 📁",
      rows: [
        { title: "144p Document","description":"144p quality download", id: prefix + `docdl144 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "240p Document", "description":"240p quality download",id: prefix + `docdl240 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "360p Document","description":"360p quality download", id: prefix + `docdl360 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "720p Document", "description":"720p quality download",id: prefix + `docdl720 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "1080p Document","description":"1080p quality download", id: prefix + `docdl1080 ${result.url}&${result.thumbnail}&${result.title}` }
      ]
    }
  ]
};

    // Sending logic based on config.BUTTON
    if (config.BUTTON === "true") {
      return await conn.sendMessage(from, {
        image: {url: result.thumbnail },
        caption,
        footer: config.FOOTER,
        buttons: [
          {
            buttonId: "Video quality list",
            buttonText: { displayText: "🎥 Select Option" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify(listButtons)
            }
          }
        ],
        headerType: 1,
        viewOnce: true
      }, { quoted: mek });

} else if (config.BUTTON === 'false') {
   await conn.listMessage4(from, listMessage,mek)
}

	

} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "docdl144",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Need a YouTube URL!*');

        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while processing your request.*');
    }
});



cmd({
    pattern: "docdl240",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Need a YouTube URL!*');

        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=240&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while processing your request.*');
    }
});



cmd({
    pattern: "docdl360",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Need a YouTube URL!*');

        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=360&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while processing your request.*');
    }
});



cmd({
    pattern: "docdl720",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
try {
           if (!q) return await reply('*Need a youtube url!*')
	        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
} catch (e) {
	       console.log(e)
        }
    })



cmd({
    pattern: "docdl1080",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
try {
           if (!q) return await reply('*Need a youtube url!*')
	
                 const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
} catch (e) {
	       console.log(e)
        }
    })


















cmd({
    pattern: "videodl144",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*You must provide a YouTube URL!*');

        const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while downloading the video.*');
    }
});




cmd({
    pattern: "videodl240",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=240&videoQuality=144&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })



cmd({
    pattern: "videodl360",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=360&videoQuality=144&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })




cmd({
    pattern: "videodl720",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
          const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })



cmd({
    pattern: "videodl1080",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
cmd(
  {
    pattern: 'download',
    react: '\uD83C\uDF5F',
    alias: ['down'],
    desc: 'Direct downloader from a link',
    category: 'movie',
    use: '.directdl <Direct Link>',
    dontAddCommandList: false,
    filename: __filename,
  },
  async (
    _0x2d6e3d,
    _0x397668,
    _0x59bae5,
    { from: _0x5870d5, q: _0x3ddfc1, reply: _0xcb33bf }
  ) => {
    try {
      if (!_0x3ddfc1) {
        return _0xcb33bf('\u2757 Please provide a direct download link.')
      }
      const _0x16c513 = _0x3ddfc1.trim()
      if (!/^(https?:\/\/[^\s]+)/.test(_0x16c513)) {
        return _0xcb33bf(
          '\u2757 The provided URL is invalid. Please check the link and try again.'
        )
      }
      await _0x2d6e3d.sendMessage(_0x5870d5, {
        react: {
          text: '\u2B07️',
          key: _0x397668.key,
        },
      })
      let _0x124ce6 = 'video/mp4',
        _0x55dd05 = 'downloaded_video.mp4'
      try {
        const _0x48a3ed = await axios.head(_0x16c513),
          _0x3224d2 = _0x48a3ed.headers['content-type']
        if (_0x3224d2) {
          _0x124ce6 = _0x3224d2
        }
        const _0x179c7d = _0x48a3ed.headers['content-disposition']
        if (_0x179c7d && _0x179c7d.includes('filename=')) {
          const _0x231a62 = _0x179c7d.match(
            /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
          )
          _0x231a62 &&
            _0x231a62[1] &&
            (_0x55dd05 = _0x231a62[1].replace(/['"]/g, ''))
        } else {
          const _0x1ec73b = new URL(_0x16c513).pathname,
            _0x5415fe = path.basename(_0x1ec73b)
          if (_0x5415fe) {
            _0x55dd05 = _0x5415fe
          }
        }
      } catch (_0x5a28d8) {
        const _0x306413 = new URL(_0x16c513).pathname,
          _0x1030b8 = path.basename(_0x306413)
        if (_0x1030b8) {
          _0x55dd05 = _0x1030b8
        }
      }
      await _0x2d6e3d.sendMessage(_0x5870d5, {
        document: { url: _0x16c513 },
        caption: config.FOOTER,
        mimetype: _0x124ce6,
        fileName: _0x55dd05 + 'NADEEN-MD',
      })
      await _0x2d6e3d.sendMessage(_0x5870d5, {
        react: {
          text: '\u2705',
          key: _0x397668.key,
        },
      })
    } catch (_0x54e1c5) {
      _0xcb33bf('\u2757 Error occurred: ' + _0x54e1c5.message)
    }
  }
)
