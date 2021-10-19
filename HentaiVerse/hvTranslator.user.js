/* eslint-env browser */
// ==UserScript==
// @name        [HV]Translator
// @description
// @version     1.00
// @grant       none
// @author      dodying
// @namespace   https://github.com/dodying/
// @supportURL  https://github.com/dodying//UserJs/issues
// @icon        https://cdn.jsdelivr.net/gh/dodying/UserJs@master/Logo.png
// @run-at      document-end
// @include     http://alt.hentaiverse.org/*
// @include     http*://hentaiverse.org/*
// ==/UserScript==
(function () {
  const page = window.location.search;
  const pageItem = /s=Bazaar&ss=is|s=Character&ss=it|s=Bazaar&ss=ss/;

  if (pageItem.test(page)) {
    const item = {
      // 战场道具
      'Mystic Gem': '神秘宝石',
      'Health Gem': '生命宝石',
      'Mana Gem': '魔力宝石',
      'Spirit Gem': '灵力宝石',
      11191: '生命药水',
      'Health Draught': '生命药水',
      11195: '生命药剂',
      'Health Potion': '生命药剂',
      11199: '生命万能药',
      'Health Elixir': '生命万能药',
      11291: '魔力药水',
      'Mana Draught': '魔力药水',
      11295: '魔力药剂',
      'Mana Potion': '魔力药剂',
      11299: '魔力万能药',
      'Mana Elixir': '魔力万能药',
      11391: '灵力药水',
      'Spirit Draught': '灵力药水',
      11395: '灵力药剂',
      'Spirit Potion': '灵力药剂',
      11399: '灵力万能药',
      'Spirit Elixir': '灵力万能药',
      11401: '能量饮料',
      'Energy Drink': '能量饮料',
      11501: '终极万能药',
      'Last Elixir': '终极万能药',
      // 'Caffeinated Candy':           '咖啡因糖果',
      12101: '火属性附魔',
      'Infusion of Flames': '火属性附魔',
      12201: '冰属性附魔',
      'Infusion of Frost': '冰属性附魔',
      12301: '雷属性附魔',
      'Infusion of Lightning': '雷属性附魔',
      12401: '风属性附魔',
      'Infusion of Storms': '风属性附魔',
      12501: '圣属性附魔',
      'Infusion of Divinity': '圣属性附魔',
      12601: '暗属性附魔',
      'Infusion of Darkness': '暗属性附魔',
      13101: '迅捷卷轴',
      'Scroll of Swiftness': '迅捷卷轴',
      13111: '防护卷轴',
      'Scroll of Protection': '防护卷轴',
      13199: '化身卷轴',
      'Scroll of the Avatar': '化身卷轴',
      13201: '吸收卷轴',
      'Scroll of Absorption': '吸收卷轴',
      13211: '幻影卷轴',
      'Scroll of Shadows': '幻影卷轴',
      13221: '生命卷轴',
      'Scroll of Life': '生命卷轴',
      13299: '神之卷轴',
      'Scroll of the Gods': '神之卷轴',
      19111: '花瓶',
      'Flower Vase': '花瓶',
      19131: '泡泡糖',
      'Bubble-Gum': '泡泡糖',
      20001: '文物 - 旧世界文物',
      'Precursor Artifact': '文物 - 旧世界文物',
      30016: '奖杯 - (头目级) 人熊猪的尾巴',
      'ManBearPig Tail': '奖杯 - (头目级) 人熊猪的尾巴',
      30017: '奖杯 - (头目级) 安提阿的神圣手榴弹',
      'Holy Hand Grenade of Antioch': '奖杯 - (头目级) 安提阿的神圣手榴弹',
      30018: '奖杯 - (头目级) 猫人族的花',
      'Mithra&#039;s Flower': '奖杯 - (头目级) 猫人族的花',
      30019: '奖杯 - (头目级) 戴立克音箱',
      'Dalek Voicebox': '奖杯 - (头目级) 戴立克音箱',
      30020: '奖杯 - (传奇级) 一绺蓝发',
      'Lock of Blue Hair': '奖杯 - (传奇级) 一绺蓝发',
      30021: '奖杯 - (传奇级) 兔女郎装',
      'Bunny-Girl Costume': '奖杯 - (传奇级) 兔女郎装',
      30022: '奖杯 - (传奇级) 雏人形',
      'Hinamatsuri Doll': '奖杯 - (传奇级) 雏人形',
      30023: '奖杯 - (传奇级) 破碎的眼镜',
      'Broken Glasses': '奖杯 - (传奇级) 破碎的眼镜',
      30024: '奖杯 - (神级) 黑色Ｔ恤',
      'Black T-Shirt': '奖杯 - (神级) 黑色Ｔ恤',
      30030: '奖杯 - (神级) 树苗',
      Sapling: '奖杯 - (神级) 树苗',
      30031: '奖杯 - (神级) 独角兽的角',
      'Unicorn Horn': '奖杯 - (神级) 独角兽的角',
      30032: '奖杯 - (神级) 面条般的附肢',
      'Noodly Appendage': '奖杯 - (神级) 面条般的附肢',
      // 30034:                         '奖杯 - (神级) 圣诞袜小礼物',
      // 'Stocking Stuffers':           '奖杯 - (神级) 圣诞袜小礼物',
      // 30035:                         '奖杯 - (特殊) 天菠拉的盒子',
      // 'Tenbora&#039;s Box':          '奖杯 - (特殊) 天菠拉的盒子',
      48001: '灵魂断片',
      'Soul Fragment': '灵魂断片',
      50001: '力量水晶',
      'Crystal of Vigor': '力量水晶',
      50002: '灵巧水晶',
      'Crystal of Finesse': '灵巧水晶',
      50003: '敏捷水晶',
      'Crystal of Swiftness': '敏捷水晶',
      50004: '体质水晶',
      'Crystal of Fortitude': '体质水晶',
      50005: '智力水晶',
      'Crystal of Cunning': '智力水晶',
      50006: '感知水晶',
      'Crystal of Knowledge': '感知水晶',
      50011: '火焰水晶',
      'Crystal of Flames': '火焰水晶',
      50012: '冰冻水晶',
      'Crystal of Frost': '冰冻水晶',
      50013: '雷之水晶',
      'Crystal of Lightning': '雷之水晶',
      50014: '风之水晶',
      'Crystal of Tempest': '风之水晶',
      50015: '神圣水晶',
      'Crystal of Devotion': '神圣水晶',
      50016: '暗黑水晶',
      'Crystal of Corruption': '暗黑水晶',
      51001: '怪物口粮',
      'Monster Chow': '怪物口粮',
      51002: '怪物食品',
      'Monster Edibles': '怪物食品',
      51003: '怪物料理',
      'Monster Cuisine': '怪物料理',
      51011: '快乐药丸',
      'Happy Pills': '快乐药丸',
      60001: '素材 - 低阶 布料',
      'Low-Grade Cloth': '素材 - 低阶 布料',
      60002: '素材 - 中阶 布料',
      'Mid-Grade Cloth': '素材 - 中阶 布料',
      60003: '素材 - 高阶 布料',
      'High-Grade Cloth': '素材 - 高阶 布料',
      60004: '素材 - 低阶 皮革',
      'Low-Grade Leather': '素材 - 低阶 皮革',
      60005: '素材 - 中阶 皮革',
      'Mid-Grade Leather': '素材 - 中阶 皮革',
      60006: '素材 - 高阶 皮革',
      'High-Grade Leather': '素材 - 高阶 皮革',
      60007: '素材 - 低阶 金属',
      'Low-Grade Metals': '素材 - 低阶 金属',
      60008: '素材 - 中阶 金属',
      'Mid-Grade Metals': '素材 - 中阶 金属',
      60009: '素材 - 高阶 金属',
      'High-Grade Metals': '素材 - 高阶 金属',
      60010: '素材 - 低阶 木材',
      'Low-Grade Wood': '素材 - 低阶 木材',
      60011: '素材 - 中阶 木材',
      'Mid-Grade Wood': '素材 - 中阶 木材',
      60012: '素材 - 高阶 木材',
      'High-Grade Wood': '素材 - 高阶 木材',
      60051: '素材 - 废弃物 布料',
      'Scrap Cloth': '素材 - 废弃物 布料',
      60052: '素材 - 废弃物 皮革',
      'Scrap Leather': '素材 - 废弃物 皮革',
      60053: '素材 - 废弃物 金属',
      'Scrap Metal': '素材 - 废弃物 金属',
      60054: '素材 - 废弃物 木材',
      'Scrap Wood': '素材 - 废弃物 木材',
      60071: '素材 - 能量元件',
      'Energy Cell': '素材 - 能量元件',
      60101: '罕见素材 - 相态铠甲',
      'Crystallized Phazon': '罕见素材 - 相态铠甲',
      60102: '罕见素材 - 暗影铠甲',
      'Shade Fragment': '罕见素材 - 暗影铠甲',
      60104: '罕见素材 - 动力甲',
      'Repurposed Actuator': '罕见素材 - 动力甲',
      60105: '罕见素材 - 原力盾',
      'Defense Matrix Modulator': '罕见素材 - 原力盾',
      60201: '黏合剂 - 基础物理伤害',
      'Binding of Slaughter': '黏合剂 - 基础物理伤害',
      60202: '黏合剂 - 物理命中率',
      'Binding of Balance': '黏合剂 - 物理命中率',
      60203: '黏合剂 - 基础魔法伤害',
      'Binding of Destruction': '黏合剂 - 基础魔法伤害',
      60204: '黏合剂 - 魔法命中率',
      'Binding of Focus': '黏合剂 - 魔法命中率',
      60205: '黏合剂 - 物理缓伤',
      'Binding of Protection': '黏合剂 - 物理缓伤',
      60206: '黏合剂 - 回避率',
      'Binding of the Fleet': '黏合剂 - 回避率',
      60207: '黏合剂 - 格挡率',
      'Binding of the Barrier': '黏合剂 - 格挡率',
      60208: '黏合剂 - 招架率',
      'Binding of the Nimble': '黏合剂 - 招架率',
      60209: '黏合剂 - 元素魔法熟练度',
      'Binding of the Elementalist': '黏合剂 - 元素魔法熟练度',
      60210: '黏合剂 - 神圣魔法熟练度',
      'Binding of the Heaven-sent': '黏合剂 - 神圣魔法熟练度',
      60211: '黏合剂 - 禁断魔法熟练度',
      'Binding of the Demon-fiend': '黏合剂 - 禁断魔法熟练度',
      60212: '黏合剂 - 贬抑魔法熟练度',
      'Binding of the Curse-weaver': '黏合剂 - 贬抑魔法熟练度',
      60213: '黏合剂 - 辅助魔法熟练度',
      'Binding of the Earth-walker': '黏合剂 - 辅助魔法熟练度',
      60215: '黏合剂 - 火属性咒语伤害',
      'Binding of Surtr': '黏合剂 - 火属性咒语伤害',
      60216: '黏合剂 - 冰属性咒语伤害',
      'Binding of Niflheim': '黏合剂 - 冰属性咒语伤害',
      60217: '黏合剂 - 雷属性咒语伤害',
      'Binding of Mjolnir': '黏合剂 - 雷属性咒语伤害',
      60218: '黏合剂 - 风属性咒语伤害',
      'Binding of Freyr': '黏合剂 - 风属性咒语伤害',
      60219: '黏合剂 - 圣属性咒语伤害',
      'Binding of Heimdall': '黏合剂 - 圣属性咒语伤害',
      60220: '黏合剂 - 暗属性咒语伤害',
      'Binding of Fenrir': '黏合剂 - 暗属性咒语伤害',
      60221: '黏合剂 - 敲击缓伤',
      'Binding of Dampening': '黏合剂 - 敲击缓伤',
      60222: '黏合剂 - 砍击缓伤',
      'Binding of Stone-skin': '黏合剂 - 砍击缓伤',
      60223: '黏合剂 - 刺击缓伤',
      'Binding of Deflection': '黏合剂 - 刺击缓伤',
      60224: '黏合剂 - 火属性缓伤',
      'Binding of the Fire-eater': '黏合剂 - 火属性缓伤',
      60225: '黏合剂 - 冰属性缓伤',
      'Binding of the Frost-born': '黏合剂 - 冰属性缓伤',
      60226: '黏合剂 - 雷属性缓伤',
      'Binding of the Thunder-child': '黏合剂 - 雷属性缓伤',
      60227: '黏合剂 - 风属性缓伤',
      'Binding of the Wind-waker': '黏合剂 - 风属性缓伤',
      60228: '黏合剂 - 圣属性缓伤',
      'Binding of the Thrice-blessed': '黏合剂 - 圣属性缓伤',
      60229: '黏合剂 - 暗属性缓伤',
      'Binding of the Spirit-ward': '黏合剂 - 暗属性缓伤',
      60230: '黏合剂 - 力量',
      'Binding of the Ox': '黏合剂 - 力量',
      60231: '黏合剂 - 灵巧',
      'Binding of the Raccoon': '黏合剂 - 灵巧',
      60232: '黏合剂 - 敏捷',
      'Binding of the Cheetah': '黏合剂 - 敏捷',
      60233: '黏合剂 - 体质',
      'Binding of the Turtle': '黏合剂 - 体质',
      60234: '黏合剂 - 智力',
      'Binding of the Fox': '黏合剂 - 智力',
      60235: '黏合剂 - 感知',
      'Binding of the Owl': '黏合剂 - 感知',
      60236: '黏合剂 - 魔法缓伤',
      'Binding of Warding': '黏合剂 - 魔法缓伤',
      60237: '黏合剂 - 抵抗率',
      'Binding of Negation': '黏合剂 - 抵抗率',
      60238: '黏合剂 - 物理暴击率',
      'Binding of Isaac': '黏合剂 - 物理暴击率',
      60239: '黏合剂 - 魔法暴击率',
      'Binding of Friendship': '黏合剂 - 魔法暴击率',
      60301: '强化剂 - Wispy',
      'Wispy Catalyst': '强化剂 - Wispy',
      60302: '强化剂 - Diluted',
      'Diluted Catalyst': '强化剂 - Diluted',
      60303: '强化剂 - Regular',
      'Regular Catalyst': '强化剂 - Regular',
      60304: '强化剂 - Robust',
      'Robust Catalyst': '强化剂 - Robust',
      60305: '强化剂 - Vibrant',
      'Vibrant Catalyst': '强化剂 - Vibrant',
      60306: '强化剂 - Coruscating',
      'Coruscating Catalyst': '强化剂 - Coruscating',
      61001: '碎片 - 虚空探索者的祝福',
      'Voidseeker Shard': '碎片 - 虚空探索者的祝福',
      61101: '碎片 - 弥漫的以太',
      'Aether Shard': '碎片 - 弥漫的以太',
      61501: '碎片 - 轻如羽毛',
      'Featherweight Shard': '碎片 - 轻如羽毛',
      65001: '碎片 - 失忆碎片',
      'Amnesia Shard': '碎片 - 失忆碎片',
      // 70001:                         '珍藏品 - 暮光闪闪的公仔',
      // 'Twilight Sparkle Figurine':   '珍藏品 - 暮光闪闪的公仔',
      // 70002:                         '珍藏品 - 云宝黛西的公仔',
      // 'Rainbow Dash Figurine':       '珍藏品 - 云宝黛西的公仔',
      // 70003:                         '珍藏品 - 苹果杰克的公仔',
      // 'Applejack Figurine':          '珍藏品 - 苹果杰克的公仔',
      70004: '珍藏品 - 小蝶的公仔',
      'Fluttershy Figurine': '珍藏品 - 小蝶的公仔',
      // 70005:                         '珍藏品 - 萍琪的公仔',
      // 'Pinkie Pie Figurine':         '珍藏品 - 萍琪的公仔',
      // 70006:                         '珍藏品 - 瑞瑞的公仔',
      // 'Rarity Figurine':             '珍藏品 - 瑞瑞的公仔',
      // 70007:                         '珍藏品 - 崔克茜的公仔',
      // 'Trixie Figurine':             '珍藏品 - 崔克茜的公仔',
      // 70008:                         '珍藏品 - 塞拉斯提娅公主的公仔',
      // 'Princess Celestia Figurine':  '珍藏品 - 塞拉斯提娅公主的公仔',
      // 70009:                         '珍藏品 - 露娜公主的公仔',
      // 'Princess Luna Figurine':      '珍藏品 - 露娜公主的公仔',
      // 70010:                         '珍藏品 - 小萍花的公仔',
      // 'Apple Bloom Figurine':        '珍藏品 - 小萍花的公仔',
      // 70011:                         '珍藏品 - 飞板露的公仔',
      // 'Scootaloo Figurine':          '珍藏品 - 飞板露的公仔',
      // 70012:                         '珍藏品 - 甜贝儿的公仔',
      // 'Sweetie Belle Figurine':      '珍藏品 - 甜贝儿的公仔',
      // 70013:                         '珍藏品 - 大麦克的公仔',
      // 'Big Macintosh Figurine':      '珍藏品 - 大麦克的公仔',
      70014: '珍藏品 - 爆火的公仔',
      'Spitfire Figurine': '珍藏品 - 爆火的公仔',
      // 70015:                         '珍藏品 - 小呆的公仔',
      // 'Derpy Hooves Figurine':       '珍藏品 - 小呆的公仔',
      // 70016:                         '珍藏品 - 天琴心弦的公仔',
      // 'Lyra Heartstrings Figurine':  '珍藏品 - 天琴心弦的公仔',
      // 70017:                         '珍藏品 - 奥塔维亚的公仔',
      // 'Octavia Figurine':            '珍藏品 - 奥塔维亚的公仔',
      // 70018:                         '珍藏品 - 泽科拉的公仔',
      // 'Zecora Figurine':             '珍藏品 - 泽科拉的公仔',
      // 70019:                         '珍藏品 - 车厘子的公仔',
      // 'Cheerilee Figurine':          '珍藏品 - 车厘子的公仔',
      // 70020:                         '珍藏品 - 维尼尔的公仔',
      // 'Vinyl Scratch Figurine':      '珍藏品 - 维尼尔的公仔',
      // 70021:                         '珍藏品 - 天马无畏的公仔',
      // 'Daring Do Figurine':          '珍藏品 - 天马无畏的公仔',
      // 70022:                         '珍藏品 - 神秘博士的公仔',
      // 'Doctor Whooves Figurine':     '珍藏品 - 神秘博士的公仔',
      // 70023:                         '珍藏品 - 酸梅酒的公仔',
      // 'Berry Punch Figurine':        '珍藏品 - 酸梅酒的公仔',
      // 70024:                         '珍藏品 - 糖糖的公仔',
      // 'Bon-Bon Figurine':            '珍藏品 - 糖糖的公仔',
      // 70025:                         '珍藏品 - 毛毛小马的公仔',
      // 'Fluffle Puff Figurine':       '珍藏品 - 毛毛小马的公仔',
      // 70026:                         '珍藏品 - 天使兔的公仔',
      // 'Angel Bunny Figurine':        '珍藏品 - 天使兔的公仔',
      70102: '珍藏品 - 甘米的公仔',
      'Gummy Figurine': '珍藏品 - 甘米的公仔',
    };
    const text = [
      '.itemlist :before{font-size:9pt!important;}',
      'div[id^="ikey_"]:before{font-size:12pt!important;}',
    ];
    const hide = [];
    for (const i in item) {
      hide.push(`div[onmouseover*="${i}"]`);
      text.push(`div[onmouseover*="${i}"]::before{content:"${item[i]}";}`);
    }
    text.push(`${hide.join(',')}{font-size:0px;}`);
    text.push(`${hide.join(' *,')} *{font-size:0px;}`);
    addStyle(text.join(''));
  }
}());

function addStyle(text) {
  const style = document.createElement('style');
  style.textContent = text;
  document.head.appendChild(style);
}
