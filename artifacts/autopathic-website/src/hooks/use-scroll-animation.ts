import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
      // Also observe children with specific classes if needed, or just the parent
      const animatedChildren = currentRef.querySelectorAll(".scroll-animate");
      animatedChildren.forEach((child) => observer.observe(child));
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        const animatedChildren = currentRef.querySelectorAll(".scroll-animate");
        animatedChildren.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  return ref;
}
