
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

const slides: SlideProps[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    title: "Empowering Women",
    subtitle: "Building confidence through community support"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1621346878414-47c854e8954c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "Skill Development",
    subtitle: "Creating pathways to financial independence"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1618377385526-83108e223cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Legal Support",
    subtitle: "Ensuring justice and equality for all women"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1589558428577-44bc1c747e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Business Growth",
    subtitle: "Supporting women entrepreneurs and their ventures"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-lagori-900/90 to-lagori-700/90 z-10"></div>
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.imageUrl} 
            alt={slide.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex items-center px-4 md:px-10 z-20">
            <div className="text-white max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl animate-fade-in animate-delay-200">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
