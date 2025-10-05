

const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

const apilink = 'https://saviya-kolla-api.koyeb.app'; 

cmd({
    pattern: "tiktokserarch",
    alias: ["ttfind", "ttstalk"],
    react: "🔎",
    desc: "search tiktok",
    category: "search",
    use: '.ttfind <search query>',
    filename: __filename
},
  async (
    _0x36165a,
    _0x22a97c,
    _0x47b163,
    {
      from: _0x88f754,
      q: _0x14f81d,
      isSudo: _0x1a470e,
      isOwner: _0x2a34ff,
      prefix: _0x9050cc,
      isMe: _0x23a924,
      reply: _0x14ab10,
    }
  ) => {
    try {
      if (!_0x14f81d) {
        return _0x14ab10('\uD83D\uDEA9 *Please give me words to search*')
      }
     const tt_list = await fetchJson(`${apilink}/search/tiktok?text=${q}`);
      var _0x1f4cfe = []
      for (var results = 0; results < tt_list.length; results++) {
        _0x1f4cfe.push({
          title: tt_list[results].title,
          description: '',
          rowId: _0x9050cc + ('tiktok ' + tt_list[results].tiktok_link + '}'),
        })
      }
      const _0x1e0903 = [
          {
            title: '[tiktok.com results]',
            rows: _0x1f4cfe,
          },
        ],
        _0x1605ff = {
          text:
            '*_TIKTOK SEARCH RESULT \uD83D\uDD1E_*\n\n*`Input :`* ' +
            _0x14f81d,
          footer: config.FOOTER,
          title: 'tiktok.com results',
          buttonText: '*Reply Below Number 🔢*',
          sections: _0x1e0903,
        }
      await _0x36165a.listMessage(_0x88f754, _0x1605ff, _0x47b163)
    } catch (_0x2388ff) {
      console.log(_0x2388ff)
      await _0x36165a.sendMessage(
        _0x88f754,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x47b163 }
      )
    }
  }
)