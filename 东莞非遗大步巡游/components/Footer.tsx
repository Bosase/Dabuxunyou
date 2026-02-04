
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-traditional-red flex items-center justify-center text-white font-bold">
                大
              </div>
              <span className="font-serif-sc text-xl font-black tracking-widest">
                大步巡游
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-loose">
              传承麻涌文化，守护非遗精神。大步巡游作为广东省级非物质文化遗产，是东莞水乡文化的一颗璀璨明珠。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-widest text-gold">相关链接</h4>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">麻涌镇人民政府</a></li>
              <li><a href="#" className="hover:text-white transition-colors">东莞市非物质文化遗产保护中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">广东文化网</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-widest text-gold">联系我们</h4>
            <p className="text-stone-400 text-sm mb-4">如果您想了解更多关于大步巡游的信息或参与活动合作，请通过以下方式联系。</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-traditional-red transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-traditional-red transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500 text-xs tracking-widest">
            &copy; 2025 东莞非遗大步巡游文化展示馆. 版权所有.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
