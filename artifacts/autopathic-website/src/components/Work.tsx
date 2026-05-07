import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    num: "01",
    title: "Tool Management System",
    description: "Built for a manufacturing company to replace a paper-based tool tracking system with a fully digital, low-code application.",
    problems: [
      "No visibility of tool inventory across the floor",
      "Difficulty tracking which tools were issued or returned",
      "No approval workflow for tool requests",
      "No tracking of tool lifecycle or vendor data"
    ],
    solution: "Built an internal app using AppSheet (low-code) that digitised the entire tool tracking process — from inventory and issuance to approvals and lifecycle monitoring. Replaced scattered manual records and improved cross-team visibility.",
    impact: {
      intro: "This system helped the organization:",
      points: [
        "Reduced manual tracking of tools, saving ~60% of time every month",
        "Improved inventory visibility across the floor",
        "Prevented loss or misplacement of tools",
        "Streamlined operational workflows",
        "Maintained structured records of tool lifecycle activities"
      ]
    },
    image: "/images/project1.png",
    imageClass: "object-cover object-[2%] scale-[1] origin-top-left",
  },
  {
    num: "02",
    title: "On-Time Delivery (OTD) Performance Dashboard",
    description: "Designed to monitor delivery commitments and dispatch performance for the sales and leadership team of a manufacturing business.",
    problems: [
      "Delivery performance tracked via manual weekly spreadsheet reports",
      "Review meetings wasted time compiling data instead of analysing it",
      "Metrics were inconsistent and prone to human error"
    ],
    solution: "Built an auto-updating report that extracts data from multiple sources without human intervention. Used this as the data layer for an OTD Dashboard that consolidates order and dispatch data into a single live interface.",
    impact: {
      intro: null,
      points: [
        "Saved ~40% of the time previously spent compiling weekly reports",
        "Leadership could quickly evaluate delivery performance during weekly reviews",
        "Improved visibility on delivery performance across the organization",
        "Operational discussions shifted from data compilation to performance improvement"
      ]
    },
    image: "/images/project2.png",
    imageClass: "object-cover object-[center_12%]",
  },
  {
    num: "03",
    title: "Operations Performance Dashboard",
    description: "A real-time operations monitoring dashboard tracking production KPIs across multiple stages of a manufacturing facility.",
    problems: [
      "Production KPIs reviewed through multiple Excel sheets compiled manually each week",
      "Significant time and effort lost in data preparation",
      "No real-time view available for management decision-making"
    ],
    solution: "Built a live operations dashboard that eliminated manual report compilation and gave management real-time visibility into production performance across all stages.",
    impact: {
      intro: null,
      points: [
        "Saved ~35% of the time previously spent compiling reports and extracting key metrics",
        "Improved visibility on production data and KPIs across all stages",
        "Created a centralized platform for management to monitor key metrics in real time"
      ]
    },
    image: "/images/project3.png",
    imageClass: "object-cover object-[left_top] scale-[1] origin-top",
  }
];

export function Work() {
  const ref = useScrollAnimation();

  return (
    <section id="work" className="py-20 md:py-32 bg-secondary" ref={ref}>
      <div className="container-custom mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-600">
          <span className="inline-block font-sans font-semibold text-primary text-[12px] tracking-[3px] uppercase mb-4">
            OUR WORK
          </span>
          <h2 className="font-serif font-bold text-foreground text-[clamp(28px,4vw,42px)] leading-tight">
            Projects we've built for real businesses
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={project.num} className="scroll-animate opacity-0 translate-y-8 transition-all duration-600 relative">
                {index !== 0 && (
                  <div className="absolute -top-12 left-0 right-0 h-px bg-foreground/10" />
                )}
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Laptop Mockup */}
                  <div className="w-full lg:w-1/2 max-w-[1000px] mx-auto lg:mx-0">
                    <div className="relative z-10 w-full rounded-t-[12px] bg-[#1a1a2e] p-2 aspect-[16/10] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                      <div className="w-full h-full bg-black rounded-[6px] overflow-hidden relative group">
                        {/* Replace with your actual dashboard screenshot */}
                        <img 
                          src={project.image} 
                          alt={`${project.title} screenshot`}
                          className={`w-full h-full bg-black transition-transform duration-500 ${project.imageClass}`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'absolute inset-0 flex items-center justify-center bg-[#1a1a2e] font-sans text-white/35 text-[12px]';
                              fallback.innerText = 'Dashboard screenshot';
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full h-[8px] bg-[#2a2a3e] rounded-b-[4px] relative z-0"></div>
                    <div className="w-[80%] h-[14px] bg-[#222236] rounded-b-[10px] mx-auto relative z-0"></div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/2">
                    <span className="inline-block font-sans font-semibold text-primary text-[12px] tracking-[2px] uppercase mb-3">
                      Project {project.num}
                    </span>
                    <h3 className="font-serif font-bold text-foreground text-[clamp(22px,3vw,32px)] mb-4">
                      {project.title}
                    </h3>
                    <p className="font-sans font-normal text-foreground/80 text-[15px] leading-[1.7] mb-8">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-sans font-bold text-foreground text-[13px] uppercase tracking-[1px] mb-3">Problem</h4>
                        <ul className="space-y-2">
                          {project.problems.map((problem, i) => (
                            <li key={i} className="font-sans font-normal text-foreground/75 text-[14px] leading-[1.6] flex items-start">
                              <span className="text-primary mr-2 leading-none mt-1">●</span>
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-sans font-bold text-foreground text-[13px] uppercase tracking-[1px] mb-2">Solution</h4>
                        <p className="font-sans font-normal text-foreground/75 text-[14px] leading-[1.8]">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-sans font-bold text-foreground text-[13px] uppercase tracking-[1px] mb-2">Impact</h4>
                        {project.impact.intro && (
                          <p className="font-sans font-normal text-foreground/75 text-[14px] mb-2">
                            {project.impact.intro}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {project.impact.points.map((point, i) => (
                            <li key={i} className="font-sans font-normal italic text-primary text-[14px] leading-[1.6] flex items-start">
                              <span className="mr-2 leading-none mt-1 not-italic">●</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
