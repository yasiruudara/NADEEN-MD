const config = require('../config'),
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
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb,
} = require('../lib/database')
cmd(
  {
    pattern: 'settings',
    alias: ['setting', 'botsetting'],
    category: 'owner',
    use: '.settings',
    filename: __filename,
  },
  async (
    _0x3da84c,
    _0x933ff0,
    _0x419d71,
    {
      from: _0x28bbb8,
      l: _0x46a296,
      quoted: _0x3a4fe2,
      body: _0x1664f9,
      isCmd: _0x9ffe44,
      command: _0x1ca30b,
      args: _0x228ceb,
      prefix: _0x2dfaa8,
      q: _0x46787c,
      isSudo: _0x3aa8fb,
      isGroup: _0x364bf9,
      sender: _0x53d0ef,
      senderNumber: _0x278f31,
      botNumber2: _0x3c36e2,
      botNumber: _0x14b4f8,
      pushname: _0x5b2470,
      isMe: _0x52b8a0,
      isOwner: _0x5b644d,
      groupMetadata: _0x5f4a0e,
      groupName: _0x4782bc,
      participants: _0x3f2b81,
      groupAdmins: _0x52c5b4,
      isBotAdmins: _0x3ba675,
      isAdmins: _0x31d4b6,
      reply: _0x10def3,
    }
  ) => {
    try {
      if (!_0x52b8a0 && !_0x3aa8fb) {
        return await _0x10def3('*OWNER COMMAND \u26D4*')
      }
      const _0x39b60a = [
          {
            title: '`\uD83C\uDF0F WORK_TYPE \uD83C\uDF0F`',
            rows: [
              {
                title: 'PUBLIC \uD83C\uDF10',
                rowId: _0x2dfaa8 + 'work_type public',
              },
              {
                title: 'PRIVATE \uD83D\uDDE3',
                rowId: _0x2dfaa8 + 'work_type private',
              },
              {
                title: 'ONLY GROUP \uD83D\uDC65',
                rowId: _0x2dfaa8 + 'work_type onlygroup',
              },
              {
                title: 'INBOX \uD83D\uDC64',
                rowId: _0x2dfaa8 + 'work_type inbox',
              },
            ],
          },
          {
            title: '`\uD83D\uDC40 AUTO_STATUS_READ \uD83D\uDC40`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autos on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autos off',
              },
            ],
          },
        {
            title: '`💚 AUTO_STATUS_REACT 💚`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autosreact on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autosreact off',
              },
            ],
          },
        {
            title: '`🎙 AUTO_VOICE 🎙`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autovoice on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autovoice off',
              },
            ],
          },
          {
            title: '`\uD83D\uDCA6 AUTO_MSG_READ \uD83D\uDCA6`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autoread on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autoread off',
              },
            ],
          },
          {
            title: '`\u26A1 AUTO_RECORDING \u26A1`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autorec on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autorec off',
              },
            ],
          },
          {
            title: '`\uD83C\uDFAF AUTO_TYPING \uD83C\uDFAF`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autotyping on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autotyping off',
              },
            ],
          },
          {
            title: '`\uD83C\uDF55 READ_ONLY_COMMANDS \uD83C\uDF55`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'ronly on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'ronly off',
              },
            ],
          },
          {
            title: '`\uD83D\uDEAB AUTO_BLOCK \uD83D\uDEAB`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autoblock on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autoblock off',
              },
            ],
          },
          {
            title: '`\u260E ANTI_CALL \u260E`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'anticall on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'anticall off',
              },
            ],
          },
          {
            title: '`\u2728 AUTO_REACT \u2728`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'autoreact on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'autoreact off',
              },
            ],
          },
          {
            title: '`\uD83D\uDC7E AI_CHAT \uD83D\uDC7E`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'chatbot on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'chatbot off',
              },
            ],
          },
          {
            title: '`\uD83D\uDEAF ANTI_DELETE \uD83D\uDEAF`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'antdel on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'antdel off',
              },
            ],
          },
          {
            title: '`\uD83E\uDE80 ANTI_LINK \uD83E\uDE80`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'antilink on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'antilink off',
              },
            ],
          },
          {
            title: '`\uD83E\uDD16 ANTI_BOT \uD83E\uDD16`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'antibot on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'antibot off',
              },
            ],
          },
          {
            title: '`\uD83D\uDCA2 ANTI_BAD \uD83D\uDCA2`',
            rows: [
              {
                title: 'ON \u2705',
                rowId: _0x2dfaa8 + 'antibad on',
              },
              {
                title: 'OFF \u274C',
                rowId: _0x2dfaa8 + 'antibad off',
              },
            ],
          },
        ],
        _0x342dfe = {
          text: '*_\u2699️ NADEEN MD SETTINGS \u2699️_*\n\n*\uD83D\uDD22Select the Setting you want to Change.\u2935*',
          footer: config.FOOTER,
          title: '',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x39b60a,
        }
      await _0x3da84c.listMessage(_0x28bbb8, _0x342dfe, _0x933ff0)
      _0x419d71.react('\u2699️')
    } catch (_0x26d43d) {
      _0x10def3('*Error !!*')
      _0x46a296(_0x26d43d)
    }
  }
)
cmd(
  {
    pattern: 'work_type',
    react: '\uD83D\uDD01',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x5468a2,
    _0x5b3db4,
    _0x343324,
    {
      from: _0x137058,
      l: _0x75b0f9,
      quoted: _0x123b1b,
      body: _0x5ca5a0,
      isCmd: _0x136f61,
      command: _0x4b0cbd,
      args: _0x4b4618,
      q: _0x42c520,
      msr: _0x3ea203,
      isGroup: _0x2c0181,
      isSudo: _0x4c2bcd,
      sender: _0x3134e3,
      senderNumber: _0x3b9176,
      botNumber2: _0x4e3b29,
      botNumber: _0x4e0299,
      pushname: _0x17dfcb,
      isMe: _0x1a22a3,
      isOwner: _0x591685,
      isDev: _0x15895e,
      isCreator: _0x3cc7bc,
      groupMetadata: _0xa7c7c2,
      groupName: _0xe525a3,
      participants: _0x2595f6,
      groupAdmins: _0x4edcc3,
      isBotAdmins: _0x38e448,
      isAdmins: _0x1b9172,
      reply: _0x23d09d,
    }
  ) => {
    try {
      if (!_0x4c2bcd && !_0x591685 && !_0x1a22a3) {
        return await _0x23d09d('*OWNER COMMAND \u26D4*')
      }
      if (!_0x42c520) {
        return
      }
      if (_0x42c520 === 'private') {
        let _0xd8cb9e = await get('WORK_TYPE')
        if (_0xd8cb9e === _0x42c520) {
          return await _0x23d09d('*All ready worktype PRIVATE\uD83D\uDC64*')
        }
        await input('WORK_TYPE', _0x42c520)
        await _0x23d09d('*\uD83C\uDF10 WORK_TYPE  - PRIVATE*')
        await _0x5468a2.sendMessage(_0x137058, {
          react: {
            text: '\u2714',
            key: _0x5b3db4.key,
          },
        })
      } else {
        if (_0x42c520 === 'only_group') {
          let _0x3678cb = await get('WORK_TYPE')
          if (_0x3678cb === _0x42c520) {
            return await _0x23d09d(
              '*All ready worktype ONLY_GROUP\uD83D\uDC65*'
            )
          }
          await input('WORK_TYPE', _0x42c520)
          await _0x23d09d('*\uD83C\uDF10 WORK_TYPE  - ONLY_GROUP*')
          await _0x5468a2.sendMessage(_0x137058, {
            react: {
              text: '\u2714',
              key: _0x5b3db4.key,
            },
          })
        } else {
          if (_0x42c520 === 'public') {
            let _0x34529c = await get('WORK_TYPE')
            if (_0x34529c === _0x42c520) {
              return await _0x23d09d('*All ready worktype PUBLIC\uD83C\uDF0F*')
            }
            await input('WORK_TYPE', _0x42c520)
            await _0x23d09d('*\uD83C\uDF10 WORK_TYPE  - PUBLIC*')
            await _0x5468a2.sendMessage(_0x137058, {
              react: {
                text: '\u2714',
                key: _0x5b3db4.key,
              },
            })
          } else {
            if (_0x42c520 === 'inbox') {
              let _0x5937c6 = await get('WORK_TYPE')
              if (_0x5937c6 === _0x42c520) {
                return await _0x23d09d('*All ready worktype INBOX\uD83D\uDC65*')
              }
              await input('WORK_TYPE', _0x42c520)
              await _0x23d09d('*\uD83C\uDF10 WORK_TYPE  - INBOX*')
              await _0x5468a2.sendMessage(_0x137058, {
                react: {
                  text: '\u2714',
                  key: _0x5b3db4.key,
                },
              })
            } else {
              const _0x192328 = await _0x5468a2.sendMessage(
                _0x137058,
                { text: _0x3ea203.valid_con },
                { quoted: _0x5b3db4 }
              )
              await _0x5468a2.sendMessage(_0x137058, {
                react: {
                  text: '\u2753',
                  key: _0x192328.key,
                },
              })
            }
          }
        }
      }
    } catch (_0x79c77b) {
      await _0x5468a2.sendMessage(_0x137058, {
        react: {
          text: '\u274C',
          key: _0x5b3db4.key,
        },
      })
      console.log(_0x79c77b)
      _0x23d09d('Error !!\n\n*' + _0x79c77b + '*')
    }
  }
)
cmd(
  {
    pattern: 'setsudo',
    react: '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDD27',
    alias: ['set', 'addsudo'],
    desc: 'Set moderator.',
    category: 'owner',
    use: '.setsudo',
    filename: __filename,
  },
  async (
    _0x4737c8,
    _0x49f5a8,
    _0x481250,
    {
      from: _0x2a7664,
      l: _0xf4523b,
      quoted: _0x7bdb39,
      body: _0x30edf6,
      isCmd: _0x1f73c2,
      command: _0x52b7a3,
      args: _0x1e22f0,
      q: _0x4be68c,
      msr: _0x1587d9,
      creator: _0x602aa,
      isGroup: _0x466dee,
      sender: _0x3f2bc8,
      senderNumber: _0x18dda2,
      botNumber2: _0xb0c375,
      botNumber: _0x5a0631,
      pushname: _0x41094,
      isMe: _0x1f31ee,
      isOwner: _0x21b07,
      groupMetadata: _0x148091,
      isDev: _0x4190fc,
      groupName: _0x27c603,
      participants: _0xa933c9,
      groupAdmins: _0x216b4e,
      isBotAdmins: _0x47deae,
      isAdmins: _0x149f65,
      reply: _0x3867b5,
    }
  ) => {
    try {
      if (!_0x1f31ee && !isSudo) {
        return await _0x3867b5('*OWNER COMMAND \u26D4*')
      }
      const _0x82ce30 = _0x481250.mentionUser[0]
      if (!_0x82ce30) {
        return await _0x3867b5('*Please mention user \u2754*')
      }
      const _0x403f22 = async (_0x147d73) => {
        let _0x3c2fd4 = await get(_0x147d73)
        for (let _0x2bf1f0 = 0; _0x2bf1f0 < _0x3c2fd4.length; _0x2bf1f0++) {
          if (_0x3c2fd4[_0x2bf1f0] === _0x82ce30) {
            return true
          }
        }
        return false
      }
      if (await _0x403f22('SUDO')) {
        return await _0x3867b5(
          '*You are allready added moderater list\uD83D\uDE3E*'
        )
      }
      let _0x122287 = await get('SUDO')
      _0x122287.push(_0x82ce30)
      await input('SUDO', _0x122287)
      await _0x3867b5('*Moderater Add Successfull \u2705*')
      await _0x4737c8.sendMessage(_0x2a7664, {
        react: {
          text: '\u2714',
          key: _0x49f5a8.key,
        },
      })
    } catch (_0x28772f) {
      await _0x4737c8.sendMessage(_0x2a7664, {
        react: {
          text: '\u274C',
          key: _0x49f5a8.key,
        },
      })
      console.log(_0x28772f)
      _0x3867b5('\u274C *Error Accurated !!*\n\n' + _0x28772f)
    }
  }
)
cmd(
  {
    pattern: 'delsudo',
    alias: ['rsudo', 'removesudo'],
    react: '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDD27',
    desc: 'Remove moderater.',
    category: 'tools',
    use: '.delsudo',
    filename: __filename,
  },
  async (
    _0x295c38,
    _0x515d46,
    _0x5d6e76,
    {
      from: _0x1944f1,
      l: _0x48eeb6,
      quoted: _0x4eb9e4,
      body: _0x3798c0,
      isCmd: _0x10dc8f,
      command: _0x132c3f,
      args: _0x393692,
      q: _0x184901,
      msr: _0x1fe434,
      creator: _0x37a20d,
      isGroup: _0x33cdc5,
      sender: _0x9c8d12,
      senderNumber: _0x4dae49,
      botNumber2: _0x21c7b8,
      botNumber: _0x293459,
      pushname: _0x549441,
      isMe: _0x4ea86c,
      isOwner: _0x171b61,
      groupMetadata: _0x5dcb07,
      isDev: _0x26ac28,
      groupName: _0x4c6496,
      participants: _0x4e9f26,
      groupAdmins: _0x154cdb,
      isBotAdmins: _0x281974,
      isAdmins: _0x39f0c8,
      reply: _0x2a05d0,
    }
  ) => {
    try {
      if (!_0x4ea86c && !isSudo) {
        return await _0x2a05d0('*OWNER COMMAND \u26D4*')
      }
      const _0x46dc5c = _0x5d6e76.mentionUser[0]
      if (!_0x46dc5c) {
        return await _0x2a05d0('*Please mention user \u2754*')
      }
      const _0x5b47c2 = async (_0xd94acc) => {
        let _0x4a42ba = await get(_0xd94acc)
        for (let _0x15a814 = 0; _0x15a814 < _0x4a42ba.length; _0x15a814++) {
          if (_0x4a42ba[_0x15a814] === _0x46dc5c) {
            return true
          }
        }
        return false
      }
      if (!(await _0x5b47c2('SUDO'))) {
        return await _0x2a05d0('*You are not a moderater \uD83D\uDE12*')
      }
      const _0x24fa18 = await get('SUDO'),
        _0x2c2164 = _0x5d6e76.mentionUser[0]
          ? _0x5d6e76.mentionUser[0]
          : _0x1944f1,
        _0x25a06a = _0x24fa18.indexOf(_0x2c2164)
      _0x25a06a !== -1 && _0x24fa18.splice(_0x25a06a, 1)
      await input('SUDO', _0x24fa18)
      await _0x2a05d0('*Moderater Delete Successfull \u2705*')
      await _0x295c38.sendMessage(_0x1944f1, {
        react: {
          text: '\u2714',
          key: _0x515d46.key,
        },
      })
    } catch (_0x5df548) {
      await _0x295c38.sendMessage(_0x1944f1, {
        react: {
          text: '\u274C',
          key: _0x515d46.key,
        },
      })
      console.log(_0x5df548)
      _0x2a05d0('\u274C *Error Accurated !!*\n\n' + _0x5df548)
    }
  }
)
cmd(
  {
    pattern: 'delallsudo',
    alias: ['rasudo', 'removeallsudo'],
    react: '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDD27',
    desc: 'Remove ALL Moderaters',
    category: 'tools',
    use: '.delallsudo',
    filename: __filename,
  },
  async (
    _0x469e9f,
    _0x47c106,
    _0x1ca12b,
    {
      from: _0x274c81,
      l: _0xa00aeb,
      quoted: _0x4a9284,
      body: _0x28b76f,
      isCmd: _0x3ceede,
      command: _0x1fbb1c,
      args: _0x285810,
      q: _0x3b5661,
      msr: _0xdaf3eb,
      creator: _0x3207b7,
      isGroup: _0x56183a,
      sender: _0xf92670,
      senderNumber: _0x578804,
      botNumber2: _0x2bbe73,
      botNumber: _0x131e92,
      pushname: _0x2907ed,
      isMe: _0x4a2b61,
      isOwner: _0x149ac9,
      groupMetadata: _0x4d309b,
      isDev: _0x2cddf0,
      groupName: _0x1d23ec,
      participants: _0x1fe718,
      groupAdmins: _0x3f21de,
      isBotAdmins: _0x354916,
      isAdmins: _0x6dfa3f,
      reply: _0x157b1d,
    }
  ) => {
    try {
      if (!_0x4a2b61 && !isSudo) {
        return await _0x157b1d('*OWNER COMMAND \u26D4*')
      }
      const _0x2e6881 = []
      await input('SUDO', _0x2e6881)
      await _0x157b1d('*All Moderater remove \u2705*')
      await _0x469e9f.sendMessage(_0x274c81, {
        react: {
          text: '\u2714',
          key: _0x47c106.key,
        },
      })
    } catch (_0x59e0e1) {
      await _0x469e9f.sendMessage(_0x274c81, {
        react: {
          text: '\u274C',
          key: _0x47c106.key,
        },
      })
      console.log(_0x59e0e1)
      _0x157b1d('\u274C *Error Accurated !!*\n\n' + _0x59e0e1)
    }
  }
)
cmd(
  {
    pattern: 'ban',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4e94a4,
    _0x5074dc,
    _0x510e59,
    {
      from: _0x47c833,
      l: _0x12f434,
      quoted: _0x11c9e2,
      body: _0x2e0794,
      isCmd: _0x52c75e,
      command: _0xf449d0,
      args: _0x3fae36,
      q: _0x28e55f,
      isGroup: _0x182327,
      isSudo: _0x24a765,
      sender: _0x49fd34,
      senderNumber: _0x1608ee,
      botNumber2: _0x410163,
      botNumber: _0xd7c1d9,
      pushname: _0x3f2b46,
      isMe: _0x493e5a,
      isOwner: _0x1949d2,
      groupMetadata: _0x48b7e2,
      groupName: _0x400b17,
      participants: _0x1741ce,
      groupAdmins: _0x2bbc47,
      isBotAdmins: _0xd9d717,
      isAdmins: _0x4ac5c2,
      reply: _0x21c7f5,
    }
  ) => {
    try {
      if (!_0x493e5a && !_0x24a765) {
        return await _0x21c7f5('*OWNER COMMAND \u26D4*')
      }
      const _0x4fe1a2 = async (_0x5c2e7d) => {
        let _0x2715b7 = await get(_0x5c2e7d)
        for (let _0x282f24 = 0; _0x282f24 < _0x2715b7.length; _0x282f24++) {
          if (_0x2715b7[_0x282f24] === _0x47c833) {
            return true
          }
        }
        return false
      }
      if (_0x28e55f === 'on') {
        if (await _0x4fe1a2('JID_BLOCK')) {
          return _0x21c7f5('*This settings all ready updated \u2611️*')
        }
        let _0x400532 = await get('JID_BLOCK')
        _0x400532.push(_0x47c833)
        await input('JID_BLOCK', _0x400532)
        await _0x21c7f5('*Sucssessfully banned this chat \u2714️*')
      } else {
        if (!(await _0x4fe1a2('JID_BLOCK'))) {
          return _0x21c7f5('*This settings all ready updated \u2611️*')
        }
        const _0x46c9f2 = await get('JID_BLOCK'),
          _0x4c109e = _0x47c833,
          _0x26fbcd = _0x46c9f2.indexOf(_0x4c109e)
        _0x26fbcd !== -1 && _0x46c9f2.splice(_0x26fbcd, 1)
        await input('JID_BLOCK', _0x46c9f2)
        await _0x21c7f5('*Sucssessfully unbanned this chat \u274C*')
      }
    } catch (_0x5ec1d2) {
      _0x21c7f5('*Error !!*')
      _0x12f434(_0x5ec1d2)
    }
  }
)
cmd(
  {
    alias: ['apply'],
    filename: __filename,
  },
  async (
    _0x377fc9,
    _0x26d464,
    _0x5220d8,
    {
      from: _0x1781fa,
      l: _0x5bdf8b,
      quoted: _0x317ffa,
      prefix: _0x3cf938,
      body: _0xc06a5e,
      isCmd: _0x4a08da,
      command: _0x56f5b1,
      args: _0x4320c3,
      q: _0x148d38,
      isSudo: _0x590de6,
      isGroup: _0x55508e,
      sender: _0x5950ae,
      senderNumber: _0xf88e3f,
      botNumber2: _0x5666ae,
      botNumber: _0x1ca8f3,
      pushname: _0x22da7e,
      isMe: _0x4f60d1,
      isOwner: _0x2acdd4,
      groupMetadata: _0x3a356a,
      groupName: _0x19d399,
      participants: _0x16ba55,
      groupAdmins: _0x2c72b7,
      isBotAdmins: _0xf76770,
      isAdmins: _0x1bd75d,
      reply: _0x8d85fb,
    }
  ) => {
    try {
      if (!_0x4f60d1 && !_0x590de6) {
        return await _0x8d85fb('*OWNER COMMAND \u26D4*')
      }
      const _0x445a53 = _0x5220d8.quoted.msg
      if (!_0x5220d8) {
        return
      }
      let _0x75e9ea = _0x5220d8.quoted.msg
      const _0x571370 = [
          {
            buttonId: _0x3cf938 + 'alivemg ' + _0x75e9ea,
            buttonText: { displayText: 'Change alive massege \u23FA️' },
            type: 1,
          },
          {
            buttonId: _0x3cf938 + 'addfooter2 ' + _0x75e9ea,
            buttonText: { displayText: 'Change movie footer \u23FA️' },
            type: 1,
          },
          {
            buttonId: _0x3cf938 + 'setlogo ' + _0x75e9ea,
            buttonText: { displayText: 'Change logo \u23FA️' },
            type: 1,
          },
          {
            buttonId: _0x3cf938 + 'setprefix ' + _0x75e9ea,
            buttonText: { displayText: 'Change bot prefix  \u23FA️' },
            type: 1,
          },
          {
            buttonId: _0x3cf938 + 'resetdb',
            buttonText: { displayText: 'Reset all database  \uD83D\uDD01' },
            type: 1,
          },
        ],
        _0x19eb7d = {
          image: { url: config.LOGO },
          caption: '*\u2699NADEEN MD BOT SETTINGS \u2699*',
          footer: config.FOOTER,
          buttons: _0x571370,
          headerType: 1,
        }
      return await _0x377fc9.buttonMessage(_0x1781fa, _0x19eb7d, _0x26d464)
    } catch (_0x44811c) {
      _0x8d85fb(N_FOUND)
      _0x5bdf8b(_0x44811c)
    }
  }
)
cmd(
  {
    pattern: 'antilink',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3b1c95,
    _0x1c00de,
    _0x147632,
    {
      from: _0x546da7,
      l: _0xb638fa,
      quoted: _0x440533,
      body: _0x36dc4f,
      isCmd: _0x23a225,
      command: _0x25a458,
      args: _0x197a6c,
      q: _0x562c17,
      isGroup: _0x128307,
      isSudo: _0x5dcce0,
      sender: _0x2240ea,
      senderNumber: _0x310ca5,
      botNumber2: _0x336d0a,
      botNumber: _0x118ccc,
      pushname: _0x3cb264,
      isMe: _0x531f05,
      isOwner: _0x2ff0bb,
      groupMetadata: _0x2f7a39,
      groupName: _0x417694,
      participants: _0x43966a,
      groupAdmins: _0xd8a72,
      isBotAdmins: _0x1fb619,
      isAdmins: _0x312519,
      reply: _0x571559,
    }
  ) => {
    try {
      if (!_0x531f05 && !_0x5dcce0) {
        return await _0x571559('*OWNER COMMAND \u26D4*')
      }
      const _0x47e313 = async (_0x5b52d7) => {
        let _0x11a70a = await get(_0x5b52d7)
        for (let _0x38016a = 0; _0x38016a < _0x11a70a.length; _0x38016a++) {
          if (_0x11a70a[_0x38016a] === _0x546da7) {
            return true
          }
        }
        return false
      }
      if (_0x562c17 === 'on') {
        let _0xe89b31 = await get('ANTI_LINK')
        if (_0xe89b31 === true) {
          return _0x571559('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_LINK', true)
        await _0x571559('*ANTI_LINK \u279C true \u2705*')
      } else {
        let _0x1bace5 = await get('ANTI_LINK')
        if (_0x1bace5 === false) {
          return _0x571559('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_LINK', false)
        await _0x571559('*ANTI_LINK \u279C false \u274C*')
      }
    } catch (_0x51347e) {
      _0x571559('*Error !!*')
      _0xb638fa(_0x51347e)
    }
  }
)
cmd(
  {
    pattern: 'antdel',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x2ffecb,
    _0x1692b4,
    _0x2298e7,
    {
      from: _0x4494e2,
      l: _0x444d75,
      quoted: _0x38e334,
      body: _0x17b26c,
      isCmd: _0x5e6146,
      command: _0x469214,
      args: _0x2ce510,
      q: _0x5c046e,
      isGroup: _0x54ecd3,
      isSudo: _0x249fb0,
      sender: _0x1d9e63,
      senderNumber: _0x2ab21a,
      botNumber2: _0x166092,
      botNumber: _0x527f96,
      pushname: _0x80bd7e,
      isMe: _0x1b2122,
      isOwner: _0x63a9bb,
      groupMetadata: _0x13139f,
      groupName: _0x2e7440,
      participants: _0x1f7661,
      groupAdmins: _0x42283a,
      isBotAdmins: _0x499b5f,
      isAdmins: _0x49f372,
      reply: _0x329b3b,
    }
  ) => {
    try {
      if (!_0x1b2122 && !_0x249fb0) {
        return await _0x329b3b('*OWNER COMMAND \u26D4*')
      }
      const _0x157a34 = async (_0x5f7a73) => {
        let _0x441a52 = await get(_0x5f7a73)
        for (let _0x204da7 = 0; _0x204da7 < _0x441a52.length; _0x204da7++) {
          if (_0x441a52[_0x204da7] === _0x4494e2) {
            return true
          }
        }
        return false
      }
      if (_0x5c046e === 'on') {
        let _0x5cd0b6 = await get('ANTI_DELETE')
        if (_0x5cd0b6 === true) {
          return _0x329b3b('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_DELETE', true)
        await _0x329b3b('*ANTI_DELETE \u279C true \u2705*')
      } else {
        let _0x1ef6e3 = await get('ANTI_DELETE')
        if (_0x1ef6e3 === false) {
          return _0x329b3b('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_DELETE', false)
        await _0x329b3b('*ANTI_DELETE \u279C false \u274C*')
      }
    } catch (_0x6c9f33) {
      _0x329b3b('*Error !!*')
      _0x444d75(_0x6c9f33)
    }
  }
)
cmd(
  {
    pattern: 'chatbot',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x445d45,
    _0x432bbf,
    _0x429e3e,
    {
      from: _0x182783,
      l: _0x2f5818,
      quoted: _0x420a4c,
      body: _0x58df1f,
      isCmd: _0x590e99,
      command: _0x236c68,
      args: _0x536e20,
      q: _0x13952d,
      isGroup: _0x2bc625,
      isSudo: _0x1fca67,
      sender: _0xeab152,
      senderNumber: _0xb4601d,
      botNumber2: _0x4a2be8,
      botNumber: _0x41044e,
      pushname: _0x246de5,
      isMe: _0x20f18c,
      isOwner: _0x36a3f6,
      groupMetadata: _0xe96d71,
      groupName: _0x1b5dc4,
      participants: _0x125c86,
      groupAdmins: _0x46d862,
      isBotAdmins: _0x4c4abc,
      isAdmins: _0x4042aa,
      reply: _0x297d8f,
    }
  ) => {
    try {
      if (!_0x20f18c && !_0x1fca67) {
        return await _0x297d8f('*OWNER COMMAND \u26D4*')
      }
      const _0x1285cc = async (_0x28e642) => {
        let _0x1eba8b = await get(_0x28e642)
        for (let _0x566307 = 0; _0x566307 < _0x1eba8b.length; _0x566307++) {
          if (_0x1eba8b[_0x566307] === _0x182783) {
            return true
          }
        }
        return false
      }
      if (_0x13952d === 'on') {
        let _0x5e4d12 = await get('CHAT_BOT')
        if (_0x5e4d12 === true) {
          return _0x297d8f('*This settings all ready updated \u2611️*')
        }
        await input('CHAT_BOT', true)
        await _0x297d8f('*AI_CHAT \u279C true \u2705*')
      } else {
        let _0x1d4fbb = await get('CHAT_BOT')
        if (_0x1d4fbb === false) {
          return _0x297d8f('*This settings all ready updated \u2611️*')
        }
        await input('CHAT_BOT', false)
        await _0x297d8f('*AI_CHAT \u279C false \u274C*')
      }
    } catch (_0x1b51c7) {
      _0x297d8f('*Error !!*')
      _0x2f5818(_0x1b51c7)
    }
  }
)
cmd(
  {
    pattern: 'antibot',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x349757,
    _0x3ff0f6,
    _0x5a3711,
    {
      from: _0x1dd2f1,
      l: _0x8ce7b4,
      quoted: _0x51503c,
      body: _0x4eda21,
      isCmd: _0x23284d,
      command: _0x10e301,
      args: _0xb78c6c,
      q: _0x3ed332,
      isGroup: _0x3744a5,
      isSudo: _0x306c9a,
      sender: _0x42eddc,
      senderNumber: _0x2d9fb0,
      botNumber2: _0x4d2e74,
      botNumber: _0x21e2b3,
      pushname: _0x15329d,
      isMe: _0x34fc50,
      isOwner: _0x4b8d74,
      groupMetadata: _0x43d285,
      groupName: _0x348aa2,
      participants: _0x29e8d4,
      groupAdmins: _0x2b0bab,
      isBotAdmins: _0x5cdaa9,
      isAdmins: _0x593d40,
      reply: _0x21dffa,
    }
  ) => {
    try {
      if (!_0x34fc50 && !_0x306c9a) {
        return await _0x21dffa('*OWNER COMMAND \u26D4*')
      }
      const _0x4e300d = async (_0x11a937) => {
        let _0x37edf5 = await get(_0x11a937)
        for (let _0x4575a1 = 0; _0x4575a1 < _0x37edf5.length; _0x4575a1++) {
          if (_0x37edf5[_0x4575a1] === _0x1dd2f1) {
            return true
          }
        }
        return false
      }
      if (_0x3ed332 === 'on') {
        let _0x25d5d9 = await get('ANTI_BOT')
        if (_0x25d5d9 === true) {
          return _0x21dffa('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_BOT', true)
        await _0x21dffa('*\u2699 ANTI_BOT \u27A8* on')
      } else {
        let _0x450fc9 = await get('ANTI_BOT')
        if (_0x450fc9 === false) {
          return _0x21dffa('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_BOT', false)
        await _0x21dffa('*\u2699 ANTI_BOT \u27A8* off')
      }
    } catch (_0xff03bd) {
      _0x21dffa('*Error !!*')
      _0x8ce7b4(_0xff03bd)
    }
  }
)
cmd(
  {
    pattern: 'antibad',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x51cddb,
    _0x7c61fb,
    _0x56a7e2,
    {
      from: _0x4ee32f,
      l: _0x565454,
      quoted: _0x3e338a,
      body: _0x2c0d09,
      isCmd: _0x58625f,
      command: _0x4d7a02,
      args: _0x272d1f,
      q: _0x527728,
      isGroup: _0x4d19c3,
      isSudo: _0x4d8f7d,
      sender: _0x45f76f,
      senderNumber: _0x4f54b6,
      botNumber2: _0x57eaae,
      botNumber: _0x540a46,
      pushname: _0x2e19a1,
      isMe: _0x53e6c8,
      isOwner: _0xdbd287,
      groupMetadata: _0x519aaf,
      groupName: _0x22048b,
      participants: _0x26414d,
      groupAdmins: _0x29e82e,
      isBotAdmins: _0x523140,
      isAdmins: _0x212bdd,
      reply: _0x4a34a9,
    }
  ) => {
    try {
      if (!_0x53e6c8 && !_0x4d8f7d) {
        return await _0x4a34a9('*OWNER COMMAND \u26D4*')
      }
      const _0x11661b = async (_0x25679b) => {
        let _0x5146f4 = await get(_0x25679b)
        for (let _0x3f485f = 0; _0x3f485f < _0x5146f4.length; _0x3f485f++) {
          if (_0x5146f4[_0x3f485f] === _0x4ee32f) {
            return true
          }
        }
        return false
      }
      if (_0x527728 === 'on') {
        let _0xcff1dd = await get('ANTI_BAD')
        if (_0xcff1dd === true) {
          return _0x4a34a9('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_BAD', true)
        await _0x4a34a9('*\u2699 ANTI_BAD \u27A8* on')
      } else {
        let _0xd868b8 = await get('ANTI_BAD')
        if (_0xd868b8 === false) {
          return _0x4a34a9('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_BAD', false)
        await _0x4a34a9('*\u2699 ANTI_BAD \u27A8* off')
      }
    } catch (_0x2dc5df) {
      _0x4a34a9('*Error !!*')
      _0x565454(_0x2dc5df)
    }
  }
)
cmd(
  {
    pattern: 'onlygroup',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x492212,
    _0xefd573,
    _0x586694,
    {
      from: _0x43df3e,
      l: _0x59bafe,
      quoted: _0x30a1b8,
      body: _0x2490b5,
      isCmd: _0x45fd3d,
      command: _0x343bb7,
      args: _0x224744,
      q: _0x4d54f6,
      isGroup: _0x2d4319,
      isSudo: _0x1cd418,
      sender: _0x300b70,
      senderNumber: _0x4c3ba9,
      botNumber2: _0xbfff14,
      botNumber: _0x319bda,
      pushname: _0x361a5a,
      isMe: _0x551265,
      isOwner: _0x5a13dc,
      groupMetadata: _0x596319,
      groupName: _0x2136f7,
      participants: _0x28133c,
      groupAdmins: _0x3e6075,
      isBotAdmins: _0x2001ad,
      isAdmins: _0x3527fe,
      reply: _0x510630,
    }
  ) => {
    try {
      if (!_0x551265 && !_0x1cd418) {
        return await _0x510630('*OWNER COMMAND \u26D4*')
      }
      const _0x150ec8 = async (_0x8d91e9) => {
        let _0x26e719 = await get(_0x8d91e9)
        for (let _0x13efe2 = 0; _0x13efe2 < _0x26e719.length; _0x13efe2++) {
          if (_0x26e719[_0x13efe2] === _0x43df3e) {
            return true
          }
        }
        return false
      }
      if (_0x4d54f6 === 'on') {
        let _0x57f58d = await get('ONLY_GROUP')
        if (_0x57f58d === true) {
          return _0x510630('*This settings all ready updated \u2611️*')
        }
        await input('ONLY_GROUP', true)
        await _0x510630('*\u2699 ONLY_GROUP \u27A8* on')
      } else {
        let _0x2b5fe4 = await get('ONLY_GROUP')
        if (_0x2b5fe4 === false) {
          return _0x510630('*This settings all ready updated \u2611️*')
        }
        await input('ONLY_GROUP', false)
        await _0x510630('*\u2699 ONLY_GROUP \u27A8* off')
      }
    } catch (_0x411b69) {
      _0x510630('*Error !!*')
      _0x59bafe(_0x411b69)
    }
  }
)
cmd(
  {
    pattern: 'autoreact',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x738e7a,
    _0x2cd43b,
    _0x218e7a,
    {
      from: _0x5c64b4,
      l: _0xcde3a4,
      quoted: _0x593f94,
      body: _0x3fe627,
      isCmd: _0x541796,
      command: _0x1f6f31,
      args: _0x14102c,
      q: _0x4485d9,
      isSudo: _0x5e66b0,
      isGroup: _0x576254,
      sender: _0x2a9a4e,
      senderNumber: _0xbca529,
      botNumber2: _0x567020,
      botNumber: _0x1e2beb,
      pushname: _0x2d6906,
      isMe: _0x2ad83b,
      isOwner: _0x2e213b,
      groupMetadata: _0x59a3f6,
      groupName: _0xd06df0,
      participants: _0x5c80e4,
      groupAdmins: _0x42899e,
      isBotAdmins: _0xa932c0,
      isAdmins: _0x25b5be,
      reply: _0x5554a2,
    }
  ) => {
    try {
      if (!_0x2ad83b && !_0x5e66b0) {
        return await _0x5554a2('*OWNER COMMAND \u26D4*')
      }
      const _0x5f056c = async (_0x4c9dd6) => {
        let _0x45b86b = await get(_0x4c9dd6)
        for (let _0x3ec497 = 0; _0x3ec497 < _0x45b86b.length; _0x3ec497++) {
          if (_0x45b86b[_0x3ec497] === _0x5c64b4) {
            return true
          }
        }
        return false
      }
      if (_0x4485d9 === 'on') {
        let _0x2df8f2 = await get('AUTO_REACT')
        if (_0x2df8f2 === true) {
          return _0x5554a2('*This settings all ready updated \u2611️*')
        }
        await input('AUTO_REACT', true)
        await _0x5554a2('*\u2699 AUTO_REACT \u27A8* on')
      } else {
        let _0x295e47 = await get('AUTO_REACT')
        if (_0x295e47 === false) {
          return _0x5554a2('*This settings all ready updated \u2611️*')
        }
        await input('AUTO_REACT', false)
        await _0x5554a2('*\uD83D\uDC81‍\u2642️ AUTO_REACT \u27A8* off')
      }
    } catch (_0x413b43) {
      _0x5554a2('*Error !!*')
      _0xcde3a4(_0x413b43)
    }
  }
)
cmd(
  {
    pattern: 'pv',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x31fd9b,
    _0x1183c7,
    _0x550d9d,
    {
      from: _0x52e672,
      l: _0x27306f,
      quoted: _0xaa7b64,
      body: _0x47f0fe,
      isCmd: _0x33d877,
      command: _0x741cf9,
      args: _0x3653fd,
      q: _0x382431,
      isSudo: _0x3d4996,
      isGroup: _0x3179b4,
      sender: _0x5d959d,
      senderNumber: _0x2b8828,
      botNumber2: _0x2c8a8d,
      botNumber: _0x4f7ad6,
      pushname: _0x38c24f,
      isMe: _0x43c2a7,
      isOwner: _0xd756f,
      groupMetadata: _0x828ce2,
      groupName: _0x341930,
      participants: _0x5f3b0c,
      groupAdmins: _0x316df3,
      isBotAdmins: _0x20ed67,
      isAdmins: _0x2c8822,
      reply: _0x5043db,
    }
  ) => {
    try {
      if (!_0x43c2a7 && !_0x3d4996) {
        return await _0x5043db('*OWNER COMMAND \u26D4*')
      }
      const _0xda707e = async (_0x1f6ca1) => {
        let _0x402060 = await get(_0x1f6ca1)
        for (let _0x48de5c = 0; _0x48de5c < _0x402060.length; _0x48de5c++) {
          if (_0x402060[_0x48de5c] === _0x52e672) {
            return true
          }
        }
        return false
      }
      if (_0x382431 === 'on') {
        let _0x36af9f = await get('PRIVATE')
        if (_0x36af9f === true) {
          return _0x5043db('*This settings all ready updated \u2611️*')
        }
        await input('PRIVATE', true)
        await _0x5043db('*\u2699 MODE \u27A8* private')
      } else {
        let _0x5afd37 = await get('PRIVATE')
        if (_0x5afd37 === false) {
          return _0x5043db('*This settings all ready updated \u2611️*')
        }
        await input('PRIVATE', false)
        await _0x5043db('*\u2699 MODE \u27A8* public')
      }
    } catch (_0x216ade) {
      _0x5043db('*Error !!*')
      _0x27306f(_0x216ade)
    }
  }
)
cmd(
  {
    pattern: 'anticall',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x37596f,
    _0x30180e,
    _0x253344,
    {
      from: _0x1b69c7,
      l: _0xf63e01,
      quoted: _0x3ac5b4,
      body: _0x12683b,
      isCmd: _0x15ca00,
      command: _0x7689fa,
      args: _0x542b39,
      q: _0x49ea15,
      isGroup: _0x2fae3b,
      isSudo: _0x3a3c1d,
      sender: _0x44e15c,
      senderNumber: _0x4fa5f1,
      botNumber2: _0x379cc3,
      botNumber: _0x1ae802,
      pushname: _0x59a38d,
      isMe: _0x374998,
      isOwner: _0x5bc231,
      groupMetadata: _0x43cb83,
      groupName: _0x190783,
      participants: _0x551fef,
      groupAdmins: _0x54efd7,
      isBotAdmins: _0x2ada3f,
      isAdmins: _0x32d217,
      reply: _0x20f521,
    }
  ) => {
    try {
      if (!_0x374998 && !_0x3a3c1d) {
        return await _0x20f521('*OWNER COMMAND \u26D4*')
      }
      const _0x5130cc = async (_0x21af73) => {
        let _0xe3146b = await get(_0x21af73)
        for (let _0x43e66e = 0; _0x43e66e < _0xe3146b.length; _0x43e66e++) {
          if (_0xe3146b[_0x43e66e] === _0x1b69c7) {
            return true
          }
        }
        return false
      }
      if (_0x49ea15 === 'on') {
        let _0x40e37e = await get('ANTI_CALL')
        if (_0x40e37e === true) {
          return _0x20f521('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_CALL', true)
        await _0x20f521('*\u2699 ANTI_CALL \u27A8* on')
      } else {
        let _0x4d1ad9 = await get('ANTI_CALL')
        if (_0x4d1ad9 === false) {
          return _0x20f521('*This settings all ready updated \u2611️*')
        }
        await input('ANTI_CALL', false)
        await _0x20f521('*\u2699 ANTI_CALL \u27A8* off')
      }
    } catch (_0x39265e) {
      _0x20f521('*Error !!*')
      _0xf63e01(_0x39265e)
    }
  }
)
cmd(
  {
    pattern: 'autoblock',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x58dac4,
    _0x123817,
    _0x2739d4,
    {
      from: _0x3813d4,
      l: _0x1f8558,
      quoted: _0x14fa5c,
      body: _0x502cae,
      isCmd: _0x353c2e,
      command: _0x58e1b2,
      args: _0x31d635,
      q: _0x189f28,
      isGroup: _0x5f7de7,
      isSudo: _0x24aafb,
      sender: _0x4bdfe5,
      senderNumber: _0x4b3272,
      botNumber2: _0x415f68,
      botNumber: _0xe3712e,
      pushname: _0x2a220d,
      isMe: _0x3fc676,
      isOwner: _0x3053f4,
      groupMetadata: _0x55b04b,
      groupName: _0x49a46c,
      participants: _0xb512db,
      groupAdmins: _0x54fe88,
      isBotAdmins: _0x575a95,
      isAdmins: _0x2d5e1a,
      reply: _0xa54fda,
    }
  ) => {
    try {
      if (!_0x3fc676 && !_0x24aafb) {
        return await _0xa54fda('*OWNER COMMAND \u26D4*')
      }
      const _0x13f631 = async (_0x34b00b) => {
        let _0x41cc97 = await get(_0x34b00b)
        for (let _0x217279 = 0; _0x217279 < _0x41cc97.length; _0x217279++) {
          if (_0x41cc97[_0x217279] === _0x3813d4) {
            return true
          }
        }
        return false
      }
      if (_0x189f28 === 'on') {
        let _0x149e47 = await get('AUTO_BLOCK')
        if (_0x149e47 === true) {
          return _0xa54fda('*This settings all ready updated \u2611️*')
        }
        await input('AUTO_BLOCK', true)
        await _0xa54fda('*\uD83D\uDEE0 AUTO_BLOCK \u27A8* on')
      } else {
        let _0x3009c4 = await get('AUTO_BLOCK')
        if (_0x3009c4 === false) {
          return _0xa54fda('*This settings all ready updated \u2611️*')
        }
        await input('AUTO_BLOCK', false)
        await _0xa54fda('*\u2699 AUTO_BLOCK \u27A8* off')
      }
    } catch (_0x2d487b) {
      _0xa54fda('*Error !!*')
      _0x1f8558(_0x2d487b)
    }
  }
)
cmd(
  {
    pattern: 'autovoice',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x58dac4,
    _0x123817,
    _0x2739d4,
    {
      from: _0x3813d4,
      l: _0x1f8558,
      quoted: _0x14fa5c,
      body: _0x502cae,
      isCmd: _0x353c2e,
      command: _0x58e1b2,
      args: _0x31d635,
      q: _0x189f28,
      isGroup: _0x5f7de7,
      isSudo: _0x24aafb,
      sender: _0x4bdfe5,
      senderNumber: _0x4b3272,
      botNumber2: _0x415f68,
      botNumber: _0xe3712e,
      pushname: _0x2a220d,
      isMe: _0x3fc676,
      isOwner: _0x3053f4,
      groupMetadata: _0x55b04b,
      groupName: _0x49a46c,
      participants: _0xb512db,
      groupAdmins: _0x54fe88,
      isBotAdmins: _0x575a95,
      isAdmins: _0x2d5e1a,
      reply: _0xa54fda,
    }
  ) => {
    try {
      if (!_0x3fc676 && !_0x24aafb) {
        return await _0xa54fda('*OWNER COMMAND \u26D4*')
      }
      const _0x13f631 = async (_0x34b00b) => {
        let _0x41cc97 = await get(_0x34b00b)
        for (let _0x217279 = 0; _0x217279 < _0x41cc97.length; _0x217279++) {
          if (_0x41cc97[_0x217279] === _0x3813d4) {
            return true
          }
        }
        return false
      }
      if (_0x189f28 === 'on') {
        let _0x149e47 = await get('AUTO_VOICE')
        if (_0x149e47 === true) {
          return _0xa54fda('*This settings all ready updated \u2611️*')
        }
        await input('AUTO_VOICE', true)
        await _0xa54fda('*\uD83D\uDEE0 AUTO_VOICE \u27A8* on')
      } else {
        let _0x3009c4 = await get('AUTO_VOICE')
        if (_0x3009c4 === false) {
          return _0xa54fda('*This settings all ready updated \u2611️*')
        }
        await input('AUTO_VOICE', false)
        await _0xa54fda('*\u2699 AUTO_VOICE \u27A8* off')
      }
    } catch (_0x2d487b) {
      _0xa54fda('*Error !!*')
      _0x1f8558(_0x2d487b)
    }
  }
)
cmd(
  {
    pattern: 'lang',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4f358c,
    _0x41b4c4,
    _0x322603,
    {
      from: _0xa6ebdf,
      l: _0x4a678b,
      quoted: _0xdbdbc3,
      body: _0x484feb,
      isCmd: _0x451845,
      command: _0x421aae,
      args: _0x402b8d,
      q: _0xd4939b,
      isGroup: _0x1aeb1f,
      isSudo: _0x95b4b6,
      sender: _0x44eac4,
      senderNumber: _0x56d21d,
      botNumber2: _0x3b9a80,
      botNumber: _0x2ed2a1,
      pushname: _0x1669a3,
      isMe: _0x2f1c85,
      isOwner: _0x126123,
      groupMetadata: _0x39714e,
      groupName: _0x9664c4,
      participants: _0x4c6183,
      groupAdmins: _0x1f6b91,
      isBotAdmins: _0x47326c,
      isAdmins: _0x760281,
      reply: _0x43dd5d,
    }
  ) => {
    try {
      if (!_0x2f1c85 && !_0x95b4b6) {
        return await _0x43dd5d('*OWNER COMMAND \u26D4*')
      }
      let _0x3e6289 = await get('LANG')
      if (_0x3e6289 === _0xd4939b) {
        return _0x43dd5d('*This settings all ready updated \u2611️*')
      }
      await input('LANG', _0xd4939b)
      await _0x43dd5d('*Language updated: ' + _0xd4939b + '*')
    } catch (_0x1191c0) {
      _0x43dd5d('*Error !!*')
      _0x4a678b(_0x1191c0)
    }
  }
)
cmd(
  {
    pattern: 'uploadsz',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0xbb8062,
    _0x505921,
    _0x4bd7b2,
    {
      from: _0x1578e0,
      l: _0x5e3bd7,
      quoted: _0x271674,
      body: _0x54e5d2,
      isCmd: _0x3bb725,
      command: _0x3d3db5,
      args: _0x4306a4,
      q: _0x410cd7,
      isGroup: _0x2da4a4,
      isSudo: _0x574f54,
      sender: _0x5de36f,
      senderNumber: _0x36cdc5,
      botNumber2: _0x22980a,
      botNumber: _0xafbd12,
      pushname: _0x2ba40c,
      isMe: _0x41a989,
      isOwner: _0x44eb92,
      groupMetadata: _0x23d8c3,
      groupName: _0x391302,
      participants: _0x24110a,
      groupAdmins: _0x33d7d3,
      isBotAdmins: _0xdfc878,
      isAdmins: _0x327562,
      reply: _0x23ecfd,
    }
  ) => {
    try {
      if (!_0x41a989) {
        return await _0x23ecfd(BOTOW)
      }
      let _0xe74805 = await get('MAX_SIZE')
      if (_0xe74805 === Number(_0x410cd7)) {
        return await _0x23ecfd(alredy)
      }
      await input('MAX_SIZE', Number(_0x410cd7))
      await _0x23ecfd('*Max upload size updated: ' + _0x410cd7 + '*')
    } catch (_0x47462d) {
      _0x23ecfd('*Error !!*')
      _0x5e3bd7(_0x47462d)
    }
  }
)
cmd(
  {
    pattern: 'alivemg',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x26ddb4,
    _0x476c53,
    _0x155e72,
    {
      from: _0xf08ca5,
      l: _0x1aa505,
      quoted: _0x2b5671,
      body: _0x2a1312,
      isCmd: _0x4713ee,
      command: _0x42e14d,
      args: _0xe73803,
      q: _0x3f6128,
      isGroup: _0x510abe,
      isSudo: _0x44c21a,
      sender: _0x32ee7b,
      senderNumber: _0x4c6ba8,
      botNumber2: _0x3ba31b,
      botNumber: _0x151aae,
      pushname: _0x35fd44,
      isMe: _0x385af3,
      isOwner: _0x4e6f82,
      groupMetadata: _0x161eda,
      groupName: _0x4e7166,
      participants: _0x5a05cf,
      groupAdmins: _0x4ffe80,
      isBotAdmins: _0x557e67,
      isAdmins: _0x2c9b13,
      reply: _0x53e6c5,
    }
  ) => {
    try {
      if (!_0x385af3 && !_0x44c21a) {
        return await _0x53e6c5('*OWNER COMMAND \u26D4*')
      }
      let _0x149057 = await get('ALIVE')
      if (_0x149057 === _0x3f6128) {
        return _0x53e6c5('*This settings all ready updated \u2611️*')
      }
      await input('ALIVE', _0x3f6128)
      await _0x53e6c5('*Alive massage updated:* ' + _0x3f6128)
    } catch (_0x47833d) {
      _0x53e6c5('*Error !!*')
      _0x1aa505(_0x47833d)
    }
  }
)
cmd(
  {
    pattern: 'activate',
    category: 'movie',
    desc: 'Active to jid',
    filename: __filename,
  },
  async (
    _0x398a55,
    _0x5724c9,
    _0x28f4a1,
    {
      from: _0x2f78ed,
      l: _0x31da7e,
      quoted: _0x1d8eb9,
      body: _0x4aa08a,
      isCmd: _0xe2d146,
      command: _0x29cad1,
      args: _0x28a635,
      q: _0x16eabd,
      isGroup: _0x2b626a,
      isSudo: _0x5bc7a8,
      sender: _0x4cb035,
      senderNumber: _0x312cee,
      botNumber2: _0x44416d,
      botNumber: _0x150530,
      pushname: _0x2e2ec0,
      isMe: _0x29b789,
      isOwner: _0xee2ba4,
      groupMetadata: _0xc9296d,
      groupName: _0x1b3dfb,
      participants: _0x1831a4,
      groupAdmins: _0xfc68d9,
      isBotAdmins: _0x1d3136,
      isAdmins: _0x486ded,
      reply: _0xef0010,
    }
  ) => {
    try {
      if (!_0x16eabd || !_0x16eabd.includes('@')) {
        return (
          console.log('Invalid input:', _0x16eabd),
          await _0xef0010(
            '*\u2757 Invalid input example : .active 94711451319@s.whatsapp.net or .active 120xxxxxxxxxxxxxxx@g.us*'
          )
        )
      }
      if (!_0x29b789 && !_0x5bc7a8) {
        return await _0xef0010('*OWNER COMMAND \u26D4*')
      }
      let _0x1473d4 = await get('JID')
      if (_0x1473d4 === _0x16eabd) {
        return _0xef0010('*This settings all ready updated \u2611️*')
      }
      await input('JID', _0x16eabd)
      await _0xef0010('*Activated this jid : ' + _0x16eabd + ' \uD83D\uDFE2*')
    } catch (_0xe40570) {
      _0xef0010('*Error !!*')
      _0x31da7e(_0xe40570)
    }
  }
)
cmd(
  {
    pattern: 'setmvfooter',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x1e50b1,
    _0x34298f,
    _0x43a2aa,
    {
      from: _0x21d882,
      l: _0x3f1586,
      quoted: _0x5a27a5,
      body: _0x2495f2,
      isCmd: _0x2eae0b,
      command: _0x18d496,
      args: _0x53734d,
      q: _0x35704a,
      isGroup: _0x1aeff6,
      isSudo: _0x53f9e0,
      sender: _0x976431,
      senderNumber: _0x2d1691,
      botNumber2: _0x3fafa2,
      botNumber: _0x308fff,
      pushname: _0x50759a,
      isMe: _0x56207d,
      isOwner: _0x210d0a,
      groupMetadata: _0x4e4bee,
      groupName: _0x37bddf,
      participants: _0x451318,
      groupAdmins: _0x55975a,
      isBotAdmins: _0x2370cd,
      isAdmins: _0x477322,
      reply: _0x5b46b7,
    }
  ) => {
    try {
      if (!_0x56207d && !_0x53f9e0) {
        return await _0x5b46b7('*OWNER COMMAND \u26D4*')
      }
      let _0xa09434 = await get('NAME')
      if (_0xa09434 === _0x35704a) {
        return _0x5b46b7('*This settings all ready updated \u2611️*')
      }
      await input('NAME', _0x35704a)
      await _0x5b46b7('*MOVIE FOOTER SET : ' + _0x35704a + ' \uD83D\uDFE2*')
    } catch (_0x4d93dc) {
      _0x5b46b7('*Error !!*')
      _0x3f1586(_0x4d93dc)
    }
  }
)
cmd(
  {
    pattern: 'setnadeenbotowner',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x25eb10,
    _0x3a7811,
    _0x3f109e,
    {
      from: _0x5ec6d4,
      l: _0x5ea8de,
      quoted: _0x6e5c78,
      body: _0xf5d65b,
      isCmd: _0x17d26c,
      command: _0x361c9b,
      args: _0x21c51a,
      q: _0x4bf48a,
      isSudo: _0x13af8c,
      isGroup: _0xaabea0,
      sender: _0x129881,
      senderNumber: _0x18c6d2,
      botNumber2: _0x5f59de,
      botNumber: _0x4507e3,
      pushname: _0x1777e5,
      isMe: _0x3ebc5f,
      isOwner: _0x4204ef,
      groupMetadata: _0x246fbe,
      groupName: _0x57fec0,
      participants: _0x105a41,
      groupAdmins: _0x24f98b,
      isBotAdmins: _0x5c75d2,
      isAdmins: _0x446076,
      reply: _0x443be0,
    }
  ) => {
    try {
      if (!_0x3ebc5f && !_0x13af8c) {
        return await _0x443be0('*OWNER COMMAND \u26D4*')
      }
      let _0x4d9c50 = await get('OWNER_NUMBER')
      if (_0x4d9c50 === _0x4bf48a) {
        return
      }
      await input('OWNER_NUMBER', _0x4bf48a)
      await _0x443be0('*OWNER_NUMBER:* ' + _0x4bf48a)
    } catch (_0x425f3d) {
      _0x443be0('*Error !!*')
      _0x5ea8de(_0x425f3d)
    }
  }
)
cmd(
  {
    pattern: 'addemail',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x23e78b,
    _0x3c2eb4,
    _0x5140c0,
    {
      from: _0x155c63,
      l: _0x577f63,
      quoted: _0x27ae80,
      body: _0x3a337e,
      isCmd: _0x44fe03,
      command: _0x48a176,
      args: _0xe16340,
      q: _0x338cdd,
      isSudo: _0x58609c,
      isGroup: _0x49ba92,
      sender: _0x115033,
      senderNumber: _0x1fffca,
      botNumber2: _0x372e46,
      botNumber: _0x38439c,
      pushname: _0x5dcebe,
      isMe: _0x5753cb,
      isOwner: _0x15d658,
      groupMetadata: _0xcafecd,
      groupName: _0x958d14,
      participants: _0x3db992,
      groupAdmins: _0x35be6c,
      isBotAdmins: _0x499951,
      isAdmins: _0x123f92,
      reply: _0x5b1280,
    }
  ) => {
    try {
      if (!_0x5753cb && !_0x58609c) {
        return await _0x5b1280('*OWNER COMMAND \u26D4*')
      }
      let _0x7cfa33 = await get('SEEDR_MAIL')
      if (_0x7cfa33 === _0x338cdd) {
        return
      }
      await input('SEEDR_MAIL', _0x338cdd)
      await _0x5b1280('*Seedr account mail added sucssess full\u2705*')
    } catch (_0x2af9f5) {
      _0x5b1280('*Error !!*')
      _0x577f63(_0x2af9f5)
    }
  }
)
cmd(
  {
    pattern: 'addpassword',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4aec7e,
    _0x5478f0,
    _0x38d80c,
    {
      from: _0x1017fc,
      l: _0x377de2,
      quoted: _0x1290f8,
      body: _0x5610e3,
      isCmd: _0x59dcac,
      command: _0x295c2f,
      args: _0x39ab7d,
      q: _0x3ae3b7,
      isSudo: _0x4d923a,
      isGroup: _0x262b68,
      sender: _0x21412b,
      senderNumber: _0x31dd87,
      botNumber2: _0x292539,
      botNumber: _0x2b84fc,
      pushname: _0x4648b3,
      isMe: _0x9d7ca6,
      isOwner: _0x2e5432,
      groupMetadata: _0x2bf4a5,
      groupName: _0x34def6,
      participants: _0x57374f,
      groupAdmins: _0x46faff,
      isBotAdmins: _0x16eb11,
      isAdmins: _0x38a553,
      reply: _0x37b92a,
    }
  ) => {
    try {
      if (!_0x9d7ca6 && !_0x4d923a) {
        return await _0x37b92a('*OWNER COMMAND \u26D4*')
      }
      let _0x455db3 = await get('SEEDR_PASSWORD')
      if (_0x455db3 === _0x3ae3b7) {
        return
      }
      await input('SEEDR_PASSWORD', _0x3ae3b7)
      await _0x37b92a('*Seedr account password added sucssess full\u2705*')
    } catch (_0x180375) {
      _0x37b92a('*Error !!*')
      _0x377de2(_0x180375)
    }
  }
)
cmd(
  {
    pattern: 'setsudo',
    react: '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDD27',
    alias: ['set', 'addsudo'],
    desc: 'Set moderator.',
    category: 'owner',
    use: '.setsudo',
    filename: __filename,
  },
  async (
    _0x255b79,
    _0x13715e,
    _0x461b63,
    {
      from: _0x58fb63,
      l: _0x1bef59,
      quoted: _0x372447,
      body: _0x438926,
      isCmd: _0x55e3d7,
      command: _0xf3a10c,
      args: _0x3b34d9,
      q: _0x25d6c4,
      msr: _0x26ebd0,
      creator: _0x31b8af,
      isGroup: _0x2e8f24,
      sender: _0x267cfe,
      senderNumber: _0x23e478,
      botNumber2: _0x1743a0,
      botNumber: _0x47c30a,
      pushname: _0x5b70dc,
      isMe: _0x28492a,
      isOwner: _0x8ebb2c,
      groupMetadata: _0x26f0f7,
      isDev: _0x535048,
      groupName: _0x397320,
      participants: _0x1f8faa,
      groupAdmins: _0x21cf89,
      isBotAdmins: _0x4018af,
      isAdmins: _0x186aae,
      reply: _0x4b2bd9,
    }
  ) => {
    try {
      if (!_0x28492a) {
        return await _0x4b2bd9('*OWNER COMMAND \u26D4*')
      }
      const _0x262df6 = _0x461b63.mentionUser[0]
      if (!_0x262df6) {
        return
      }
      const _0x1b5b3f = async (_0x4dc2cb) => {
        let _0x191b43 = await get(_0x4dc2cb)
        for (let _0xfce5fa = 0; _0xfce5fa < _0x191b43.length; _0xfce5fa++) {
          if (_0x191b43[_0xfce5fa] === _0x262df6) {
            return true
          }
        }
        return false
      }
      if (await _0x1b5b3f('SUDO')) {
        return
      }
      let _0x327f05 = await get('SUDO')
      _0x327f05.push(_0x262df6)
      await input('SUDO', _0x327f05)
      await _0x4b2bd9('*Successful added Moderater list \u2705*')
      await _0x255b79.sendMessage(_0x58fb63, {
        react: {
          text: '\u2714',
          key: _0x13715e.key,
        },
      })
    } catch (_0x2d3cf9) {
      await _0x255b79.sendMessage(_0x58fb63, {
        react: {
          text: '\u274C',
          key: _0x13715e.key,
        },
      })
      console.log(_0x2d3cf9)
      _0x4b2bd9('\u274C *Error Accurated !!*\n\n' + _0x2d3cf9)
    }
  }
)
cmd(
  {
    pattern: 'nadeenlogoset',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x5040fa,
    _0x40ac13,
    _0x3e54f9,
    {
      from: _0x2b04cb,
      l: _0x53b388,
      quoted: _0x1ad439,
      body: _0x441ded,
      isCmd: _0x1fca6b,
      command: _0x4a308f,
      args: _0x255f0e,
      isSudo: _0x1011b4,
      q: _0x40b36f,
      isGroup: _0x287f03,
      sender: _0x27cc93,
      senderNumber: _0x2c52c4,
      botNumber2: _0x5d19c2,
      botNumber: _0xfbe4a5,
      pushname: _0x5cbb2f,
      isMe: _0x303675,
      isOwner: _0x11693f,
      groupMetadata: _0x4f2468,
      groupName: _0x455b46,
      participants: _0x54fe8b,
      groupAdmins: _0x228309,
      isBotAdmins: _0x426509,
      isAdmins: _0x42a474,
      reply: _0x2e0f05,
    }
  ) => {
    try {
      if (!_0x303675 && !_0x1011b4) {
        return await _0x2e0f05('*OWNER COMMAND \u26D4*')
      }
      let _0x35c525 = await get('LOGO')
      if (_0x35c525 === _0x40b36f) {
        return
      }
      await input('LOGO', _0x40b36f)
      await _0x2e0f05('*Logo updated: ' + _0x40b36f + '*')
    } catch (_0x5682d6) {
      _0x2e0f05('*Error !!*')
      _0x53b388(_0x5682d6)
    }
  }
)
var needus = ''
if (config.LANG === 'SI') {
  needus = 'එය දත්ත සමුදාය නැවත සකසයි.'
} else {
  needus = 'It resets database.'
}
cmd(
  {
    pattern: 'resetdb',
    desc: needus,
    category: 'owner',
    use: '.resetdb',
    filename: __filename,
  },
  async (
    _0x269229,
    _0x19e8a6,
    _0x2788fc,
    {
      from: _0x341c43,
      l: _0x482ca5,
      quoted: _0x650040,
      body: _0x4d5d85,
      isCmd: _0x200c69,
      command: _0x2b4de8,
      isSudo: _0x494f90,
      args: _0x5a982c,
      q: _0x37913a,
      isGroup: _0x127ec7,
      sender: _0xc06f23,
      senderNumber: _0x3e47c9,
      botNumber2: _0x481b51,
      botNumber: _0x3331d4,
      pushname: _0x11dd9c,
      isMe: _0x1aa94f,
      isOwner: _0x10f2a6,
      groupMetadata: _0x37209a,
      groupName: _0x2c9889,
      participants: _0x5e47a8,
      groupAdmins: _0x19350b,
      isBotAdmins: _0x3a9035,
      isAdmins: _0x43eb0d,
      reply: _0x21ad5b,
    }
  ) => {
    try {
      if (!_0x1aa94f) {
        return
      }
      return await updfb(), _0x21ad5b('*Database reseted \u2705*')
    } catch (_0x5273fb) {
      _0x21ad5b(cantf)
      _0x482ca5(_0x5273fb)
    }
  }
)
cmd(
  {
    pattern: 'autotyping',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0xb11d0f,
    _0xaea5a1,
    _0x4ed06c,
    {
      from: _0x5af3d8,
      l: _0x1b0d8a,
      quoted: _0x1e78a9,
      body: _0x592044,
      isCmd: _0x53aa46,
      command: _0x4f1269,
      args: _0x315ccd,
      q: _0x213afb,
      isSudo: _0xbb96af,
      isGroup: _0x3e5610,
      sender: _0x52958e,
      senderNumber: _0x5bccfa,
      botNumber2: _0x1d92ad,
      botNumber: _0x5d90bb,
      pushname: _0x206b1c,
      isMe: _0x12f591,
      isOwner: _0x3365b3,
      groupMetadata: _0x69b48c,
      groupName: _0x5cd368,
      participants: _0x267cfd,
      groupAdmins: _0x3e8d02,
      isBotAdmins: _0x351063,
      isAdmins: _0x375616,
      reply: _0x52e93e,
    }
  ) => {
    try {
      if (!_0x12f591 && !_0xbb96af) {
        return await _0x52e93e('*OWNER COMMAND \u26D4*')
      }
      const _0x235745 = async (_0x3d7b78) => {
        let _0x49e5f9 = await get(_0x3d7b78)
        for (let _0xef9d2d = 0; _0xef9d2d < _0x49e5f9.length; _0xef9d2d++) {
          if (_0x49e5f9[_0xef9d2d] === _0x5af3d8) {
            return true
          }
        }
        return false
      }
      if (_0x213afb === 'on') {
        let _0x2693be = await get('AUTO_TYPING')
        if (_0x2693be === true) {
          return
        }
        await input('AUTO_TYPING', true)
        await _0x52e93e('*AUTO_TYPING updated: ' + _0x213afb + '*')
      } else {
        let _0x5afd2f = await get('AUTO_TYPING')
        if (_0x5afd2f === false) {
          return
        }
        await input('AUTO_TYPING', false)
        await _0x52e93e('*AUTO_TYPING updated: ' + _0x213afb + '*')
      }
    } catch (_0x296acc) {
      _0x52e93e('*Error !!*')
      _0x1b0d8a(_0x296acc)
    }
  }
)
cmd(
  {
    pattern: 'autorec',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x28099f,
    _0x3fe743,
    _0x1ef286,
    {
      from: _0x10cfe6,
      l: _0x3b19b5,
      quoted: _0x24a1de,
      body: _0x511b78,
      isCmd: _0x2c2f1d,
      command: _0x183a1a,
      args: _0x316fa4,
      isSudo: _0x2a7115,
      q: _0x163fc0,
      isGroup: _0x26e14c,
      sender: _0x2d17a6,
      senderNumber: _0x160ffc,
      botNumber2: _0x34df46,
      botNumber: _0x229cb8,
      pushname: _0x34f5e8,
      isMe: _0x612ab9,
      isOwner: _0x29a728,
      groupMetadata: _0x27bb89,
      groupName: _0x2ff6e5,
      participants: _0x4fa35c,
      groupAdmins: _0x36e224,
      isBotAdmins: _0xeb0204,
      isAdmins: _0x36ca2a,
      reply: _0x25d295,
    }
  ) => {
    try {
      if (!_0x612ab9 && !_0x2a7115) {
        return await _0x25d295('*OWNER COMMAND \u26D4*')
      }
      const _0x4e904d = async (_0x56238f) => {
        let _0x26ed62 = await get(_0x56238f)
        for (let _0x35810e = 0; _0x35810e < _0x26ed62.length; _0x35810e++) {
          if (_0x26ed62[_0x35810e] === _0x10cfe6) {
            return true
          }
        }
        return false
      }
      if (_0x163fc0 === 'on') {
        let _0x4cedcc = await get('AUTO_RECORDING')
        if (_0x4cedcc === true) {
          return
        }
        await input('AUTO_RECORDING', true)
        await _0x25d295('*\u2699 AUTO_RECORDING \u27A8* on')
      } else {
        let _0x15e738 = await get('AUTO_RECORDING')
        if (_0x15e738 === false) {
          return
        }
        await input('AUTO_RECORDING', false)
        await _0x25d295('*\uD83D\uDEE0 AUTO_RECORDING \u27A8* off')
      }
    } catch (_0x1a7340) {
      _0x25d295('*Error !!*')
      _0x3b19b5(_0x1a7340)
    }
  }
)
cmd(
  {
    pattern: 'autos',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4b10c6,
    _0x3f49ca,
    _0x1fb5c3,
    {
      from: _0x4ac83d,
      l: _0x52c5c1,
      quoted: _0x120f14,
      body: _0x37f2c5,
      isCmd: _0x2e057a,
      command: _0x5b62ea,
      isSudo: _0x2a2c78,
      args: _0x427a5b,
      q: _0x467421,
      isGroup: _0x3ad029,
      sender: _0x1c7299,
      senderNumber: _0x4c3b15,
      botNumber2: _0x369424,
      botNumber: _0x2935fc,
      pushname: _0x35b638,
      isMe: _0x3b9d73,
      isOwner: _0x3bf5de,
      groupMetadata: _0x24f9e5,
      groupName: _0x260474,
      participants: _0x57ade5,
      groupAdmins: _0x46fa3b,
      isBotAdmins: _0x30a56a,
      isAdmins: _0x1a9ac0,
      reply: _0x3c79c4,
    }
  ) => {
    try {
      if (!_0x3b9d73 && !_0x2a2c78) {
        return await _0x3c79c4('*OWNER COMMAND \u26D4*')
      }
      const _0x5e92c9 = async (_0x3b2e5c) => {
        let _0x1491cc = await get(_0x3b2e5c)
        for (let _0x36813b = 0; _0x36813b < _0x1491cc.length; _0x36813b++) {
          if (_0x1491cc[_0x36813b] === _0x4ac83d) {
            return true
          }
        }
        return false
      }
      if (_0x467421 === 'on') {
        let _0x50b9ed = await get('AUTO_READ_STATUS')
        if (_0x50b9ed === true) {
          return
        }
        await input('AUTO_READ_STATUS', true)
        await _0x3c79c4('*\u2699 AUTO_READ_STATUS \u27A8* on')
      } else {
        let _0x45bdb8 = await get('STATUS_VIEW')
        if (_0x45bdb8 === false) {
          return
        }
        await input('AUTO_READ_STATUS', false)
        await _0x3c79c4('*\u2699 AUTO_READ_STATUS \u27A8* off')
      }
    } catch (_0x85a921) {
      _0x3c79c4('*Error !!*')
      _0x52c5c1(_0x85a921)
    }
  }
)
cmd(
  {
    pattern: 'setprefix',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x54164e,
    _0x275682,
    _0x543aab,
    {
      from: _0x2714ce,
      l: _0xf18c02,
      quoted: _0x32d1cf,
      body: _0x104537,
      isCmd: _0x28081e,
      command: _0x3860ef,
      args: _0xb2a124,
      q: _0x399ef4,
      isSudo: _0x7cc17c,
      isGroup: _0x1b26cc,
      sender: _0x103dbf,
      senderNumber: _0x1038f3,
      botNumber2: _0x3770bc,
      botNumber: _0x5e4f75,
      pushname: _0x523192,
      isMe: _0x224a99,
      isOwner: _0xc94c03,
      groupMetadata: _0x38abe1,
      groupName: _0x4c27d6,
      participants: _0x78cafb,
      groupAdmins: _0x499e94,
      isBotAdmins: _0x42eddb,
      isAdmins: _0x268daf,
      reply: _0x576463,
    }
  ) => {
    try {
      if (!_0x224a99 && !_0x7cc17c) {
        return await _0x576463('*OWNER COMMAND \u26D4*')
      }
      let _0x432d5e = await get('PREFIX')
      if (_0x432d5e === _0x399ef4) {
        return
      }
      await input('PREFIX', _0x399ef4)
      await _0x576463('*PREFIX UPDATED*')
    } catch (_0x2c5874) {
      _0x576463('*Error !!*')
      _0xf18c02(_0x2c5874)
    }
  }
)
cmd(
  {
    pattern: 'autoread',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x1dbfba,
    _0xdd7f4e,
    _0x10c3e6,
    {
      from: _0x124331,
      l: _0x33240d,
      quoted: _0x1d4ed3,
      body: _0x412352,
      isCmd: _0x3961d0,
      isSudo: _0x41dead,
      command: _0x3f2996,
      args: _0x5d863c,
      q: _0x2c1d92,
      isGroup: _0xfbef9f,
      sender: _0x54793a,
      senderNumber: _0x5a872a,
      botNumber2: _0x1b2e7,
      botNumber: _0x4be2df,
      pushname: _0x4e104c,
      isMe: _0x36d340,
      isOwner: _0x1c70ea,
      groupMetadata: _0x19964f,
      groupName: _0x614345,
      participants: _0x3ce9d9,
      groupAdmins: _0x40baab,
      isBotAdmins: _0x4dd3ab,
      isAdmins: _0x140bd8,
      reply: _0x29c333,
    }
  ) => {
    try {
      if (!_0x36d340 && !_0x41dead) {
        return await _0x29c333('*OWNER COMMAND \u26D4*')
      }
      const _0x19a7fa = async (_0x165dff) => {
        let _0x256231 = await get(_0x165dff)
        for (let _0x2c76ba = 0; _0x2c76ba < _0x256231.length; _0x2c76ba++) {
          if (_0x256231[_0x2c76ba] === _0x124331) {
            return true
          }
        }
        return false
      }
      if (_0x2c1d92 === 'on') {
        let _0x3eed2f = await get('AUTO_MSG_READ')
        if (_0x3eed2f === true) {
          return
        }
        await input('AUTO_MSG_READ', true)
        await _0x29c333('*AUTO_MSG_READ updated: ' + _0x2c1d92 + '*')
      } else {
        let _0x2746ff = await get('AUTO_MSG_READ')
        if (_0x2746ff === false) {
          return
        }
        await input('AUTO_MSG_READ', false)
        await _0x29c333('*AUTO_MSG_READ updated: ' + _0x2c1d92 + '*')
      }
    } catch (_0x494f82) {
      _0x29c333('*Error !!*')
      _0x33240d(_0x494f82)
    }
  }
)
//============================================================================================================
cmd({
    pattern: "autosreact",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, isSudo, isMe, reply}) => {
  try {
    if (!isMe && !isSudo) return await reply('*OWNER COMMAND ⛔*') 

    if (!q) return reply("*Use: .autosreact on / off*")

    if (q.toLowerCase() === "on") {
      let gett = await get("AUTO_STATUS_REACT")
      if (gett === true || gett === "true") return reply("*AUTO_STATUS_REACT already ON ☑️*")
      await input("AUTO_STATUS_REACT", "true")
      await reply("*AUTO_STATUS_REACT ➜ true ✅*")
    } 
    else if (q.toLowerCase() === "off") {
      let gett = await get("AUTO_STATUS_REACT")
      if (gett === false || gett === "false") return reply("*AUTO_STATUS_REACT already OFF ☑️*")
      await input("AUTO_STATUS_REACT", "false")
      await reply("*AUTO_STATUS_REACT ➜ false ❌*")
    } 
    else {
      reply("*Invalid option ⚠️*\nUse: .autosreact on / off")
    }

  } catch (e) {
    reply('*Error !!*')
    l(e)
  }
})

cmd(
  {
    pattern: 'ronly',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x574887,
    _0x4c5402,
    _0x3bb1d4,
    {
      from: _0x24b0d6,
      l: _0x49eb0a,
      quoted: _0x1eed37,
      body: _0x38f038,
      isCmd: _0x152efd,
      isSudo: _0xc3b9e9,
      command: _0x30de85,
      args: _0x15830a,
      q: _0xbf1eba,
      isGroup: _0x333980,
      sender: _0x55b804,
      senderNumber: _0xbb4a6a,
      botNumber2: _0x31abc9,
      botNumber: _0x2dff70,
      pushname: _0x4d4a57,
      isMe: _0x307647,
      isOwner: _0x5d6f78,
      groupMetadata: _0x597e05,
      groupName: _0x13477e,
      participants: _0x496045,
      groupAdmins: _0x368b11,
      isBotAdmins: _0x1b491f,
      isAdmins: _0x610e33,
      reply: _0x21f370,
    }
  ) => {
    try {
      if (!_0x307647 && !_0xc3b9e9) {
        return await _0x21f370('*OWNER COMMAND \u26D4*')
      }
      const _0x95e9ab = async (_0x4a6714) => {
        let _0x1cc265 = await get(_0x4a6714)
        for (let _0x19930d = 0; _0x19930d < _0x1cc265.length; _0x19930d++) {
          if (_0x1cc265[_0x19930d] === _0x24b0d6) {
            return true
          }
        }
        return false
      }
      if (_0xbf1eba === 'on') {
        let _0x430f86 = await get('CMD_ONLY_READ')
        if (_0x430f86 === true) {
          return
        }
        await input('CMD_ONLY_READ', true)
        await _0x21f370('*CMD_ONLY_READ updated: ' + _0xbf1eba + '*')
      } else {
        let _0x4e4980 = await get('CMD_ONLY_READ')
        if (_0x4e4980 === false) {
          return
        }
        await input('CMD_ONLY_READ', false)
        await _0x21f370('*CMD_ONLY_READ updated: ' + _0xbf1eba + '*')
      }
    } catch (_0x41498d) {
      _0x21f370('*Error !!*')
      _0x49eb0a(_0x41498d)
    }
  }
)
