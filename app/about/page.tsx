import Header from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900">
            About Waglogy Tech LLP
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-zinc-600 mb-6">
              Innovating the Future, One Solution at a Time
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              Waglogy Tech LLP is a technology-driven company committed to
              providing cutting-edge digital solutions to businesses and
              individuals. Founded by Bhupesh Sharma and Abhisek Adhikari,
              Waglogy was established with a vision to bridge the gap between
              technology and business, helping companies transform their digital
              presence and achieve sustainable growth.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Our Mission
            </h2>
            <p className="text-lg text-zinc-600 mb-6">
              At Waglogy Tech LLP, our mission is to empower businesses with
              innovative and scalable technology solutions. We strive to develop
              high-quality, cost-effective digital products that cater to modern
              business needs while ensuring seamless user experiences.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Our Services
            </h2>
            <ul className="text-lg text-zinc-600 mb-6 list-disc pl-6">
              <li>Web Development & Progressive Web Apps (PWA)</li>
              <li>Mobile Application Development</li>
              <li>Digital Marketing & Branding</li>
              <li>E-Commerce Solutions</li>
              <li>Custom Software Solutions</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Why Choose Us?
            </h2>
            <ul className="text-lg text-zinc-600 mb-6 list-disc pl-6">
              <li>Expertise & Innovation</li>
              <li>Client-Centric Approach</li>
              <li>Agile Development</li>
              <li>Scalability & Security</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Our Team
            </h2>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Bhupesh Sharma (Co-Founder)</strong> – A visionary tech
              entrepreneur passionate about building impactful digital products.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Abhisek Adhikari (Co-Founder)</strong> – A strategic
              thinker and technology expert driving the company's technical
              advancements.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Reesav Gupta</strong> – Software Developer with expertise
              in cloud computing and DevOps.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Roshan Chhetri</strong> – Software Developer with
              expertise in Data science .
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Govin Sharma</strong> – HR Manager overseeing talent
              acquisition and employee development.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Pritam Kumar Bhagat</strong> – Software Developer focused
              on database architecture and optimization.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Prayesh Sharma</strong> – Software Developer and UI/UX
              Designer creating intuitive user experiences.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Maanav Rai</strong> – Frontend Developer specializing in
              responsive web design and modern JavaScript frameworks.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              <strong>Indrijit singh</strong> – Software Developer with
              expertise in AI and machine learning solutions.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Company Information
            </h2>
            <div className="text-lg text-zinc-600 mb-6 space-y-2">
              <p>
                <strong>LLP Identification Number (LLPIN):</strong> ACI-0335
              </p>
              <p>
                <strong>Date of Incorporation:</strong> June 26, 2024
              </p>
              <p>
                <strong>Registrar of Companies (RoC):</strong> RoC-Kolkata
              </p>
              <p>
                <strong>Registered Office Address:</strong> C/o Iswari Psd
                Sharma, Kokalya Chandeyn Nr Patuk, Kokalay, Singtam, East
                Sikkim, Sikkim, 737134
              </p>
              <p>
                <strong>Operational Office:</strong> Gangtok, Metro Point near
                Tourism Dept, Govt of Sikkim
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}