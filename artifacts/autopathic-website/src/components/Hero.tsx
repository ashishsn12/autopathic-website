import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];
    const isMobile = window.innerWidth < 768;
    const numDots = isMobile ? 30 : 60;
    
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    class Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = 2;
      }

      update() {
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Mouse repel
        if (!isMobile) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x += (dx / dist) * force * 2;
            this.y += (dy / dist) * force * 2;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(13, 148, 136, 0.5)";
        ctx.fill();
      }
    }

    const initDots = () => {
      dots = [];
      for (let i = 0; i < numDots; i++) {
        dots.push(new Dot(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    };

    const drawLines = () => {
      if (!ctx) return;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(13, 148, 136, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.update();
        dot.draw();
      });

      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", resize);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 bg-transparent"
        style={{ pointerEvents: "none" }}
      />
      
      <div className="relative z-10 container-custom mx-auto px-6 text-center max-w-[800px]">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <span className="inline-block font-sans font-medium text-primary text-[12px] tracking-[2px] uppercase mb-6">
            Data · Dashboards · Automation · Web
          </span>
        </div>
        
        <h1 className="font-serif font-bold text-foreground text-[clamp(40px,6vw,55px)] leading-[1.1] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          The Pathway to Automate your Business <br />
          <span className="relative inline-block">
            processes with AutoPathic.
            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-primary/20 -z-10 animate-[expandWidth_1s_ease-out_0.5s_forwards] scale-x-0 origin-left"></span>
          </span>
        </h1>
        
        <p className="font-sans font-normal text-foreground/75 text-[18px] leading-[1.7] max-w-[600px] mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          We build dashboards, automate repetitive workflows, and create websites so your team spends less time on repetitive work and more time on what actually matters.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          <a
            href="#services"
            className="w-full sm:w-auto bg-primary text-white font-sans font-semibold px-[32px] py-[14px] rounded-md transition-all duration-300 hover:shadow-[0_0_18px_rgba(13,148,136,0.55)] hover:-translate-y-[2px] hover:bg-[#0f9f93]"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary font-sans font-semibold px-[32px] py-[14px] rounded-md transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_18px_rgba(13,148,136,0.55)] hover:-translate-y-[2px]"
          >
            Book a Free Call
          </a>
        </div>
      </div>

      <style>{`
        @keyframes expandWidth {
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
