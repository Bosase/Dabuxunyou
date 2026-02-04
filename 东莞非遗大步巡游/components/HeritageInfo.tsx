
import React from 'react';
import { SectionProps } from '../types';
import { IMAGES } from '../imageConfig';

const HeritageInfo: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Plaque Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-traditional-red opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-white transform transition-transform duration-500 group-hover:scale-[1.01]">
              <img 
                src={IMAGES.HERITAGE_PLAQUE}
                alt="省级非物质文化遗产证书"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-traditional-red text-white px-4 py-2 text-sm font-bold shadow-lg">
                省级非物质文化遗产
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-gold z-0"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block border-l-4 border-traditional-red pl-4">
              <h2 className="text-3xl md:text-4xl font-serif-sc font-black text-stone-800 tracking-wider">
                百年传承 · 文化瑰宝
              </h2>
            </div>
            <p className="text-stone-600 leading-loose text-lg indent-8">
              东莞麻涌“大步巡游”起源于明末清初，已有400多年历史。每逢农历正月十九，麻涌大步村便会举行盛大的巡游活动，祭祀北帝，祈求风调雨顺、国泰民安。
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white shadow-sm border-b-2 border-gold rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-traditional-red mb-2 tracking-widest text-lg">2018年5月</h4>
                <p className="text-stone-500 text-sm">正式入选广东省级非物质文化遗产代表性项目名录。</p>
              </div>
              <div className="p-6 bg-white shadow-sm border-b-2 border-gold rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-traditional-red mb-2 tracking-widest text-lg">正月十九</h4>
                <p className="text-stone-500 text-sm">每年固定的民俗盛典，万人空巷，热闹非凡。</p>
              </div>
            </div>
            <p className="text-stone-600 leading-loose text-lg indent-8 italic bg-stone-200/50 p-6 rounded-lg border-l-2 border-stone-300">
              “大步巡游”不仅是一种宗教祭祀和民俗庆典，更是麻涌人民凝聚乡情、传承家族文化的纽带，展现了岭南水乡深厚的历史底蕴。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageInfo;
