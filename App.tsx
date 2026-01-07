
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { AIStylist } from './components/AIStylist';
import { AboutUs } from './components/AboutUs';
import { Blog } from './components/Blog';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { Branches } from './components/Branches';
import { Page } from './types';
import { PATIENT_TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % PATIENT_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + PATIENT_TESTIMONIALS.length) % PATIENT_TESTIMONIALS.length);
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div className="animate-fade-in">
            <Hero onCtaClick={setCurrentPage} />
            
            {/* Trusted Brands Bar */}
            <div className="py-16 bg-white border-y border-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-30 grayscale hover:opacity-60 transition-all duration-500">
                        <span className="text-2xl font-black italic tracking-tighter">RAY·BAN</span>
                        <span className="text-2xl font-black italic tracking-tighter">OAKLEY</span>
                        <span className="text-2xl font-black italic tracking-tighter">GUCCI</span>
                        <span className="text-2xl font-black italic tracking-tighter">PRADA</span>
                        <span className="text-2xl font-black italic tracking-tighter">VOGUE</span>
                    </div>
                </div>
            </div>

            <Products />
            
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-4 block">Innovation</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">Digital Mirror Tech</h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                            Finding the perfect frame should be easy. Our Gemini-powered AI Stylist analyzes your facial features to suggest frames that complement your natural geometry.
                        </p>
                        <button 
                            onClick={() => setCurrentPage(Page.AIStylist)}
                            className="bg-brand-green text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-green-dark transition-all uppercase text-xs tracking-widest"
                        >
                            Try AI Stylist
                        </button>
                    </div>
                    <div className="order-1 lg:order-2">
                         <img 
                            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1000&auto=format&fit=crop" 
                            className="w-full h-[400px] object-cover rounded-[2rem] shadow-2xl" 
                            alt="AI Mirror technology" 
                         />
                    </div>
                </div>
            </section>

            <Services />
            
            {/* Testimonials Slider - Interactive with Arrows */}
            <section className="py-32 bg-brand-green text-white text-center relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] mb-8">Testimonials</p>
                    <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-20 leading-tight">
                        What are our<br/><span className="font-extrabold">patients saying ?</span>
                    </h2>
                    
                    <div className="relative flex items-center justify-center min-h-[500px]">
                        {/* Navigation Arrows */}
                        <button 
                            onClick={prevTestimonial}
                            className="absolute left-0 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all group hidden md:block"
                        >
                            <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <div className="animate-fade-in flex flex-col items-center max-w-2xl mx-auto transition-all duration-500">
                            <div className="w-44 h-44 rounded-full border-[6px] border-white shadow-2xl overflow-hidden mb-12 transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src={PATIENT_TESTIMONIALS[activeTestimonial].image} 
                                    alt={PATIENT_TESTIMONIALS[activeTestimonial].name} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <p className="text-xl sm:text-2xl font-light italic leading-relaxed opacity-90 mb-12 min-h-[120px]">
                                "{PATIENT_TESTIMONIALS[activeTestimonial].text}"
                            </p>
                            <h4 className="text-lg font-bold uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                                {PATIENT_TESTIMONIALS[activeTestimonial].name}
                            </h4>
                        </div>

                        <button 
                            onClick={nextTestimonial}
                            className="absolute right-0 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all group hidden md:block"
                        >
                            <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots indicator */}
                    <div className="mt-12 flex justify-center space-x-3">
                        {PATIENT_TESTIMONIALS.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveTestimonial(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
          </div>
        );
      case Page.Catalog:
        return <Products />;
      case Page.Services:
        return <Services />;
      case Page.Branches:
        return <Branches />;
      case Page.About:
        return <AboutUs />;
      case Page.Blog:
        return <Blog />;
      case Page.AIStylist:
        return <AIStylist />;
      case Page.Booking:
        return <BookingForm />;
      default:
        return <Hero onCtaClick={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-brand-green selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />

      {/* Persistent Floating Button */}
      {currentPage !== Page.Booking && (
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={() => setCurrentPage(Page.Booking)}
            className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-brand-green-dark transition-all transform hover:scale-110 active:scale-95"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
