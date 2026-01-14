import { ArrowRight, CheckCircle, Info, TrendingUp, Globe, Bitcoin, Building2, Users, Clock, Shield } from 'lucide-react';
import Button from '../components/ui/Button';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100">
              Comprehensive cross-border payment solutions designed for African businesses trading globally. From RMB exchange to crypto OTC, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: RMB ↔ NGN Exchange */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp size={16} />
                <span>Most Popular</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                RMB ↔ NGN Exchange
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Seamless Chinese Yuan to Nigerian Naira exchange for importers, exporters, and businesses trading with China. Get competitive rates without the hassle of traditional banking delays.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Competitive Exchange Rates</h4>
                    <p className="text-neutral-600">Real-time rates updated daily based on market conditions. No inflated spreads or hidden markups.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Direct Bank Transfers</h4>
                    <p className="text-neutral-600">Funds transferred directly to your Nigerian or Chinese bank account. No intermediaries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Bulk Transaction Support</h4>
                    <p className="text-neutral-600">Special rates available for high-volume traders and businesses with regular payment needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Fast Settlement</h4>
                    <p className="text-neutral-600">Most transactions completed within 24-48 hours after verification.</p>
                  </div>
                </div>
              </div>

              <Button href="https://wa.me/2348012345678" variant="accent" icon>
                Get a Rate Quote
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Ideal For:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Importers & Exporters</h4>
                    <p className="text-neutral-600 text-sm">Pay Chinese suppliers or receive payments from Nigerian clients efficiently.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Trading Companies</h4>
                    <p className="text-neutral-600 text-sm">Manage frequent cross-border transactions with competitive bulk rates.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">E-commerce Businesses</h4>
                    <p className="text-neutral-600 text-sm">Source products from China and settle payments in local currency.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-white rounded-lg border border-primary-200">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    <span className="font-medium">Note:</span> Exchange rates fluctuate based on market conditions. Final rates are confirmed at the time of transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: International Payments */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Reverse order on desktop */}
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe size={16} />
                <span>Multi-Currency</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                International Payments
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Send payments to suppliers, partners, and service providers worldwide. We support major currencies including USD, EUR, GBP, and more through swift and wire transfers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Multi-Currency Support</h4>
                    <p className="text-neutral-600">USD, EUR, GBP, AUD, CAD, and other major currencies supported on request.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Swift & Wire Transfers</h4>
                    <p className="text-neutral-600">Secure international banking networks for reliable cross-border settlements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Trade Documentation Support</h4>
                    <p className="text-neutral-600">Assistance with invoices, contracts, and payment documentation for international trade.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Transparent Fee Structure</h4>
                    <p className="text-neutral-600">No hidden charges. All fees disclosed before you commit to the transaction.</p>
                  </div>
                </div>
              </div>

              <Button href="https://wa.me/2348012345678" variant="accent" icon>
                Discuss Your Payment Needs
              </Button>
            </div>

            <div className="lg:order-1 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Common Use Cases:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Supplier Payments</h4>
                    <p className="text-neutral-600 text-sm">Pay international suppliers for goods, materials, and services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Contractor Payments</h4>
                    <p className="text-neutral-600 text-sm">Compensate freelancers and contractors working from abroad.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Business Expenses</h4>
                    <p className="text-neutral-600 text-sm">Handle international subscriptions, licenses, and operational costs.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <div className="flex items-start gap-2">
                  <Clock size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    <span className="font-medium">Processing Time:</span> International payments typically settle within 2-5 business days depending on destination country and currency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Crypto OTC Exchange */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bitcoin size={16} />
                <span>Digital Assets</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Crypto OTC Exchange
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Over-the-counter cryptocurrency exchange for individuals and businesses. Buy or sell Bitcoin, USDT, USDC, and other major digital assets with competitive rates and secure processing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Major Cryptocurrencies</h4>
                    <p className="text-neutral-600">BTC, USDT, USDC, ETH, and other leading digital assets. Other coins available on request.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Competitive OTC Rates</h4>
                    <p className="text-neutral-600">Better pricing than traditional exchanges for larger transactions. Volume discounts available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Secure Wallet Transfers</h4>
                    <p className="text-neutral-600">Direct wallet-to-wallet transfers with full transaction verification and confirmation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Privacy-Focused</h4>
                    <p className="text-neutral-600">Discreet OTC transactions with full KYC compliance for your protection.</p>
                  </div>
                </div>
              </div>

              <Button href="https://wa.me/2348012345678" variant="accent" icon>
                Request Crypto Quote
              </Button>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Popular Transactions:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div>
                    <h4 className="font-semibold">BTC → NGN</h4>
                    <p className="text-sm text-neutral-300">Sell Bitcoin for Naira</p>
                  </div>
                  <ArrowRight className="text-accent-500" size={20} />
                </li>
                <li className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div>
                    <h4 className="font-semibold">NGN → USDT</h4>
                    <p className="text-sm text-neutral-300">Buy Tether with Naira</p>
                  </div>
                  <ArrowRight className="text-accent-500" size={20} />
                </li>
                <li className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div>
                    <h4 className="font-semibold">USDC → USD</h4>
                    <p className="text-sm text-neutral-300">Convert stablecoin to fiat</p>
                  </div>
                  <ArrowRight className="text-accent-500" size={20} />
                </li>
              </ul>

              <div className="p-4 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <div className="flex items-start gap-2">
                  <Shield size={18} className="text-amber-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-100">
                    <span className="font-medium">Important:</span> Cryptocurrency markets are highly volatile. Values can fluctuate significantly. Only transact with funds you can afford to risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us on WhatsApp and our team will help you determine the best solution for your specific cross-border payment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://wa.me/2348012345678" variant="accent" icon className="text-lg px-8 py-4">
              Chat with Us
            </Button>
            <Button href="/how-it-works" variant="secondary" className="text-lg px-8 py-4">
              See How It Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;