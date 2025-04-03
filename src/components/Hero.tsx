import { useEffect, useRef } from "react";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const image = imageRef.current;
    const cta = ctaRef.current;

    if (heading && paragraph && image && cta) {
      heading.classList.add("animate-fade-in");

      setTimeout(() => {
        paragraph.classList.add("animate-fade-in");
      }, 300);

      setTimeout(() => {
        image.classList.add("animate-slide-in");
      }, 600);

      setTimeout(() => {
        cta.classList.add("animate-fade-in");
      }, 900);
    }
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-b from-sarura-50/50 to-transparent -z-10"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8">
            <div
              className="inline-flex items-center rounded-full border border-sarura-100 bg-sarura-50/50 px-4 py-1.5 text-sm font-medium text-sarura-600 mb-6 opacity-0"
              ref={headingRef}
            >
              <span className="flex h-2 w-2 rounded-full bg-sarura-500 mr-2"></span>
              Transforming Farming with Technology
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 leading-tight opacity-0"
              ref={headingRef}
            >
              Revolutionize Your{" "}
              <span className="text-sarura-500">Farming</span> with AI-Powered
              Solutions
            </h1>

            <p
              className="text-lg md:text-xl text-gray-600 max-w-lg opacity-0"
              ref={paragraphRef}
            >
              Sarura combines drone technology and artificial intelligence to
              detect plant diseases early, monitor plantations in real-time, and
              apply targeted treatments automatically.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0"
              ref={ctaRef}
            >
              <a
                href="#download"
                className="btn-hover flex items-center justify-center bg-sarura-500 text-white px-8 py-3.5 rounded-full text-base font-medium shadow-lg shadow-sarura-500/20 transition-transform hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                Download App
              </a>
              <a
                href="#features"
                className="btn-hover group flex items-center justify-center px-8 py-3.5 rounded-full text-base font-medium border border-gray-300 hover:border-sarura-500 transition-colors"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div
            className="relative h-[400px] md:h-[500px] opacity-0"
            ref={imageRef}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Circular gradient background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sarura-100 to-sarura-50/20 rounded-full"></div>

              <img
                src="https://img.freepik.com/free-photo/vineyard-france_1147-101.jpg?t=st=1742464379~exp=1742467979~hmac=fc35b9d6bd007e609644ea697813d3337c7ce421b53b8f8b94214bdaab314b9a&w=1380"
                alt="Agricultural drone monitoring green plantation fields"
                className="w-[90%] h-auto object-contain relative z-10 rounded-3xl shadow-2xl animate-float clip-[polygon(30%_10%,50%_20%,70%_10%,90%_30%,70%_50%,50%_80%,30%_60%,10%_50%)]"
              />




              {/* Decorative elements */}
              <div className="absolute top-1/4 right-0 w-24 h-24 bg-sarura-200/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-sarura-300/30 rounded-full blur-2xl"></div>

              {/* Tech rings animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[70%] border-2 border-dashed border-sarura-200/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[85%] h-[85%] border border-sarura-300/30 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
