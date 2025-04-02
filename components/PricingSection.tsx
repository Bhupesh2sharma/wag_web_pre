"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter Plan",
    price: 12000,
    deliveryTime: "1-2 weeks",
    features: [
      "Up to 5 Pages (Home, About, Services, Contact, etc.)",
      "Pre-designed Templates for modern look",
      "Mobile-Responsive Design",
      "Basic SEO Setup (Google indexing, meta tags)",
      "Shared Hosting (1GB Storage)",
      "Monthly Website Updates (Text & Image changes)",
      "Email Support (48-hour response)"
    ],
    bestFor: "Freelancers, bloggers, small local businesses, and startups"
  },
  {
    name: "Growth Plan",
    price: 35000,
    deliveryTime: "2-3 weeks",
    features: [
      "Up to 10 Pages (Additional pages for services, portfolio, blogs)",
      "Custom Website Design (Unique to your brand)",
      "Mobile-Responsive & Optimized Performance",
      "On-Page SEO for 5 Pages",
      "Premium Hosting (5GB Storage)",
      "Monthly Content Updates",
      "Social Media Management (1 Platform, 3 posts/week)",
      "24-Hour Email Support"
    ],
    bestFor: "Small & medium businesses, agencies, and entrepreneurs"
  },
  {
    name: "Premium Plan",
    price: 80000,
    deliveryTime: "3-4 weeks",
    features: [
      "Up to 15 Pages (Scalable for expansion)",
      "Fully Custom & Scalable Design",
      "Advanced Integrations (CRM, ERP, API connections)",
      "Dedicated Hosting (20GB, High-Speed & Secure)",
      "In-depth SEO & Content Strategy",
      "Social Media Management (3 Platforms, 5 posts/week)",
      "Paid Ads Management (₹10k Ad Budget Included)",
      "High-Performance Monitoring & Weekly Reports",
      "Bi-Weekly Website Updates",
      "12-Hour Priority Email Support"
    ],
    bestFor: "Established businesses, agencies, and brands"
  },
  {
    name: "Custom Plan",
    price: 50000,
    deliveryTime: "4+ weeks",
    features: [
      "Unlimited pages & fully customized UI/UX",
      "Advanced Integrations (Custom ERP, AI Chatbot, Analytics)",
      "SEO + Paid Ads Campaigns (Starting ₹25k/month)",
      "Social Media Growth Strategies",
      "Dedicated 24/7 Support"
    ],
    bestFor: "Enterprises & companies needing full-scale solutions"
  }
]

import { useState } from "react"

export default function PricingSection() {
  const [activePlan, setActivePlan] = useState(0)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-800">
          Pricing <span className="text-blue-600">Plans</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setActivePlan(index)}
              className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 border-2 cursor-pointer ${
                activePlan === index
                  ? "border-blue-600 scale-105"
                  : "border-gray-100 hover:border-blue-200"
              }`}
            >
              <h3 className="text-xl font-bold mb-6 text-blue-600">
                {plan.name}
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-5 rounded-xl">
                  <p className="text-xs text-blue-500">Price</p>
                  <p className="text-2xl font-bold mt-1 text-blue-600">
                    ₹{plan.price}
                  </p>
                  <p className="text-xs text-blue-500 mt-2">
                    Delivery Time: {plan.deliveryTime}
                  </p>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-base text-gray-600"
                    >
                      <Check className="h-5 w-5 text-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    💡 Best for: {plan.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}