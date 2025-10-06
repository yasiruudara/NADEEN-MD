const mongoose = require('mongoose'),
  fs = require('fs'),
  path = require('path'),
  config = require('../config'),
  databaseFolder = path.join(__dirname, 'database')
!fs.existsSync(databaseFolder) && fs.mkdirSync(databaseFolder)
const settingsSchema = new mongoose.Schema({
    OWNER_NUMBER: {
      type: String,
      default: '94768779080',
    },
     MV_SIZE: {
      type: String,
      default: '0',
    },
    FOOTER: {
      type: String,
      default: '> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
    },
    NAME: {
      type: String,
      default: '`★━━━━━━━━✩━━━━━━━━★`',
    },
    DINKA: {
      type: String,
      default: '120363384619885132@g.us',
    },

    JID: {
      type: String,
      default: '120363402402511977@g.us',
    },
    
    JID2: {
      type: String,
      default: '120363417761919031@g.us',
    },
    SEEDR_MAIL: {
      type: String,
      default: 'nadeenpoornanew@gmail.com',
    },
    SEEDR_PASSWORD: {
      type: String,
      default: 'Nadeen@1234',
    },
    SUDO: {
      type: [String],
      default: [],
    },
    JID_BLOCK: {
      type: [String],
      default: [],
    },
    ANTI_BAD: {
      type: [String],
      default: [],
    },
    MAX_SIZE: {
      type: Number,
      default: 200,
    },
  AUTO_STATUS_REACT: { type: String, default: "true" },
    ANTI_CALL: {
      type: String,
      default: 'false',
    },
    AUTO_READ_STATUS: {
      type: String,
      default: 'false',
    },
    AUTO_BLOCK: {
      type: String,
      default: 'false',
    },
    AUTO_STICKER: {
      type: String,
      default: 'false',
    },
    AUTO_VOICE: {
      type: String,
      default: 'true',
    },
    AUTO_REACT: {
      type: String,
      default: 'false',
    },
    CMD_ONLY_READ: {
      type: String,
      default: 'true',
    },
    WORK_TYPE: {
      type: String,
      default: 'private',
    },
    PRESENCE: {
      type: String,
      default: 'false',
    },
    AUTO_MSG_READ: {
      type: String,
      default: 'false',
    },
    ALLWAYS_OFFLINE: {
      type: String,
      default: 'false',
    },
    AUTO_WELCOME_LEAVE: {
      type: [String],
      default: [],
    },
    ANTI_LINK: {
      type: [String],
      default: [],
    },
    ANTI_BOT: {
      type: [String],
      default: [],
    },
    ALIVE: {
      type: String,
      default: 'default',
    },
    PREFIX: {
      type: String,
      default: '.',
    },
    CHAT_BOT: {
      type: String,
      default: 'false',
    },
    BUTTON: {
      type: String,
      default: 'false',
    },
    LOGO: {
      type: String,
      default: 'https://files.catbox.moe/3mvn78.png',
    },
    ANTI_DELETE: {
      type: String,
      default: 'off',
    },
    WELCOME_MSG: {
      type: String,
      default: '',
    },
    LEAVE_MSG: {
      type: String,
      default: '',
    },
  }),
  Settings = mongoose.model(config.SESSION_ID, settingsSchema)
async function connectdb() {
  try {
    await mongoose.connect(
      'mongodb+srv://cPBRXUcJ:CXVuN4Mzp14KZybC@us-east-1.ufsuw.mongodb.net/newpvmd',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log(' 🕹 Database connected ✅️')
    const _0x15d280 = await Settings.countDocuments()
    _0x15d280 === 0 && (await initializeSettings())
  } catch (_0x1ff049) {
    console.error(' \u251C Database connection error:', _0x1ff049)
  }
}
async function initializeSettings() {
  const _0x26a198 = new Settings()
  await _0x26a198.save()
  console.log(' \u251C Settings initialized ✅')
}
async function updateCMDStore(_0x3be154, _0xedbbe0) {
  try {
    const _0x27b200 = path.join(databaseFolder, 'data.json'),
      _0x2e56f7 = fs.existsSync(_0x27b200) ? await readJsonFile(_0x27b200) : []
    return (
      _0x2e56f7.push({ [_0x3be154]: _0xedbbe0 }),
      await writeJsonFile(_0x27b200, _0x2e56f7),
      true
    )
  } catch (_0x3ca7e5) {
    return console.log('Error updating command store:', _0x3ca7e5), false
  }
}
async function isbtnID(_0x5e502f) {
  try {
    const _0x3d331c = path.join(databaseFolder, 'data.json'),
      _0x2ca8a2 = fs.existsSync(_0x3d331c) ? await readJsonFile(_0x3d331c) : []
    return _0x2ca8a2.some((_0x1a3914) => _0x1a3914[_0x5e502f])
  } catch (_0xc150b) {
    return false
  }
}
async function getCMDStore(_0x21f554) {
  try {
    const _0x2966ac = path.join(databaseFolder, 'data.json'),
      _0x33104a = fs.existsSync(_0x2966ac) ? await readJsonFile(_0x2966ac) : [],
      _0x2e4a5c = _0x33104a.find((_0x353b07) => _0x353b07[_0x21f554])
    return _0x2e4a5c ? _0x2e4a5c[_0x21f554] : null
  } catch (_0x146b59) {
    return console.log('Error retrieving command store:', _0x146b59), null
  }
}
async function input(_0x546484, _0x3f046d) {
  const _0x458738 = await Settings.findOne()
  _0x458738 &&
    _0x546484 in _0x458738 &&
    ((_0x458738[_0x546484] = _0x3f046d), await _0x458738.save())
}
async function get(_0x252a1f) {
  const _0x4d5133 = await Settings.findOne()
  return _0x4d5133 ? _0x4d5133[_0x252a1f] : null
}
async function updb() {
  const _0x656d3f = await Settings.findOne()
  Object.assign(config, _0x656d3f.toObject())
  console.log('\u251C Database updated ✅')
}
async function updfb() {
  await resetSettings()
  console.log('\u251C Database reset and initialized 🔄')
}
async function upresbtn() {
  await writeJsonFile(path.join(databaseFolder, 'data.json'), [])
  console.log(' \u251C Command store reset 🔄')
}
function getCmdForCmdId(_0x45726b, _0x14a17b) {
  const _0x59c0ad = _0x45726b.find((_0x231f3a) => _0x231f3a.cmdId === _0x14a17b)
  return _0x59c0ad ? _0x59c0ad.cmd : null
}
async function resetSettings() {
  await Settings.deleteMany()
  await initializeSettings()
}
async function readJsonFile(_0x5d989a) {
  return new Promise((_0x493bcf, _0x56ad99) => {
    fs.readFile(_0x5d989a, 'utf8', (_0x4ca6e2, _0x36ce22) => {
      _0x4ca6e2 ? _0x56ad99(_0x4ca6e2) : _0x493bcf(JSON.parse(_0x36ce22))
    })
  })
}
async function getalls() {
  const _0xe570f2 = await Settings.findOne()
  return _0xe570f2 ? _0xe570f2.toJSON() : null
}
async function writeJsonFile(_0x1e0392, _0x4ab13a) {
  return new Promise((_0x1758b4, _0x24e2a8) => {
    fs.writeFile(_0x1e0392, JSON.stringify(_0x4ab13a, null, 2), (_0x151d4d) => {
      _0x151d4d ? _0x24e2a8(_0x151d4d) : _0x1758b4(true)
    })
  })
}
connectdb().catch(console.error)
module.exports = {
  updateCMDStore: updateCMDStore,
  isbtnID: isbtnID,
  getCMDStore: getCMDStore,
  input: input,
  get: get,
  getalls: getalls,
  updb: updb,
  updfb: updfb,
  upresbtn: upresbtn,
  getCmdForCmdId: getCmdForCmdId,
  connectdb: connectdb,
}
