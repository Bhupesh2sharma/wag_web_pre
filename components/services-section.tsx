"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Smartphone, Palette, Cog, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: <Code className="h-10 w-10 text-blue-600" />,
    description: "Modern, responsive websites that drive results",
    features: ["Custom Development", "Responsive Design", "SEO Optimization"],
    detailedDescription: `
      In the era of AI-powered web experiences, we create websites that are not just visually stunning but also intelligent and adaptive. Our development process incorporates the latest technologies like:
      - AI-driven content personalization
      - Machine learning-based user behavior analysis
      - Automated accessibility testing and optimization
      - Progressive Web Apps (PWAs) for native-like experiences
      - Headless CMS architectures for maximum flexibility
    
      We specialize in creating websites that leverage:
      - AI chatbots for enhanced user engagement
      - Predictive analytics for personalized user journeys
      - Automated content generation for dynamic experiences
      - Voice search optimization for future-ready interfaces
    
      Our development approach ensures your website is:
      - Optimized for Core Web Vitals and Google's ranking factors
      - Integrated with the latest AI tools and APIs
      - Scalable for future technological advancements
      - Secure against emerging cyber threats
    `,
    pricingDetails: `
      Our web development services are tailored to your specific needs, from basic websites to complex web applications. We offer flexible pricing models that can accommodate projects of any size and complexity.
    `
  },
  {
    id: "app-development",
    title: "App Development",
    icon: <Smartphone className="h-10 w-10 text-blue-600" />,
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android Apps", "Cross-platform Development", "App Maintenance", "UI/UX Design"],
    detailedDescription: `
      In the rapidly evolving mobile landscape, we create cutting-edge applications that leverage the latest technologies to deliver exceptional user experiences. Our app development process incorporates:
    
      - AI-powered features like personalized recommendations and predictive analytics
      - Machine learning models for intelligent app behavior
      - Augmented Reality (AR) and Virtual Reality (VR) integration
      - Blockchain technology for secure transactions and data management
      - IoT connectivity for seamless device integration
    
      We specialize in developing apps that utilize:
      - AI chatbots for enhanced customer engagement
      - Predictive analytics for personalized user experiences
      - Automated testing frameworks for robust performance
      - Voice recognition and natural language processing
      - Advanced security protocols including biometric authentication
    
      Our development approach ensures your app is:
      - Optimized for both iOS and Android platforms
      - Integrated with the latest AI/ML technologies
      - Scalable for future feature additions
      - Secure against emerging cyber threats
      - Compliant with all app store guidelines and regulations
    
      We also provide ongoing support and maintenance services, including:
      - Regular updates to keep pace with OS changes
      - Performance optimization and bug fixes
      - Feature enhancements based on user feedback
      - Analytics integration for user behavior tracking
      - Security audits and vulnerability assessments
    `,
    pricingDetails: `
      Our app development services are tailored to your specific needs, from basic apps to complex enterprise solutions. We offer flexible pricing models that can accommodate projects of any size and complexity, including dedicated development teams and project-based pricing.
    `
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: <Palette className="h-10 w-10 text-blue-600" />,
    description: "Creative design solutions that communicate your brand message effectively and memorably.",
    features: ["Brand Identity", "UI/UX Design", "Print Materials", "Social Media Graphics"],
    detailedDescription: `
      In the digital-first world, we create visually stunning designs that not only capture attention but also drive engagement and conversions. Our graphic design services leverage the latest trends and technologies, including:
    
      - AI-powered design tools for enhanced creativity and efficiency
      - Augmented Reality (AR) elements for interactive experiences
      - Motion graphics and micro-animations for dynamic content
      - 3D modeling and rendering for immersive visuals
      - Data visualization techniques for complex information
    
      We specialize in creating designs that incorporate:
      - Brand storytelling through visual narratives
      - User-centric design principles for maximum impact
      - Cross-platform consistency across digital and print media
      - Accessibility-focused design for inclusive experiences
      - Trend-aware aesthetics that stay relevant
    
      Our design process ensures your visuals are:
      - Aligned with your brand identity and values
      - Optimized for various platforms and devices
      - Scalable for future design needs
      - Compliant with industry standards and best practices
      - Delivered in multiple formats for versatile usage
    
      We also provide ongoing design support, including:
      - Regular updates to maintain brand consistency
      - Design system creation for unified visual language
      - Template development for efficient content creation
      - Style guide documentation for brand governance
      - Creative consultation for strategic design decisions
    `,
    pricingDetails: `
      Our graphic design services are available through flexible packages that can accommodate projects of any scale. From individual design elements to comprehensive brand identity systems, we offer competitive pricing with transparent deliverables and timelines.
    `
  },
  {
    id: "process-automation",
    title: "Process Automation",
    icon: <Cog className="h-10 w-10 text-blue-600" />,
    description: "Streamline your business operations with custom automation solutions that save time and reduce errors.",
    features: ["Workflow Automation", "Business Process Optimization", "Integration Services", "Custom Solutions"],
    detailedDescription: `
      In the age of digital transformation, we create intelligent automation solutions that revolutionize your business operations. Our process automation services leverage cutting-edge technologies, including:
    
      - AI-powered workflow automation for intelligent decision-making
      - Machine learning algorithms for predictive process optimization
      - Robotic Process Automation (RPA) for repetitive task automation
      - Natural Language Processing (NLP) for document processing
      - Blockchain technology for secure transaction automation
    
      We specialize in developing automation solutions that incorporate:
      - AI-driven process mapping and analysis
      - Predictive maintenance systems for operational efficiency
      - Intelligent document processing and data extraction
      - Automated compliance and audit systems
      - Real-time process monitoring and analytics
    
      Our automation approach ensures your processes are:
      - Optimized for maximum efficiency and accuracy
      - Integrated with existing enterprise systems
      - Scalable for future business growth
      - Secure against potential vulnerabilities
      - Compliant with industry regulations and standards
    
      We also provide ongoing support and optimization services, including:
      - Regular system updates and maintenance
      - Performance monitoring and analytics
      - Process re-engineering for continuous improvement
      - Integration with new technologies and systems
      - Training and knowledge transfer for internal teams
    `,
    pricingDetails: `
      Our process automation services are available through flexible engagement models, including project-based pricing and managed services. We offer competitive rates tailored to your specific automation needs and business scale.
    `
  },
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-zinc-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto font-medium"
          >
            Elevate your digital presence with our comprehensive suite of professional services designed to transform your business vision into reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-2 backdrop-blur-sm bg-white/90 hover:shadow-2xl transition-shadow duration-300">
              {[...services, {
                id: "google-ads",
                title: "Google Ads",
                icon: <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
                description: "Strategic Google Ads campaigns that drive targeted traffic and maximize your ROI through data-driven optimization.",
                features: ["Campaign Strategy", "Keyword Research", "Ad Optimization", "Performance Tracking"],
              }].map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={cn(
                    "w-full text-left p-5 rounded-xl transition-all duration-300 flex items-start gap-5 hover:scale-102",
                    activeService === service.id 
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md" 
                      : "hover:bg-zinc-50/80 text-zinc-700"
                  )}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="mt-1">{service.icon}</div>
                  <div>
                    <h3 className="font-bold text-xl">{service.title}</h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {[...services, {
              id: "google-ads",
              title: "Google Ads",
              icon: <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>,
              description: "Strategic Google Ads campaigns that drive targeted traffic and maximize your ROI through data-driven optimization.",
              features: ["Campaign Strategy", "Keyword Research", "Ad Optimization", "Performance Tracking"],
            }].map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeService === service.id ? 1 : 0,
                  y: activeService === service.id ? 0 : 20,
                  display: activeService === service.id ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm bg-white/90 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-3 bg-blue-50 rounded-xl shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900">{service.title}</h3>
                </div>
                <p className="text-lg text-zinc-600 mb-8 font-medium leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm"></div>
                      <span className="text-zinc-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

              
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn more <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Add this at the bottom of the file
export { services }

