import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary" ref={ref}>
      <div className="container-custom mx-auto px-6">
        <div className="mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-600">
          <span className="inline-block font-sans font-semibold text-primary text-[12px] tracking-[3px] uppercase mb-4">
            ABOUT US
          </span>
          <h2 className="font-serif font-bold text-foreground text-[clamp(28px,4vw,42px)] leading-tight max-w-2xl">
            We help growing businesses stop wasting time on manual work.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 scroll-animate opacity-0 translate-y-8 transition-all duration-600 delay-100">
            <p className="font-sans font-normal text-foreground/80 text-[16px] leading-[1.8]">
              Most small businesses and startups reach a point where spreadsheets stop being enough. Data is scattered. Reports take hours to compile. Processes that should be automatic are still done by hand. Teams are working hard, but the tools aren't keeping up.
            </p>
            <p className="font-sans font-normal text-foreground/80 text-[16px] leading-[1.8]">
              That's the gap we exist to close. We specialise in building business dashboards, process automation, and web solutions for businesses that are growing and need systems to match. We don't build bloated, overengineered solutions. We build practical, reliable systems that your team can actually use, starting from day one.
            </p>
            <h2 className="font-serif font-bold text-foreground/95 text-[25px] leading-[1.8]">
              If your business is growing and your systems are not keeping up, we'd like to talk.
            </h2>
            <p className="font-sans font-normal text-primary text-[14px] mt-2">
              Based in Bangalore, India. Available for remote engagements across India.
            </p>
          </div>

          <div className="bg-foreground rounded-xl p-9 scroll-animate opacity-0 translate-y-8 transition-all duration-600 delay-200 shadow-xl">
            <div className="space-y-6">
              <div className="pb-6 border-b border-white/10">
                <div className="font-serif font-bold text-primary text-[40px] leading-none mb-2">5+</div>
                <div className="font-sans font-normal text-white text-[14px]">Real-world projects delivered</div>
              </div>
              <div className="pb-6 border-b border-white/10">
                <div className="font-serif font-bold text-primary text-[40px] leading-none mb-2">2+ yrs</div>
                <div className="font-sans font-normal text-white text-[14px]">Hands-on data & operations experience</div>
              </div>
              <div>
                <div className="font-serif font-bold text-primary text-[40px] leading-none mb-2">100%</div>
                <div className="font-sans font-normal text-white text-[14px]">Focus on practical, usable solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
