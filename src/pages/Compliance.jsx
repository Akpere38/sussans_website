import { Shield, Users, Info, AlertCircle, FileCheck, Award, Lock, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Compliance = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Trade Safeguards & Transparency
            </h1>
            <p className="text-xl text-primary-100">
              We are committed to integrity, transparency, and operational safeguards to ensure your cross-border payments are coordinated responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileCheck size={16} />
                <span>Our Operating Model</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Trade Payment Coordination
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                We help importers and businesses coordinate supplier payments abroad through trusted overseas partners. Our service adds convenience and reliability to cross-border transactions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Transparent Service</h4>
                    <p className="text-neutral-600">Fees, timelines, and service scope are clearly communicated before any engagement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Relationship-Based Verification</h4>
                    <p className="text-neutral-600">We verify client identities and businesses to protect our network, using information appropriate for trade coordination.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Risk Awareness</h4>
                    <p className="text-neutral-600">We reserve the right to decline transactions that are high-risk or lack sufficient documentation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Privacy & Confidentiality</h3>
              <p className="text-neutral-700 mb-4">
                Client information is handled with strict confidentiality. Data is only shared with authorized partners necessary for transaction coordination.
              </p>

              <div className="mt-8 p-4 bg-white rounded-lg border border-primary-200">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    We do not sell or share personal information. All data is stored securely for operational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Lock size={16} />
                <span>Operational Security</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Safeguards & Best Practices
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                While we do not hold funds or accounts, we coordinate transactions responsibly, ensuring information is shared securely with trusted partners.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Encrypted Communication</h4>
                    <p className="text-neutral-600">All sensitive information shared with partners uses secure channels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Partner Verification</h4>
                    <p className="text-neutral-600">We work only with trusted overseas contacts to execute payments on behalf of clients.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Risk & Limitations</h3>
              <p className="text-sm text-neutral-100 mb-4">
                Clients are responsible for ensuring their own compliance with laws and regulations in their jurisdictions. We provide coordination support, but we do not guarantee outcomes or rates.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-300 mt-0.5 flex-shrink-0" />
                  <span>We do not hold funds or provide accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-300 mt-0.5 flex-shrink-0" />
                  <span>We do not offer FX or crypto exchange guarantees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-300 mt-0.5 flex-shrink-0" />
                  <span>We reserve the right to decline high-risk or unclear transactions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer section */}
          <div className="mt-16 max-w-2xl mx-auto p-6 bg-accent-50 rounded-lg border border-accent-200 text-center">
            <Info size={20} className="mx-auto text-accent-600 mb-4" />
            <p className="text-sm text-neutral-700">
              <span className="font-medium">Disclaimer:</span> We are not a licensed bank or financial institution. We facilitate coordination between clients and trusted international partners. Please do not send funds without prior confirmation from our team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Questions About Our Service?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            For operational or partnership inquiries, contact our team directly.
          </p>
          <Button href="https://wa.me/2348148510983" variant="accent" icon className="text-lg px-8 py-4">
            Contact Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
