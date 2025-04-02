"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const showSuccessModal = () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    const successBox = document.createElement('div');
    successBox.className = 'bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl text-center';
    successBox.innerHTML = `
      <svg class="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <h3 class="text-2xl font-bold text-zinc-800 mt-4 mb-2">Success!</h3>
      <p class="text-zinc-600 mb-6">Your project inquiry has been submitted successfully.</p>
      <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Close
      </button>
    `;
    
    modal.appendChild(successBox);
    document.body.appendChild(modal);

    const handleClose = () => {
      document.body.removeChild(modal);
    };

    successBox.querySelector('button')?.addEventListener('click', handleClose);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) handleClose();
    });
  };

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    projectDetails: string;
    budgetRange: string;
  }) => {
    try {
      // Validate form data before sending
      if (!formData.name || !formData.email || !formData.projectDetails || !formData.budgetRange) {
        throw new Error('All fields are required');
      }

      const response = await fetch('http://localhost:5000/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectDetails: formData.projectDetails,
          budgetRange: formData.budgetRange
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit project inquiry');
      }

      // Show styled success message
      showSuccessModal();
    } catch (error) {
      console.error('Error submitting project inquiry:', error);
      alert(error instanceof Error ? error.message : 'An error occurred while submitting the form');
    }
  };

  return (
    <div className="relative">
      <div className="mx-4 mt-16 rounded-lg border border-zinc-200 bg-white/80 backdrop-blur-sm shadow-lg">
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 pt-8 pb-12 md:pt-12 md:pb-16 rounded-lg">
          <div className="container mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 leading-tight mb-3">
                  Transforming Ideas Into
                  <span className="text-blue-600"> Digital Reality</span>
                </h1>
                <p className="text-base md:text-lg text-zinc-600 mb-4 max-w-xl mx-auto lg:mx-0">
                  We craft innovative digital solutions that help businesses thrive in the modern world. From web
                  development to process automation, we've got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                      
                      const form = document.createElement('div');
                      form.className = 'bg-white rounded-lg p-4 md:p-8 max-w-[90vw] md:max-w-md w-full mx-2 md:mx-4 shadow-xl';
                      form.innerHTML = `
                        <h2 class="text-2xl font-bold mb-6 text-zinc-800">Start Your Project</h2>
                        <div class="space-y-4">
                          <div>
                            <label class="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                            <input type="text" id="name" class="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                          </div>
                          <div>
                            <label class="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                          </div>
                          <div>
                            <label class="block text-sm font-medium text-zinc-700 mb-1">Project Details</label>
                            <textarea id="details" rows="4" class="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                          </div>
                          <div>
                            <label class="block text-sm font-medium text-zinc-700 mb-1">Budget Range</label>
                            <select id="budget" class="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                              <option value="">Select Budget</option>
                              <option value="₹5000-₹10000">₹5000 - ₹10000</option>
                              <option value="₹10000-₹20000">₹10000 - ₹20000</option>
                              <option value="₹20000-₹50000">₹20000 - ₹50000</option>
                              <option value="₹50000+">₹50000+</option>
                            </select>
                          </div>
                          <div class="flex justify-end space-x-3 mt-6">
                            <button id="cancel" class="px-4 py-2 text-zinc-600 hover:text-zinc-800">Cancel</button>
                            <button id="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
                          </div>
                        </div>
                      `;
                      
                      modal.appendChild(form);
                      document.body.appendChild(modal);

                      const handleFormSubmit = () => {
                        const formData = {
                          name: (document.getElementById('name') as HTMLInputElement).value.trim(),
                          email: (document.getElementById('email') as HTMLInputElement).value.trim(),
                          projectDetails: (document.getElementById('details') as HTMLTextAreaElement).value.trim(),
                          budgetRange: (document.getElementById('budget') as HTMLSelectElement).value
                        };
                        
                        // Validate form data
                        if (!formData.name || !formData.email || !formData.projectDetails || !formData.budgetRange) {
                          alert('Please fill out all fields');
                          return;
                        }
                        
                        handleSubmit(formData);
                        document.body.removeChild(modal);
                      };

                      const handleCancel = () => {
                        document.body.removeChild(modal);
                      };

                      document.getElementById('submit')?.addEventListener('click', handleFormSubmit);
                      document.getElementById('cancel')?.addEventListener('click', handleCancel);
                      modal.addEventListener('click', (e) => {
                        if (e.target === modal) handleCancel();
                      });
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Start Your Project <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    href="/services"
                    className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium py-2 px-5 rounded-lg transition-all duration-300"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[250px] md:h-[300px] w-full relative"
              >
<Image
  src="./hero.png" // Update this path to your actual image
  alt="Hero Image"
  fill
  className="object-contain mix-blend-multiply"
  priority
/>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-16 left-8 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-16 right-8 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </section>
      </div>
    </div>
  )
}

