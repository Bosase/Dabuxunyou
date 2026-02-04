
import React, { useState } from 'react';
import { SectionProps, GalleryItem } from '../types';
import { IMAGES } from '../imageConfig';

const Gallery: React.FC<SectionProps> = ({ id }) => {
  const [filter, setFilter] = useState<'all' | 'performance' | 'ritual' | 'culture'>('all');

  // Items using the centralized image config
  const items: GalleryItem[] = [
    {
      id: 1,
      title: "祥龙献瑞",
      description: "威武的金色巨龙在灯笼与人群中翻腾，寓意吉祥如意。",
      imageUrl: IMAGES.GALLERY.DRAGON,
      category: "performance"
    },
    {
      id: 2,
      title: "虔诚祈福",
      description: "村民双手合十，向神明祈求来年平安顺遂，神情庄重。",
      imageUrl: IMAGES.GALLERY.PRAYING,
      category: "ritual"
    },
    {
      id: 3,
      title: "香火鼎盛",
      description: "古庙前香烟袅袅，信众络绎不绝，传承着百年的信仰。",
      imageUrl: IMAGES.GALLERY.INCENSE,
      category: "ritual"
    },
    {
      id: 4,
      title: "飘色绝技",
      description: "“色仔”身着戏服凌空而立，展现麻涌飘色“精、巧、奇”的特点。",
      imageUrl: IMAGES.GALLERY.PIAO_SE,
      category: "performance"
    },
    {
      id: 5,
      title: "蛇年主题花车",
      description: "融合2025乙巳蛇年元素的卡通花车，展现传统民俗的现代活力。",
      imageUrl: IMAGES.GALLERY.FLOAT,
      category: "culture"
    },
    {
      id: 6,
      title: "盛大巡游",
      description: "巡游队伍浩浩荡荡经过古建地标，万人空巷，热闹非凡。",
      imageUrl: IMAGES.GALLERY.PARADE,
      category: "performance"
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.category === filter);

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif-sc font-black text-stone-900 mb-4 tracking-widest">巡游盛况 · 精彩瞬间</h2>
          <div className="w-24 h-1 bg-traditional-red mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'performance', 'ritual', 'culture'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-traditional-red text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'all' ? '全部' : cat === 'performance' ? '表演' : cat === 'ritual' ? '祭礼' : '文化'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl bg-stone-900 shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-stone-200">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback visual help if image is missing
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-stone-400 text-xs p-4 text-center">请添加图片:<br/>${item.imageUrl}</div>`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2 font-serif-sc drop-shadow-md">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium">
                  {item.description}
                </p>
                <div className="mt-4 w-10 h-[2px] bg-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
