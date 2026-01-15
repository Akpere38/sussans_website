import { Users, Info, Award, Shield, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-primary-100">
              We connect importers and businesses with trusted overseas partners to facilitate international payments efficiently, transparently, and safely.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users size={16} />
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Your Trade Coordination Partner
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                We are a team of professionals passionate about simplifying international business transactions. Our focus is on building reliable relationships with overseas partners to ensure your payments reach the right recipients safely and efficiently.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                While we are not a licensed bank or financial institution, we provide a coordination service that adds transparency, convenience, and confidence to cross-border transactions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h3>
              <p className="text-neutral-700 mb-4">
                To make international payments and supplier coordination simple, transparent, and reliable for importers and businesses.
              </p>
              <h3 className="text-2xl font-bold text-neutral-900 mt-6 mb-4">Our Vision</h3>
              <p className="text-neutral-700">
                To be the most trusted coordination partner for businesses navigating cross-border payments and international trade, without pretending to be a bank or financial institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto">
              <Award size={16} />
              <span>Core Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Integrity, transparency, and trust guide every transaction we facilitate. We value building long-term relationships with clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Integrity</h3>
              <p className="text-neutral-600 text-sm">
                We communicate honestly and operate transparently in all interactions with clients and partners.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Trust</h3>
              <p className="text-neutral-600 text-sm">
                We work only with trusted partners abroad to ensure transactions are executed correctly and responsibly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Transparency</h3>
              <p className="text-neutral-600 text-sm">
                Clients know our process, fees, and limitations upfront. No hidden promises or financial guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Want to Learn More About Us?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how we can support your cross-border transactions.
          </p>
          <Button href="https://wa.me/2348148510983" variant="accent" icon className="text-lg px-8 py-4">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
