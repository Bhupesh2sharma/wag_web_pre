"use client"
import React from "react"
import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, CodeIcon, Rocket } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We start by understanding your business, goals, and requirements through in-depth consultations.",
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Planning",
    description: "Our team creates a detailed roadmap and strategy tailored to your specific needs and objectives.",
    icon: <Lightbulb className="h-8 w-8 text-white" />,
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Development",
    description: "We bring your vision to life with cutting-edge technologies and best development practices.",
    icon: <CodeIcon className="h-8 w-8 text-white" />,
    color: "bg-blue-700",
  },
  {
    id: 4,
    title: "Launch",
    description: "After thorough testing, we deploy your solution and provide ongoing support and maintenance.",
    icon: <Rocket className="h-8 w-8 text-white" />,
    color: "bg-blue-800",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-10 bg-white px-4  sm:px-2 lg:px-8">
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 leading-tight mb-3"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-blue-600 max-w-2xl mx-auto"
          >
            We follow a streamlined process to ensure your project is completed efficiently and effectively.
          </motion.p>
        </div>

        <div className="relative px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ol className="relative border-s border-gray-200">
              {steps.map((step, index) => (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="mb-10 ms-6"
                >
                  <span className={`absolute flex items-center justify-center w-10 h-10 ${step.color} rounded-full -start-5 ring-8 ring-white`}>
                    {React.cloneElement(step.icon, { className: "h-6 w-6 text-white" })}
                  </span>
                  <div className="ml-12">
                    <h3 className="mb-1 text-2xl font-bold text-zinc-800">{step.title}</h3>
                    <p className="text-base font-normal text-blue-600">{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
            <div className="hidden lg:flex items-center justify-center">
              <img 
                src="/7.png" 
                alt="Process illustration" 
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

