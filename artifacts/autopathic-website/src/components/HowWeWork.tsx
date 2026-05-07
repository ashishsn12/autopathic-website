import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    num: "1",
    title: "Understanding the Process",
    description: "We learn how your current system and workflow operates."
  },
  {
    num: "2",
    title: "Identifying Problems",
    description: "We pinpoint bottlenecks, repetitive tasks, and data gaps."
  },
  {
    num: "3",
    title: "Design the Solution",
    description: "We plan a simple, practical, and scalable system that fits your team."
  },
  {
    num: "4",
    title: "Build & Implement",
    description: "We develop the solution and integrate it into your existing workflow."
  },
  {
    num: "5",
    title: "Support & Optimise",
    description: "We ensure smooth usage, monitor outcomes, and improve further as needed."
  }
];

export function HowWeWork() {
  const ref = useScrollAnimation();

  return (
    <section id="process" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container-custom mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-600">
          <span className="inline-block font-sans font-semibold text-primary text-[12px] tracking-[3px] uppercase mb-4">
            OUR PROCESS
          </span>
          <h2 className="font-serif font-bold text-foreground text-[clamp(28px,4vw,42px)] leading-tight">
            How we work with you
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-px border-t border-dashed border-primary/35 z-0" />
          
          {/* Mobile connecting line */}
          <div className="md:hidden absolute top-[20px] bottom-[20px] left-[20px] w-px border-l border-dashed border-primary/35 z-0" />

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.num} 
                className="flex md:flex-col items-start md:items-center text-left md:text-center group scroll-animate opacity-0 translate-y-8 transition-all duration-600"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold text-[18px] mb-0 md:mb-4 mr-6 md:mr-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_14px_rgba(13,148,136,0.4)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-[15px] mb-2 md:mt-2">
                    {step.title}
                  </h3>
                  <p className="font-sans font-normal text-foreground/70 text-[14px] leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
