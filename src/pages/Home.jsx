import { ArrowRight, Shield, Zap, Globe, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Fast, Secure Cross-Border Payments for African Businesses
                </h1>
                <p className="text-lg sm:text-xl text-primary-100 max-w-2xl">
                  RMB ↔ NGN payments, international supplier payments, and crypto OTC services — built for importers, exporters, and SMEs.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="https://wa.me/2348148510983" 
                  variant="accent"
                  icon
                  className="text-lg px-8 py-4"
                >
                  Start a Transaction
                </Button>
                <Button 
                  href="/how-it-works" 
                  variant="secondary"
                  className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white/20"
                >
                  How It Works
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-primary-600">
                <div className="flex items-center gap-2 text-sm text-primary-100">
                  <Shield size={20} className="text-accent-500" />
                  <span>KYC Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-100">
                  <Zap size={20} className="text-accent-500" />
                  <span>48hr Settlement</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-100">
                  <Globe size={20} className="text-accent-500" />
                  <span>Licensed Provider</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative hidden lg:block">
              {/* Currency Flow Visual */}
              <div className="relative h-[500px]">
                
                {/* Center connecting line */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-accent-500 to-primary-500" />
                
                {/* RMB Card (Top) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-64 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">¥</span>
                    <span className="text-xs font-medium bg-accent-500 px-3 py-1 rounded-full">RMB</span>
                  </div>
                  <div className="text-sm text-primary-100">Chinese Yuan</div>
                  <div className="text-2xl font-bold mt-2">¥100,000</div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-500 rounded-full p-4 shadow-xl">
                  <ArrowRight size={32} className="text-white transform rotate-90" />
                </div>

                {/* NGN Card (Bottom) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-64 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">₦</span>
                    <span className="text-xs font-medium bg-primary-500 px-3 py-1 rounded-full">NGN</span>
                  </div>
                  <div className="text-sm text-primary-100">Nigerian Naira</div>
                  <div className="text-2xl font-bold mt-2">₦85,500,000</div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-20 right-0 bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 rounded-lg px-4 py-2 text-sm font-medium">
                  BTC • USDT • USDC
                </div>
                <div className="absolute bottom-20 left-0 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-lg px-4 py-2 text-sm font-medium">
                  Swift • Wire
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive cross-border payment solutions tailored for African businesses trading globally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">¥₦</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">RMB ↔ NGN Payments</h3>
              <p className="text-neutral-600 mb-4">
                Fast and competitive payment rates for businesses trading with China. Perfect for importers and exporters.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Competitive rates updated daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Direct bank transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>No hidden fees</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">International Payments</h3>
              <p className="text-neutral-600 mb-4">
                Send payments to suppliers and partners worldwide. Support for USD, EUR, GBP, and other major currencies.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Multi-currency support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Swift and wire transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Trade documentation support</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">₿</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Crypto OTC Payments</h3>
              <p className="text-neutral-600 mb-4">
                Over-the-counter crypto payments for BTC, USDT, USDC, and other digital assets. Secure and discreet.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>BTC, USDT, USDC supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Competitive OTC rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Secure wallet transfers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                We understand the challenges of cross-border commerce. Our platform is built to provide speed, security, and transparency for every transaction.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Fast Settlement</h3>
                    <p className="text-neutral-600">Average 48-hour processing for most transactions. No unnecessary delays.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Bank-Level Security</h3>
                    <p className="text-neutral-600">Full KYC/AML compliance. Your funds and data are protected at every step.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Transparent Pricing</h3>
                    <p className="text-neutral-600">No hidden fees. You'll know exactly what you're paying before you commit.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Ready to get started?</h3>
              <p className="text-neutral-700 mb-8">
                Contact us on WhatsApp to discuss your cross-border payment needs. Our team is available 24/7 to assist you.
              </p>
              <Button href="https://wa.me/2348148510983" variant="accent" icon className="w-full sm:w-auto">
                Chat with Us on WhatsApp
              </Button>
              <p className="text-sm text-neutral-600 mt-6">
                Average response time: Under 5 minutes during business hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;