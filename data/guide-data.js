/* ============================================================================
   guide-data.js  —  攻略站内容数据（多城市）
   ============================================================================
   这是整个攻略站的“内容大脑”。改这一个文件，就能加城市、加店、改文字。
   不用碰任何其它代码。

   结构三层：
     城市(cities)  →  板块(三个固定：fine-dining / experience / cafe-club)
        →  条目(items：具体的店/体验)

   ───────────────────────────────────────────────────────────────────────────
   ★ 怎么加一个新城市？
     1. 在下面 cities 数组里，复制一整块 { ... }，粘贴到你想要的位置
        （位置就是显示顺序：放前面就排前面）
     2. 改 id（英文小写、无空格，如 'bangkok'）、name（中文）、nameEn（英文大写）
     3. 这个城市就出现在首页了。它自动拥有三个板块。
     4. 往这个城市的板块里加店，见下面 items。

   ★ 怎么加一家店（条目）？
     1. 把这家店的图片放进文件夹：
          images/城市id/板块id/店的文件夹名/1.jpg  2.jpg  3.jpg ...
        例：images/phuket/fine-dining/新店名/1.jpg
     2. 在下面 items 里，找到对应 “城市id-板块id”，复制一条 { ... } 改内容
     3. media 列出这家店的图片/视频文件名即可（见示例）

   ★ media 怎么写？
     - 图片或动图：直接写文件名，如 '1.jpg'、'4.gif'（动图和图片一样处理）
     - 视频：写成对象 { video:'tour.mp4' }（仓库内）
             或外部链接 { video:'https://...' }
     例：media: ['1.jpg','2.jpg',{video:'tour.mp4'},'3.gif']

   ★ lat / lng（经纬度坐标）：地图功能用。
     从 Google 地图找到这家店 → 右键它的位置 → 复制那串数字 → 填这里。
     现在没填也不影响攻略浏览，等地图功能上线再补也行。
   ============================================================================ */

/* ---- 固定的四个板块（每个城市都一样，一般不用改）---- */
const SECTIONS = [
  { id:'fine-dining', name:'Fine Dining', tagline:'海风、落日与一桌讲究',
    cover:'images/shared/fine-dining.jpg', pos:'center' },
  { id:'experience',  name:'Experience',  tagline:'把这座城过成自己的故事',
    cover:'images/shared/experience.jpg', pos:'50% 60%' },
  { id:'cafe-club',   name:'Cafe & Club', tagline:'从清晨手冲到午夜霓虹',
    cover:'images/shared/cafe-club.jpg', pos:'50% 60%' },
  { id:'local-eats',  name:'Local Eats',  tagline:'把地道滋味吃进旅程里',
    cover:'images/shared/local-eats.jpg', pos:'center' },
];

/* ---- 城市列表（显示顺序 = 数组顺序）---- */
const CITIES = [
  { id:'phuket',    name:'普吉岛',  nameEn:'PHUKET' },
  { id:'bali',      name:'巴厘岛',  nameEn:'BALI' },
  { id:'chiangmai', name:'清迈',    nameEn:'CHIANG MAI' },
  { id:'khaolak',   name:'考拉',    nameEn:'KHAO LAK' },
  /* 以后加城市：照上面复制一行，改 id / name / nameEn 即可 */
];

/* ---- 条目内容：键名是 “城市id-板块id” ---- */
/* 没有内容的板块不用写，前台会自动显示“敬请期待” */
const ITEMS = {

  /* ====== 普吉岛 · Fine Dining ====== */
  'phuket-fine-dining': [
    {
      id:'baba-nest',
      title:'Baba Nest',
      subtitle:'悬崖顶的 360° 落日餐厅',
      folder:'images/phuket/fine-dining/baba-nest',
      cover:'1.jpg', coverPos:'center',
      media:['1.jpg','2.jpg','3.jpg'],   /* 想加视频：['1.jpg',{video:'tour.mp4'},'2.jpg'] */
      tagline:'Sri Panwa 顶端，脚下是整片安达曼海',
      lat:7.7756, lng:98.4012,           /* Baba Nest 大致坐标，示范用 */
      body:
        '号称全普吉最难订的位子。餐厅建在 Sri Panwa 度假村的最高处，' +
        '一张张小桌沿着无边水池铺开，日落时分整片安达曼海被染成金色。\n\n' +
        '提供一套地中海与泰式融合的 set menu，分量精致。建议提前一到两周订位，' +
        '挑日落前一小时入座，先点一杯气泡看天色变化，再开始上菜。\n\n' +
        '人均约 3,500–4,500 泰铢。着装偏正式，凉鞋拖鞋会被婉拒。',
    },
    {
      id:'pru',
      title:'PRU',
      subtitle:'普吉唯一米其林一星',
      folder:'images/phuket/fine-dining/pru',
      cover:'1.jpg', coverPos:'center',
      media:['1.jpg','2.jpg'],
      tagline:'Plant · Raise · Understand — 从自家农场到餐桌',
      lat:8.0142, lng:98.2960,           /* Trisara / PRU 大致坐标，示范用 */
      body:
        'PRU 是普吉岛目前唯一摘得米其林一星的餐厅，名字取自 ' +
        '“Plant, Raise, Understand”。食材大多来自餐厅自营的农场，' +
        '强调从土地到餐桌的完整链条。\n\n' +
        '主厨的 tasting menu 随季节更换，摆盘极具艺术感。' +
        '位于 Trisara 度假村内，环境安静私密，适合纪念日或重要的一餐。',
    },
    {
      id:'toh-daeng-baan-ar-jor',
      title:'Toh-Daeng by Baan Ar-Jor',
      subtitle:'近百年历史老宅里的普吉米其林风味',
      folder:'images/phuket/fine-dining/toh-daeng-baan-ar-jor',
      cover:'1.png', coverPos:'center',
      media:['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png'],
      tagline:'Michelin-recognized Phuket heritage dining in a century-old family house.',
      body:
        'Toh-Daeng by Baan Ar-Jor 位于普吉岛迈考海滩附近，是一家藏在历史老宅里的普吉风味餐厅。这里不只是吃饭的地方，更像是一座带有故事感的乡村庄园：白色老宅、红色长桌、菜园、博物馆和传统家具，让人能感受到普吉本地文化、中华元素与东南亚风情交融在一起的氛围。\n\n' +
        '这家餐厅曾多次获得米其林指南推荐，主打普吉本地食材和传统南部泰国风味。相比普通游客餐厅，它更适合安排给住在 Mai Khao、Anantara、Avani、JW Marriott、Renaissance 附近的客人。这里的优势不是“贵”，而是有历史、有环境、有故事，同时菜品价格相对友好，适合想体验普吉本地味道，又希望用餐场景有记忆点的客人。\n\n' +
        '推荐菜品：\n' +
        '炭烤安达曼海干鱿鱼配坚果甜酱\n' +
        '咸蛋酱炸鲜鱼皮\n' +
        '经典炸鸡翅\n' +
        '百年秘制脆皮面条配特制肉汁、大虾和腌大蒜\n' +
        '红咖喱配时令红毛丹和腰果烤猪肉\n' +
        '6 小时炖普吉猪肉配中草药\n' +
        '普吉岛风格煎蛋卷，可选安达曼大虾或螃蟹\n\n' +
        '适合安排：\n' +
        '适合午餐或晚餐，尤其适合住在 Mai Khao、Anantara、Avani、JW Marriott、Renaissance 附近的客人。从安纳塔拉酒店附近打车过去大约十分钟。餐厅建议提前预约，老宅内还有博物馆可参观，如果时间充裕，可以把这顿饭安排成一次“老普吉文化 + 米其林本地菜”的体验。',
    },

{
  id:'sizzlerooftop',
  title:'Sizzle Rooftop',
  subtitle:'山顶日落、牛排与安达曼海景',
  folder:'images/phuket/fine-dining/sizzlerooftop',
  cover:'1.jpg',
  coverPos:'center',
  media:[
    {video:'video.mp4'},
    '1.jpg','2.jpg','3.jpg','4.jpg',
    '5.jpg','6.jpg','7.jpg'
  ],
  tagline:'Sunset · Steak · Seafood — 不只是吃饭，是把普吉的傍晚过完整',
  lat:7.8802,
  lng:98.2762,
  body:
    'Sizzle Rooftop 位于 Avista Hideaway Phuket Patong 酒店的山顶，' +
    '离热闹的芭东不远，但视野和氛围完全是另一种感觉。这里看出去是山、海和安达曼海落日，' +
    '天色从亮变暗后，现场的灯光、音乐和鸡尾酒会让整个晚餐更有度假感。\n\n' +
    '推荐它，不是因为它有多复杂的料理概念，而是它把“看日落、喝一杯、吃一顿像样的牛排或海鲜”' +
    '放在了同一个地方。菜单主打炭烤牛排、和牛、活海鲜、龙虾和各类鸡尾酒，' +
    '比起只适合拍照的 Rooftop，这里至少正餐是可以认真吃的。\n\n' +
    '适合情侣约会、庆祝生日纪念日，或者带第一次来普吉、想吃一顿有气氛晚餐的朋友。' +
    '建议订接近日落的时间，先看海景和落日，再慢慢吃晚餐；如果只想喝一杯，也可以把它当成景观酒吧。' +
    '不过这里属于酒店 Rooftop 的价格，不适合只想随便吃一顿或特别看重性价比的人。' +
    '想要的是完整氛围、景色和一顿不容易出错的西式晚餐，选它会比较稳。',
},
{
  id:'tambu',
  title:'TAMBU',
  subtitle:'帐篷式山顶印度炭火料理',
  folder:'images/phuket/fine-dining/tambu',
  cover:'1.jpg',
  coverPos:'center',
  media:[
    {video:'video.mp4'},
    '1.jpg','2.jpg','3.jpg','4.jpg'
  ],
  tagline:'Progressive Charcoal Cuisine — 在山顶帐篷里，吃一顿有火气的印度菜',
  lat:7.8802,
  lng:98.2762,
  body:
    'TAMBU 位于 Avista Hideaway Phuket Patong 的山顶，和 Sizzle 同在一家酒店，' +
    '但风格完全不同。这里像一个搭在山上的开放式帐篷，傍晚灯光亮起来后，' +
    '有一点在度假酒店参加精致印度晚宴的感觉，环境比普通印度餐厅更特别。\n\n' +
    '它主打现代印度炭火料理，重点是香料、炭火和食材本身的香气。' +
    '不是那种一上来满桌浓重咖喱、吃几口就腻的传统印餐路线，' +
    '整体做得更精致，也比较适合第一次想认真尝试印度料理的人。\n\n' +
    '推荐它的原因，是这里不只是拍照好看，晚餐本身也有内容。' +
    '可以点炭烤类菜、海鲜、羊肉或主厨套餐，再配一杯鸡尾酒，' +
    '从日落吃到天黑，整个节奏会很舒服。\n\n' +
    '适合情侣约会、生日纪念日，或者带朋友吃一顿和普吉常见泰餐、西餐不一样的晚餐。' +
    '建议订接近日落的时间，先看景再吃饭；如果同行有人完全不能接受香料或印度风味，' +
    '最好先看菜单再决定。这里属于酒店高端餐厅价格，吃的是环境、服务和完整体验，' +
    '不是追求便宜大份量的一餐。',
},
{
id:'thailibrary',
title:'Thai Library',
subtitle:'Trisara 内的精致南部泰餐',
folder:'images/phuket/fine-dining/thailibrary',
cover:'1.jpg',
coverPos:'center',
media:[
'1.jpg','2.jpg','3.jpg',
'4.jpg','5.jpg','6.jpg'
],
tagline:'Refined Thai Favourites — 想认真吃泰餐，但不想把一晚都交给仪式感',
lat:8.0142,
lng:98.2960,
body:
'Thai Library 位于 Trisara 度假村内，和 PRU 的概念型 tasting menu 不同，' +
'这里更适合想吃一顿真正像“泰国菜”，但环境、服务和食材都更讲究的晚餐。' +
'整体是精致泰餐路线，不会为了创新把味道做得太难理解，第一次来普吉的客人也比较容易接受。\n\n' +
'菜单重点是南部泰国风味、新鲜安达曼海海鲜和本地食材。可以重点留意蟹肉、虎虾、炭烤海鲜、' +
'香料咖喱和带一点辣度的传统菜；味道会比普通酒店泰餐更有层次，但又不会像 PRU 那样需要花几个小时慢慢理解每一道菜。\n\n' +
'推荐它的原因很简单：如果客人住在 Trisara，或者想安排一顿环境安静、服务到位、' +
'又能吃到比较有品质泰餐的晚餐，Thai Library 会比去网红店排队更舒服。' +
'它适合带长辈、情侣约会、朋友聚餐，也适合不太想冒险尝试创意料理、但对用餐品质有要求的人。\n\n' +
'需要提前知道的是：这里属于度假村餐厅价格，吃的不是街边泰餐的性价比，' +
'而是食材、环境、服务和完整的晚餐体验。建议晚餐前预留一点时间在 Trisara 看海和散步，' +
'把它安排成一晚轻松但不随便的度假晚餐会更合适。',
},
{
  id:'seafiresalt',
  title:'Sea.Fire.Salt.',
  subtitle:'迈考海边的炭火海鲜与盐砖牛排',
  folder:'images/phuket/fine-dining/seafiresalt',
  cover:'1.jpg', coverPos:'center',
  media:[
    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',
    '7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'
  ],
  tagline:'Sea · Fire · Salt — 线钓海鲜、炭火与喜马拉雅盐砖',
  lat:8.1670, lng:98.2940,
  body:
    'Sea.Fire.Salt 位于安纳塔拉迈考安静的海岸边，是一间把当地海鲜、炭火与盐做成完整体验的高级海鲜餐厅。它真正值得推荐的原因，不只是海景，而是料理逻辑很清楚：线钓当地海鲜与精选牛排经炭火烤制，最后搭配来自不同产地的收尾盐，突出食材本身的鲜甜、油脂香和炭火焦香。' +
    '餐厅最有辨识度的体验，是将干式熟成牛肉放在喜马拉雅盐砖上呈现。盐砖会让牛肉在上桌后持续保温，并以轻微的矿物咸味衬托肉本身的鲜味与油脂香；它不是把牛排做得很咸，而是让肉味更集中、更有层次。' +
    '招牌菜建议从炭烤海鲜拼盘、普吉龙虾、干式熟成和牛菲力，以及适合两三人分享的 1 公斤战斧牛排中选择。前菜可配和牛牛肉塔塔或安达曼蟹浓汤；两人用餐时，建议在海鲜拼盘和牛排之间选一条主线，再搭配前菜、配菜与甜品，份量和体验最刚好。' +
    '午餐营业时间为 12:00–16:00；晚餐为 18:00–24:00，最后点单 22:00。最适合在日落后安排一晚，在迈考安静的海岸边，吃一顿有品质、也真正能吃得满足的炭火晚餐。'
},






  ],
'phuket-local-eats': [
    {
      id:'tunk-ka',
      title:'Tunk-ka Café',
      subtitle:'考朗山顶的普吉本地菜与城市日落',
      folder:'images/phuket/local-eats/tunk-ka',
      cover:'1.jpg', coverPos:'center',
      media:[
        '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg',
        '6.jpg','7.jpg','8.jpg','9.jpg'
      ],
      tagline:'Since 1973 · Khao Rang Hill · Phuket Local Cuisine',
      lat:7.8922659, lng:98.3806814,
      body:
        'Tunk-ka 是普吉镇考朗山上的老牌山顶餐厅，自 1973 年营业。它不是 Fine Dining，也不是为了复杂摆盘而来；真正特别的地方，是把普吉本地菜、山顶绿意与城市日落放在同一顿饭里。\n\n' +
        '餐厅藏在考朗山的树林之间，多层露天座位俯瞰普吉镇、查龙方向和远处的山海线。傍晚天空由金色转为蓝紫色，城市灯光慢慢亮起，是这里最值得安排的时刻。\n\n' +
        '菜单以普吉和南泰家常菜为主，适合多人分享。推荐普吉酸咖喱 Kaeng Som、椰奶蟹咖喱、炸棉鱼配芒果沙拉，以及当地常见的 Pak Liang 炒鸡蛋和虾米。不能吃辣的客人可以选择福建面 Mee Hokkien，或请餐厅调整辣度。\n\n' +
        '这里的价值不是"普吉最顶级的一顿泰餐"，而是在逛完普吉老镇后，上山吃一顿有当地味道、价格相对轻松、风景又足够特别的晚餐。建议日落前约一小时抵达，并提前预约外侧景观位。\n\n' +
        '营业时间：周二至周五 11:15–22:00；周六 11:00–22:00；周日及周一 11:15–22:00。'
    },
{
      id:'lay-maikhao',
      title:'Lay Mai Khao Seafood',
      subtitle:'沿着迈考海滩，去吃一顿真正好吃的本地海鲜',
      folder:'images/phuket/local-eats/lay-maikhao',
      cover:'1.jpg', coverPos:'center',
      media:[
        '1.jpg','2.jpg','3.jpg',
        '4.jpg','5.jpg','6.jpg'
      ],
      tagline:'Beachfront Seafood · Sunset · Local Thai Flavours',
      lat:8.1749, lng:98.2927,
      body:
        'Lay Mai Khao Seafood 是迈考海滩上一家很朴素的本地海鲜餐厅。它没有酒店餐厅的精致装修，却刚好解决了住在 JW Marriott、Anantara 或迈考海滩附近客人的一个问题：不想每天都在酒店里吃昂贵晚餐，又想在海边吃一顿真正有当地味道的泰式海鲜。\n\n' +
        '傍晚沿着海滩往北走，穿过几家简单的海边小店，最里面就是 Lay Mai Khao。这里的座位直接靠着沙滩，日落时海风很舒服，环境像当地人周末会来的海边大排档，而不是刻意设计出来的景观餐厅。\n\n' +
        '餐厅的重点是新鲜海鲜和泰式做法。推荐咖喱蟹、虾饼、酸辣海鲜汤和辣咖喱饭；冬阴功里通常不只是虾，还会有螃蟹、海虹、鱿鱼等海鲜，份量丰富，适合两三人点几道一起分享。\n\n' +
        '这里最值得推荐的，不是某一道昂贵招牌菜，而是坐在迈考安静的海边，花比酒店餐厅轻松得多的预算，吃一桌新鲜、味道直接、没有太多花哨包装的泰式海鲜。建议日落前抵达，选靠海的位置；女生傍晚用餐可准备发绳，海风会比较大。'
    },

{
      id:'thanoon-seafood',
      title:'Thanoon Seafood',
      subtitle:'萨拉辛桥旁，吃一顿有海风的南泰海鲜',
      folder:'images/phuket/local-eats/thanoon-seafood',
      cover:'1.jpg', coverPos:'center',
      media:[
        '1.jpg','2.jpg','3.jpg','4.jpg'
      ],
      tagline:'Sarasin Bridge · Fresh Seafood · Southern Thai Flavours',
      lat:8.2042922, lng:98.2983101,
      body:
        'Thanoon Seafood 在萨拉辛桥北侧的桥头，严格来说已进入攀牙一边，但从迈考过去很近。它不是精致餐厅，而是一家真正靠着海、望着大桥吃饭的本地海鲜餐厅；木质 sala、开阔海风和桥下水道的景色，让这里比普通海边排档多了一点独特的旅行感。\n\n' +
        '这里最值得推荐的，不只是常见的烤虾、螃蟹和海鲜汤，而是一些在普通泰餐厅不容易见到的南泰海鲜菜。比如炸海蝉 Chakachan Talay，外形像小型软壳蟹，炸后配辣酱；Pla Sai 小沙鱼可以整条炸得酥脆连头一起吃；还有马蹄蟹卵沙拉、泰式生蚝、虾蛄和酸辣虾酱蔬菜拼盘，味道更偏当地人会点的南部口味。\n\n' +
        '如果第一次来，不想点得太冒险，可以从烤大虾、咖喱蟹、虾饼、冬阴功和蟹肉炒饭开始；喜欢尝鲜的客人，再加一道海蝉、马蹄蟹卵沙拉或南泰酸咖喱。餐厅有活海鲜池，可以自己挑选螃蟹、虾和鱼，再决定烹饪方式。\n\n' +
        'Thanoon 最适合安排在去攀牙、考拉，或从北部回普吉的途中。建议傍晚约 17:30 前抵达，先看萨拉辛桥和海面慢慢变成金色，再点一桌海鲜慢慢吃。它的价值不在豪华装修，而在于用相对轻松的方式，吃到桥景、海风和更接近当地口味的南泰海鲜。'
    },

{
      id:'sam-chong',
      title:'Sam Chong Seafood',
      subtitle:'在攀牙湾入口的浮排上，吃一顿海鲜再进邦德岛',
      folder:'images/phuket/local-eats/sam-chong',
      cover:'1.jpg', coverPos:'center',
      media:[
        '1.jpg','2.jpg','3.jpg',
        '4.jpg','5.jpg','6.jpg',
        '7.jpg','8.jpg','9.jpg'
      ],
      tagline:'Floating Seafood · Mangrove Estuary · Phang Nga Bay Gateway',
      lat:8.336518, lng:98.4375,
      body:
        'Sam Chong Seafood 严格来说位于攀牙府 Takua Thung 的 Ban Sam Chong，不在普吉岛内；但从迈考过萨拉辛桥后继续往 Kalai 方向走，很适合被安排进一趟更深入攀牙湾的半日或一日行程。它建在 Bang Lam 河口的两座浮排上，需要沿着木栈道走到水面餐厅，眼前是红树林、渔船、长尾船和远处的石灰岩山体，不是普通海边排档能替代的场景。\n\n' +
        '这家餐厅和邦德岛的关系，比一般“离景点比较近”的餐厅更直接。它就在进入攀牙湾的水道旁，吃完午餐后，可以从这一带安排私家长尾船进入海湾，前往 Khao Tapu／Khao Phing Kan 邦德岛、Koh Panyee 水上村，或继续去红树林和海湾划船。最适合的逻辑不是专程开车来吃晚饭，而是把它作为攀牙湾出海前的一顿午餐。\n\n' +
        '菜单以新鲜海鲜和南泰口味为主，味道比酒店泰餐更直接、更有香料感。推荐先看当天的鱼和螃蟹，再选择烹饪方式；酸咖喱、蒜香或辣椒炒鱼、蟹肉炒饭、马蹄蟹卵沙拉、炸虾蛄和海鲜汤都比较有代表性。螃蟹、鱼和部分大海鲜通常按重量计价，点菜前建议先确认每公斤价格和大约份量。\n\n' +
        'Sam Chong 曾进入米其林 Bib Gourmand 名单，但它的价值不在精致摆盘，而是用一顿真实、丰盛的南泰海鲜，把进入攀牙湾的旅程自然接起来。需要注意的是，餐厅要走木栈道上浮排，长尾船经过时可能有轻微晃动；水边傍晚也可能有小飞虫。年长客人、行动不便或容易晕船的客人，建议提前考虑这一点。\n\n' +
        '建议安排：上午从迈考出发 → 在 Sam Chong 吃早午餐或午餐 → 提前确认私家长尾船、船程、国家公园费用和当天潮汐 → 进入邦德岛、Koh Panyee 与攀牙湾。这里的重点不是一顿饭，而是一种比常规大团更有当地感的攀牙湾打开方式。'
    },




  ],
'phuket-cafe-club': [
    {
      id:'yona',
      title:'Yona Beach Club',
      subtitle:'王嘉尔同款 · 海上漂浮的巨型俱乐部',
      folder:'images/phuket/cafe-club/yona',
      cover:'1.jpg', coverPos:'center',
      media:[
        '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',
        '7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'
      ],
      tagline:'World\'s Largest Floating Beach Club · Phuket',
      lat:7.9519, lng:98.2861,
      body:
        'Yona Beach Club 号称是目前全球最大的海上漂浮俱乐部，也是王嘉尔打卡过的同款，值得专程来体验一次。它停泊在普吉外海，一共三层：白天上来看海景、晒太阳、泡水，到了晚上就变成氛围超好的海上蹦迪现场。\n\n' +
        '这里分下午场和晚场。我们订的是下午场，会有专车到酒店接送到码头，再坐快艇上船。从甲板到泳池再到顶层，整片安达曼海就在脚下，日落时分尤其好看。\n\n' +
        '几个一定要提前知道的点：必须提前预订位置；码头有安检；着装有要求（不能穿洞洞鞋之类的休闲鞋）；自带的食物和饮料不能带上船，船上另有餐饮。\n\n' +
        '适合想在普吉体验海上派对、又愿意为氛围和场地买单的客人。建议根据想要的感觉选场次：想看风景、轻松一点选下午场；想要派对气氛就选晚场。'
    },
  ],

  /* ====== 普吉岛 · Experience / Cafe & Club 暂无内容（自动显示敬请期待）====== */
  /* 想加就照上面格式写：'phuket-experience': [ {...} ],  */

  /* 其它城市暂无内容，板块会自动显示“敬请期待” */
};

/* 不要改下面这行 */
const GUIDE = { sections: SECTIONS, cities: CITIES, items: ITEMS };
