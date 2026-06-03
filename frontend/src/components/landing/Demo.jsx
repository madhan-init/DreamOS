import { Send, Cpu, Sparkles } from 'lucide-react';

export default function Demo() {
  return (
    <section className="py-24 bg-gray-900 border-y-[3px] border-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
            See the Magic
          </h2>
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Experience how Dream OS transforms your nightly adventures into actionable insights.
          </p>
        </div>

        <div className="neo-box bg-white text-black p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            
            {/* Input Side */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full border border-black"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full border border-black"></div>
                <span className="ml-2 font-bold text-sm tracking-widest text-gray-400 uppercase">Input</span>
              </div>
              
              <div className="neo-box border-dashed border-gray-400 p-6 bg-gray-50 h-[200px] flex items-start">
                <p className="text-xl font-medium leading-relaxed italic">
                  "I was running through a forest while birds followed me."
                </p>
              </div>

              <button className="neo-button w-full bg-primary py-4 font-bold text-lg flex items-center justify-center gap-2">
                <Send size={20} />
                ANALYZE DREAM
              </button>
            </div>

            {/* AI Output Side */}
            <div className="flex-1 space-y-4 relative">
              <div className="absolute -left-[30px] top-1/2 -translate-y-1/2 hidden md:block">
                <ArrowRightIcon className="text-black" />
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <Cpu size={20} className="text-secondary" />
                <span className="font-bold text-sm tracking-widest text-gray-400 uppercase">AI Output</span>
              </div>
              
              <div className="neo-box bg-secondary p-6 h-full flex flex-col justify-center space-y-4">
                
                <div className="bg-white border-[3px] border-black p-3 shadow-[2px_2px_0px_0px_#000]">
                  <span className="block text-xs font-black uppercase text-gray-500 mb-1">Emotion</span>
                  <span className="font-bold text-lg">Curiosity</span>
                </div>

                <div className="bg-white border-[3px] border-black p-3 shadow-[2px_2px_0px_0px_#000] flex gap-4">
                  <div className="flex-1 border-r-2 border-black pr-2">
                    <span className="block text-xs font-black uppercase text-gray-500 mb-1">Themes</span>
                    <span className="font-bold">Growth, Adventure</span>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-black uppercase text-gray-500 mb-1">Symbols</span>
                    <span className="font-bold">Forest, Birds</span>
                  </div>
                </div>

                <div className="bg-primary border-[3px] border-black p-4 shadow-[2px_2px_0px_0px_#000]">
                  <div className="flex items-center gap-1 mb-1">
                    <Sparkles size={16} />
                    <span className="text-xs font-black uppercase">Interpretation</span>
                  </div>
                  <p className="font-medium text-sm leading-tight">
                    You may be exploring new opportunities and seeking guidance on a journey of personal growth.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
