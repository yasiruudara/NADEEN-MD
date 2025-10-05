const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
  sharp = require('sharp'),
  download = require('../lib/yts'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  fetch = (..._0x528df7) =>
    import('node-fetch').then(({ default: _0x1863f6 }) =>
      _0x1863f6(..._0x528df7)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log,
  cinesubz_tv = require('sadasytsearch'),
  {
    cinesubz_info,
    cinesubz_tv_firstdl,
    cinesubz_tvshow_info,
  } = require('../lib/cineall')
cmd({
  pattern: "cine",	
  react: '🔎',
  category: "movie",
  alias: ["cz"],
  desc: "cinesubz.co movie search",
  use: ".cine 2025",
  filename: __filename
},
async (conn, m, mek, {
  from, q, prefix, isPre, isSudo, isOwner, isMe, reply
}) => {
  try {
    const pr = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json')).data;
    const isFree = pr.mvfree === "true";

    // Premium check
    if (!isFree && !isMe && !isPre) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return await conn.sendMessage(from, {
        text: "*`You are not a premium user⚠️`*\n\n" +
              "*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n" +
              "_Price : 300 LKR ✔️_\n\n" +
              "*👨‍💻Contact us : 0711451319 , 0755275844*"
      }, { quoted: mek });
    }

    // Block check
    if (config.MV_BLOCK === "true" && !isMe && !isSudo && !isOwner) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return await conn.sendMessage(from, {
        text: "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, { quoted: mek });
    }

    if (!q) return await reply('*Please give me a movie name 🎬*');

    const url = await cinesubz_tv(q);

    if (!url || !url.data || url.data.length === 0) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
    }

   var srh = [];  
for (var i = 0; i < url.data.length; i++) {
srh.push({
title: (url.data[i].title || "No result")
    .replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", "")
    .replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ""),

description: '',
rowId: prefix + 'cinedl2 ' + url.data[i].link
});
}

const sections = [{
title: "cinesubz.co results",
rows: srh
}	  
]
const listMessage = {
text: `_*CINESUBZ  MOVIE SEARCH RESULTS 🎬*_

*\`Input :\`* ${q}`,
footer: config.FOOTER,
title: 'cinesubz.co results',
buttonText: '*Reply Below Number 🔢*',
sections
}


    const caption = `_*CINESUBZ MOVIE SEARCH RESULTS 🎬*_ 

*\`💃🏻Input :\`* ${q}`;

    // ✅ Button mode toggle
    const rowss = url.data.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${url.data[i].title}`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `cinedl2 ${url.data[i].link}` // Make sure your handler understands this format
    };
  });

  // Compose the listButtons object
  const listButtons = {
    title: "Choose a Movie :)",
    sections: [
      {
        title: "Available Links",
        rows: rowss
      }
    ]
  };

	
if (config.BUTTON === "true") {
      await conn.sendMessage(from, {
    image: { url: config.LOGO },
    caption: caption,
    footer: config.FOOTER,
    buttons: [

	    
      {
        buttonId: "download_list",
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
    } else {
      await conn.listMessage(from, listMessage,mek)
    }

  } catch (e) {
    console.log(e);
    await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek });
  }
});




cmd({
    pattern: "cinedl2",	
    react: '🎥',
     desc: "moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isMe, prefix, reply }) => {
try{
if (!q || !q.includes('https://cinesubz.net/movies/')) {
    console.log('Invalid input:', q);
    return await reply('*❗ This is a TV series, please use .tv command.*');
}

let sadass = await fetchJson(`https://visper-md-ap-is.vercel.app/movie/cine/info?q=${q}`)
const sadas = sadass.result;
	console.log(cinesubz_info)
let msg = `*🍿 𝗧ɪᴛʟᴇ ➮* *_${sadas.data.title  || 'N/A'}_*

*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${sadas.data.date  || 'N/A'}_
*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _${sadas.data.country  || 'N/A'}_
*💃 𝗥ᴀᴛɪɴɢ ➮* _${sadas.data.imdb  || 'N/A'}_
*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _${sadas.data.runtime  || 'N/A'}_
*💁 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${sadas.data.subtitle_author  || 'N/A'}_
*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* ${sadas.data.genres.join(', ')  || 'N/A'}
`

if (sadas.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )

var rows = [];  

rows.push(
    { buttonId: prefix + 'ctdetails2 ' + q, buttonText: { displayText: 'Details Card\n' }, type: 1 }
    
);

	
  sadas.dl_links.map((v) => {
	rows.push({
        buttonId: prefix + `paka2 ${sadas.data.image}±${v.link}±${sadas.data.title}
	
	*\`[ ${v.quality} ]\`*`,
        buttonText: { 
    displayText: `${v.size}  (${v.quality} )`
        .replace("WEBDL", "")
	     .replace("WEB DL", "")
        .replace("BluRay HD", "") 
	.replace("BluRay SD", "") 
	.replace("BluRay FHD", "") 
	.replace("Telegram BluRay SD", "") 
	.replace("Telegram BluRay HD", "") 
		.replace("Direct BluRay SD", "") 
		.replace("Direct BluRay HD", "") 
		.replace("Direct BluRay FHD", "") 
		.replace("FHD", "") 
		.replace("HD", "") 
		.replace("SD", "") 
		.replace("Telegram BluRay FHD", "") 
		
},
        type: 1
          }
		 
		 
		 );
        })



  
const buttonMessage = {
 
image: {url: sadas.data.image.replace(/-\d+x\d+(?=\.jpg)/, '')},	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}



const rowss = sadas.dl_links.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${v.size} (${v.quality})`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `paka ${sadas.data.image}±${v.link}±${sadas.data.title}
	
	*\`[ ${v.quality} ]\`*` // Make sure your handler understands this format
    };
  });

  // Compose the listButtons object
  const listButtons = {
    title: "🎬 Choose a download link:",
    sections: [
      {
        title: "Available Links",
        rows: rowss
      }
    ]
  };

	
if (config.BUTTON === "true") {
      await conn.sendMessage(from, {
    image: { url: sadas.data.image.replace(/-\d+x\d+(?=\.jpg)/, '') },
    caption: msg,
    footer: config.FOOTER,
    buttons: [
{
            buttonId: prefix + 'ctdetails2 ' + q,
            buttonText: { displayText: "Details Send" },
            type: 1
        },
	    
      {
        buttonId: "download_list",
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
    } else {
      return await conn.buttonMessage(from, buttonMessage, mek)
    }
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})


let isUploadingg = false; // Track upload status



const cinesubzDownBase = "https://drive2.cscloud12.online";
const apilinkcine = "https://cinesubz-store.vercel.app/";

cmd({
    pattern: "paka2",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isMe, reply }) => {
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }

    if (isUploadingg) {
        return await conn.sendMessage(from, { 
            text: '*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳', 
            quoted: mek 
        });
    }

    let attempts = 0;
    const maxRetries = 5;
    isUploadingg = true;

        while (attempts < maxRetries) {
        try {
            const [datae, datas, dat] = q.split("±");
            let url = datas;
            let mediaUrl = url;
            let downloadUrls = null;

            // 🔹 Check only if it's from Cinesubz
            if (url.includes(cinesubzDownBase)) {
                const check = await fetchJson(`${apilinkcine}api/get/?url=${encodeURIComponent(url)}`);

                if (check?.isUploaded === false) {
                    // New upload case
                    const urlApi = `https://manojapi.infinityapi.org/api/v1/cinesubz-download?url=${encodeURIComponent(url)}&apiKey=sadasthemi20072000`; 
                    const getDownloadUrls = await axios.get(urlApi);

                    downloadUrls = getDownloadUrls.data.results;

                    // Save in DB
                    const payload = { url, downloadUrls, uploader: "VISPER-MD" }; 
                    await axios.post(`${apilinkcine}api/save`, payload);

                } else {
                    // Already uploaded
                    downloadUrls = check.downloadUrls;
                }

                // Pick best available link
                mediaUrl =
                     downloadUrls.direct ||
                    downloadUrls?.gdrive2 
            }

            // 🔹 Thumbnail
            const botimg = datae;

            await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
            const up_mg = await conn.sendMessage(from, { text: '*Uploading your movie..⬆️*' });

            // 🔹 Send document
            await conn.sendMessage(config.JID || from, { 
                document: { url: mediaUrl },
                caption: `🎞️ ${dat}\n\n${config.NAME}\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*`,
                mimetype: "video/mp4",
                jpegThumbnail: await (await fetch(botimg)).buffer(),
                fileName: `🎬NADEEN-MD🎬${dat}.mp4`
            });

            await conn.sendMessage(from, { delete: up_mg.key });
            await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

            break; // ✅ success → exit loop
        } catch (error) {
            attempts++;
            console.error(`Attempt ${attempts}: Error fetching or sending:`, error);
        }
    }

    if (attempts >= maxRetries) {
        await conn.sendMessage(from, { text: "*Error fetching at this moment. Please try again later ❗*" }, { quoted: mek });
    }

    isUploadingg = false;
});



cmd(
  {
    pattern: 'ctdetails2',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x22c949,
    _0x58a64f,
    _0x38232c,
    { from: _0x51bc8a, q: _0x5e9312, isMe: _0x3d4b97, reply: _0xeed5bb }
  ) => {
    try {
      if (!_0x5e9312) {
        return await _0xeed5bb('*please give me text !..*')
      }
      let _0x321f9a = await cinesubz_info(_0x5e9312)
      const _0x14e42c = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
        )
      ).data
      let _0xd4d140 =
        '_*▫️️\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE' +
        (_0x321f9a.data.title || 'N/A') +
        '*_\n\n*▫️️\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* _' +
        (_0x321f9a.data.date || 'N/A') +
        '_\n*▫️️\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* _' +
        (_0x321f9a.data.country || 'N/A') +
        '_\n*▫️️\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
        (_0x321f9a.data.imdb || 'N/A') +
        '_\n*▫️️\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* _' +
        (_0x321f9a.data.runtime || 'N/A') +
        '_\n*▫️️\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
        (_0x321f9a.data.subtitle_author || 'N/A') +
        '_\n*▫️️\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* _' +
        (_0x321f9a.data.genres.join(', ') || 'N/A') +
        '\n*━━━━━━◇x◇━━━━━━*\n*_\n\n> 🎯 Follow us : *' +
        _0x14e42c.chlink +
        `\n*━━━━━━◇x◇━━━━━━*\n*\n\n> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 〽️𝙳*\n`
      await _0x22c949.sendMessage(config.JID, {
        image: { url: _0x321f9a.data.image.replace('-200x300', '') },
        caption: _0xd4d140,
      })
      await _0x22c949.sendMessage(_0x51bc8a, {
        react: {
          text: '\u2714️',
          key: _0x38232c.key,
        },
      })
    } catch (_0x286082) {
      console.error('Error fetching or sending', _0x286082)
      await _0x22c949.sendMessage(_0x51bc8a, '*Error fetching or sending *', {
        quoted: _0x38232c,
      })
    }
  }
)
cmd(
  {
    pattern: 'pupilvideo',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['pup2'],
    desc: 'pupilvideo.blogspot.com movie search',
    use: '.pupilvideot ape',
    filename: __filename,
  },
  async (
    _0x3c4d2a,
    _0x311992,
    _0x5ba3d1,
    {
      from: _0x18fe40,
      q: _0x4ea248,
      prefix: _0x2fb128,
      isMe: _0x491a7a,
      reply: _0x14cd3f,
    }
  ) => {
    try {
      if (!_0x4ea248) {
        return await _0x14cd3f('*Please provide a movie name!*')
      }
      let _0x141e7a = await fetchJson(
        'https://darksadas-yt-new-movie-search.vercel.app/?url=' + _0x4ea248
      )
      if (!_0x141e7a || !_0x141e7a.data || _0x141e7a.data.length === 0) {
        return (
          await _0x3c4d2a.sendMessage(_0x18fe40, {
            react: {
              text: '\u274C',
              key: _0x5ba3d1.key,
            },
          }),
          await _0x3c4d2a.sendMessage(
            _0x18fe40,
            { text: '*No results found \u274C*' },
            { quoted: _0x5ba3d1 }
          )
        )
      }
      var _0x102193 = []
      for (var _0x4cb9e3 = 0; _0x4cb9e3 < _0x141e7a.data.length; _0x4cb9e3++) {
        _0x102193.push({
          title: _0x141e7a.data[_0x4cb9e3].title,
          description: '',
          rowId: _0x2fb128 + 'newdl2 ' + _0x141e7a.data[_0x4cb9e3].link,
        })
      }
      const _0xc369 = [
          {
            title: 'pupilvideo.blogspot.com results',
            rows: _0x102193,
          },
        ],
        _0x5f0a95 = {
          text:
            '_*\uD83C\uDFACPUPILVIDEO MOVIE SEARCH RESULTS \uD83C\uDFAC*_\n\n*Movie Search : ' +
            _0x4ea248 +
            ' \uD83D\uDD0E*',
          footer: config.FOOTER,
          title: 'Search Results \uD83C\uDFAC',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0xc369,
        }
      await _0x3c4d2a.listMessage(_0x18fe40, _0x5f0a95, _0x5ba3d1)
    } catch (_0x2c3eec) {
      console.log(_0x2c3eec)
      await _0x3c4d2a.sendMessage(
        _0x18fe40,
        { text: '\uD83D\uDEA9 *Error occurred!!*' },
        { quoted: _0x5ba3d1 }
      )
    }
  }
)
cmd(
  {
    pattern: 'newdl2',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x407c64,
    _0x19e839,
    _0x23a6bb,
    {
      from: _0x143ba1,
      q: _0x11485c,
      isMe: _0x2fa8bb,
      prefix: _0x307246,
      reply: _0x806f15,
    }
  ) => {
    try {
      if (!_0x11485c) {
        return await _0x806f15('*please give me text !..*')
      }
      let _0x15d24d = await fetchJson(
          'https://darksadasyt-new-mv-site-info.vercel.app/?url=' + _0x11485c
        ),
        _0xad7e09 =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE*  _' +
          (_0x15d24d.title || 'N/A') +
          '_\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE*  _' +
          (_0x15d24d.date || 'N/A') +
          '_\n*\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
          (_0x15d24d.subtitle_author || 'N/A') +
          '_'
      if (_0x15d24d.downloadLinks.length < 1) {
        return await _0x407c64.sendMessage(
          _0x143ba1,
          { text: 'erro !' },
          { quoted: _0x23a6bb }
        )
      }
      var _0x5f49ed = []
      _0x5f49ed.push({
        buttonId: _0x307246 + 'dubdet2 ' + _0x11485c,
        buttonText: { displayText: 'Details send' },
        type: 1,
      })
      _0x15d24d.downloadLinks.map((_0x46cfda) => {
        _0x5f49ed.push({
          buttonId:
            _0x307246 +
            ('dubmv ' +
              _0x15d24d.image +
              '\xB1' +
              _0x46cfda.link +
              '\xB1' +
              _0x15d24d.title),
          buttonText: { displayText: '' + _0x46cfda.title },
          type: 1,
        })
      })
      const _0xea21b7 = {
        image: { url: _0x15d24d.image },
        caption: _0xad7e09,
        footer: config.FOOTER,
        buttons: _0x5f49ed,
        headerType: 4,
      }
      return await _0x407c64.buttonMessage(_0x143ba1, _0xea21b7, _0x23a6bb)
    } catch (_0x19dacf) {
      console.log(_0x19dacf)
      await _0x407c64.sendMessage(
        _0x143ba1,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x23a6bb }
      )
    }
  }
)
async function resizeImage(_0x13f5d6, _0x5b7bd4, _0x43def1) {
  try {
    return await sharp(_0x13f5d6).resize(_0x5b7bd4, _0x43def1).toBuffer()
  } catch (_0x4c0996) {
    return console.error('Error resizing image:', _0x4c0996), _0x13f5d6
  }
}
cmd(
  {
    pattern: 'ndllz',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x2f0ef6,
    _0xd77443,
    _0x545d16,
    { from: _0x14af92, q: _0x16142, isMe: _0x3ce2c9, reply: _0x3e4568 }
  ) => {
    if (!_0x16142) {
      return await _0x3e4568('*Please provide a direct URL!*')
    }
    try {
      await _0x2f0ef6.sendMessage(
        _0x14af92,
        { text: '*Downloading your movie..\u2B07️*' },
        { quoted: _0xd77443 }
      )
      const _0x13ee02 = _0x16142.split('\xB1')[0],
        _0x5399c1 = _0x16142.split('\xB1')[1],
        _0x1a3677 = _0x16142.split('\xB1')[2],
        _0x29f4d8 = _0x5399c1 + '&download=true',
        _0x24c123 = _0x29f4d8.trim(),
        _0x49581f = await axios.get(_0x24c123, { responseType: 'arraybuffer' }),
        _0x27fa04 = Buffer.from(_0x49581f.data, 'binary'),
        _0x80bac7 = _0x13ee02,
        _0x3d0418 = await fetch(_0x80bac7),
        _0x17a7d5 = await _0x3d0418.buffer(),
        _0x2da743 = await resizeImage(_0x17a7d5, 200, 200),
        _0x2a71be = {
          document: _0x27fa04,
          caption:
            '*\uD83C\uDFAC Name :* ' +
            _0x1a3677 +
            '\n\n' +
            config.NAME +
            '\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_',
          jpegThumbnail: _0x2da743,
          mimetype: 'video/mp4',
          fileName: _0x1a3677 + '.mp4',
        }
      await _0x2f0ef6.sendMessage(_0x14af92, {
        react: {
          text: '\u2B06️',
          key: _0xd77443.key,
        },
      })
      await _0x2f0ef6.sendMessage(
        _0x14af92,
        { text: '*Uploading your movie..\u2B06️*' },
        { quoted: _0xd77443 }
      )
      await _0x2f0ef6.sendMessage(config.JID, _0x2a71be)
      await _0x2f0ef6.sendMessage(_0x14af92, {
        react: {
          text: '\u2714️',
          key: _0xd77443.key,
        },
      })
      await _0x2f0ef6.sendMessage(
        _0x14af92,
        { text: '*Movie send Successfull this JID ' + config.JID + ' \u2714*' },
        { quoted: _0xd77443 }
      )
    } catch (_0x5baf73) {
      console.error('Error fetching or sending', _0x5baf73)
      await _0x2f0ef6.sendMessage(_0x14af92, '*Error fetching or sending *', {
        quoted: _0xd77443,
      })
    }
  }
)
cmd(
  {
    pattern: 'dubdet2',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x1875c6,
    _0x63b81d,
    _0x102c8d,
    { from: _0x5e2ca4, q: _0x3c3a9e, isMe: _0x4a995d, reply: _0x1e2b99 }
  ) => {
    try {
      if (!_0x3c3a9e) {
        return await _0x1e2b99('*please give me text !..*')
      }
      let _0x2f20f2 = await fetchJson(
        'https://darksadasyt-new-mv-site-info.vercel.app/?url=' + _0x3c3a9e
      )
      const _0x430178 = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
        )
      ).data
      let _0x341eab =
        '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE*  _' +
        (_0x2f20f2.title || 'N/A') +
        '_\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE*  _' +
        (_0x2f20f2.date || 'N/A') +
        '_\n*\uD83D\uDC81‍\u2642️ \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
        (_0x2f20f2.subtitle_author || 'N/A') +
        '_\n\n> \uD83C\uDF1F Follow us : *' +
        _0x430178.chlink +
        '*\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_\n'
      await _0x1875c6.sendMessage(config.JID, {
        image: { url: _0x2f20f2.image },
        caption: _0x341eab,
      })
      await _0x1875c6.sendMessage(_0x5e2ca4, {
        react: {
          text: '\u2714️',
          key: _0x102c8d.key,
        },
      })
    } catch (_0x56c49e) {
      console.error('Error fetching or sending', _0x56c49e)
      await _0x1875c6.sendMessage(_0x5e2ca4, '*Error fetching or sending *', {
        quoted: _0x102c8d,
      })
    }
  }
)
cmd(
  {
    pattern: 'dnktv',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['dtv'],
    desc: 'cinesubz.net tv shows search',
    use: '.cinetv  2025',
    filename: __filename,
  },
  async (
    _0x1287f8,
    _0x5d9b17,
    _0x348006,
    {
      from: _0xdcbdb5,
      q: _0x1507b1,
      prefix: _0xe17772,
      isMe: _0x247929,
      reply: _0x503ca4,
    }
  ) => {
    try {
      if (!_0x1507b1) {
        return await _0x503ca4('*please give me text !..*')
      }
      let _0x141582 = await fetchJson(
        'https://darksadas-yt-cinesubz-tv-search.vercel.app/?query=' + _0x1507b1
      )
      if (!_0x141582 || !_0x141582.data || _0x141582.data.length === 0) {
        return (
          await _0x1287f8.sendMessage(_0xdcbdb5, {
            react: {
              text: '\u274C',
              key: _0x348006.key,
            },
          }),
          await _0x1287f8.sendMessage(
            _0xdcbdb5,
            { text: '*No results found \u274C*' },
            { quoted: _0x348006 }
          )
        )
      }
      var _0x4ed5a1 = []
      for (var _0x42f2e8 = 0; _0x42f2e8 < _0x141582.data.length; _0x42f2e8++) {
        _0x4ed5a1.push({
          title:
            _0x141582.data[_0x42f2e8].title
              .replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ', '')
              .replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ', '') ||
            'Result not found',
          description: '',
          rowId: _0xe17772 + 'cinetvdl2 ' + _0x141582.data[_0x42f2e8].link,
        })
      }
      const _0x1aed7d = [
          {
            title: 'cinesubz.net results',
            rows: _0x4ed5a1,
          },
        ],
        _0x7f4d5e = {
          text:
            '_*CINESUBZ TV SHOWS RESULTS \uD83D\uDCFA*_\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x1507b1,
          footer: config.FOOTER,
          title: 'cinesubz.net results',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0x1aed7d,
        }
      await _0x1287f8.listMessage(_0xdcbdb5, _0x7f4d5e, _0x348006)
    } catch (_0x97ea1d) {
      console.log(_0x97ea1d)
      await _0x1287f8.sendMessage(
        _0xdcbdb5,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x348006 }
      )
    }
  }
)
cmd(
  {
    pattern: 'cinetvdl2',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x332b3c,
    _0x426a14,
    _0x1180b8,
    {
      from: _0xb02647,
      q: _0x230fab,
      isMe: _0x3c4855,
      prefix: _0x465d64,
      reply: _0x23aa73,
    }
  ) => {
    try {
      if (!_0x230fab || !_0x230fab.includes('https://cinesubz.net/tvshows')) {
        return (
          console.log('Invalid input:', _0x230fab),
          await _0x23aa73('*\u2757 This is a movie, please use .mv command.*')
        )
      }
      let _0x21b852 = await fetchJson(
          'https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=' +
            _0x230fab +
            '&apikey=pramashi'
        ),
        _0x1da3d6 =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE* *_' +
          (_0x21b852.data.title || 'N/A') +
          '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* _' +
          (_0x21b852.data.date || 'N/A') +
          '_\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* _' +
          (_0x21b852.data.country || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
          (_0x21b852.data.imdb || 'N/A') +
          '_\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* _' +
          (_0x21b852.data.runtime || 'N/A') +
          '_\n*\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
          (_0x21b852.data.subtitle_author || 'N/A') +
          '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* ' +
          (_0x21b852.data.genres.join(', ') || 'N/A') +
          '\n'
      var _0x3b2963 = []
      _0x3b2963.push(
        {
          buttonId: _0x465d64 + 'ctdetailss2 ' + _0x230fab,
          buttonText: { displayText: 'Details Card' },
          type: 1,
        },
        {
          buttonId: _0x465d64 + 'dlc2 ' + _0x230fab,
          buttonText: { displayText: 'All Epishodes Send\n' },
          type: 1,
        }
      )
      _0x21b852.data.episodes.map((_0x234af3) => {
        _0x3b2963.push({
          buttonId:
            _0x465d64 +
            ('dlcc ' +
              _0x21b852.data.image +
              '\xB1' +
              _0x234af3.episode_link +
              '\xB1' +
              _0x21b852.data.title +
              ' *`' +
              _0x234af3.title +
              '`*'),
          buttonText: { displayText: '' + _0x234af3.title },
          type: 1,
        })
      })
      const _0x1278d5 = {
        image: { url: _0x21b852.data.image.replace('-200x300', '') },
        caption: _0x1da3d6,
        footer: config.FOOTER,
        buttons: _0x3b2963,
        headerType: 4,
      }
      return await _0x332b3c.buttonMessage(_0xb02647, _0x1278d5, _0x1180b8)
    } catch (_0x24c299) {
      console.log(_0x24c299)
      await _0x332b3c.sendMessage(
        _0xb02647,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x1180b8 }
      )
    }
  }
)
cmd(
  {
    pattern: 'cinefirstdl2',
    react: '\uD83C\uDFAC',
    alias: ['tv'],
    desc: 'Moive downloader',
    filename: __filename,
  },
  async (
    _0x41afc4,
    _0x3d5ce2,
    _0x11df25,
    {
      from: _0x43d8db,
      q: _0x29a7d6,
      prefix: _0x42fd38,
      isMe: _0x2a12ff,
      reply: _0x563f89,
    }
  ) => {
    try {
      if (!_0x29a7d6) {
        return await _0x563f89('*please give me text !..*')
      }
      const _0x39ba0f = _0x29a7d6.split('\xB1')[0],
        _0x134469 = _0x29a7d6.split('\xB1')[1],
        _0xb5ded2 = _0x29a7d6.split('\xB1')[2]
      let _0x4e0ab2 = await fetchJson(
        'https://darksadas-yt-cineszub-tv-shows-firstdl.vercel.app/?url=' +
          _0x134469 +
          '&apikey=pramashi'
      )
      if (_0x4e0ab2.length < 1) {
        return await _0x41afc4.sendMessage(
          _0x43d8db,
          { text: N_FOUND },
          { quoted: _0x11df25 }
        )
      }
      var _0x2c2b78 = []
      for (var _0xcf1142 = 0; _0xcf1142 < _0x4e0ab2.data.length; _0xcf1142++) {
        _0x2c2b78.push({
          title:
            _0x4e0ab2.data[_0xcf1142].quality +
            '  ' +
            _0x4e0ab2.data[_0xcf1142].size,
          description: '',
          rowId:
            _0x42fd38 +
            ('dlc2 ' +
              _0x4e0ab2.data[_0xcf1142].link +
              '\xB1' +
              _0x39ba0f +
              '\xB1' +
              _0xb5ded2 +
              '\n\t\n\t*`' +
              _0x4e0ab2.data[_0xcf1142].quality +
              '`*'),
        })
      }
      const _0x471998 = [
          {
            title: '_[Select quaility \uD83C\uDFAC]_',
            rows: _0x2c2b78,
          },
        ],
        _0x50b13a = {
          text: '*\uD83C\uDFACSelect quaility \uD83C\uDFAC*',
          footer: config.FOOTER,
          title: '_[cinesubz.net results \uD83C\uDFAC]_',
          buttonText: '*`Reply Below Number \uD83D\uDD22`*\n',
          sections: _0x471998,
        }
      await _0x41afc4.listMessage(_0x43d8db, _0x50b13a, _0x11df25)
    } catch (_0x51a52c) {
      console.log(_0x51a52c)
      await _0x41afc4.sendMessage(
        _0x43d8db,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x11df25 }
      )
    }
  }
)
cmd(
  {
    pattern: 'dlc2',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x22712c,
    _0x269a9b,
    _0x140030,
    { from: _0x1e565d, q: _0x1045a9, isMe: _0x2c122c, reply: _0x50a86c }
  ) => {
    if (!_0x1045a9) {
      return await _0x50a86c('*Please provide a direct URL!*')
    }
    try {
      let _0x7c4a79 = await cinesubz_tvshow_info(_0x1045a9)
      console.log('API Response:', JSON.stringify(_0x7c4a79, null, 2))
      if (
        !_0x7c4a79.data ||
        !Array.isArray(_0x7c4a79.data.episodes) ||
        _0x7c4a79.data.episodes.length === 0
      ) {
        return await _0x22712c.sendMessage(
          _0x1e565d,
          { text: 'No episodes found in the provided URL.' },
          { quoted: _0x269a9b }
        )
      }
      await _0x22712c.sendMessage(
        _0x1e565d,
        { text: '*Epishodes fetching started...\uD83D\uDD02*' },
        { quoted: _0x269a9b }
      )
      let _0xa917ff = _0x7c4a79.data.episodes
        .map((_0x69358c) => _0x69358c.link)
        .filter(
          (_0x2a412a) =>
            typeof _0x2a412a === 'string' && _0x2a412a.trim() !== ''
        )
      if (_0xa917ff.length === 0) {
        return await _0x22712c.sendMessage(
          _0x1e565d,
          { text: 'No valid episode links found.' },
          { quoted: _0x269a9b }
        )
      }
      const _0x1e6c04 = _0x7c4a79.data.title || 'Unknown_Show',
        _0x368cfc =
          _0x7c4a79.data.mainImage ||
          'https://files.catbox.moe/3mvn78.png'
      fetchEpisodesWithRetry(
        _0xa917ff,
        _0x22712c,
        _0x269a9b,
        _0x1e565d,
        _0x50a86c,
        _0x1e6c04,
        _0x368cfc
      )
    } catch (_0x257e81) {
      console.error('Error fetching or sending:', _0x257e81)
      await _0x22712c.sendMessage(
        _0x1e565d,
        { text: '*Error fetching or sending*' },
        { quoted: _0x269a9b }
      )
    }
  }
)
async function fetchEpisodesWithRetry(
  _0x3d70ae,
  _0x98cca9,
  _0x4ee43b,
  _0x46d838,
  _0x217240,
  _0xacc982,
  _0x516702,
  _0x4f1ff0 = 3
) {
  let _0x1cf60b = 0
  async function _0xababeb(_0x37a5c9 = 1) {
    if (_0x1cf60b >= _0x3d70ae.length) {
      await _0x98cca9.sendMessage(
        _0x46d838,
        { text: '*All episodes sent successfully \u2611️*' },
        { quoted: _0x4ee43b }
      )
      return
    }
    let _0x45b96d = _0x3d70ae[_0x1cf60b]
    try {
      let _0x37da27 = await cinesubz_tv_firstdl(_0x45b96d)
      console.log(_0x37da27)
      if (
        !_0x37da27 ||
        !_0x37da27.dl_links ||
        _0x37da27.dl_links.length === 0
      ) {
        throw new Error(
          'Episode ' + (_0x1cf60b + 1) + ': No valid download link found.'
        )
      }
      const _0x4ce763 = config.MV_SIZE,
        _0x22c0b7 = _0x37da27.dl_links[_0x4ce763],
        _0x2a136a = _0x22c0b7.link,
        _0x3b980e = await download(_0x2a136a)
      if (!_0x3b980e || !_0x3b980e.result || !_0x3b980e.result.direct) {
        throw new Error(
          'Episode ' + (_0x1cf60b + 1) + ': No direct download link found.'
        )
      }
      const _0x2e4774 = _0x3b980e.result.direct
      if (!_0x2e4774.startsWith('http')) {
        throw new Error('Invalid download URL: ' + _0x2e4774)
      }
      const _0x1d673f = await axios.get(_0x2e4774, {
        responseType: 'arraybuffer',
      })
      if (!_0x1d673f.data) {
        throw new Error('Failed to fetch episode data.')
      }
      const _0x2ad2de = Buffer.from(_0x1d673f.data, 'binary'),
        _0x40c979 = _0xacc982 + '📺NADEEN-MD📺 Episode' + (_0x1cf60b + 1) + '.mp4'
      await _0x98cca9.sendMessage(config.JID2, {
        document: _0x2ad2de,
        caption:
          '*\uD83D\uDCFA Episode ' +
          (_0x1cf60b + 1) +
          ' - ' +
          _0xacc982 +
          '*\n\n\n' +
          config.NAME +
          '\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_',
        jpegThumbnail: await (await fetch(_0x516702)).buffer(),
        mimetype: 'video/mp4',
        fileName: _0x40c979,
      })
    } catch (_0x492c72) {
      console.error(
        'Error fetching Episode ' +
          (_0x1cf60b + 1) +
          ', Attempt ' +
          _0x37a5c9 +
          ':',
        _0x492c72
      )
      if (_0x37a5c9 < _0x4f1ff0) {
        return (
          console.log(
            'Retrying Episode ' +
              (_0x1cf60b + 1) +
              ' (Attempt ' +
              (_0x37a5c9 + 1) +
              ')...'
          ),
          setTimeout(() => _0xababeb(_0x37a5c9 + 1), 5000)
        )
      } else {
        await _0x98cca9.sendMessage(
          _0x46d838,
          {
            text:
              '*\u26A0️ Failed to fetch Episode ' +
              (_0x1cf60b + 1) +
              ' after ' +
              _0x4f1ff0 +
              ' attempts.*',
          },
          { quoted: _0x4ee43b }
        )
      }
    }
    _0x1cf60b++
    setTimeout(() => _0xababeb(), 5000)
  }
  _0xababeb()
}
cmd(
  {
    pattern: 'dlcc2',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x11a335,
    _0x2d6a75,
    _0x58f953,
    { from: _0x50017e, q: _0x174977, isMe: _0x22e78e, reply: _0x17f9fc }
  ) => {
    if (!_0x174977) {
      return await _0x17f9fc('*Please provide a direct URL!*')
    }
    try {
      const _0x24920b = _0x174977.split('\xB1')[0],
        _0x46fd1a = _0x174977.split('\xB1')[1],
        _0x49e584 = _0x174977.split('\xB1')[2]
      let _0x2b76d7 = await cinesubz_tv_firstdl(_0x46fd1a)
      if (_0x2b76d7.length < 1) {
        return await _0x11a335.sendMessage(
          _0x50017e,
          { text: 'Not Found' },
          { quoted: _0x2d6a75 }
        )
      }
      const _0x4c5fcf = _0x2b76d7.dl_links[0],
        _0x5f4aed = '' + _0x4c5fcf.link,
        _0xa9c241 = await download(_0x5f4aed)
      if (!_0xa9c241) {
        throw new Error('No direct download link found. Try again...')
      }
      const _0x3c4ef9 = '' + _0xa9c241.result.direct,
        _0x3ce09b = await axios.get(_0x3c4ef9, { responseType: 'arraybuffer' }),
        _0x3b92ee = Buffer.from(_0x3ce09b.data, 'binary'),
        _0x146a97 = '' + _0x24920b
      await _0x11a335.sendMessage(_0x50017e, {
        react: {
          text: '\u2B06️',
          key: _0x2d6a75.key,
        },
      })
      await _0x11a335.sendMessage(
        _0x50017e,
        { text: '*Uploading your movie..\u2B06️*' },
        { quoted: _0x2d6a75 }
      )
      await _0x11a335.sendMessage(config.JID2, {
        document: { url: _0x3c4ef9 },
        caption:
          '\uD83C\uDFAC' +
          _0x49e584 +
          '\n\n' +
          config.NAME +
          '\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_',
        mimetype: 'video/mp4',
        jpegThumbnail: await (await fetch(_0x146a97)).buffer(),
        fileName: '📺NADEEN-MD📺'+ _0x49e584 + '.mp4',
      })
      await _0x11a335.sendMessage(_0x50017e, {
        react: {
          text: '\u2714️',
          key: _0x2d6a75.key,
        },
      })
      await _0x11a335.sendMessage(
        _0x50017e,
        { text: '*Movie send Successfull this JID ' + config.JID2 + ' \u2714*' },
        { quoted: _0x2d6a75 }
      )
    } catch (_0x3274de) {
      console.error('Error fetching or sending', _0x3274de)
      await _0x11a335.sendMessage(_0x50017e, '*Error fetching or sending *', {
        quoted: _0x2d6a75,
      })
    }
  }
)
cmd(
  {
    pattern: 'ctdetailss2',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x216740,
    _0x3b8ba7,
    _0x45e796,
    { from: _0x58fa80, q: _0xc6a750, isMe: _0x3a23d5, reply: _0x58945e }
  ) => {
    try {
      if (!_0xc6a750) {
        return await _0x58945e('*please give me text !..*')
      }
      let _0x4be87d = await fetchJson(
        'https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=' +
          _0xc6a750 +
          '&apikey=pramashi'
      )
      const _0x3a37ae = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
        )
      ).data
      let _0x3796d5 =
        '*`꧁Ðł₦Kλ MØVłEŞ ŁK꧂`*\n\n*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE* *_' +
        (_0x4be87d.data.title || 'N/A') +
        '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* _' +
        (_0x4be87d.data.date || 'N/A') +
        '_\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* _' +
        (_0x4be87d.data.country || 'N/A') +
        '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
        (_0x4be87d.data.imdb || 'N/A') +
        '_\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* _' +
        (_0x4be87d.data.runtime || 'N/A') +
        '_\n*\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
        (_0x4be87d.data.subtitle_author || 'N/A') +
        '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* ' +
        (_0x4be87d.data.genres.join(', ') || 'N/A') +
        '\n\n> \uD83C\uDF1F Join us : *' +
        _0x3a37ae.tvlink +
        '*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*'
      await _0x216740.sendMessage(config.JID2, {
        image: { url: _0x4be87d.data.image.replace('-200x300', '') },
        caption: _0x3796d5,
      })
      await _0x216740.sendMessage(_0x58fa80, {
        react: {
          text: '\u2714️',
          key: _0x45e796.key,
        },
      })
    } catch (_0x1c568c) {
      console.error('Error fetching or sending', _0x1c568c)
      await _0x216740.sendMessage(_0x58fa80, '*Error fetching or sending *', {
        quoted: _0x45e796,
      })
    }
  }
)
