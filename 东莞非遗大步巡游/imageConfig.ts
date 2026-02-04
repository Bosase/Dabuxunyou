
// 图片路径配置文件
// 请在根目录下创建 'photo' 文件夹，并将您的图片重命名为以下文件名

// 智能获取基础路径
// 在本地开发时，import.meta.env.BASE_URL 通常是 "/"
// 在生产环境构建时，它会变成 vite.config.ts 中设置的 "/Dabuxunyou/"

// 安全获取 env，防止在某些环境下 import.meta.env 未定义导致报错
// 如果 import.meta.env 不存在，默认为 '/Dabuxunyou/' 以适配 GitHub Pages
const meta = import.meta as any;
const BASE_URL = (meta.env && meta.env.BASE_URL) ? meta.env.BASE_URL : '/Dabuxunyou/';

// 辅助函数：处理路径拼接，避免双斜杠
const getPath = (filename: string) => {
  // 如果 BASE_URL 结尾有 / 且 filename 开头有 /，去掉一个
  const prefix = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const path = filename.startsWith('/') ? filename : `/${filename}`;
  return `${prefix}${path}`;
};

export const IMAGES = {
  // 首页背景 - 红色牌坊
  HERO_BG: getPath('photo/微信图片_20250219182001.jpg'),
  
  // 非遗板块 - 牌匾
  HERITAGE_PLAQUE: getPath('photo/微信图片_20250219182009.jpg'),
  
  // 巡游地图
  ROUTE_MAP: getPath('photo/微信图片_20250219182008.jpg'),
  
  // 画廊 / 精彩瞬间
  GALLERY: {
    DRAGON: getPath('photo/微信图片_20250219182004.jpg'),    // 舞龙
    PRAYING: getPath('photo/微信图片_20250219182002.jpg'),   // 老人祈福
    INCENSE: getPath('photo/微信图片_20250219182003.jpg'),   // 香火
    PIAO_SE: getPath('photo/微信图片_20250219182006.jpg'),   // 飘色小孩
    FLOAT: getPath('photo/微信图片_20250219182005.jpg'),     // 蛇年花车
    PARADE: getPath('photo/微信图片_20250219182007.jpg'),    // 巡游队伍
  }
};
