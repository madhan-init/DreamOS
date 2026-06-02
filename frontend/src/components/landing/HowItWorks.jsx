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

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              {/* Card */}
              <div className={`neo-box ${step.color} p-8 w-full max-w-sm relative`}>
                <div className="absolute -top-5 -left-5 bg-white border-[3px] border-black w-12 h-12 flex items-center justify-center font-black text-xl rounded-full shadow-[2px_2px_0px_0px_#000]">
                  {step.num}
                </div>
                {step.icon}
                <h3 className="text-2xl font-bold uppercase mb-2">{step.title}</h3>
                <p className="font-medium text-lg border-t-2 border-current pt-4">
                  {step.desc}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="py-6 lg:py-0 lg:px-6 text-black">
                  <ArrowDown size={40} className="lg:hidden" strokeWidth={3} />
                  <ArrowRight size={48} className="hidden lg:block" strokeWidth={3} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
