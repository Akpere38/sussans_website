import { MessageSquare, FileText, ArrowRightLeft, CheckCircle2, Clock, Shield, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Contact & Consultation',
      description: "Reach out via WhatsApp or our contact form. Share your payment needs—whether it's RMB ↔ NGN, other international payments, or crypto OTC. We connect you with reliable partners abroad to complete your transaction.",
      details: [
        'Provide basic transaction details',
        'Specify currency pair and amount',
        'Share your business requirements',
      ],
      timeline: '5-10 minutes',
    },
    {
      number: '02',
      icon: FileText,
      title: 'KYC & Documentation',
      description: "Complete our secure KYC process. We’ll guide you to provide the necessary documentation so your transaction is handled safely and transparently.",
      details: [
        'Submit valid identification documents',
        'Provide proof of business (if applicable)',
        'Complete our verification form',
      ],
      timeline: '1-2 hours',
    },
    {
      number: '03',
      icon: ArrowRightLeft,
      title: 'Quote & Agreement',
      description: "Receive a quote with clear fees based on current market rates. Review the terms, and once agreed, we coordinate with our partners to process the payment.",
      details: [
        'Real-time market-based rate',
        'Transparent fees disclosed upfront',
        'Confirmation before proceeding',
      ],
      timeline: '10-15 minutes',
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Transfer & Settlement',
      description: "Transfer the funds to our account. We confirm receipt and coordinate with our partners to settle the payment to the recipient abroad.",
      details: [
        'Transfer funds to our secure account',
        'We confirm receipt of funds',
        'Payment coordinated with partner for settlement',
      ],
      timeline: '24-48 hours',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We help businesses and individuals make international payments efficiently and safely through trusted partners. From first contact to final settlement, we guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[70px] top-[120px] w-0.5 h-[calc(100%+4rem)] bg-primary-200" />
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Number & Icon */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-[140px] h-[140px] bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <step.icon size={56} className="text-white" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 lg:pt-4">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                        {step.title}
                      </h2>
                      <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600 bg-neutral-100 px-4 py-2 rounded-full whitespace-nowrap">
                        <Clock size={16} />
                        <span>{step.timeline}</span>
                      </div>
                    </div>

                    <p className="text-lg text-neutral-700 mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-600">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Mobile timeline */}
                    <div className="sm:hidden flex items-center gap-2 text-sm text-neutral-600 mt-4">
                      <Clock size={16} />
                      <span>Typical timeline: {step.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              What Makes Our Process Different
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We've designed every step to prioritize security, efficiency, and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Shield size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Secure Handling
              </h3>
              <p className="text-neutral-600">
                Secure handling of your transaction information and funds throughout the process. We follow strong safety practices and verification procedures.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <Clock size={28} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Fast Processing
              </h3>
              <p className="text-neutral-600">
                Most transactions settle within 24-48 hours. We coordinate with partners to ensure payments are processed efficiently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Dedicated Support
              </h3>
              <p className="text-neutral-600">
                Our team is available 24/7 on WhatsApp to answer questions, provide updates, and guide you through your transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-primary-50 border-t border-b border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <Shield size={24} className="text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Important: Risk & Compliance Notice
              </h3>
              <div className="text-neutral-700 space-y-2">
                <p>
                  Cross-border payments and currency exchange involve inherent risks, including market rate fluctuations and external processing times. We coordinate with trusted partners but cannot guarantee specific rates or settlement timelines.
                </p>
                <p>
                  All transactions are subject to verification and our internal safety checks. We may decline transactions that do not meet our verification standards.
                </p>
                <p className="font-medium text-neutral-900">
                  By proceeding, you acknowledge understanding these risks and agree to provide accurate information for safe processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Start Your Transaction?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us on WhatsApp to begin. Our team will guide you through each step and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://wa.me/2348148510983" variant="accent" icon className="text-lg px-8 py-4">
              Start on WhatsApp
            </Button>
            <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
              View Contact Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
