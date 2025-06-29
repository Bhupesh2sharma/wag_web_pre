import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-800 rounded-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/logo.png" 
                alt="Waglogy Logo" 
                className="h-8"
              />
            </Link>
            <p className="mb-4">
              Transforming ideas into digital reality with innovative solutions tailored to your business needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Waglogy/100088445683614/" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
             
              <a href="https://www.instagram.com/waglogy/" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/waglogy?originalSubdomain=in" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
               <a href="https://www.youtube.com/@Waglogy" className="text-zinc-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#app-development" className="hover:text-white transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services#graphic-design" className="hover:text-white transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services#process-automation" className="hover:text-white transition-colors">
                  Process Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 text-blue-400" />
                <a href="mailto:waglogy.in@gmail.com" className="hover:text-white transition-colors">
                  waglogy.in@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 text-blue-400" />
                <a href="tel:+919733814168" className="hover:text-white transition-colors">
                  +91 97338 14168
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 text-blue-400" />
                <span>Mon-Fri, 9:00 AM - 6:00 PM IST</span>
              </li>
              <li>
                <h4 className="font-medium text-white mt-4 mb-2">Our Offices</h4>
                <address className="not-italic">
                  <strong>Registered Office:</strong><br />
                  C/o Iswari Psd Sharma, Kokalya Chandeyn Nr Patuk,<br />
                  Kokalay, Singtam, East Sikkim, Sikkim - 737134
                </address>
                <address className="not-italic mt-2">
                  <strong>Operational Office:</strong><br />
                  Gangtok, Metro Point near Tourism Dept,<br />
                  Govt of Sikkim
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Waglogy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

