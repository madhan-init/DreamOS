import { Book, BrainCircuit, Search, LineChart, Lock, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'DREAM JOURNAL',
      desc: 'Store dreams forever. Catch and diagnose patterns the instant they occur.',
      icon: <Book size={24} className="text-black" />,
      color: 'bg-[#ef4444]' // Red
    },
    {
      title: 'AI ANALYSIS',
      desc: 'Get instant interpretations. Uncover hidden meanings and emotions.',
      icon: <BrainCircuit size={24} className="text-black" />,
      color: 'bg-[#22c55e]' // Green
    },
    {
      title: 'SEARCH',
      desc: 'Find dreams instantly. Search by keywords, emotions, or themes.',
      icon: <Search size={24} className="text-black" />,
      color: 'bg-[#a855f7]' // Purple
    },
    {
      title: 'INSIGHTS',
      desc: 'Track recurring themes. Visualize your dream data over time.',
      icon: <LineChart size={24} className="text-black" />,
      color: 'bg-[#06b6d4]' // Cyan
    },
    {
      title: 'PRIVATE',
      desc: 'Your dreams stay yours. Secured with enterprise-grade encryption.',
      icon: <Lock size={24} className="text-black" />,
      color: 'bg-[#eab308]' // Yellow
    },
    {
      title: 'MOBILE FRIENDLY',
      desc: 'Capture dreams anywhere. Works perfectly on all your devices.',
      icon: <Smartphone size={24} className="text-black" />,
      color: 'bg-[#f97316]' // Orange
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#111111] text-[#f4f4eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="bg-[#06b6d4] text-black font-bold text-xs tracking-widest px-3 py-1 mb-8 uppercase">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            Everything you need to <br />
            <span className="text-[#06b6d4]">understand your dreams</span>
          </h2>
          <p className="text-gray-400 font-medium text-lg max-w-2xl mt-4">
            A complete toolkit for modern dreamers who want to uncover hidden meanings and refuse to forget.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#f4f4eb]/20">
          {features.map((feature, idx) => (
            <div key={idx} className="border-r border-b border-[#f4f4eb]/20 group relative">
              {/* Card Content */}
              <div className="h-full w-full p-8 bg-[#111111] border-[2px] border-transparent group-hover:border-[#f4f4eb] transition-all duration-200 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_#ef4444] z-10 relative flex flex-col">
                
                {/* Icon Block */}
                <div className={`w-12 h-12 flex items-center justify-center border-2 border-black mb-8 ${feature.color}`}>
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
