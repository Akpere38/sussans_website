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
              Trusted cross-border payment solutions designed for African businesses trading globally. From RMB payment to crypto OTC, we facilitate secure and efficient transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: RMB ↔ NGN Payment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp size={16} />
                <span>Most Popular</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                RMB ↔ NGN Payment
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Facilitate Chinese Yuan to Nigerian Naira transactions for importers, exporters, and businesses trading with China. Competitive rates and smooth coordination with partners abroad.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Competitive Rates</h4>
                    <p className="text-neutral-600">Rates based on current market conditions. Fully transparent, no hidden fees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Direct Transfers</h4>
                    <p className="text-neutral-600">Funds are transferred directly to your bank account or partner accounts. Minimal intermediaries involved.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Bulk Transactions</h4>
                    <p className="text-neutral-600">Support for high-volume transactions and recurring payment needs for businesses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Fast Settlement</h4>
                    <p className="text-neutral-600">Transactions typically completed within 24-48 hours after verification.</p>
                  </div>
                </div>
              </div>

              <Button href="https://wa.me/2348148510983" variant="accent" icon>
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
                    <p className="text-neutral-600 text-sm">Pay Chinese suppliers or receive payments from Nigerian clients safely and efficiently.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Trading Companies</h4>
                    <p className="text-neutral-600 text-sm">Manage frequent cross-border transactions with partner coordination and bulk rates.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">E-commerce Businesses</h4>
                    <p className="text-neutral-600 text-sm">Source products from China and settle payments in local currency efficiently.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-white rounded-lg border border-primary-200">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    <span className="font-medium">Note:</span> Exchange rates fluctuate with the market. Final rates are confirmed at the time of transaction.
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
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe size={16} />
                <span>Multi-Currency</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                International Payments
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Send payments to suppliers, partners, and service providers worldwide. We facilitate major currencies through verified banking networks.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Multi-Currency Support</h4>
                    <p className="text-neutral-600">USD, ZAR, KES, RWF, MZN, GHS and more supported through trusted partners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Swift & Wire Transfers</h4>
                    <p className="text-neutral-600">Reliable cross-border settlements through secure banking networks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Trade Documentation Support</h4>
                    <p className="text-neutral-600">Guidance on invoices, contracts, and payment documents for international transactions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Transparent Fees</h4>
                    <p className="text-neutral-600">All fees are disclosed upfront with no hidden charges.</p>
                  </div>
                </div>
              </div>

              <Button href="https://wa.me/2348148510983" variant="accent" icon>
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
                    <p className="text-neutral-600 text-sm">Pay international suppliers for goods, materials, and services securely.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Contractor Payments</h4>
                    <p className="text-neutral-600 text-sm">Compensate remote contractors and freelancers reliably.</p>
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
                    <span className="font-medium">Processing Time:</span> Settlements typically complete within 2-5 business days, depending on currency and destination.
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
                Crypto OTC Payment
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Over-the-counter cryptocurrency Payment for individuals and businesses. Buy or sell Bitcoin, USDT, USDC, and other leading digital assets with secure processing and competitive rates.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Major Cryptocurrencies</h4>
                    <p className="text-neutral-600">BTC, USDT, USDC, ETH, and other major digital assets. Additional coins supported on request.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Competitive OTC Rates</h4>
                    <p className="text-neutral-600">Better pricing for larger transactions compared to standard exchanges. Volume-based rates available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Secure Wallet Transfers</h4>
                    <p className="text-neutral-600">Direct wallet-to-wallet transfers with full verification and confirmation for every transaction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Privacy & Compliance</h4>
                    <p className="text-neutral-600">Discreet OTC transactions with full KYC compliance to protect your privacy and security.</p>
                  </div>
                </div>
              </div>

              <Button href="https://wa.me/2348148510983" variant="accent" icon>
                Request Crypto Quote
              </Button>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Popular Transactions:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div>
                    <h4 className="font-semibold">BTC → NGN</h4>
                    <p className="text-sm text-neutral-300">Sell Bitcoin and receive Naira directly.</p>
                  </div>
                  <ArrowRight className="text-accent-500" size={20} />
                </li>
                <li className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div>
                    <h4 className="font-semibold">NGN → USDT</h4>
                    <p className="text-sm text-neutral-300">Buy Tether with Naira safely and efficiently.</p>
                  </div>
                  <ArrowRight className="text-accent-500" size={20} />
                </li>
                <li className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div>
                    <h4 className="font-semibold">USDC → USD</h4>
                    <p className="text-sm text-neutral-300">Convert stablecoins to fiat securely.</p>
                  </div>
                  <ArrowRight className="text-accent-500" size={20} />
                </li>
              </ul>

              <div className="p-4 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <div className="flex items-start gap-2">
                  <Shield size={18} className="text-amber-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-100">
                    <span className="font-medium">Important:</span> Cryptocurrency markets are highly volatile. Values can change quickly. Only transact with funds you are prepared to risk.
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
            Not Sure Which Service Fits You?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Reach out on WhatsApp and our team will help identify the right solution for your cross-border payment or crypto OTC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://wa.me/2348148510983" variant="accent" icon className="text-lg px-8 py-4">
              Chat with Us
            </Button>
            <Button href="/how-it-works" variant="secondary" className="text-lg px-8 py-4">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
