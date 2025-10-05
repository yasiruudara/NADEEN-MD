const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
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
  fetch = (..._0x1c20f7) =>
    import('node-fetch').then(({ default: _0x557a09 }) =>
      _0x557a09(..._0x1c20f7)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  {
    sinhalasub_search,
    sinhalasub_info,
    sinhalasub_dl,
  } = require('../lib/sinhalasubli'),
  {
    sinhalasubb_search,
    sinhalasubtv_info,
    sinhalasubtv_dl,
  } = require('../lib/sinhalasubtv'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log
cmd(
  {
    pattern: 'sinhalasub',
    alias: ['movi', 'sisub'],
    react: '🎬',
    category: 'movie',
    alias: ['movie'],
    desc: 'sinhalasub.lk movie search',
    use: '.sinhalasub 2025',
    filename: __filename,
  },
  async (
    _0x4f2825,
    _0x1de820,
    _0x23846a,
    {
      from: _0x2d37aa,
      q: _0x46e102,
      prefix: _0x52cdd3,
      isSudo: _0x173281,
      isOwner: _0x58e236,
      isMe: _0x524e6e,
      reply: _0x275af4,
    }
  ) => {
    try {
      if (config.XNXX_BLOCK == 'true' && !_0x524e6e && !_0x173281 && !_0x58e236) {
              return (
                await _0x275af4.sendMessage(_0x2d37aa, {
                  react: {
                    text: '\u274C',
                    key: _0x1de820.key,
                  },
                }),
                await _0x275af4.sendMessage(
                  _0x2d37aa,
                  {
                    text: '*THIS COMMAND ONLY OWNER*',
                  },
                  { quoted: _0x1de820 }
                )
              )
            }
      if (!_0x46e102) {
        return await _0x275af4('*please give me movie name !...*')
      }
      let _0x419390 = await sinhalasub_search(_0x46e102)
      if (_0x419390.length === 0) {
        return (
          await _0x4f2825.sendMessage(_0x2d37aa, {
            react: {
              text: '\u274C',
              key: _0x23846a.key,
            },
          }),
          await _0x4f2825.sendMessage(
            _0x2d37aa,
            { text: '*No movie found \u274C*' },
            { quoted: _0x23846a }
          )
        )
      }
      var _0x52a977 = []
      for (var _0x3fdb0d = 0; _0x3fdb0d < _0x419390.length; _0x3fdb0d++) {
        _0x52a977.push({
          title: _0x419390[_0x3fdb0d].Title.replace(
            'Sinhala Subtitles | සිංහල උපසිරසි සමඟ',
            ''
          ),
          description: '',
          rowId: _0x52cdd3 + 'sininfo ' + _0x419390[_0x3fdb0d].Link,
        })
      }
      const _0x14e5d4 = [
          {
            title: '[sinhalasub.lk results]',
            rows: _0x52a977,
          },
        ],
        _0x540d89 = {
          text:
            '*SINHALASUB MOVIE SEARCH SYSTEM \uD83C\uDFAC*_\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x46e102,
          footer: '*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          title: '[sinhalasub.lk results \uD83C\uDFAC]',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0x14e5d4,
        }
      await _0x4f2825.listMessage(_0x2d37aa, _0x540d89, _0x23846a)
    } catch (_0x36789e) {
      _0x275af4('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x36789e)
      console.log(_0x36789e)
    }
  }
)
cmd(
  {
    pattern: 'sponna',
    react: '\uD83D\uDD0E',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4f2825,
    _0x1de820,
    _0x23846a,
    {
      from: _0x2d37aa,
      q: _0x46e102,
      prefix: _0x52cdd3,
      isMe: _0x524e6e,
      reply: _0x275af4,
    }
  ) => {
    try {
      if (!_0x46e102) {
        return await _0x275af4('*please give me text !...*')
      }
      let _0x419390 = await sinhalasub_search(_0x46e102)
      if (_0x419390.length === 0) {
        return (
          await _0x4f2825.sendMessage(_0x2d37aa, {
            react: {
              text: '\u274C',
              key: _0x23846a.key,
            },
          }),
          await _0x4f2825.sendMessage(
            _0x2d37aa,
            { text: '*No results found \u274C*' },
            { quoted: _0x23846a }
          )
        )
      }
      var _0x52a977 = []
      for (var _0x3fdb0d = 0; _0x3fdb0d < _0x419390.length; _0x3fdb0d++) {
        _0x52a977.push({
          title: _0x419390[_0x3fdb0d].Title.replace(
            'Sinhala Subtitles | සිංහල උපසිරසි සමඟ',
            ''
          ),
          description: '',
          rowId: _0x52cdd3 + 'sininfo ' + _0x419390[_0x3fdb0d].Link,
        })
      }
      const _0x14e5d4 = [
          {
            title: '[sinhalasub.lk results]',
            rows: _0x52a977,
          },
        ],
        _0x540d89 = {
          text:
            '*SINHALASUB MOVIE SEARCH SYSTEM \uD83C\uDFAC*\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x46e102,
          footer: '*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          title: 'sinhalasub.lk results \uD83C\uDFAC',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0x14e5d4,
        }
      await _0x4f2825.listMessage(_0x2d37aa, _0x540d89, _0x23846a)
    } catch (_0x36789e) {
      _0x275af4('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x36789e)
      console.log(_0x36789e)
    }
  }
)
cmd(
  {
    pattern: 'sininfo',
    alias: ['mdv'],
    use: '.moviedl <url>',
    react: '\uD83C\uDFA5',
    desc: 'download movies from sinhalasub.lk',
    filename: __filename,
  },
  async (
    _0x4f83ce,
    _0x37c510,
    _0x9f9653,
    {
      from: _0xea5932,
      l: _0x1867a4,
      quoted: _0x5b8a4f,
      body: _0x1edc87,
      isCmd: _0x5eaa81,
      command: _0x22ed5b,
      args: _0x291435,
      q: _0x3ab1d4,
      isGroup: _0x5b3116,
      prefix: _0x3a0d7b,
      sender: _0x15bece,
      senderNumber: _0x13f3cd,
      botNumber2: _0xf43054,
      botNumber: _0x26de09,
      pushname: _0x643daf,
      isMe: _0x35487d,
      isOwner: _0x140a67,
      groupMetadata: _0x15b3e9,
      groupName: _0x5e14fb,
      participants: _0x197eab,
      groupAdmins: _0x5d0b87,
      isBotAdmins: _0x43071c,
      isAdmins: _0x13d143,
      reply: _0x30ed0f,
    }
  ) => {
    try {
      if (!_0x3ab1d4) {
        return _0x30ed0f('\uD83D\uDEA9 *Please give me a url*')
      }
      let _0x3274e0 = await sinhalasub_info(_0x3ab1d4)
      if (!_0x3ab1d4 || !_0x3ab1d4.includes('https://sinhalasub.lk/movies/')) {
        return (
          console.log('Invalid input:', _0x3ab1d4),
          await _0x30ed0f(
            '*\u2757 This is a TV series, please use .sisubtv command.*'
          )
        )
      }
      if (_0x3274e0.length < 1) {
        return await _0x4f83ce.sendMessage(
          _0xea5932,
          { text: "\uD83D\uDEA9 *I couldn't find anything :(*" },
          { quoted: _0x37c510 }
        )
      }
      var _0xc0974 = []
      _0xc0974.push(
        {
          buttonId: _0x3a0d7b + 'daqt ' + _0x3ab1d4,
          buttonText: { displayText: 'Send Details Card' },
          type: 1,
        },
        {
          buttonId: _0x3a0d7b + 'ch ' + _0x3ab1d4,
          buttonText: { displayText: 'Send Images\n' },
          type: 1,
        }
      )
      _0x3274e0.downloadLinks.map((_0x1d49de) => {
        _0xc0974.push({
          buttonId:
            _0x3a0d7b +
            ('sindl ' +
              _0x1d49de.link +
              '\xB1' +
              _0x3274e0.images[1] +
              '\xB1' +
              _0x3274e0.title +
              '\n\t\n\t*`[ ' +
              _0x1d49de.quality +
              ' ]`*'),
          buttonText: {
            displayText: _0x1d49de.size + ' - ' + _0x1d49de.quality,
          },
          type: 1,
        })
      })
      const _0x3105ec =
          '*\u2618️ \uD835\uDDE7ɪᴛʟᴇ ☞*_' +
          (_0x3274e0.title || 'N/A') +
          '*_\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ☞* _' +
          (_0x3274e0.date || 'N/A') +
          '_\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ ☞* _' +
          (_0x3274e0.country || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ ☞* _' +
          (_0x3274e0.rating || 'N/A') +
          '_\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ ☞* _' +
          (_0x3274e0.duration || 'N/A') +
          '_\n',
        _0x3ecbc4 = {
          image: { url: _0x3274e0.images[0] || images },
          caption: _0x3105ec,
          footer: config.FOOTER,
          buttons: _0xc0974,
          headerType: 4,
        }
      return await _0x4f83ce.buttonMessage(_0xea5932, _0x3ecbc4, _0x37c510)
    } catch (_0x2466ea) {
      _0x30ed0f('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x2466ea)
      console.log(_0x2466ea)
    }
  }
)
let isUploading = false
cmd(
  {
    pattern: 'sindl',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x1c77e5,
    _0x4b72bf,
    _0x38f5ab,
    { from: _0x4a5220, q: _0x185023, isMe: _0x49cdde, reply: _0x59f4bf }
  ) => {
    if (isUploading) {
      return await _0x1c77e5.sendMessage(_0x4a5220, {
        text: '*A movie is already being uploading* \u23F3',
        quoted: _0x4b72bf,
      })
    }
    try {
      const _0x302188 = _0x185023.split('\xB1')[0],
        _0x3c7e61 = _0x185023.split('\xB1')[1],
        _0x336ab5 = _0x185023.split('\xB1')[2]
      if (_0x302188.includes('pixeldrain.com')) {
        return await _0x59f4bf('Invalid url !!')
      }
      let _0x1a6007 = await sinhalasub_dl(_0x302188)
      const _0x110af3 = _0x1a6007.downloadLink.split(
          'https://pixeldrain.com/u/'
        )[1],
        _0x13f8d3 = 'https://pixeldrain.com/api/file/' + _0x110af3
      isUploading = false
      const _0x429230 = _0x13f8d3.trim(),
        _0x12db2e = await axios.get(_0x429230, { responseType: 'arraybuffer' }),
        _0x10aa02 = Buffer.from(_0x12db2e.data, 'binary'),
        _0x2db2d1 = '' + _0x3c7e61,
        _0x1e779c = {
          document: _0x10aa02,
          caption:
            _0x336ab5 +
            '\n' + config.NAME +
            '\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          jpegThumbnail: await (await fetch(_0x2db2d1)).buffer(),
          fileName: '🎬NADEEN-MD🎬' + _0x336ab5 + '.mp4',
        }
       await _0x1c77e5.sendMessage(_0x4a5220, {
        text: '*Uploading your movie..\u2B06️*',
      })
      await _0x1c77e5.sendMessage(config.JID, _0x1e779c)
      await _0x1c77e5.sendMessage(_0x4a5220, {
        react: {
          text: '✅️',
          key: _0x4b72bf.key,
        },
      })
    } catch (_0xb14657) {
      _0x59f4bf('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0xb14657)
      console.log(_0xb14657)
    }
  }
)
cmd(
  {
    pattern: 'daqt',
    alias: ['mdv'],
    use: '.moviedl <url>',
    react: '\uD83C\uDFA5',
    desc: 'download movies from sinhalasub.lk',
    filename: __filename,
  },
  async (
    _0x4732ee,
    _0x5522ff,
    _0x68dd13,
    {
      from: _0x31a63f,
      l: _0x4f1d4b,
      quoted: _0x322c02,
      body: _0x4e83ee,
      isCmd: _0x46c483,
      command: _0x184a24,
      args: _0x575398,
      q: _0xb4a358,
      isGroup: _0x3feafe,
      prefix: _0x2d35dd,
      sender: _0x465942,
      senderNumber: _0xe46a99,
      botNumber2: _0x4c8ce5,
      botNumber: _0xa5ea07,
      pushname: _0x1da7e1,
      isMe: _0x4ee7d4,
      isOwner: _0x3c0915,
      groupMetadata: _0x25ec20,
      groupName: _0x4ed84f,
      participants: _0x4e80a4,
      groupAdmins: _0x41f664,
      isBotAdmins: _0x2a8c24,
      isAdmins: _0x1c5973,
      reply: _0x508bc0,
    }
  ) => {
    try {
      if (!_0xb4a358) {
        return _0x508bc0('\uD83D\uDEA9 *Please give me a url*')
      }
      let _0x7d784d = await sinhalasub_info(_0xb4a358)
      const _0xc6d37a = (
          await axios.get(
            'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
          )
        ).data,
        _0x2e3b25 =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ ☞* ' +
          (_0x7d784d.title || 'N/A') +
          '*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ☞* ' +
          (_0x7d784d.date || 'N/A') +
          '\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ ☞* ' +
          (_0x7d784d.country || 'N/A') +
          '\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ ☞* ' +
          (_0x7d784d.rating || 'N/A') +
          '\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ ☞* ' +
          (_0x7d784d.duration || 'N/A') +
          '\n*\uD83D\uDC81‍\u2642️ \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ ☞* ' +
          (_0x7d784d.author || 'N/A') +
          '\n\n*★━━━━━━━━━━━━━━━━★*\n*🎯 Follow us :* ' +
        _0xc6d37a.chlink + 
        '\n*★━━━━━━━━━━━━━━━━★*\n' +
        config.NAME
      await _0x4732ee.sendMessage(config.JID, {
        image: { url: _0x7d784d.images[0] || images },
        caption: _0x2e3b25,
      })
      await _0x4732ee.sendMessage(_0x31a63f, {
        react: {
          text: '\u2714️',
          key: _0x5522ff.key,
        },
      })
    } catch (_0x5d22b7) {
      console.error('Error fetching or sending', _0x5d22b7)
      await _0x4732ee.sendMessage(_0x31a63f, '*Error fetching or sending *', {
        quoted: _0x5522ff,
      })
    }
  }
)
cmd(
  {
    pattern: 'sisubtv',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['sinhalatv'],
    desc: 'sinhalasub.lk tv shows search',
    use: '.sinhalasubtv 2025',
    filename: __filename,
  },
  async (
    _0x5ce8bd,
    _0x34eb91,
    _0x835939,
    {
      from: _0x129200,
      q: _0x5de988,
      prefix: _0x1c9914,
      isMe: _0x1d1d63,
      reply: _0x17be51,
    }
  ) => {
    try {
      if (!_0x5de988) {
        return await _0x17be51('*please give me text !..*')
      }
      let _0x1cf7c9 = await sinhalasubb_search(_0x5de988)
      if (_0x1cf7c9.length === 0) {
        return (
          await _0x5ce8bd.sendMessage(_0x129200, {
            react: {
              text: '\u274C',
              key: _0x835939.key,
            },
          }),
          await _0x5ce8bd.sendMessage(
            _0x129200,
            { text: '*No results found \u274C*' },
            { quoted: _0x835939 }
          )
        )
      }
      var _0x2590ed = []
      for (var _0x306b90 = 0; _0x306b90 < _0x1cf7c9.length; _0x306b90++) {
        _0x2590ed.push({
          title: _0x1cf7c9[_0x306b90].Title.replace(
            'Sinhala Subtitles | සිංහල උපසිරසි සමඟ',
            ''
          ),
          description: '',
          rowId: _0x1c9914 + 'sintvinfo ' + _0x1cf7c9[_0x306b90].Link,
        })
      }
      const _0x57d158 = [
          {
            title: '*[sinhalasub.lk results}*',
            rows: _0x2590ed,
          },
        ],
        _0x44d7e4 = {
          text:
            '*_SINHALASUB TV SEARCH RESULTS \uD83D\uDCFA_*\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x5de988,
          footer: config.FOOTER,
          title: 'sinhalasub.lk results \uD83C\uDFAC',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0x57d158,
        }
      await _0x5ce8bd.listMessage(_0x129200, _0x44d7e4, _0x835939)
    } catch (_0x4c6edc) {
      _0x17be51('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x4c6edc)
      console.log(_0x4c6edc)
    }
  }
)
cmd(
  {
    pattern: 'sintvinfo',
    alias: ['mdv'],
    use: '.moviedl <url>',
    react: '\uD83C\uDFA5',
    desc: 'download movies from sinhalasub.lk',
    filename: __filename,
  },
  async (
    _0x3f95bc,
    _0x2bc919,
    _0xa91659,
    {
      from: _0x33d868,
      l: _0x184731,
      quoted: _0x8c5543,
      body: _0x487d05,
      isCmd: _0x127302,
      command: _0x56c32c,
      args: _0x31c651,
      q: _0xc43a31,
      isGroup: _0x108bbd,
      prefix: _0x5ac61c,
      sender: _0xc8c5dd,
      senderNumber: _0x29f3a2,
      botNumber2: _0x5cfe9f,
      botNumber: _0x523540,
      pushname: _0x101078,
      isMe: _0x50c077,
      isOwner: _0x4eb257,
      groupMetadata: _0x3bf0db,
      groupName: _0xa336,
      participants: _0x2be5fc,
      groupAdmins: _0x59c393,
      isBotAdmins: _0x307b58,
      isAdmins: _0x52ffcc,
      reply: _0x304204,
    }
  ) => {
    try {
      if (!_0xc43a31) {
        return _0x304204('\uD83D\uDEA9 *Please give me a url*')
      }
      if (!_0xc43a31 || !_0xc43a31.includes('https://sinhalasub.lk/tvshows/')) {
        return (
          console.log('Invalid input:', _0xc43a31),
          await _0x304204('*\u2757 This is a movie, please use .mv command.*')
        )
      }
      let _0xd38832 = await sinhalasubtv_info(_0xc43a31)
      var _0x5365c3 = []
      _0x5365c3.push({
        buttonId: _0x5ac61c + 'dtaqt ' + _0xc43a31,
        buttonText: { displayText: 'Details send' },
        type: 1,
      })
      _0xd38832.result.episodes.map((_0x2dcb91) => {
        _0x5365c3.push({
          buttonId:
            _0x5ac61c +
            ('sintvfirstdl ' +
              _0x2dcb91.episode_link +
              '+' +
              _0xd38832.result.image[0]),
          buttonText: { displayText: '' + _0x2dcb91.title },
          type: 1,
        })
      })
      const _0x488f7f =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ ☞* *_' +
          (_0xd38832.result.title || 'N/A') +
          '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ☞* _' +
          (_0xd38832.result.date || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ ☞* _' +
          (_0xd38832.result.imdb || 'N/A') +
          '_\n*\uD83D\uDC81‍\u2642️ \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ ☞* _' +
          (_0xd38832.result.director || 'N/A') +
          '_\n',
        _0x24122e = {
          image: { url: _0xd38832.result.image[0] || images },
          caption: _0x488f7f,
          footer: config.FOOTER,
          buttons: _0x5365c3,
          headerType: 4,
        }
      return await _0x3f95bc.buttonMessage(_0x33d868, _0x24122e, _0x2bc919)
    } catch (_0x118fc2) {
      _0x304204('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x118fc2)
      console.log(_0x118fc2)
    }
  }
)
cmd(
  {
    pattern: 'sintvfirstdl',
    react: '\uD83C\uDFAC',
    alias: ['tv'],
    desc: 'Moive downloader',
    filename: __filename,
  },
  async (
    _0x502ee5,
    _0x5ee05b,
    _0x150b04,
    {
      from: _0x496c01,
      q: _0x564941,
      prefix: _0x594b77,
      isMe: _0x2dd469,
      reply: _0x4903f1,
    }
  ) => {
    try {
      if (!_0x564941) {
        return await _0x4903f1('*please give me text !..*')
      }
      const _0xdfc1de = _0x564941.split('+')[0],
        _0x17eaec = _0x564941.split('+')[1]
      let _0x4d4f1a = await sinhalasubtv_dl(_0xdfc1de)
      if (_0x4d4f1a.length < 1) {
        return await _0x502ee5.sendMessage(
          _0x496c01,
          { text: N_FOUND },
          { quoted: _0x150b04 }
        )
      }
      var _0x3b84af = []
      for (
        var _0x1c1ede = 0;
        _0x1c1ede < _0x4d4f1a.result.dl_links.length;
        _0x1c1ede++
      ) {
        _0x3b84af.push({
          title:
            _0x4d4f1a.result.dl_links[_0x1c1ede].quality +
            ' - ' +
            _0x4d4f1a.result.dl_links[_0x1c1ede].size,
          description: '',
          rowId:
            _0x594b77 +
            ('sintvdl ' +
              _0x4d4f1a.result.dl_links[_0x1c1ede].link +
              '&' +
              _0x4d4f1a.result.title +
              '&' +
              _0x17eaec +
              '&' +
              _0x4d4f1a.result.dl_links[_0x1c1ede].quality),
        })
      }
      const _0x5eda57 = [
          {
            title: '',
            rows: _0x3b84af,
          },
        ],
        _0x48fb8e = {
          text:
            '*\uD83C\uDF5F Epishodes title :* _*' +
            _0x4d4f1a.result.title +
            '*_',
          footer: config.FOOTER,
          title: '_[sinhalasub.lk results \uD83C\uDFAC]_',
          buttonText: '*Reply below number \uD83D\uDD22*',
          sections: _0x5eda57,
        }
      await _0x502ee5.listMessage(_0x496c01, _0x48fb8e, _0x150b04)
    } catch (_0x18393b) {
      _0x4903f1('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x18393b)
      console.log(_0x18393b)
    }
  }
)
cmd(
  {
    pattern: 'sintvdl',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x377d1d,
    _0xc9855e,
    _0x57bdab,
    { from: _0x2677f9, q: _0x1ee715, isMe: _0x226cd2, reply: _0x291516 }
  ) => {
    if (isUploading) {
      return await _0x377d1d.sendMessage(_0x2677f9, {
        text: '*A movie is already being uploaded. Please wait a while before uploading another one.* \u23F3',
        quoted: _0xc9855e,
      })
    }
    try {
      const _0xe58255 = _0x1ee715.split('&')[0],
        _0x1c158b = _0x1ee715.split('&')[1],
        _0x1eab55 = _0x1ee715.split('&')[2],
        _0x28242b = _0x1ee715.split('&')[3]
      let _0x27dfd9 = '' + _0xe58255
      const _0x1ead6a = _0x27dfd9.split('https://pixeldrain.com/u/')[1],
        _0x1b8dc8 = 'https://pixeldrain.com/api/file/' + _0x1ead6a
      isUploading = true
      const _0x5205ff = _0x1b8dc8.trim(),
        _0x267a20 = await axios.get(_0x5205ff, { responseType: 'arraybuffer' }),
        _0x381a93 = Buffer.from(_0x267a20.data, 'binary'),
        _0x246bcd = '' + _0x1eab55,
        _0x24615f = {
          document: _0x381a93,
          caption:
            '*' +
            _0x1c158b +
            '*\n\n> _*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*_',
          mimetype: 'video/mp4',
          jpegThumbnail: await (await fetch(_0x246bcd)).buffer(),
          fileName: '🎬NADEEN-MD🎬' + _0x1c158b + '.mp4',
        }
      await _0x377d1d.sendMessage(_0x2677f9, {
        text: '*Uploading your movie..\u2B06️*',
      })
      await _0x377d1d.sendMessage(config.JID, _0x24615f)
      await _0x377d1d.sendMessage(_0x2677f9, {
        react: {
          text: '\u2714️',
          key: _0xc9855e.key,
        },
      })
    } catch (_0x456269) {
      _0x291516('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x456269)
      console.log(_0x456269)
    }
  }
)
cmd(
  {
    pattern: 'dtaqt',
    alias: ['mdv'],
    use: '.moviedl <url>',
    react: '\uD83C\uDFA5',
    desc: 'download movies from sinhalasub.lk',
    filename: __filename,
  },
  async (
    _0x33088a,
    _0x555e69,
    _0x2be303,
    {
      from: _0x4d65bf,
      l: _0x7bdfcb,
      quoted: _0x4e268d,
      body: _0x17d082,
      isCmd: _0x101017,
      command: _0x4272e0,
      args: _0x1f5dcd,
      q: _0x52c20b,
      isGroup: _0x33049f,
      prefix: _0x52d42a,
      sender: _0xda9388,
      senderNumber: _0x1dfcde,
      botNumber2: _0x2fc64a,
      botNumber: _0x35f8f1,
      pushname: _0x5acdd5,
      isMe: _0x527e0d,
      isOwner: _0x3bd902,
      groupMetadata: _0x54174d,
      groupName: _0x5b6adc,
      participants: _0x4d2fdc,
      groupAdmins: _0x2eade9,
      isBotAdmins: _0x5aa99a,
      isAdmins: _0x2880e2,
      reply: _0x204d4c,
    }
  ) => {
    try {
      if (!_0x52c20b) {
        return _0x204d4c('\uD83D\uDEA9 *Please give me a url*')
      }
      let _0x4e513e = await sinhalasubtv_info(_0x52c20b)
      const _0x3673b4 = (
          await axios.get(
            'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
          )
        ).data,
        _0x2152c3 =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ ☞* *_' +
          (_0x4e513e.result.title || 'N/A') +
          '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ☞* _' +
          (_0x4e513e.result.date || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ ☞* _' +
          (_0x4e513e.result.imdb || 'N/A') +
          '_\n*\uD83D\uDC81‍\u2642️ \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ ☞* _' +
          _0x4e513e.result.director +
          '_\n\n> \uD83C\uDF1F Follow us : *' +
          _0x3673b4.chlink +
          '*\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_\n'
      await _0x33088a.sendMessage(config.JID, {
        image: { url: _0x4e513e.result.image[0] || images },
        caption: _0x2152c3,
      })
      await _0x33088a.sendMessage(_0x4d65bf, {
        react: {
          text: '\u2714️',
          key: _0x555e69.key,
        },
      })
    } catch (_0x35bab9) {
      console.error('Error fetching or sending', _0x35bab9)
      await _0x33088a.sendMessage(_0x4d65bf, '*Error fetching or sending *', {
        quoted: _0x555e69,
      })
    }
  }
)
cmd(
  {
    pattern: 'ch',
    alias: ['mdv'],
    use: '.moviedl <url>',
    react: '\uD83C\uDFA5',
    desc: 'download movies from sinhalasub.lk',
    filename: __filename,
  },
  async (
    _0x3ef48f,
    _0x2ace9b,
    _0x58bb71,
    {
      from: _0x375532,
      l: _0x103b2b,
      quoted: _0x59f7bc,
      body: _0x1c7c41,
      isCmd: _0x4c884b,
      command: _0x441c52,
      args: _0x323bd3,
      q: _0x385d1f,
      isGroup: _0x4a9c60,
      prefix: _0x509b26,
      sender: _0x21fd06,
      senderNumber: _0x58201a,
      botNumber2: _0x39ed96,
      botNumber: _0x3204d4,
      pushname: _0x106d28,
      isMe: _0x38fa30,
      isOwner: _0xb10aa1,
      groupMetadata: _0x31dfd9,
      groupName: _0x499273,
      participants: _0x54bf20,
      groupAdmins: _0xd21c86,
      isBotAdmins: _0x485b72,
      isAdmins: _0x3e80a7,
      reply: _0x384671,
    }
  ) => {
    try {
      if (!_0x385d1f) {
        return _0x384671('\uD83D\uDEA9 *Please give me a url*')
      }
      let _0x4cd69b = await sinhalasub_info(_0x385d1f)
      const _0x316421 = _0x4cd69b.images || []
      _0x316421.forEach(async (_0x3bbd46) => {
        await _0x3ef48f.sendMessage(
          _0x375532,
          { image: { url: _0x3bbd46 } },
          { caption: config.FOOTER },
          { quoted: _0x2ace9b }
        )
      })
      await _0x3ef48f.sendMessage(_0x375532, {
        react: {
          text: '\u2714️',
          key: _0x2ace9b.key,
        },
      })
    } catch (_0x364057) {
      console.error('Error fetching or sending', _0x364057)
      await _0x3ef48f.sendMessage(_0x375532, '*Error fetching or sending *', {
        quoted: _0x2ace9b,
      })
    }
  }
)
