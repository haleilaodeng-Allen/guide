/* =========================================================================
   guide-data.js  —  普吉岛攻略站数据
   结构: 城市 → 板块(fine-dining / experience / cafe-club) → 条目 → 媒体
   说明:
   - 图片路径自动从 folder + 文件名拼出, 不必手写完整 URL
   - media 数组里每项用 type 区分: 'image' | 'gif' | 'video'
   - 文字字段(tagline / body)可有可无, 缺省则不显示
   - cover 的 pos 控制封面图显示区域(object-position), 如 'center' / 'bottom' / '50% 70%'
   ========================================================================= */

const GUIDE = {
  city: {
    id: 'phuket',
    name: '普吉岛',
    nameEn: 'PHUKET',
    tagline: '怎么玩，玩什么 — 一份本地人的私藏清单',
  },

  /* 三个板块。section 页用 cover 当大卡背景图 */
  sections: [
    {
      id: 'fine-dining',
      name: 'Fine Dining',
      nameCn: '精致餐饮',
      tagline: '海风、落日与一桌讲究',
      cover: 'images/phuket/covers/fine-dining.jpg',
      pos: 'center',
    },
    {
      id: 'experience',
      name: 'Experience',
      nameCn: '在地体验',
      tagline: '把普吉岛过成自己的故事',
      cover: 'images/phuket/covers/experience.jpg',
      pos: '50% 60%',
    },
    {
      id: 'cafe-club',
      name: 'Cafe & Club',
      nameCn: '咖啡与微醺',
      tagline: '从清晨手冲到午夜霓虹',
      cover: 'images/phuket/covers/cafe-club.jpg',
      pos: '50% 60%',
    },
  ],

  /* 每个板块下的条目。先填 Fine Dining 两个示例, 其余板块结构相同 */
  items: {
    'fine-dining': [
      {
        id: 'baba-nest',
        title: 'Baba Nest',
        subtitle: '悬崖顶的 360° 落日餐厅',
        folder: 'images/phuket/fine-dining/baba-nest',
        cover: '1.jpg',                 // 瀑布流封面用的那张
        coverPos: 'center',
        media: [                        // 详情页左侧轮播, 图/视频混排
          { type: 'image', file: '1.jpg' },
          { type: 'image', file: '2.jpg' },
          { type: 'image', file: '3.jpg' },
          // { type: 'video', file: 'tour.mp4' },   // 示例: 想放视频就这样加
        ],
        tagline: 'Sri Panwa 顶端，脚下是整片安达曼海',
        body:
          '号称全普吉最难订的位子。餐厅建在 Sri Panwa 度假村的最高处，' +
          '一张张小桌沿着无边水池铺开，日落时分整片安达曼海被染成金色。\n\n' +
          '提供一套地中海与泰式融合的 set menu，分量精致。建议提前一到两周订位，' +
          '挑日落前一小时入座，先点一杯气泡看天色变化，再开始上菜。\n\n' +
          '人均约 3,500–4,500 泰铢。着装偏正式，凉鞋拖鞋会被婉拒。',
      },
      {
        id: 'pru',
        title: 'PRU',
        subtitle: '普吉唯一米其林一星',
        folder: 'images/phuket/fine-dining/pru',
        cover: '1.jpg',
        coverPos: 'center',
        media: [
          { type: 'image', file: '1.jpg' },
          { type: 'image', file: '2.jpg' },
        ],
        tagline: 'Plant · Raise · Understand — 从自家农场到餐桌',
        body:
          'PRU 是普吉岛目前唯一摘得米其林一星的餐厅，名字取自 ' +
          '“Plant, Raise, Understand”。食材大多来自餐厅自营的农场，' +
          '强调从土地到餐桌的完整链条。\n\n' +
          '主厨的 tasting menu 随季节更换，摆盘极具艺术感。' +
          '位于 Trisara 度假村内，环境安静私密，适合纪念日或重要的一餐。',
      },
    ],

    /* experience / cafe-club 暂留空, 结构与上面相同, 以后照样填 */
    'experience': [],
    'cafe-club': [],
  },
};
