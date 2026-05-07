import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, Phone, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: "b7f63a49-83ca-4403-86fc-083f42174274", // ← paste your key here
      name: formData.get("name"),
      business: formData.get("business"),
      help: formData.get("help"),
      message: formData.get("message"),
      subject: "New enquiry from AutoPathic website",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-foreground text-white" ref={ref}>
      <div className="container-custom mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-600">
          <h2 className="font-serif font-bold text-white text-[clamp(20px,3.5vw,44px)] leading-tight mb-6 md:whitespace-nowrap">
            Let's fix what's slowing your business down
          </h2>
          <p className="font-sans font-normal text-white/70 text-[17px] leading-[1.6] max-w-[560px] mx-auto">
            Drop us a message or book a free 20-minute call — no pitch, just a conversation about what you need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Form */}
          <div className="w-full lg:w-[55%] scroll-animate opacity-0 translate-y-8 transition-all duration-600 delay-100">
            {submitted ? (
              <div className="bg-white/5 border border-primary/30 rounded-xl p-8 flex flex-col items-center justify-center text-center h-[400px]">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl mb-2 text-white">Thanks!</h3>
                <p className="font-sans text-primary text-[16px]">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-sans font-medium text-white text-[14px] mb-[6px]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Priyanka V"
                    className="w-full bg-white/5 border border-white/15 rounded-[8px] text-white font-sans font-normal text-[15px] px-[16px] py-[14px] placeholder:text-white/35 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(13,148,136,0.2)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block font-sans font-medium text-white text-[14px] mb-[6px]">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    placeholder="PriyAbharanam"
                    className="w-full bg-white/5 border border-white/15 rounded-[8px] text-white font-sans font-normal text-[15px] px-[16px] py-[14px] placeholder:text-white/35 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(13,148,136,0.2)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="help" className="block font-sans font-medium text-white text-[14px] mb-[6px]">
                    What do you need help with?
                  </label>
                  <select
                    id="help"
                    name="help"
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/15 rounded-[8px] text-white font-sans font-normal text-[15px] px-[16px] py-[14px] focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(13,148,136,0.2)] transition-all appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem top 50%", backgroundSize: "0.65rem auto" }}
                  >
                    <option value="" disabled className="text-foreground">Select an option</option>
                    <option value="Business Dashboards" className="text-foreground">Business Dashboards</option>
                    <option value="Process Automation" className="text-foreground">Process Automation</option>
                    <option value="Business Websites" className="text-foreground">Business Websites</option>
                    <option value="Others" className="text-foreground">Others</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-sans font-medium text-white text-[14px] mb-[6px]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a bit about your current setup..."
                    className="w-full bg-white/5 border border-white/15 rounded-[8px] text-white font-sans font-normal text-[15px] px-[16px] py-[14px] placeholder:text-white/35 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(13,148,136,0.2)] transition-all resize-none"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white font-sans font-semibold text-[16px] px-[32px] py-[14px] rounded-md transition-all duration-300 hover:shadow-[0_0_18px_rgba(13,148,136,0.55)] hover:-translate-y-[2px] hover:bg-[#0f9f93] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                  <p className="font-sans font-normal text-white/45 text-[13px] text-center mt-4">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-[45%] scroll-animate opacity-0 translate-y-8 transition-all duration-600 delay-200">
            <h3 className="font-sans font-semibold text-white text-[16px] mb-6">
              Or reach us directly
            </h3>
            <div className="space-y-6">
              <a href="mailto:ashishsn1210@gmail.com" className="flex items-center group">
                <Mail className="w-[20px] h-[20px] text-primary shrink-0" />
                <span className="font-sans font-normal text-white text-[15px] ml-4 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                  ashishsn1210@gmail.com
                </span>
              </a>
              <a href="tel:+919986299629" className="flex items-center group">
                <Phone className="w-[20px] h-[20px] text-primary shrink-0" />
                <span className="font-sans font-normal text-white text-[15px] ml-4 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                  +91 99862 99629
                </span>
              </a>
              <a href="https://www.linkedin.com/in/ashishsn/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Linkedin className="w-[20px] h-[20px] text-primary shrink-0" />
                <span className="font-sans font-normal text-white text-[15px] ml-4 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                  linkedin.com/in/ashishsn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
