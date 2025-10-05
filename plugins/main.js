const config = require('../config'),
  os = require('os'),
  axios = require('axios'),
  fs = require('fs'),
  path = require('path'),
  { cmd, commands } = require('../command'),
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
  } = require('../lib/functions')
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
  

cmd(
  {
    pattern: 'ping',
    alias: ['speed'],
    desc: "Check bot's ping",
    category: 'main',
    use: '.ping',
    filename: __filename,
  },
  async (
    _0x582d74,
    _0x3c1eed,
    _0x126cca,
    {
      from: _0x76e4c,
      l: _0x123c68,
      quoted: _0x1cd9b7,
      body: _0x24d49c,
      isCmd: _0x5bb7e8,
      command: _0x3dc209,
      args: _0x7a2fad,
      q: _0x34add5,
      isGroup: _0x213bd2,
      sender: _0x2864a8,
      senderNumber: _0x283fe9,
      botNumber2: _0x1ec895,
      botNumber: _0x46cc35,
      pushname: _0x5243fe,
      isMe: _0x1ef09b,
      isOwner: _0x1c97a6,
      groupMetadata: _0x3a7921,
      groupName: _0x5b472c,
      participants: _0x3dc9c2,
      groupAdmins: _0x53b355,
      isBotAdmins: _0x287a8a,
      isAdmins: _0x365b45,
      reply: _0x4cca16,
    }
  ) => {
    try {
      var _0x197d16 = new Date().getTime()
      let _0x2f5250 = await _0x582d74.sendMessage(
        _0x76e4c,
        { text: '*Testing...*' },
        { quoted: fkontak }
      )
      var _0x54b78d = new Date().getTime()
      await _0x582d74.edite(
        _0x2f5250,
        '*🚀Pong* ' + (_0x54b78d - _0x197d16) + ' *ms* '
      )
      await _0x582d74.sendMessage(_0x76e4c, {
        react: {
          text: '🚀',
          key: _0x3c1eed.key,
        },
      })
    } catch (_0x28eaa5) {
      _0x4cca16('*Error !!*')
      _0x123c68(_0x28eaa5)
    }
  }
)
cmd(
  {
    pattern: 'menu',
    alias: ['panel', 'list', 'commands'],
    desc: "Get bot's command list.",
    category: 'main',
    use: '.menu',
    filename: __filename,
  },
  async (
    _0x42d0e4,
    _0x2767ba,
    _0x167ef5,
    {
      from: _0x4e0d0b,
      prefix: _0x26a5cf,
      l: _0x1ab539,
      quoted: _0x5ae9fa,
      body: _0xf84eca,
      isCmd: _0x2325a6,
      command: _0x45a054,
      args: _0x26ea9e,
      q: _0x5a242c,
      isGroup: _0x3931d9,
      sender: _0x4955d0,
      senderNumber: _0x2b9e1e,
      botNumber2: _0x705169,
      botNumber: _0xc225f8,
      pushname: _0x5410d2,
      isMe: _0xba6441,
      isOwner: _0xc02578,
      groupMetadata: _0x278af1,
      groupName: _0x2e10d2,
      participants: _0x413d5d,
      groupAdmins: _0x2bb7bc,
      isBotAdmins: _0x56e92c,
      isAdmins: _0x1d5473,
      reply: _0x41bedc,
    }
  ) => {
    try {
      if (os.hostname().length == 12) {
        hostname = 'replit'
      } else {
        if (os.hostname().length == 36) {
          hostname = 'heroku'
        } else {
          if (os.hostname().length == 8) {
            hostname = 'koyeb'
          } else {
            hostname = os.hostname()
          }
        }
      }
      const _0x2f8bab =
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB',
        _0x4df7c1 = await runtime(process.uptime())
      let _0x134fa1 = '```'
      const _0x653b63 = [
          {
            buttonId: _0x26a5cf + 'mainmenu',
            buttonText: { displayText: 'MAIN COMMANDS' },
            type: 1,
          },
          {
            buttonId: _0x26a5cf + 'ownermenu',
            buttonText: { displayText: 'OWNER COMMANDS' },
            type: 1,
          },
          {
            buttonId: _0x26a5cf + 'groupmenu',
            buttonText: { displayText: 'GROUP COMMANDS' },
            type: 1,
          },
          {
            buttonId: _0x26a5cf + 'moviemenu',
            buttonText: { displayText: 'MOVIE COMMANDS' },
            type: 1,
          },
        {
            buttonId: _0x26a5cf + 'downloadmenu',
            buttonText: { displayText: 'DOWNLOAD COMMANDS' },
            type: 1,
          },
          {
            buttonId: _0x26a5cf + 'logomenu',
            buttonText: { displayText: 'LOGO COMMANDS' },
            type: 1,
          },
        {
            buttonId: _0x26a5cf + 'searchmenu',
            buttonText: { displayText: 'SEARCH COMMANDS' },
            type: 1,
          },
        {
            buttonId: _0x26a5cf + 'aimenu',
            buttonText: { displayText: 'AI COMMANDS' },
            type: 1,
          },
        {
            buttonId: _0x26a5cf + 'convertmenu',
            buttonText: { displayText: 'CONVERT COMMANDS' },
            type: 1,
          },
        {
            buttonId: _0x26a5cf + 'othermenu',
            buttonText: { displayText: 'OTHER COMMANDS' },
            type: 1,
          },
        ],
        _0x403f48 = (
          await axios.get(
            'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json'
          )
        ).data,
        _0x6fc2a7 = {
          image: { url: config.LOGO },
          caption:
            '  *`✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗! ✨`*\n╭─「 ᴺᴼᵂ ᴼᴺᴸᴵᴺᴱ」\n│ ⏰ *`ᴜᴘᴛɪᴍᴇ :`* ' +
            _0x4df7c1 +
            '\n│ 📟 *`ʀᴀᴍ ᴜꜱꜱᴀɢᴇ :`* ' +
            _0x2f8bab +
            '\n│ ⚙ *`ᴘʟᴀᴛꜰᴏʀᴍ :`* ' +
            hostname +
            '\n│ 👨🏻‍💻 *`ᴏᴡɴᴇʀ ɴᴀᴍᴇ :`* ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ\n│ ☎️ *`ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ :`* 94711451319' +
            '\n│ 🧬 *`ᴠᴇʀꜱɪᴏɴ :`* 3.0.0\n\n│ ✨ Thanks For Choosing *NADEEN-MD*\n╰──────────●●►\n┕━━━━━━━━╗\n*📽️Free Download කරන්නත් පුලුවන්.....*\n╔━━━━━━━━┙\n\n> 🪀 *Join Us :* ' +
            _0x403f48.chlink +
            '\n\n> *🕹 Repo :* ' +
            _0x403f48.reponame,
          footer: '*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          buttons: _0x653b63,
          headerType: 4,
        }
      await _0x42d0e4.buttonMessage2(_0x4e0d0b, _0x6fc2a7, _0x2767ba)
      _0x167ef5.react('📂')
    } catch (_0x1d8512) {
      _0x41bedc('*Error !!*')
      _0x1ab539(_0x1d8512)
    }
  }
)
cmd(
  {
    pattern: 'restart',
    react: '\uD83D\uDD04',
    desc: 'Restart the bot process',
    use: '.restart',
    category: 'main',
    filename: __filename,
  },
  async (
    _0x1ab10b,
    _0x323d3c,
    _0x117697,
    {
      reply: _0x5ecf92,
      isOwner: _0x336dc4,
      isSudo: _0x5f9bd1,
      isSavi: _0x5700b1,
      isSadas: _0x416d0e,
      isMani: _0xf7a0c3,
      isMe: _0x21ff4e,
    }
  ) => {
    if (
      !_0x336dc4 &&
      !_0x5f9bd1 &&
      !_0x416d0e &&
      !_0x21ff4e
    ) {
      return
    }
    try {
      const { exec: _0x34e15b } = require('child_process')
      await _0x5ecf92(
        '\u267B️ *Bot is restarting...*'
      )
      setTimeout(() => {
        _0x34e15b('pm2 restart all', (_0x3bf448, _0x11f011, _0x48d2c6) => {
          _0x3bf448 &&
            (console.error(_0x3bf448),
            _0x5ecf92('\u274C *An error occurred while restarting the bot.*'))
        })
      }, 3000)
    } catch (_0x5c2605) {
      console.error(_0x5c2605)
      _0x5ecf92('\uD83D\uDEA8 *Unexpected error occurred during restart.*')
    }
  }
)
cmd(
  {
    pattern: 'groupmenu',
    react: '👥',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x1b6edd,
    _0xe61f4a,
    _0x4d4e3c,
    {
      from: _0x10940a,
      prefix: _0x56a309,
      l: _0x520825,
      quoted: _0x28ee41,
      body: _0x48afaa,
      isCmd: _0x2a2de8,
      command: _0x3aaff2,
      args: _0x3065c3,
      q: _0x358307,
      isGroup: _0x4cc554,
      sender: _0x2a8d44,
      senderNumber: _0x10e791,
      botNumber2: _0x7c63a8,
      botNumber: _0xed3802,
      pushname: _0x44f740,
      isMe: _0x133875,
      isOwner: _0x381e92,
      groupMetadata: _0x457c83,
      groupName: _0x1b74fe,
      participants: _0x2cf1b0,
      groupAdmins: _0x2cb8c5,
      isBotAdmins: _0x45d894,
      isAdmins: _0x5e56aa,
      reply: _0x3eec74,
    }
  ) => {
    try {
      let _0x48073c = ''
      for (let _0x546ab6 = 0; _0x546ab6 < commands.length; _0x546ab6++) {
        commands[_0x546ab6].category === 'group' &&
          !commands[_0x546ab6].dontAddCommandList &&
            (_0x48073c +=
              '*\u2502⫸*' +'.'+
              commands[_0x546ab6].pattern +
              '\n')
      }
      let _0x2edaac = [
          {
            buttonId: _0x56a309 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x56a309 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x7051b5 = {
          image: { url: config.LOGO },
          caption:
            '*`👥GROUP COMMANDS MENU 👥`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48073c +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x2edaac,
        }
      return await _0x1b6edd.buttonMessage(_0x10940a, _0x7051b5, _0xe61f4a)
    } catch (_0x2fa05b) {
      _0x3eec74('*ERROR !!*')
      _0x520825(_0x2fa05b)
    }
  }
)
cmd(
  {
    pattern: 'downloadmenu',
    react: '⬇',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'download' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +'.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`⬇DOWNLOAD COMMANDS MENU ⬇`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'ownermenu',
    react: '🔐',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'owner' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +'.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`👨🏻‍💻OWNER COMMANDS MENU 👨🏻‍💻`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'othermenu',
    react: '🛠',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'other' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +'.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`🛠 OTHER COMMANDS MENU 🛠`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'convertmenu',
    react: '✨',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'convert' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +'.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`✨CONVERT COMMANDS MENU ✨`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'searchmenu',
    react: '🔍',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'search' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +'.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`🔍SEARCH COMMANDS MENU 🔍`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'aimenu',
    react: '🤖',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'ai' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +'.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`🤖 AI COMMANDS MENU 🤖`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'logomenu',
    react: '🧩',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'logo' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +'.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`🧩LOGO COMMANDS MENU 🧩`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'mainmenu',
    react: '🧿',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'main' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502⫸*' +
              '.' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`🧿MAIN COMMANDS MENU 🧿`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'moviemenu',
    react: '🎬',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e1bc5,
    _0x3a8f10,
    _0x57b75a,
    {
      from: _0x159d68,
      prefix: _0x36f32a,
      l: _0x18a218,
      quoted: _0x453468,
      body: _0xe1e10d,
      isCmd: _0x4115b3,
      command: _0x339d05,
      args: _0x17c2d0,
      q: _0x545826,
      isGroup: _0x25a628,
      sender: _0x28751a,
      senderNumber: _0x12bbaa,
      botNumber2: _0x4e7a16,
      botNumber: _0x3d90c9,
      pushname: _0x3a0d30,
      isMe: _0x4c68b8,
      isOwner: _0x44b194,
      groupMetadata: _0x305ce8,
      groupName: _0x5acab9,
      participants: _0x363cb6,
      groupAdmins: _0x24dd16,
      isBotAdmins: _0x20c2a5,
      isAdmins: _0x12d271,
      reply: _0x50045d,
    }
  ) => {
    try {
      let _0x34bdab = ''
      for (let _0x29a792 = 0; _0x29a792 < commands.length; _0x29a792++) {
        commands[_0x29a792].category === 'movie' &&
          !commands[_0x29a792].dontAddCommandList &&
            (_0x34bdab +=
              '*\u2502⫸*' +'.' +
              commands[_0x29a792].pattern +
              '\n')
      }
      let _0x3ed3e4 = [
          {
            buttonId: _0x36f32a + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x36f32a + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x481806 = {
          image: { url: config.LOGO },
          caption:
            '*`🎬MOVIE COMMANDS MENU 🎬`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x34bdab +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x3ed3e4,
        }
      return await _0x3e1bc5.buttonMessage(_0x159d68, _0x481806, _0x3a8f10)
    } catch (_0x3a12e2) {
      _0x50045d('*ERROR !!*')
      _0x18a218(_0x3a12e2)
    }
  }
)
cmd(
  {
    pattern: 'system',
    alias: ['status'],
    desc: 'Check bot system status.',
    category: 'main',
    use: '.system',
    filename: __filename,
  },
  async (
    _0x6c610,
    _0x644eb6,
    _0x5e13ef,
    { reply: _0x179208, from: _0x24597e }
  ) => {
    try {
      if (os.hostname().length == 12) {
        hostname = 'replit'
      } else {
        if (os.hostname().length == 36) {
          hostname = 'heroku'
        } else {
          if (os.hostname().length == 8) {
            hostname = 'koyeb'
          } else {
            hostname = os.hostname()
          }
        }
      }
      const _0x56273d =
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB',
        _0x2301d7 = await runtime(process.uptime()),
        _0x46cd04 =
          '_*🫟 𝙽𝙰𝙳𝙴𝙴𝙽-𝙼𝙳 𝙱𝙾𝚃 𝚂𝚈𝚂𝚃𝙴𝙼  🫟*_\n\n*`⏰\uD835\uDE19\uD835\uDE36\uD835\uDE2F \uD835\uDE35\uD835\uDE2A\uD835\uDE2E\uD835\uDE26 \u279C`* ' +
          _0x2301d7 +
          '\n\n*`📟\uD835\uDE19\uD835\uDE22\uD835\uDE2E \uD835\uDE36\uD835\uDE34\uD835\uDE34\uD835\uDE22\uD835\uDE28\uD835\uDE26 \u279C`* ' +
          _0x56273d +
          '\n\n*`⚙\uD835\uDE17\uD835\uDE2D\uD835\uDE22\uD835\uDE35\uD835\uDE27\uD835\uDE30\uD835\uDE33\uD835\uDE2E \u279C`* ' +
          hostname +
          '\n\n*`🧬\uD835\uDE1D\uD835\uDE26\uD835\uDE33\uD835\uDE34\uD835\uDE2A\uD835\uDE30\uD835\uDE2F \u279C`* 3.0.0' +
        '\n\n*`👨🏻‍💻𝘖𝘸𝘯𝘦𝘳 \u279C`* Nadeen Poorna'
      await _0x6c610.sendMessage(
        _0x5e13ef.chat,
        { text: _0x46cd04 },
        { quoted: fkontak }
      )
      _0x5e13ef.react('🩺')
    } catch (_0x2eb74e) {
      await _0x179208('*Error !!*')
      console.log(_0x2eb74e)
    }
  }
)
cmd(
  {
    pattern: 'forward',
    react: '⏭',
    alias: ['f','FW'],
    desc: 'forwerd film and msg',
    use: '.f jid',
    category: 'owner',
    filename: __filename,
  },
  async (
    _0x4ac7d8,
    _0x3ef7a2,
    _0x1a69c5,
    {
      from: _0x75d5e5,
      l: _0x15d458,
      prefix: _0x11a91d,
      quoted: _0x2628fc,
      body: _0x169351,
      isCmd: _0x200343,
      command: _0x55102b,
      args: _0x1d7664,
      q: _0x2ae25f,
      isGroup: _0x11e1f1,
      sender: _0x561def,
      senderNumber: _0x2e5887,
      botNumber2: _0xe90c96,
      botNumber: _0x4b277c,
      pushname: _0x3ba695,
      isSudo: _0x2b779a,
      isTharu: _0x569faa,
      isOwner: _0xb4ba3,
      isSupporters: _0x2825a8,
      groupMetadata: _0x43721a,
      groupName: _0xddb744,
      participants: _0x2a6c6c,
      groupAdmins: _0x3165d6,
      isBotAdmins: _0x3e143a,
      isAdmins: _0xb56d03,
      reply: _0x171a24,
    }
  ) => {
  if (!_0x2b779a && !_0x3e143a && !_0xb4ba3) {
        return await _0x171a24('*Only Bot Owner❌*')
      }
    if (!_0x2ae25f || !_0x1a69c5.quoted) {
      return _0x171a24(
        '*Please give me a Jid and Quote a Message to continue.*'
      )
    }
    let _0x523bf2 = _0x2ae25f.split(',').map((_0x3652e9) => _0x3652e9.trim())
    if (_0x523bf2.length === 0) {
      return _0x171a24('*Provide at least one Valid Jid. \u2049️*')
    }
    let _0x23e74c = { key: _0x3ef7a2.quoted?.fakeObj?.key }
    if (_0x3ef7a2.quoted.documentWithCaptionMessage?.message?.documentMessage) {
      let _0x27ff3f =
        _0x3ef7a2.quoted.documentWithCaptionMessage.message.documentMessage
      const _0x7940f6 = require('mime-types')
      let _0x272829 = _0x7940f6.extension(_0x27ff3f.mimetype) || 'file'
      _0x27ff3f.fileName = _0x27ff3f.fileName || 'file.' + _0x272829
    }
    _0x23e74c.message = _0x3ef7a2.quoted
    let _0x4bbe10 = []
    for (let _0x11c92a of _0x523bf2) {
      try {
        await _0x4ac7d8.forwardMessage(_0x11c92a, _0x23e74c, false)
        _0x4bbe10.push(_0x11c92a)
      } catch (_0x42e808) {
        console.log(e)
      }
    }
    if (_0x4bbe10.length > 0) {
      return _0x171a24('*⏭️Message Forwarded*\n\n' + _0x4bbe10.join('\n'))
    } else {
      console.log(e)
    }
  }
)
cmd(
  {
    pattern: 'rename',
    react: '📝️',
    alias: ['r', 'edit', 'ussamu', 'tarahawennaepa'],
    desc: 'File name and caption change',
    category: 'other',
    use: '.rename file_name + caption',
    filename: __filename,
  },
  async (
    _0xd88f7a,
    _0x289fb6,
    _0x4279d9,
    {
      from: _0x20c0c2,
      quoted: _0x1562b5,
      q: _0x5a9b26,
      botNumber2: _0x418c4f,
      reply: _0x1c2bcd,
      msr: _0x249300,
      creator: _0x189026,
    }
  ) => {
    try {
      if (!_0x1562b5) {
        return await _0x1c2bcd(
          '*කරුණාකර document එකක් හෝ media file එකක් reply කරන්න \u2753*'
        )
      }
      console.log('Quoted Object:', _0x1562b5)
      if (
        !_0x1562b5.message ||
        (!_0x1562b5.message.documentMessage &&
          !_0x1562b5.message.videoMessage &&
          !_0x1562b5.message.imageMessage &&
          !_0x1562b5.message.audioMessage)
      ) {
        return await _0x1c2bcd(
          '\u274C *Quoted message එකේ media file එකක් හෝ document එකක් නොමැත!*'
        )
      }
      let _0x2b9410 = '',
        _0x1dce42 = ''
      const _0x2a2cb3 = _0x5a9b26 || ''
      if (_0x2a2cb3.includes('+')) {
        const _0x38bbac = _0x2a2cb3.split('+')
        _0x2b9410 = _0x38bbac[0]?.trim()
        _0x1dce42 = _0x38bbac[1]?.trim()
      } else {
        _0x2b9410 = _0x2a2cb3.trim()
      }
      const _0x5a8e6a = _0x1dce42 || _0x2b9410 || 'Renamed'
      let _0x2f1eba =
        _0x1562b5.message?.documentMessage ||
        _0x1562b5.message?.videoMessage ||
        _0x1562b5.message?.imageMessage ||
        _0x1562b5.message?.audioMessage
      if (!_0x2f1eba) {
        return await _0x1c2bcd(
          '\u274C *Media type එක හෝ file name එක සොයා ගැනීමේ දෝෂයක් ඇත!*'
        )
      }
      _0x2f1eba.fileName = _0x2b9410
      _0x2f1eba.caption = _0x5a8e6a
      const _0x442cc5 = {
        key: {
          remoteJid: _0x20c0c2,
          fromMe: true,
          id: _0x1562b5.key.id,
          participant: _0x418c4f,
        },
        message: _0x1562b5.message,
      }
      await _0xd88f7a.forwardMessage(_0x20c0c2, _0x442cc5, false)
      await _0xd88f7a.sendMessage(_0x20c0c2, {
        react: {
          text: '\u2714',
          key: _0x289fb6.key,
        },
      })
    } catch (_0x28fee8) {
      console.log('Error:', _0x28fee8)
      await _0xd88f7a.sendMessage(_0x20c0c2, {
        react: {
          text: '\u274C',
          key: _0x289fb6.key,
        },
      })
      await _0xd88f7a.sendMessage(
        _0x20c0c2,
        { text: _0x249300.err },
        { quoted: _0x289fb6 }
      )
      await _0xd88f7a.sendMessage(
        _0x189026,
        { text: '\u274C *Error Occurred!*\n\n' + _0x28fee8 },
        { quoted: _0x289fb6 }
      )
    }
  }
)
cmd(
  {
    pattern: 'directdl',
    react: '🧱',
    alias: ['dn'],
    desc: 'Direct downloder',
    category: 'movie',
    use: '.download < Direct Link >',
    dontAddCommandList: false,
    filename: __filename,
  },
  async (
    _0xea77b3,
    _0x279c6e,
    _0x5b007c,
    { from: _0x1f6236, q: _0x49faee, sender: _0x3166fa, reply: _0x2277b2 }
  ) => {
    try {
      if (!_0x49faee) {
        return _0x2277b2('\u2757 කරුණාකර download link එකක් ලබා දෙන්න.')
      }
      const _0x464d07 = _0x49faee.trim()
      if (!/^(https?:\/\/[^\s]+)/['NADEEN-MD'](_0x464d07)) {
        return _0x2277b2(
          '\u2757 දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.'
        )
      }
      await _0xea77b3.sendMessage(_0x1f6236, {
        react: {
          text: '⬇️',
          key: _0x279c6e.key,
        },
      })
      await _0xea77b3.sendMessage(_0x1f6236, {
        document: { url: _0x464d07 },
        caption: '\n\n> *NADEEN-MD*',
        mimetype: 'video/mp4',
        fileName: 'Nadeen.mp4',
      })
      await _0xea77b3.sendMessage(_0x1f6236, {
        react: {
          text: '\u2705',
          key: _0x279c6e.key,
        },
      })
    } catch (_0x1d7fbd) {
      _0x2277b2('\u2757 Error: ' + _0x1d7fbd.message)
    }
  }
)
cmd(
  {
    pattern: 'id',
    react: '🧬',
    alias: ['getdeviceid'],
    desc: 'Get message id',
    category: 'owner',
    use: '.id',
    filename: __filename,
  },
  async (
    _0x500560,
    _0x3b9759,
    _0x2183dd,
    {
      from: _0x4f8cf5,
      l: _0x474ba4,
      quoted: _0x34e986,
      isSudo: _0x364ca4,
      body: _0x327d25,
      isCmd: _0x49549c,
      msr: _0x2262b0,
      command: _0x3a547b,
      args: _0x52d979,
      q: _0xb8a1ee,
      isGroup: _0x57f064,
      sender: _0x559eec,
      senderNumber: _0x398879,
      botNumber2: _0x4c9dcf,
      botNumber: _0x85186d,
      pushname: _0x129748,
      isMe: _0x3c29ec,
      isOwner: _0x5b7f1a,
      groupMetadata: _0x3742c5,
      groupName: _0x1a3721,
      participants: _0x5e6f85,
      groupAdmins: _0x4fb6a0,
      isBotAdmins: _0x4ceedc,
      isCreator: _0x2f2bb2,
      isDev: _0x1b5ddf,
      isAdmins: _0xb69281,
      reply: _0x5bdb36,
    }
  ) => {
    try {
      if (!_0x3c29ec && !_0x5b7f1a && !_0x364ca4) {
        return await _0x5bdb36('*\uD83D\uDCDBOWNER COMMAND*')
      }
      if (!_0x2183dd.quoted) {
        return _0x5bdb36('*Please reply a Message... ℹ️*')
      }
      _0x5bdb36(_0x2183dd.quoted.id)
    } catch (_0x490c16) {
      await _0x500560.sendMessage(_0x4f8cf5, {
        react: {
          text: '\u274C',
          key: _0x3b9759.key,
        },
      })
      console.log(_0x490c16)
      _0x5bdb36('\u274C *Error Accurated !!*\n\n' + _0x490c16)
    }
  }
)
cmd(
  {
    pattern: 'pair',
    alias: ['requestpair'],
    desc: 'Check bot system status.',
    category: 'main',
    use: '.system',
    filename: __filename,
  },
  async (
    _0x2ee746,
    _0x220277,
    _0x385fff,
    { reply: _0x1d3ad2, q: _0x994177, from: _0x487452 }
  ) => {
    try {
      let _0x1c9514 = await axios.get(
        'https://nadeenweb.onrender.com/code?number=' +
          _0x994177
      )
      await _0x2ee746.sendMessage(
        _0x385fff.chat,
        { text: _0x1c9514.data.code },
        { quoted: _0x220277 }
      )
      _0x385fff.react('\uD83D\uDD22')
      setTimeout(async () => {
        await _0x2ee746.sendMessage(
          _0x385fff.chat,
          { text: '*Your code is expired \u231B*' },
          { quoted: fkontak }
        )
      }, 30000)
    } catch (_0x4aae5c) {
      await _0x1d3ad2('*Error !!*')
      console.log(_0x4aae5c)
    }
  }
)
