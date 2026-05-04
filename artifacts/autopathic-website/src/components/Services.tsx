import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BarChart, Settings, Monitor } from "lucide-react";

export function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container-custom mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-600">
          <span className="inline-block font-sans font-semibold text-primary text-[12px] tracking-[3px] uppercase mb-4">
            WHAT WE DO
          </span>
          <h2 className="font-serif font-bold text-foreground text-[clamp(28px,4vw,42px)] leading-tight">
            Services built around your real business problems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 lg:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:border-t-3 hover:border-t-primary scroll-animate opacity-0 translate-y-8 transition-all duration-600 delay-100 flex flex-col h-full border-t-3 border-t-transparent border border-transparent">
            <div className="flex justify-between items-start mb-6">
              <BarChart size={32} className="text-primary" />
              <span className="font-sans font-semibold text-primary text-[13px] tracking-[2px]">01</span>
            </div>
            <h3 className="font-serif font-semibold text-foreground text-[22px] mb-3">Business Dashboards</h3>
            <p className="font-sans font-normal italic text-primary text-[15px] mb-4">
              Know exactly what's happening in your business — clearly, in real time
            </p>
            <p className="font-sans font-normal text-foreground/75 text-[15px] leading-[1.7] mb-8 flex-grow">
              You're probably tracking data across multiple sheets, teams, or systems. We bring everything into a single dashboard so you can track KPIs and performance without chasing numbers.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Looker Studio</span>
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Google Sheets</span>
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Power BI</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 lg:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:border-t-3 hover:border-t-primary scroll-animate opacity-0 translate-y-8 transition-all duration-600 delay-200 flex flex-col h-full border-t-3 border-t-transparent border border-transparent">
            <div className="flex justify-between items-start mb-6">
              <Settings size={32} className="text-primary" />
              <span className="font-sans font-semibold text-primary text-[13px] tracking-[2px]">02</span>
            </div>
            <h3 className="font-serif font-semibold text-foreground text-[22px] mb-3">Business Process Automation</h3>
            <p className="font-sans font-normal italic text-primary text-[15px] mb-4">
              Stop doing the same thing twice
            </p>
            <p className="font-sans font-normal text-foreground/75 text-[15px] leading-[1.7] mb-8 flex-grow">
              If your team is manually updating sheets, sending emails by hand, or generating reports one by one — that's time lost every single day. We build simple automation systems that handle this for you, so your team focuses on work that actually requires them.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Make.com</span>
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Zapier</span>
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Google Sheets</span>
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">AppSheet</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 lg:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:border-t-3 hover:border-t-primary scroll-animate opacity-0 translate-y-8 transition-all duration-600 delay-300 flex flex-col h-full border-t-3 border-t-transparent border border-transparent">
            <div className="flex justify-between items-start mb-6">
              <Monitor size={32} className="text-primary" />
              <span className="font-sans font-semibold text-primary text-[13px] tracking-[2px]">03</span>
            </div>
            <h3 className="font-serif font-semibold text-foreground text-[22px] mb-3">Business Websites</h3>
            <p className="font-sans font-normal italic text-primary text-[15px] mb-4">
              Simple websites that bring leads and clearly explain what you do
            </p>
            <p className="font-sans font-normal text-foreground/75 text-[15px] leading-[1.7] mb-8 flex-grow">
              Clean, fast, mobile-friendly websites for businesses and startups. No template bloat. A site that clearly tells visitors who you are and gets them to contact you.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">HTML / CSS / JS</span>
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Replit</span>
              <span className="bg-secondary text-foreground font-sans font-medium text-[12px] px-3 py-1 rounded-full">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
