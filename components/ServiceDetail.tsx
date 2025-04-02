"use client"

import { Code, Smartphone, Palette, Cog } from "lucide-react"
import { services } from "./services-section"
import PricingSection from "./PricingSection"

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
  const allServices = [
    ...services,
    {
      id: "google-ads",
      title: "Google Ads",
      icon: <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: "Strategic Google Ads campaigns that drive targeted traffic and maximize your ROI through data-driven optimization.",
      features: ["Campaign Strategy", "Keyword Research", "Ad Optimization", "Performance Tracking"],
      detailedDescription: `
        Our Google Ads service is a comprehensive solution designed to maximize your online presence and ROI. We begin with in-depth market research and competitor analysis to identify the most profitable keywords and target audiences. Our team of certified Google Ads specialists then creates customized campaigns tailored to your business goals, whether it's lead generation, e-commerce sales, or brand awareness.

        We implement advanced strategies like remarketing, audience segmentation, and conversion tracking to ensure your ads reach the right people at the right time. Our ongoing optimization process includes A/B testing, bid management, and performance analysis to continuously improve your campaign results.

        With our transparent reporting system, you'll receive detailed monthly reports showing key metrics like CTR, CPC, conversions, and ROI. Our team is available 24/7 to answer your questions and provide strategic recommendations.
      `,
      pricingDetails: `
        Our Google Ads management services are available as part of our comprehensive marketing packages. The Starter Plan includes basic campaign setup and management, while our Premium Plan offers full-scale campaign optimization, advanced analytics, and dedicated account management. For businesses with specific needs, we offer custom packages that can be tailored to your budget and goals.
      `
    }
  ]

  const service = allServices.find(s => s.id === serviceId)

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-24">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 backdrop-blur-sm bg-white/90">
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

        <div className="prose max-w-none mt-10">
          <h4 className="text-2xl font-bold mb-6">Service Overview</h4>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {service.detailedDescription}
          </p>

          <h4 className="text-2xl font-bold mb-6">Pricing Information</h4>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {service.pricingDetails}
          </p>

          <div className="mt-12">
            <h4 className="text-2xl font-bold mb-6">Our Pricing Plans</h4>
            <PricingSection />
          </div>
        </div>
      </div>
    </div>
  )
}