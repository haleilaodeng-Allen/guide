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
      media:['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png'],
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
  ],

  /* ====== 普吉岛 · Experience / Cafe & Club 暂无内容（自动显示敬请期待）====== */
  /* 想加就照上面格式写：'phuket-experience': [ {...} ],  */

  /* 其它城市暂无内容，板块会自动显示“敬请期待” */
};

/* 不要改下面这行 */
const GUIDE = { sections: SECTIONS, cities: CITIES, items: ITEMS };
