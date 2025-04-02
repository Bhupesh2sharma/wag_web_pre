"use client"
import { useState } from 'react'; // Add this import
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from './page.module.css'
import PricingSection from "@/components/PricingSection"
import ProjectFormModal from '@/components/ProjectFormModal';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // Handle form submission
    console.log(Object.fromEntries(formData));
    setShowForm(false);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        {/* Add after HeroSection */}
        <div className="overflow-hidden py-12 bg-gray-50 mx-auto">
          <div className="container mx-auto max-w-[90%] px-2">
            <div className="relative w-full">
              <div className={`${styles.infiniteSlider} flex gap-6`}>
                {/* Card 1 */}
                <div className="flex-shrink-0 w-60 card-animation">
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 z-10 opacity-40"></div>
                    <img
                      src="./1.png"
                      alt="Web Design"
                      className="w-full h-40 object-cover relative z-0"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 text-black text-shadow-default">
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex-shrink-0 w-60 card-animation">
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 z-10 opacity-40"></div>
                    <img
                      src="./2.png"
                      alt="Development"
                      className="w-full h-40 object-cover relative z-0"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 text-white">
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex-shrink-0 w-60 card-animation">
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 z-10 opacity-40"></div>
                    <img
                      src="./3.png"
                      alt="SEO"
                      className="w-full h-40 object-cover relative z-0"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 text-white">
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex-shrink-0 w-60 card-animation">
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 z-10 opacity-40"></div>
                    <img
                      src="./4.png"
                      alt="Marketing"
                      className="w-full h-40 object-cover relative z-0"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 text-white">
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="flex-shrink-0 w-60 card-animation">
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 z-10 opacity-40"></div>
                    <img
                      src="./5.png"
                      alt="Branding"
                      className="w-full h-40 object-cover relative z-0"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 text-white">
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="flex-shrink-0 w-60 card-animation">
                  <div className="overflow-hidden relative">
                    <div className="absolute inset-0 z-10"></div>
                    <img
                      src="./6.png"
                      alt="Support"
                      className="w-full h-40 object-cover relative z-0"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 text-white">
                    </div>
                  </div>
                </div>

                {/* Text after cards */}
                <div className="flex-shrink-0 w-60 flex items-center justify-center">
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    Discover More
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .infinite-slider {
              animation: slide 15s linear infinite;
            }

            .card-animation {
              transition: transform 0.5s ease;
            }

            .card-animation:hover {
              transform: scale(1.05) translateY(-10px);
            }

            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% + 6px));
              }
            }

            @media (max-width: 768px) {
              .infinite-slider {
                animation: slide 10s linear infinite;
              }
            }

            @media (min-width: 1024px) {
              .infinite-slider:hover {
                animation-play-state: paused;
              }
            }
          `}</style>
        </div>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8  relative overflow-hidden rounded-lg mb-5">
          {/* Background Text Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`flex whitespace-nowrap animate-marquee${index + 1}`}
                style={{
                  position: "absolute",
                  top: `${index * 25}%`,
                  left: 0,
                  right: 0,
                }}
              >
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className="text-8xl font-bold text-gray-100 opacity-20 mx-4"
                  >
                   
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10 rounded-lg">
            {/* Video Section - Left Side */}
            <div className="w-full md:w-1/2 transform transition-all duration-700 hover:scale-105">
              <div className="bg-gray-100 p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-lg animate-fade-in">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/YN1kq0nOhDU"
                    title="Waglogy Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
              </div>
            </div>

            {/* Success Stories - Right Side */}
<div className="w-full md:w-1/2">
  <div className="flex items-center gap-2 mb-6  animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 leading-tight mb-3 text-center md:text-left">
      Success <span className="text-blue-600">Stories</span>
    </h1>
    <svg
      className="w-6 h-6 text-green-500 animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
  <div className="space-y-6">
    {[
      {
        title: "Mudbeaver Sikkim - mudbeaversikkim.in",
        description: "Developed a comprehensive website and digital presence for Sikkim's leading construction company, resulting in 50% increase in client inquiries."
      },
      {
        title: "Maple Leaf Tours & Travels - mapleleaftourstravels.com", 
        description: "Created an innovative booking platform for a local travel agency, boosting their online bookings by 70% and improving customer engagement."
      },
      {
        title: "Sikkim Hospitality Digital Solutions",
        description: "Implemented digital ordering and reservation systems for multiple hotels and restaurants in Sikkim, improving operational efficiency by 60%."
      }
    ].map((story, index) => (
      <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
        <h4 className="font-semibold text-lg text-zinc-800 mb-2">{story.title}</h4>
        <p className="text-zinc-600">{story.description}</p>
      </div>
    ))}
  </div>
</div>

          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-80%); }
            }

            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes slide-up {
              from { 
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-marquee1 {
              animation: marquee 20s linear infinite;
              width: 200%;
            }

            .animate-marquee2 {
              animation: marquee 20s linear infinite reverse;
              width: 200%;
            }

            .animate-marquee3 {
              animation: marquee 25s linear infinite;
              width: 200%;
            }

            .animate-marquee4 {
              animation: marquee 25s linear infinite reverse;
              width: 200%;
            }

            .animate-fade-in {
              animation: fade-in 1s ease-out;
            }

            .animate-slide-up {
              animation: slide-up 0.8s ease-out forwards;
            }
          `}</style>
        </div>
</div>
<div className="w-full md:w-4/5 lg:w-full mx-auto">
  <ProcessSection />
</div>

        <ServicesSection />
        <PricingSection />
        <div className="container mx-auto py-20 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800">
            Ready to transform your ideas into reality?
          </h2>
          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. Our team is
            ready to help you achieve your goals.
          </p>
          <button
            onClick={() => {
              const form = document.createElement('form');
              form.innerHTML = `
                <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                  <div class="bg-white rounded-lg p-8 max-w-md w-full relative">
                    <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onclick="this.closest('form').remove()">
                      ✕
                    </button>
                    <h3 class="text-2xl font-bold mb-4">Tell us about your project</h3>
                    <div class="space-y-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                        <textarea name="description" rows="4" class="w-full border rounded-lg p-2" required></textarea>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Estimated Budget</label>
                        <select name="budget" class="w-full border rounded-lg p-2" required>
                          <option value="">Select budget range</option>
                          <option value="0-50000">₹0 - ₹50,000</option>
                          <option value="50000-200000">₹50,000 - ₹2,00,000</option>
                          <option value="200000-500000">₹2,00,000 - ₹5,00,000</option>
                          <option value="500000+">₹5,00,000+</option>
                        </select>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                        <input type="email" name="email" class="w-full border rounded-lg p-2" required />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" name="phone" class="w-full border rounded-lg p-2" required />
                      </div>
                      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                        Submit Project Details
                      </button>
                    </div>
                  </div>
                </div>
              `;
              
              form.onsubmit = (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                // Here you can handle the form submission
                // For example, send the data to your backend API
                console.log(Object.fromEntries(formData));
                form.remove();
                alert('Thank you! We will contact you soon.');
              };
              
              document.body.appendChild(form);
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        {showForm && (
          <ProjectFormModal 
            onClose={() => setShowForm(false)}
            onSubmit={handleSubmit}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

