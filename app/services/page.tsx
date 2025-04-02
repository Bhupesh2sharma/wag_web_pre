import Header from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        
          <ServicesSection />
      </div>
      <Footer />
    </>
  )
}