
import React from 'react';
import { SectionProps } from '../types';
import { IMAGES } from '../imageConfig';

const ParadeRoute: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 p-10 lg:p-16 bg-traditional-red text-white flex flex-col justify-center">
            <h2 className="text-3xl font-serif-sc font-black mb-6 tracking-widest uppercase">巡游路线</h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <p className="mb-10 text-white/80 leading-loose">
              巡游队伍从大步牌坊出发，环绕大步村的核心区域，途经观音祖庙、上帝古庙等多个重要地标，全长约数公里。
            </p>
            <ul className="space-y-6">
              {[
                { point: "起点: 大步牌坊", desc: "巡游队伍在此集结，鼓乐齐鸣。" },
                { point: "途径: 观音祖庙", desc: "重要的祈福祭祀点之一。" },
                { point: "必经: 上帝古庙", desc: "巡游活动的核心祭祀地点。" },
                { point: "终点: 雕塑广场", desc: "最后的主题汇演与谢神仪式。" }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gold text-gold flex items-center justify-center text-xs font-bold mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">{item.point}</h4>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-2/3 relative bg-stone-200">
            {/* Map Image */}
            <div className="relative h-full min-h-[500px] w-full group overflow-hidden">
              <img 
                src={IMAGES.ROUTE_MAP}
                alt="大步巡游地图"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://placehold.co/800x600?text=Please+Add+Map+Image';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
              
              <div className="absolute bottom-6 right-6">
                 <span className="bg-white/90 backdrop-blur text-stone-900 text-xs px-3 py-1 rounded shadow border border-stone-200">
                    点击查看大图
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParadeRoute;
