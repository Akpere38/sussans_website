import { Mail, Phone, MapPin, Users, Info } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100">
              We're here to answer your questions, guide you through our process, and discuss how we can help with cross-border payments safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto">
              <Users size={16} />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              We’re Happy to Help
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Whether you’re a new client or just exploring our services, you can reach us through any of the channels below. We respond promptly and transparently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-50 rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Mail className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Email</h3>
              <p className="text-neutral-600 mb-4">For questions, inquiries, or support:</p>
              <Button href="mailto:support@yourcompany.com" variant="accent" className="w-full py-3">
                Email Us
              </Button>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Phone / WhatsApp</h3>
              <p className="text-neutral-600 mb-4">Quick support or consultation:</p>
              <Button href="https://wa.me/2348148510983" variant="accent" className="w-full py-3">
                Chat on WhatsApp
              </Button>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Location</h3>
              <p className="text-neutral-600">
                We operate virtually and coordinate payments internationally. Meetings are available by appointment.
              </p>
            </div>
          </div>

          {/* Inquiry Form Section */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-neutral-100">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-accent-500 focus:border-accent-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-accent-500 focus:border-accent-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="message">Message</label>
                <textarea id="message" rows="5" className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:ring-accent-500 focus:border-accent-500" placeholder="Write your message here"></textarea>
              </div>
              <Button type="submit" variant="accent" className="w-full py-3">
                Send Message
              </Button>
            </form>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-16 max-w-2xl mx-auto p-6 bg-accent-50 rounded-lg border border-accent-200 text-center">
            <Info size={20} className="mx-auto text-accent-600 mb-4" />
            <p className="text-sm text-neutral-700">
              <span className="font-medium">Disclaimer:</span> We are not a licensed bank or financial institution. We facilitate coordination between clients and trusted international partners. Please do not send funds without prior confirmation from our team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
