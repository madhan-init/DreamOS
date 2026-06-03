import { BookOpen, Sparkles, TrendingUp, ArrowDown, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Record Dream',
      desc: 'Write everything you remember as soon as you wake up.',
      icon: <BookOpen size={32} className="mb-4" />,
      color: 'bg-[#FFDE59]', // Yellow
    },
    {
      num: '2',
      title: 'Analyze',
      desc: 'Our AI finds hidden themes, emotions, and symbols.',
      icon: <Sparkles size={32} className="mb-4" />,
      color: 'bg-primary text-white', 
    },
    {
      num: '3',
      title: 'Discover',
      desc: 'Track patterns across time and understand yourself better.',
      icon: <TrendingUp size={32} className="mb-4" />,
      color: 'bg-secondary text-white',
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 border-y-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block border-b-[4px] border-black pb-2">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative z-10 max-w-6xl mx-auto mt-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Card */}
              <div className={`neo-box ${step.color} p-8 w-full h-full relative flex flex-col`}>
                <div className="absolute -top-5 -left-5 bg-white border-[3px] border-black w-12 h-12 flex items-center justify-center font-black text-xl text-black rounded-full shadow-[2px_2px_0px_0px_#000]">
                  {step.num}
                </div>
                <div>{step.icon}</div>
                <h3 className="text-2xl font-bold uppercase mb-2">{step.title}</h3>
                <p className="font-medium text-lg border-t-2 border-current pt-4 flex-grow">
                  {step.desc}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <>
                  <div className="lg:hidden text-black absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center h-12">
                    <ArrowDown size={40} strokeWidth={3} />
                  </div>
                  <div className="hidden lg:flex text-black absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-8 items-center justify-center translate-x-1/2">
                    <ArrowRight size={48} strokeWidth={3} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
