import Header from '@/components/navbar'
import Footer from '@/components/footer'

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-zinc-900">Terms of Service</h1>
        <p className="mb-4 text-zinc-700">
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website. By accessing or using our service, you agree to be bound by these Terms.
        </p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Use of Our Service</h2>
          <ul className="list-disc pl-6 text-zinc-700">
            <li>You must be at least 18 years old to use this site.</li>
            <li>You agree not to misuse our services or help anyone else do so.</li>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <p className="text-zinc-700">
            All content, features, and functionality on this site are the exclusive property of the site owner and are protected by copyright and other laws.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Termination</h2>
          <p className="text-zinc-700">
            We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
          <p className="text-zinc-700">
            Our service is provided "as is" and "as available" without warranties of any kind. We are not liable for any damages or losses resulting from your use of the site.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Changes to These Terms</h2>
          <p className="text-zinc-700">
            We may update our Terms of Service from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>
        <p className="mt-8 text-zinc-500 text-sm">
          Last updated: June 29, 2025
        </p>
      </main>
      <Footer />
    </>
  )
}