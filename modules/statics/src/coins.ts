import { account, AccountCoin, erc20, terc20, stellarToken, tstellarToken } from './account';
import { CoinFeature, CoinKind, UnderlyingAsset } from './base';
import { CoinMap } from './map';
import { Networks } from './networks';
import { ofc, tofc, ofcerc20, tofcerc20 } from './ofc';
import { utxo } from './utxo';

const ETH_FEATURES = [...AccountCoin.DEFAULT_FEATURES, CoinFeature.SUPPORTS_TOKENS];
const XLM_FEATURES = [...AccountCoin.DEFAULT_FEATURES, CoinFeature.SUPPORTS_TOKENS];

export const coins = CoinMap.fromCoins([
  utxo('bch', 'Bitcoin Cash', Networks.main.bitcoinCash, UnderlyingAsset.BCH),
  utxo('tbch', 'Testnet Bitcoin Cash', Networks.test.bitcoinCash, UnderlyingAsset.BCH),
  utxo('bsv', 'Bitcoin SV', Networks.main.bitcoinSV, UnderlyingAsset.BSV),
  utxo('tbsv', 'Testnet Bitcoin SV', Networks.test.bitcoinSV, UnderlyingAsset.BSV),
  utxo('btc', 'Bitcoin', Networks.main.bitcoin, UnderlyingAsset.BTC),
  utxo('tbtc', 'Testnet Bitcoin', Networks.test.bitcoin, UnderlyingAsset.BTC),
  utxo('btg', 'Bitcoin Gold', Networks.main.bitcoinGold, UnderlyingAsset.BTG),
  utxo('ltc', 'Litecoin', Networks.main.litecoin, UnderlyingAsset.LTC),
  utxo('tltc', 'Testnet Litecoin', Networks.test.litecoin, UnderlyingAsset.LTC),
  utxo('dash', 'Dash', Networks.main.dash, UnderlyingAsset.DASH),
  utxo('tdash', 'Testnet Dash', Networks.test.dash, UnderlyingAsset.DASH),
  utxo('zec', 'ZCash', Networks.main.zCash, UnderlyingAsset.ZEC),
  utxo('tzec', 'Testnet ZCash', Networks.test.zCash, UnderlyingAsset.ZEC),
  account('algo', 'Algorand', Networks.main.algorand, 6, UnderlyingAsset.ALGO),
  account('talgo', 'Testnet Algorand', Networks.test.algorand, 6, UnderlyingAsset.ALGO),
  account('eth', 'Ethereum', Networks.main.ethereum, 18, UnderlyingAsset.ETH, ETH_FEATURES),
  account('teth', 'Testnet Ethereum', Networks.test.kovan, 18, UnderlyingAsset.ETH, ETH_FEATURES),
  account('eos', 'Eos', Networks.main.eos, 4, UnderlyingAsset.EOS),
  account('teos', 'Testnet Eos', Networks.test.eos, 4, UnderlyingAsset.EOS),
  account('trx', 'Tron', Networks.main.trx, 6, UnderlyingAsset.TRX),
  account('ttrx', 'Testnet Tron Shasta', Networks.test.trx, 6, UnderlyingAsset.TRX),
  account('xrp', 'Ripple', Networks.main.xrp, 6, UnderlyingAsset.XRP),
  account('txrp', 'Testnet Ripple', Networks.test.xrp, 6, UnderlyingAsset.XRP),
  account('xlm', 'Stellar', Networks.main.stellar, 7, UnderlyingAsset.XLM, XLM_FEATURES),
  account('txlm', 'Testnet Stellar', Networks.test.stellar, 7, UnderlyingAsset.XLM, XLM_FEATURES),
  account('xtz', 'Tezos', Networks.main.xtz, 6, UnderlyingAsset.XTZ),
  account('txtz', 'Testnet Tezos Babylonnet', Networks.test.xtz, 6, UnderlyingAsset.XTZ),
  account('susd', 'Silvergate USD', Networks.main.susd, 2, UnderlyingAsset.USD),
  account('tsusd', 'Testnet Silvergate USD', Networks.test.susd, 2, UnderlyingAsset.USD),
  ofc('ofcusd', 'USD', 2, UnderlyingAsset.USD, CoinKind.FIAT),
  ofc('ofcbtc', 'Bitcoin', 8, UnderlyingAsset.BTC, CoinKind.CRYPTO),
  ofc('ofceth', 'Ether', 18, UnderlyingAsset.ETH, CoinKind.CRYPTO),
  ofc('ofcltc', 'Litecoin', 8, UnderlyingAsset.LTC, CoinKind.CRYPTO),
  ofc('ofcdash', 'Dash', 8, UnderlyingAsset.DASH, CoinKind.CRYPTO),
  ofc('ofczec', 'ZCash', 8, UnderlyingAsset.ZEC, CoinKind.CRYPTO),
  ofc('ofcxrp', 'Ripple', 6, UnderlyingAsset.XRP, CoinKind.CRYPTO),
  ofc('ofcxlm', 'Stellar', 7, UnderlyingAsset.XLM, CoinKind.CRYPTO),
  ofc('ofcbch', 'Bitcoin Cash', 8, UnderlyingAsset.BCH, CoinKind.CRYPTO),
  ofc('ofcalgo', 'Algorand', 6, UnderlyingAsset.ALGO, CoinKind.CRYPTO),
  ofc('ofcbtg', 'Bitcoin Gold', 8, UnderlyingAsset.BTG, CoinKind.CRYPTO),
  ofc('ofcbsv', 'Bitcoin SV', 8, UnderlyingAsset.BSV, CoinKind.CRYPTO),
  ofc('ofceos', 'Eos', 4, UnderlyingAsset.EOS, CoinKind.CRYPTO),
  tofc('ofctusd', 'Test USD', 2, UnderlyingAsset.USD, CoinKind.FIAT),
  tofc('ofctbtc', 'Test Bitcoin', 8, UnderlyingAsset.BTC, CoinKind.CRYPTO),
  tofc('ofcteth', 'Test Ether', 18, UnderlyingAsset.ETH, CoinKind.CRYPTO),
  tofc('ofctltc', 'Test Litecoin', 8, UnderlyingAsset.LTC, CoinKind.CRYPTO),
  tofc('ofctdash', 'Test Dash', 8, UnderlyingAsset.DASH, CoinKind.CRYPTO),
  tofc('ofctzec', 'Test ZCash', 8, UnderlyingAsset.ZEC, CoinKind.CRYPTO),
  tofc('ofctxrp', 'Test Ripple', 6, UnderlyingAsset.XRP, CoinKind.CRYPTO),
  tofc('ofctxlm', 'Test Stellar', 7, UnderlyingAsset.XLM, CoinKind.CRYPTO),
  tofc('ofctbch', 'Test Bitcoin Cash', 8, UnderlyingAsset.BCH, CoinKind.CRYPTO),
  tofc('ofctalgo', 'Test Algorand', 6, UnderlyingAsset.ALGO, CoinKind.CRYPTO),
  tofc('ofctbtg', 'Test Bitcoin Gold', 8, UnderlyingAsset.BTG, CoinKind.CRYPTO),
  tofc('ofctbsv', 'Test Bitcoin SV', 8, UnderlyingAsset.BSV, CoinKind.CRYPTO),
  tofc('ofcteos', 'Test Eos', 4, UnderlyingAsset.EOS, CoinKind.CRYPTO),
  erc20('ae', 'Aeternity', 18, '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d', UnderlyingAsset.AE),
  erc20('aergo', 'Aergo', 18, '0xae31b85bfe62747d0836b82608b4830361a3d37a', UnderlyingAsset.AERGO),
  erc20('agwd', 'AGARWOOD', 18, '0xc3e419177044c9172823f06335d5d82aaf38a5c6', UnderlyingAsset.AGWD),
  erc20('aion', 'AION', 8, '0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466', UnderlyingAsset.AION),
  erc20('amn', 'Amon', 18, '0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c', UnderlyingAsset.AMN),
  erc20('amo', 'AMO Token', 18, '0x38c87aa89b2b8cd9b95b736e1fa7b612ea972169', UnderlyingAsset.AMO),
  erc20('amon', 'AmonD', 18, '0x00059ae69c1622a7542edc15e8d17b060fe307b6', UnderlyingAsset.AMON),
  erc20('ampx', 'Amplify Exchange', 18, '0x735af341f2d9ce3663616cd84ff522dbf62fbc1f', UnderlyingAsset.AMPX),
  erc20('ana', 'ANA', 18, '0xfafd51641ab09dff163cd04d2eb6b7865eb83f53', UnderlyingAsset.ANA),
  erc20('ant', 'Aragon', 18, '0x960b236a07cf122663c4303350609a66a7b288c0', UnderlyingAsset.ANT),
  erc20('aoa', 'Aurora', 18, '0x9ab165d795019b6d8b3e971dda91071421305e5a', UnderlyingAsset.AOA),
  erc20('appc', 'AppCoins', 18, '0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db', UnderlyingAsset.APPC),
  erc20('arct', 'ArCoin US Treasury', 18, '0xeb0f0df01c400fd21fb8533a68423703d22cfcc5', UnderlyingAsset.ARCT),
  erc20('ast', 'AirSwap', 4, '0x27054b13b1b798b345b591a4d22e6562d47ea75a', UnderlyingAsset.AST),
  erc20('audx', 'eToro Australian Dollar', 18, '0xdf1e9e1a218cff9888faef311d6fbb472e4175ce', UnderlyingAsset.AUDX),
  erc20('axpr', 'aXpire', 18, '0xc39e626a04c5971d770e319760d7926502975e47', UnderlyingAsset.AXPR),
  erc20('basic', 'BASIC Token', 18, '0xf25c91c87e0b1fd9b4064af0f427157aab0193a7', UnderlyingAsset.BASIC),
  erc20('bat', 'Basic Attention Token', 18, '0x0d8775f648430679a709e98d2b0cb6250d2887ef', UnderlyingAsset.BAT),
  erc20('bax', 'BABB', 18, '0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb', UnderlyingAsset.BAX),
  erc20('bbx', 'BBX', 18, '0x71529cea068e3785efd4f18aaf59a6cb82b7e5cb', UnderlyingAsset.BBX),
  erc20('bcap', 'BCAP', 0, '0x1f41e42d0a9e3c0dd3ba15b527342783b43200a9', UnderlyingAsset.BCAP),
  erc20('bcio', 'Blockchain.io', 18, '0xcdc412f306e0c51e3249b88c65423cd16b322673', UnderlyingAsset.BCIO),
  erc20('bepro', 'BetProtocol', 18, '0x786001c9c5ca6e502deb8a8a72480d2147891f32', UnderlyingAsset.BEPRO),
  erc20('bid', 'Blockbid', 2, '0xdd5151da2ab25566e1d2a3c9a3e77396303f8a93', UnderlyingAsset.BID),
  erc20('bidl', 'Blockbid Liquidity', 2, '0x5c7ec304a60ed545518085bb4aba156e8a7596f6', UnderlyingAsset.BIDL),
  erc20('bird', 'BirdCoin', 18, '0x026e62dded1a6ad07d93d39f96b9eabd59665e0d', UnderlyingAsset.BIRD),
  erc20('bnk', 'Bankera', 8, '0xc80c5e40220172b36adee2c951f26f2a577810c5', UnderlyingAsset.BNK),
  erc20('bnl', 'BitNational', 18, '0xa717d0f45652fb430fd84d3d1b6b02e4510102ea', UnderlyingAsset.BNL),
  erc20('bnt', 'Bancor', 18, '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', UnderlyingAsset.BNT),
  erc20('bnty', 'Bounty0x', 18, '0xd2d6158683aee4cc838067727209a0aaf4359de3', UnderlyingAsset.BNTY),
  erc20('box', 'ContentBox', 18, '0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f', UnderlyingAsset.BOX),
  erc20('brd', 'Bread', 18, '0x558ec3152e2eb2174905cd19aea4e34a23de9ad6', UnderlyingAsset.BRD),
  erc20('btt', 'Blocktrade', 18, '0xfa456cf55250a839088b27ee32a424d7dacb54ff', UnderlyingAsset.BTT),
  erc20('btu', 'BTU Protocol', 18, '0xb683d83a532e2cb7dfa5275eed3698436371cc9f', UnderlyingAsset.BTU),
  erc20('busd', 'Binance USD', 18, '0x4fabb145d64652a948d72533023f6e7a623c7c53', UnderlyingAsset.BUSD),
  erc20('buy', 'buying.com', 18, '0x0d7f0fa3a79bfedbab291da357958596c74e27d7', UnderlyingAsset.BUY),
  erc20('cadx', 'eToro Canadian Dollar', 18, '0x8ed876e408959643479534a21970ec023d0fb51e', UnderlyingAsset.CADX),
  erc20('cag', 'Change', 18, '0x7d4b8cce0591c9044a22ee543533b72e976e36c3', UnderlyingAsset.CAG),
  erc20('cbat', 'Compound BAT', 8, '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e', UnderlyingAsset.CBAT),
  erc20('cbc', 'CashBet Coin', 8, '0x26db5439f651caf491a87d48799da81f191bdb6b', UnderlyingAsset.CBC),
  erc20('cdag', 'CannDollar', 18, '0xf43401ea8ac4b86155b929e1a5a5e46626c23842', UnderlyingAsset.CDAG),
  erc20('cdai', 'Compound DAI', 8, '0xf5dce57282a584d2746faf1593d3121fcac444dc', UnderlyingAsset.CDAI),
  erc20('cdt', 'Blox', 18, '0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af', UnderlyingAsset.CDT),
  erc20('cel', 'Celsius', 4, '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d', UnderlyingAsset.CEL),
  erc20('ceth', 'Compound Ether', 8, '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5', UnderlyingAsset.CETH),
  erc20('cgld', 'Coineru Gold', 8, '0x3f50e6cc943351f00971a9d01ac32739895df826', UnderlyingAsset.CGLD),
  erc20('chfx', 'eToro Swiss Frank', 18, '0xe435502c85a4e7e79cfab4167af566c27a7a0784', UnderlyingAsset.CHFX),
  erc20('chsb', 'SwissBorg', 8, '0xba9d4199fab4f26efe3551d490e3821486f135ba', UnderlyingAsset.CHSB),
  erc20('cix100', 'Cryptoindex 100', 18, '0x6393e822874728f8afa7e1c9944e417d37ca5878', UnderlyingAsset.CIX100),
  erc20('cln', 'Colu Local Network', 18, '0x4162178b78d6985480a308b2190ee5517460406d', UnderlyingAsset.CLN),
  erc20('cnyx', 'eToro Chinese Yuan', 18, '0x319ad3ff82bedddb3bc85fd7943002d25cdb3cb9', UnderlyingAsset.CNYX),
  erc20('cpay', 'Cryptopay', 0, '0x0ebb614204e47c09b6c3feb9aaecad8ee060e23e', UnderlyingAsset.CPAY),
  erc20('cplt', 'Coineru Platinum', 8, '0xa3f7871a4b86bcc3b6e97c8fd0745e71c55e1f82', UnderlyingAsset.CPLT),
  erc20('cqx', 'Coinquista Coin', 18, '0x618c29dd2d16475b2ae6244f9e8aaead68f0ca44', UnderlyingAsset.CQX),
  erc20('cre', 'CarryToken', 18, '0x115ec79f1de567ec68b7ae7eda501b406626478e', UnderlyingAsset.CRE),
  erc20('crep', 'Compound Augur', 8, '0x158079ee67fce2f58472a96584a73c7ab9ac95c1', UnderlyingAsset.CREP),
  erc20('cro', 'Crypto.com Chain', 8, '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b', UnderlyingAsset.CRO),
  erc20('crpt', 'Crypterium', 18, '0x80a7e048f37a50500351c204cb407766fa3bae7f', UnderlyingAsset.CRPT),
  erc20('cslv', 'Coineru Silver', 8, '0x6dc05497f0b087c7692816e6acaa8bdda73907fc', UnderlyingAsset.CSLV),
  erc20('csp', 'Caspian Token', 18, '0xa6446d655a0c34bc4f05042ee88170d056cbaf45', UnderlyingAsset.CSP),
  erc20('cusdc', 'Compound USDC', 8, '0x39aa39c021dfbae8fac545936693ac917d5e7563', UnderlyingAsset.CUSDC),
  erc20('cwbtc', 'Compound WBTC', 8, '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4', UnderlyingAsset.CWBTC),
  erc20('cvc', 'Civic', 8, '0x41e5560054824ea6b0732e656e3ad64e20e94e45', UnderlyingAsset.CVC),
  erc20('czrx', 'Compound ZRX', 8, '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407', UnderlyingAsset.CZRX),
  erc20('dai', 'Dai', 18, '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359', UnderlyingAsset.DAI),
  erc20('data', 'Streamr DATAcoin', 18, '0x0cf0ee63788a0849fe5297f3407f701e122cc023', UnderlyingAsset.DATA),
  erc20('dent', 'Dent', 8, '0x3597bfd533a99c9aa083587b074434e61eb0a258', UnderlyingAsset.DENT),
  erc20('dgd', 'Digix DAO', 9, '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', UnderlyingAsset.DGD),
  erc20('dgx', 'Digix', 9, '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf', UnderlyingAsset.DGX),
  erc20('dmt', 'DMarket', 8, '0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1', UnderlyingAsset.DMT),
  erc20('drpu', 'DRP Utility', 8, '0xe30e02f049957e2a5907589e06ba646fb2c321ba', UnderlyingAsset.DRPU),
  erc20('drv', 'Drive', 18, '0x0b9d89a71bdabd231d4d497b7b7b879740d739c4', UnderlyingAsset.DRV),
  erc20('echt', 'eChat', 0, '0x1aadead0d2e0b6d888ae1d73b11db65a8447634a', UnderlyingAsset.ECHT),
  erc20('edn', 'Eden', 18, '0x05860d453c7974cbf46508c06cba14e211c629ce', UnderlyingAsset.EDN),
  erc20('edr', 'Endor Protocol', 18, '0xc528c28fec0a90c083328bc45f587ee215760a0f', UnderlyingAsset.EDR),
  erc20('egl', 'eGold', 4, '0x8f00458479ea850f584ed82881421f9d9eac6cb1', UnderlyingAsset.EGL),
  erc20('elf', 'Aelf', 18, '0xbf2179859fc6d5bee9bf9158632dc51678a4100e', UnderlyingAsset.ELF),
  erc20('emx', 'EMX', 18, '0x75a29c405bd5ab2f3b35144af937ee98d390b5ee', UnderlyingAsset.EMX),
  erc20('eng', 'Enigma', 8, '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4', UnderlyingAsset.ENG),
  erc20('enj', 'Enjin Coin', 18, '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c', UnderlyingAsset.ENJ),
  erc20('ethos', 'Ethos', 8, '0x5af2be193a6abca9c8817001f45744777db30756', UnderlyingAsset.ETHOS),
  erc20('etv', 'Ecotech Visions', 18, '0x695f5d0692655ebf710c0003ca499323488334c6', UnderlyingAsset.ETV),
  erc20('eurs', 'Stasis EURS', 2, '0xdb25f211ab05b1c97d595516f45794528a807ad8', UnderlyingAsset.EURS),
  erc20('eurx', 'eToro Euro', 18, '0x05ac103f68e05da35e78f6165b9082432fe64b58', UnderlyingAsset.EURX),
  erc20('eux', 'EUR Stable Token', 18, '0x1b9064207e8046ec1d8e83de79380ed31283914f', UnderlyingAsset.EUX),
  erc20('exe', 'EXE Token', 8, '0x0d9a653f681168f410d14d19b7743c041eafc58a', UnderlyingAsset.EXE),
  erc20('fet', 'Fetch', 18, '0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd', UnderlyingAsset.FET),
  erc20('ff1', 'Two Prime FF1', 18, '0x59af0356cdebd1fa23ae5dadff9170bbfc31278c', UnderlyingAsset.FF1),
  erc20('fmf', 'Formosa Financial', 18, '0xb4d0fdfc8497aef97d3c2892ae682ee06064a2bc', UnderlyingAsset.FMF),
  erc20('ftm', 'Fantom Token', 18, '0x4e15361fd6b4bb609fa63c81a2be19d873717870', UnderlyingAsset.FTM),
  erc20('ftt', 'FTX Token', 18, '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9', UnderlyingAsset.FTT),
  erc20('fun', 'FunFair', 8, '0x419d0d8bdd9af5e606ae2232ed285aff190e711b', UnderlyingAsset.FUN),
  erc20('fxrt', 'FXRT', 3, '0x506742a24c54b77c5af4065b2626ab96c641f90e', UnderlyingAsset.FXRT),
  erc20('gbpx', 'eToro Pound Sterling', 18, '0xf85ef57fcdb36d628d063fa663e61e44d35ae661', UnderlyingAsset.GBPX),
  erc20('gen', 'DAOstack', 18, '0x543ff227f64aa17ea132bf9886cab5db55dcaddf', UnderlyingAsset.GEN),
  erc20('gldx', 'eToro Gold', 18, '0x7d2bebd6e41b05384f0a8eb8ff228daac6f39c96', UnderlyingAsset.GLDX),
  erc20('gno', 'Gnosis', 18, '0x6810e776880c02933d47db1b9fc05908e5386b96', UnderlyingAsset.GNO),
  erc20('gnt', 'Golem', 18, '0xa74476443119a942de498590fe1f2454d7d4ac0d', UnderlyingAsset.GNT),
  erc20('gold', 'XBullion Token', 8, '0x0e573fdd3c5acf3a74f1775b0f9823a1a0e2b86b', UnderlyingAsset.GOLD),
  erc20('got', 'GOExchange', 18, '0xf11f2550769dac4226731b7732dd4e17e72b1b01', UnderlyingAsset.GOT),
  erc20('gto', 'Gifto', 5, '0xc5bbae50781be1669306b9e001eff57a2957b09d', UnderlyingAsset.GTO),
  erc20('gusd', 'Gemini Dollar', 2, '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd', UnderlyingAsset.GUSD),
  erc20('gxc', 'Game X Coin', 18, '0x953e22945b416730bad05009af05b420e598e412', UnderlyingAsset.GXC),
  erc20('hedg', 'HedgeTrade', 18, '0xf1290473e210b2108a85237fbcd7b6eb42cc654f', UnderlyingAsset.HEDG),
  erc20('hkdx', 'eToro Hong Kong Dollar', 18, '0x1af20b8d1ede928f437b3a86801796b167840d2b', UnderlyingAsset.HKDX),
  erc20('hlc', 'HalalChain', 9, '0x58c69ed6cd6887c0225d1fccecc055127843c69b', UnderlyingAsset.HLC),
  erc20('hold', 'Hold', 18, '0xd6e1401a079922469e9b965cb090ea6ff64c6839', UnderlyingAsset.HOLD),
  erc20('hot', 'Holo', 18, '0x6c6ee5e31d828de241282b9606c8e98ea48526e2', UnderlyingAsset.HOT),
  erc20('hqt', 'HyperQuant', 18, '0x3e1d5a855ad9d948373ae68e4fe1f094612b1322', UnderlyingAsset.HQT),
  erc20('hst', 'Decision Token', 18, '0x554c20b7c486beee439277b4540a434566dc4c02', UnderlyingAsset.HST),
  erc20('ht', 'Huobi Token', 18, '0x6f259637dcd74c767781e37bc6133cd6a68aa161', UnderlyingAsset.HT),
  erc20('hum', 'HumanScape', 18, '0x174afe7a032b5a33a3270a9f6c30746e25708532', UnderlyingAsset.HUM),
  erc20('hxro', 'Hxro', 18, '0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3', UnderlyingAsset.HXRO),
  erc20('hyb', 'Hybrid Block', 18, '0x6059f55751603ead7dc6d280ad83a7b33d837c90', UnderlyingAsset.HYB),
  erc20('hydro', 'Hydro', 18, '0xebbdf302c940c6bfd49c6b165f457fdb324649bc', UnderlyingAsset.HYDRO),
  erc20('idrt', 'Rupiah Token', 2, '0x998ffe1e43facffb941dc337dd0468d52ba5b48a', UnderlyingAsset.IDRT),
  erc20('incx', 'InternationalCryptoX', 18, '0xa984a92731c088f1ea4d53b71a2565a399f7d8d5', UnderlyingAsset.INCX),
  erc20('ind', 'Indorse', 18, '0xf8e386eda857484f5a12e4b5daa9984e06e73705', UnderlyingAsset.IND),
  erc20('inx', 'INX Token', 18, '0xbbc7f7a6aadac103769c66cbc69ab720f7f9eae3', UnderlyingAsset.INX),
  erc20('isr', 'Insureum', 18, '0xd4a293ae8bb9e0be12e99eb19d48239e8c83a136', UnderlyingAsset.ISR),
  erc20('ivy', 'Ivy Koin', 18, '0xa4ea687a2a7f29cf2dc66b39c68e4411c0d00c49', UnderlyingAsset.IVY),
  erc20('jbc', 'Japan Brand Coin', 18, '0x3635e381c67252405c1c0e550973155832d5e490', UnderlyingAsset.JBC),
  erc20('jpyx', 'eToro Japanese Yen', 18, '0x743c79f88dcadc6e7cfd7fa2bd8e2bfc68dae053', UnderlyingAsset.JPYX),
  erc20('key', 'SelfKey', 18, '0x4cc19356f2d37338b9802aa8e8fc58b0373296e7', UnderlyingAsset.KEY),
  erc20('kin', 'Kin', 18, '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5', UnderlyingAsset.KIN),
  erc20('knc', 'Kyber Network', 18, '0xdd974d5c2e2928dea5f71b9825b8b646686bd200', UnderlyingAsset.KNC),
  erc20('koz', 'KOZJIN Token', 18, '0xd95e7d16000cbeb66acbf70b4a843d4346ff4555', UnderlyingAsset.KOZ),
  erc20('kze', 'Almeela', 18, '0x8de67d55c58540807601dbf1259537bc2dffc84d', UnderlyingAsset.KZE),
  erc20('lba', 'Cred', 18, '0xfe5f141bf94fe84bc28ded0ab966c16b17490657', UnderlyingAsset.LBA),
  erc20('leo', 'Bitfinex LEO', 18, '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3', UnderlyingAsset.LEO),
  erc20('lgo', 'LGO Exchange', 8, '0x0a50c93c762fdd6e56d86215c24aaad43ab629aa', UnderlyingAsset.LGO),
  erc20('link', 'ChainLink', 18, '0x514910771af9ca656af840dff83e8264ecf986ca', UnderlyingAsset.LINK),
  erc20('lion', 'CoinLion', 18, '0x2167fb82309cf76513e83b25123f8b0559d6b48f', UnderlyingAsset.LION),
  erc20('lnc', 'Linker Coin', 18, '0x6beb418fc6e1958204ac8baddcf109b8e9694966', UnderlyingAsset.LNC),
  erc20('loom', 'Loom Network', 18, '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0', UnderlyingAsset.LOOM),
  erc20('lrc', 'loopring', 18, '0xef68e7c694f40c8202821edf525de3782458639f', UnderlyingAsset.LRC),
  erc20('matic', 'Matic Token', 18, '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', UnderlyingAsset.MATIC),
  erc20('mcdai', 'Dai', 18, '0x6b175474e89094c44da98b954eedeac495271d0f', UnderlyingAsset.MCDAI),
  erc20('mco', 'Crypto.com', 8, '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d', UnderlyingAsset.MCO),
  erc20('mcx', 'MachiX Token', 18, '0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8', UnderlyingAsset.MCX),
  erc20('mdx', 'Mandala', 18, '0x9d03393d297e42c135625d450c814892505f1a84', UnderlyingAsset.MDX),
  erc20('medx', 'Medibloc', 8, '0xfd1e80508f243e64ce234ea88a5fd2827c71d4b7', UnderlyingAsset.MEDX),
  erc20('met', 'Metronome', 18, '0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e', UnderlyingAsset.MET),
  erc20('meta', 'Metadium', 18, '0xde2f7766c8bf14ca67193128535e5c7454f8387c', UnderlyingAsset.META),
  erc20('mfg', 'SyncFab', 18, '0x6710c63432a2de02954fc0f851db07146a6c0312', UnderlyingAsset.MFG),
  erc20('mfph', 'MFPH Token', 18, '0xbc7e1056ecc72d14228a14a53815c5d3ad86c84e', UnderlyingAsset.MFPH),
  erc20('mft', 'Mainframe', 18, '0xdf2c7238198ad8b389666574f2d8bc411a4b7428', UnderlyingAsset.MFT),
  erc20('mith', 'Mithril', 18, '0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb', UnderlyingAsset.MITH),
  erc20('mix', 'MixMarvel Token', 18, '0x5d285f735998f36631f678ff41fb56a10a4d0429', UnderlyingAsset.MIX),
  erc20('mkr', 'Maker', 18, '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', UnderlyingAsset.MKR),
  erc20('moc', 'Moss Coin', 18, '0x865ec58b06bf6305b886793aa20a2da31d034e68', UnderlyingAsset.MOC),
  erc20('mpay', 'MenaPay', 18, '0x3810a4ddf41e586fa0dba1463a7951b748cecfca', UnderlyingAsset.MPAY),
  erc20('mtcn', 'Multiven', 18, '0xf6117cc92d7247f605f11d4c942f0feda3399cb5', UnderlyingAsset.MTCN),
  erc20('mtl', 'Metal', 8, '0xf433089366899d83a9f26a773d59ec7ecf30355e', UnderlyingAsset.MTL),
  erc20('mvl', 'Mass Vehicle Ledger', 18, '0xa849eaae994fb86afa73382e9bd88c2b6b18dc71', UnderlyingAsset.MVL),
  erc20('nas', 'Nebulas', 18, '0x5d65d971895edc438f465c17db6992698a52318d', UnderlyingAsset.NAS),
  erc20('neu', 'Neumark', 18, '0xa823e6722006afe99e91c30ff5295052fe6b8e32', UnderlyingAsset.NEU),
  erc20('nexo', 'Nexo', 18, '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206', UnderlyingAsset.NEXO),
  erc20('nmr', 'Numeraire', 18, '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671', UnderlyingAsset.NMR),
  erc20('npxs', 'Pundi X', 18, '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3', UnderlyingAsset.NPXS),
  erc20('nzdx', 'eToro New Zealand Dollar', 18, '0x6871799a4866bb9068b36b7a9bb93475ac77ac5d', UnderlyingAsset.NZDX),
  erc20('omg', 'OmiseGO Token', 18, '0xd26114cd6ee289accf82350c8d8487fedb8a0c07', UnderlyingAsset.OMG),
  erc20('onl', 'On.Live', 18, '0x6863be0e7cf7ce860a574760e9020d519a8bdc47', UnderlyingAsset.ONL),
  erc20('opt', 'OPTin Token', 18, '0xde8893346ce8052a02606b62d13b142648e062dd', UnderlyingAsset.OPT),
  erc20('orbs', 'Orbs Token', 18, '0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa', UnderlyingAsset.ORBS),
  erc20('oxt', 'Orchid', 18, '0x4575f41308ec1483f3d399aa9a2826d74da13deb', UnderlyingAsset.OXT),
  erc20('pass', 'Blockpass', 6, '0xee4458e052b533b1aabd493b5f8c4d85d7b263dc', UnderlyingAsset.PASS),
  erc20('pax', 'Paxos', 18, '0x8e870d67f660d95d5be530380d0ec0bd388289e1', UnderlyingAsset.PAX),
  erc20('paxg', 'Paxos Gold', 18, '0x45804880de22913dafe09f4980848ece6ecbaf78', UnderlyingAsset.PAXG),
  erc20('pay', 'TenX', 18, '0xb97048628db6b661d4c2aa833e95dbe1a905b280', UnderlyingAsset.PAY),
  erc20('pdata', 'Opiria Token', 18, '0x0db03b6cde0b2d427c64a04feafd825938368f1f', UnderlyingAsset.PDATA),
  erc20('peg', 'PegNet', 8, '0x996b396b88cc4a1d8df3dbd1c088cdfaee17e6d4', UnderlyingAsset.PEG),
  erc20('plc', 'PlusCoin', 18, '0xdf99c7f9e0eadd71057a801055da810985df38bd', UnderlyingAsset.PLC),
  erc20('plnx', 'eToro Polish Zloty', 18, '0xaace6480798b4a7b596ec4ce3a26b8de9b9ae2e2', UnderlyingAsset.PLNX),
  erc20('plx', 'PLN Stable Token', 18, '0x8d682bc7ad206e54055c609ea1d4717caab665d0', UnderlyingAsset.PLX),
  erc20('pma', 'PumaPay', 18, '0x846c66cf71c43f80403b51fe3906b3599d63336f', UnderlyingAsset.PMA),
  erc20('poly', 'Polymath', 18, '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec', UnderlyingAsset.POLY),
  erc20('powr', 'Power Ledger', 6, '0x595832f8fc6bf59c85c527fec3740a1b7a361269', UnderlyingAsset.POWR),
  erc20('ppt', 'Populous Platform', 8, '0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a', UnderlyingAsset.PPT),
  erc20('prdx', 'PRDX Token', 9, '0xe17900f23b7ebb2791f25f1eaa63d8f5e603e9a5', UnderlyingAsset.PRDX),
  erc20('pro', 'Propy', 18, '0x9041fe5b3fdea0f5e4afdc17e75180738d877a01', UnderlyingAsset.PRO),
  erc20('prts', 'Protos', 0, '0x835a44027ee4e92bbd8874e5ede9e5148b069e96', UnderlyingAsset.PRTS),
  erc20('qash', 'QASH', 6, '0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6', UnderlyingAsset.QASH),
  erc20('qcad', 'QCAD', 2, '0x4a16baf414b8e637ed12019fad5dd705735db2e0', UnderlyingAsset.QCAD),
  erc20('qrl', 'Qrl', 8, '0x697beac28b09e122c4332d163985e8a73121b97f', UnderlyingAsset.QRL),
  erc20('qsp', 'Quantstamp', 18, '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d', UnderlyingAsset.QSP),
  erc20('qvt', 'Qvolta', 18, '0x1183f92a5624d68e85ffb9170f16bf0443b4c242', UnderlyingAsset.QVT),
  erc20('rby', 'Ruby X', 18, '0xf7705dee19a63e0bc1a240f723c5c0f570c78572', UnderlyingAsset.RBY),
  erc20('rdn', 'Raiden Network', 18, '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6', UnderlyingAsset.RDN),
  erc20('reb', 'Regblo', 18, '0x61383ac89988b498df5363050ff07fe5c52ecdda', UnderlyingAsset.REB),
  erc20('rebl', 'Rebellious', 18, '0x5f53f7a8075614b699baad0bc2c899f4bad8fbbf', UnderlyingAsset.REBL),
  erc20('rep', 'Augur', 18, '0x1985365e9f78359a9b6ad760e32412f4a445e862', UnderlyingAsset.REP),
  erc20('rfr', 'Refereum', 4, '0xd0929d411954c47438dc1d871dd6081f5c5e149c', UnderlyingAsset.RFR),
  erc20('rlc', 'Iexec Rlc', 9, '0x607f4c5bb672230e8672085532f7e901544a7375', UnderlyingAsset.RLC),
  erc20('ronc', 'RONCoin', 18, '0xf1b819fdb689f43afc161db789800ed799f18388', UnderlyingAsset.RONC),
  erc20('roobee', 'ROOBEE', 18, '0xa31b1767e09f842ecfd4bc471fe44f830e3891aa', UnderlyingAsset.ROOBEE),
  erc20('rubx', 'eToro Russian Ruble', 18, '0xd6d69a3d5e51dbc2636dc332338765fcca71d5d5', UnderlyingAsset.RUBX),
  erc20('salt', 'Salt', 8, '0x4156d3342d5c385a87d264f90653733592000581', UnderlyingAsset.SALT),
  erc20('sga', 'Saga', 18, '0xed0849bf46cfb9845a2d900a0a4e593f2dd3673c', UnderlyingAsset.SGA),
  erc20('sgdx', 'eToro Singapore Dollar', 18, '0x0e3e965acffb719e2f5dd4309969e2debe6215dd', UnderlyingAsset.SGDX),
  erc20('shk', 'iShook', 18, '0xebe4a49df7885d015329c919bf43e6460a858f1e', UnderlyingAsset.SHK),
  erc20('shr', 'ShareToken', 2, '0xee5fe244406f35d9b4ddb488a64d51456630befc', UnderlyingAsset.SHR),
  erc20('slot', 'AlphaSlot', 18, '0xaee7474c3713ece228aa5ec43c89c708f2ec7ed2', UnderlyingAsset.SLOT),
  erc20('slvx', 'eToro Silver', 18, '0x8e4d222dbd4f8f9e7c175e77d6e71715c3da78e0', UnderlyingAsset.SLVX),
  erc20('snc', 'SunContract', 18, '0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404', UnderlyingAsset.SNC),
  erc20('snov', 'Snovio', 18, '0xbdc5bac39dbe132b1e030e898ae3830017d7d969', UnderlyingAsset.SNOV),
  erc20('snt', 'Status Network Token', 18, '0x744d70fdbe2ba4cf95131626614a1763df805b9e', UnderlyingAsset.SNT),
  erc20('soc', 'SODACoin', 18, '0xcad49c39b72c37b32cee8b14f33f316d3a8bc335', UnderlyingAsset.SOC),
  erc20('spo', 'Sparrow Options', 18, '0x89eafa06d99f0a4d816918245266800c9a0941e0', UnderlyingAsset.SPO),
  erc20('solve', 'Solve Token', 8, '0x446c9033e7516d820cc9a2ce2d0b7328b579406f', UnderlyingAsset.SOLVE),
  erc20('srnt', 'Serenity', 18, '0xbc7942054f77b82e8a71ace170e4b00ebae67eb6', UnderlyingAsset.SRNT),
  erc20('storj', 'Storj', 8, '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac', UnderlyingAsset.STORJ),
  erc20('storm', 'Storm', 18, '0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433', UnderlyingAsset.STORM),
  erc20('sxp', 'Swipe', 18, '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9', UnderlyingAsset.SXP),
  erc20('taud', 'TrueAUD', 18, '0x00006100f7090010005f1bd7ae6122c3c2cf0090', UnderlyingAsset.TAUD),
  erc20('tcad', 'TrueCAD', 18, '0x00000100f2a2bd000715001920eb70d229700085', UnderlyingAsset.TCAD),
  erc20('ten', 'Tokenomy', 18, '0xdd16ec0f66e54d453e6756713e533355989040e4', UnderlyingAsset.TEN),
  erc20('tenx', 'TenX Token', 18, '0x515ba0a2e286af10115284f151cf398688a69170', UnderlyingAsset.TENX),
  erc20('tgbp', 'TrueGBP', 18, '0x00000000441378008ea67f4284a57932b1c000a5', UnderlyingAsset.TGBP),
  erc20('thkd', 'TrueHKD', 18, '0x0000852600ceb001e08e00bc008be620d60031f2', UnderlyingAsset.THKD),
  erc20('tiox', 'Trade Token X', 18, '0xd947b0ceab2a8885866b9a04a06ae99de852a3d4', UnderlyingAsset.TIOX),
  erc20('tkx', 'Tokenize', 8, '0x667102bd3413bfeaa3dffb48fa8288819e480a88', UnderlyingAsset.TKX),
  erc20('tnt', 'Tierion', 8, '0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8', UnderlyingAsset.TNT),
  erc20('trst', 'WeTrust', 6, '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b', UnderlyingAsset.TRST),
  erc20('tryx', 'eToro Turkish Lira', 18, '0x6faff971d9248e7d398a98fdbe6a81f6d7489568', UnderlyingAsset.TRYX),
  erc20('tusd', 'TrueUSD', 18, '0x0000000000085d4780b73119b644ae5ecd22b376', UnderlyingAsset.TUSD),
  erc20('ukg', 'UnikoinGold', 18, '0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b', UnderlyingAsset.UKG),
  erc20('up', 'UpToken', 8, '0x6ba460ab75cd2c56343b3517ffeba60748654d26', UnderlyingAsset.UP),
  erc20('upbtc', 'Universal Bitcoin', 8, '0xc7461b398005e50bcc43c8e636378c6722e76c01', UnderlyingAsset.UPBTC),
  erc20('upp', 'Sentinel Protocol', 18, '0xc86d054809623432210c107af2e3f619dcfbf652', UnderlyingAsset.UPP),
  erc20('upt', 'Universal Protocol Token', 18, '0x6ca88cc8d9288f5cad825053b6a1b179b05c76fc', UnderlyingAsset.UPT),
  erc20('upusd', 'Universal US Dollar', 2, '0x86367c0e517622dacdab379f2de389c3c9524345', UnderlyingAsset.UPUSD),
  erc20('uqc', 'Uquid Coin', 18, '0xd01db73e047855efb414e6202098c4be4cd2423b', UnderlyingAsset.UQC),
  erc20('usdc', 'USD Coin', 6, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', UnderlyingAsset.USDC),
  erc20('usdt', 'Tether', 6, '0xdac17f958d2ee523a2206206994597c13d831ec7', UnderlyingAsset.USDT),
  erc20('usdx', 'eToro United States Dollar', 18, '0x4e3856c37b2fe7ff2fe34510cda82a1dffd63cd0', UnderlyingAsset.USDX),
  erc20('uspx', 'USPX Token', 0, '0x38d3d9abbdba8305ebb8b72996efe55bf785aed0', UnderlyingAsset.USPX),
  erc20('usx', 'USD Stable Token', 18, '0xe72f4c4ff9d294fc34829947e4371da306f90465', UnderlyingAsset.USX),
  erc20('valor', 'ValorToken', 18, '0x297e4e5e59ad72b1b0a2fd446929e76117be0e0a', UnderlyingAsset.VALOR),
  erc20('vdx', 'Vodi X', 18, '0x91e64f39c1fe14492e8fdf5a8b0f305bd218c8a1', UnderlyingAsset.VDX),
  erc20('vrgx', 'VroomGo', 8, '0x4861b1a0ead261897174fd849ca0f5154fcf2442', UnderlyingAsset.VRGX),
  erc20('wafl', 'Wafl Token', 18, '0x3fee076a0f0218899b89fe7e3f54dd2dc18917e0', UnderlyingAsset.WAFL),
  erc20('wax', 'Wax', 8, '0x39bb259f66e1c59d5abef88375979b4d20d98022', UnderlyingAsset.WAX),
  erc20('wabi', 'Tael Token', 18, '0x286bda1413a2df81731d4930ce2f862a35a609fe', UnderlyingAsset.WABI),
  erc20('wbtc', 'Wrapped Bitcoin', 8, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', UnderlyingAsset.WBTC),
  erc20('wet', 'We Show Token', 18, '0x36d10c6800d569bb8c4fe284a05ffe3b752f972c', UnderlyingAsset.WET),
  erc20('wht', 'Whatshalal', 18, '0xae8d4da01658dd0ac118dde60f5b78042d0da7f2', UnderlyingAsset.WHT),
  erc20('wpx', 'WalletPlusX', 18, '0x4bb0a085db8cedf43344bd2fbec83c2c79c4e76b', UnderlyingAsset.WPX),
  erc20('wtc', 'Walton Token', 18, '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74', UnderlyingAsset.WTC),
  erc20('wxrp', 'Wrapped XRP', 6, '0xda7e5a3841550a5ba271dcc76a885af902142dfc', UnderlyingAsset.WXRP),
  erc20('xcd', 'CapdaxToken', 18, '0xca00bc15f67ebea4b20dfaaa847cace113cc5501', UnderlyingAsset.XCD),
  erc20('xrl', 'Rialto', 9, '0xb24754be79281553dc1adc160ddf5cd9b74361a4', UnderlyingAsset.XRL),
  erc20('xtp', 'Tap', 18, '0x6368e1e18c4c419ddfc608a0bed1ccb87b9250fc', UnderlyingAsset.XTP),
  erc20('yng', 'Young Token', 18, '0xa26cbb76156090f4b40a1799a220fc4c946afb3c', UnderlyingAsset.YNG),
  erc20('ysey', 'YSEY Utility Token', 3, '0x1358efe5d9bfc2005918c0b2f220a4345c9ee7a3', UnderlyingAsset.YSEY),
  erc20('zarx', 'eToro South African Rand', 18, '0x29ec3ff4e1dcad5a207dbd5d14e48073abba0bd3', UnderlyingAsset.ZARX),
  erc20('zco', 'Zebi Coin', 8, '0x2008e3057bd734e10ad13c9eae45ff132abc1722', UnderlyingAsset.ZCO),
  erc20('zil', 'Zilliqa', 12, '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27', UnderlyingAsset.ZIL),
  erc20('zix', 'Zeex Token', 18, '0xf3c092ca8cd6d3d4ca004dc1d0f1fe8ccab53599', UnderlyingAsset.ZIX),
  erc20('zmt', 'Zipmex Token', 18, '0xaa602de53347579f86b996d2add74bb6f79462b2', UnderlyingAsset.ZMT),
  erc20('zoom', 'CoinZoom', 18, '0x69cf3091c91eb72db05e45c76e58225177dea742', UnderlyingAsset.ZOOM),
  erc20('zrx', '0x Token', 18, '0xe41d2489571d322189246dafa5ebde1f4699f498', UnderlyingAsset.ZRX),
  stellarToken(
    'xlm:BST-GADDFE4R72YUP2AOEL67OHZN3GJQYPC3VE734N2XFMEGRR2L32CZ3XYZ',
    'BitGo Shield Token',
    7,
    UnderlyingAsset['xlm:BST-GADDFE4R72YUP2AOEL67OHZN3GJQYPC3VE734N2XFMEGRR2L32CZ3XYZ'],
    'bitgo.com',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'BST'
  ),
  stellarToken(
    'xlm:VELO-GC7GMEKN2P5LKGOVW55WGHMVQRPPRPHIRFMIC75Z6WPYPYR7B3Z3WEKH',
    'Velo Token',
    7,
    UnderlyingAsset['xlm:VELO-GC7GMEKN2P5LKGOVW55WGHMVQRPPRPHIRFMIC75Z6WPYPYR7B3Z3WEKH'],
    'velo.org',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'VELO'
  ),
  stellarToken(
    'xlm:SLT-GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP',
    'Smartlands Token',
    7,
    UnderlyingAsset['xlm:SLT-GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP'],
    'smartlands.io',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'SLT'
  ),
  stellarToken(
    'xlm:USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX',
    'US Dollar',
    7,
    UnderlyingAsset['xlm:USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX'],
    'anchorusd.com',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'USD'
  ),
  stellarToken(
    'xlm:ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5',
    'Ethereum',
    7,
    UnderlyingAsset['xlm:ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5'],
    'stellarport.io',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'ETH'
  ),
  stellarToken(
    'xlm:WXT-GASBLVHS5FOABSDNW5SPPH3QRJYXY5JHA2AOA2QHH2FJLZBRXSG4SWXT',
    'Wirex Token',
    7,
    UnderlyingAsset['xlm:WXT-GASBLVHS5FOABSDNW5SPPH3QRJYXY5JHA2AOA2QHH2FJLZBRXSG4SWXT'],
    'wxt.wirexapp.com',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'WXT'
  ),
  terc20('terc', 'ERC Test Token', 0, '0x945ac907cf021a6bcd07852bb3b8c087051706a9', UnderlyingAsset.ERC),
  terc20('test', 'Test Mintable ERC20 Token', 18, '0x1fb879581f31687b905653d4bbcbe3af507bed37', UnderlyingAsset.TEST),
  terc20('tbst', 'Test BitGo Shield Token', 0, '0xe5cdf77835ca2095881dd0803a77e844c87483cd', UnderlyingAsset.BST),
  terc20('schz', 'SchnauzerCoin', 18, '0x050e25a2630b2aee94546589fd39785254de112c', UnderlyingAsset.SCHZ),
  terc20('tcat', 'Test CAT-20 Token', 18, '0x63137319f3a14a985eb31547370e0e3bd39b03b8', UnderlyingAsset.TCAT),
  terc20('tfmf', 'Test Formosa Financial Token', 18, '0xd8463d2f8c5b3be9de95c63b73a0ae4c79423452', UnderlyingAsset.FMF),
  tstellarToken(
    'txlm:BST-GBQTIOS3XGHB7LVYGBKQVJGCZ3R4JL5E4CBSWJ5ALIJUHBKS6263644L',
    'BitGo Shield Token',
    7,
    UnderlyingAsset['txlm:BST-GBQTIOS3XGHB7LVYGBKQVJGCZ3R4JL5E4CBSWJ5ALIJUHBKS6263644L'],
    'bitgo.com',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'BST'
  ),
  tstellarToken(
    'txlm:TST-GBQTIOS3XGHB7LVYGBKQVJGCZ3R4JL5E4CBSWJ5ALIJUHBKS6263644L',
    'BitGo Test Token',
    7,
    UnderlyingAsset['txlm:TST-GBQTIOS3XGHB7LVYGBKQVJGCZ3R4JL5E4CBSWJ5ALIJUHBKS6263644L'],
    'bitgo.com',
    AccountCoin.DEFAULT_FEATURES,
    '',
    'TST'
  ),
  tofcerc20('ofcterc', 'ERC Test Token', 0, UnderlyingAsset.ERC),
  ofcerc20('ofcerc', 'ERC Token', 0, UnderlyingAsset.ERC),
]);