import { Shield, CheckCircle, Lock, FileCheck, AlertCircle, Users, Award, Info } from 'lucide-react';
import Button from '../components/ui/Button';

const Compliance = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Compliance & Trust
            </h1>
            <p className="text-xl text-primary-100">
              We operate with the highest standards of regulatory compliance, security protocols, and financial governance to protect your transactions and data.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileCheck size={16} />
                <span>Regulatory Framework</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Licensed & Regulated Operation
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                We operate as a licensed financial services provider, subject to regulatory oversight and compliance requirements. All transactions are conducted in accordance with applicable laws and international standards.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">CBN Reporting Compliance</h4>
                    <p className="text-neutral-600">All transactions reported to Central Bank of Nigeria as required. Full transparency with regulators.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">EFCC & FIRS Compliance</h4>
                    <p className="text-neutral-600">Cooperation with Economic and Financial Crimes Commission and Federal Inland Revenue Service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">International Standards</h4>
                    <p className="text-neutral-600">Adherence to FATF recommendations and Basel III principles for financial operations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Regular Audits</h4>
                    <p className="text-neutral-600">Annual independent financial audits and compliance reviews by licensed auditors.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Certifications:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Financial Services License</h4>
                    <p className="text-neutral-600 text-sm">Registered as Money Services Business with regulatory authorities.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">AML/CFT Compliance</h4>
                    <p className="text-neutral-600 text-sm">Certified Anti-Money Laundering and Counter Financing of Terrorism procedures in place.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Data Protection</h4>
                    <p className="text-neutral-600 text-sm">ISO 27001 certified information security management system.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-white rounded-lg border border-primary-200">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    Detailed compliance documentation available upon request for institutional partners and corporate clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KYC/AML Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">KYC Process:</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Account Information</h4>
                    <p className="text-neutral-600 text-sm">Basic personal or business details and contact information.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Document Verification</h4>
                    <p className="text-neutral-600 text-sm">Valid government-issued ID or business registration documents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Proof of Residence</h4>
                    <p className="text-neutral-600 text-sm">Recent utility bill or bank statement confirming current address.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Source of Funds Verification</h4>
                    <p className="text-neutral-600 text-sm">Documentation confirming the origin of funds being transacted.</p>
                  </div>
                </li>
              </ol>

              <div className="mt-8 p-4 bg-accent-50 rounded-lg border border-accent-200">
                <div className="flex items-start gap-2">
                  <AlertCircle size={18} className="text-accent-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    <span className="font-medium">Privacy Assured:</span> All documentation is encrypted and stored securely. We never sell or share your personal information.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users size={16} />
                <span>Know Your Customer</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                KYC & AML Requirements
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                As a regulated financial services provider, we implement comprehensive Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures. These safeguards protect both our clients and the broader financial system from illicit activities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Customer Risk Assessment</h4>
                    <p className="text-neutral-600">Clients are categorized by risk profile to determine enhanced due diligence requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Ongoing Monitoring</h4>
                    <p className="text-neutral-600">Transaction patterns are continuously monitored for suspicious or unusual activity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Sanctions Screening</h4>
                    <p className="text-neutral-600">All parties are checked against international sanctions lists and PEP databases.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Beneficial Ownership Verification</h4>
                    <p className="text-neutral-600">For business clients, we verify the true owners and control structures of organizations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Lock size={16} />
                <span>Data Security</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Bank-Level Security Measures
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                We employ enterprise-grade security infrastructure to protect your funds and sensitive information throughout every transaction.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">End-to-End Encryption</h4>
                    <p className="text-neutral-600">All communications and data transmissions use military-grade AES-256 encryption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Multi-Factor Authentication</h4>
                    <p className="text-neutral-600">Accounts protected with 2FA/MFA to prevent unauthorized access.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Cold Storage Wallets</h4>
                    <p className="text-neutral-600">Cryptocurrency holdings kept in offline, secure cold storage environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Regular Penetration Testing</h4>
                    <p className="text-neutral-600">Quarterly third-party security assessments and vulnerability testing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Security Protocols:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
                  <div>
                    <h4 className="font-semibold mb-1">Firewalls & Intrusion Detection</h4>
                    <p className="text-neutral-300 text-sm">24/7 network monitoring and automated threat response systems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Backups</h4>
                    <p className="text-neutral-300 text-sm">Redundant systems with automatic daily backups to secure locations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
                  <div>
                    <h4 className="font-semibold mb-1">Access Controls</h4>
                    <p className="text-neutral-300 text-sm">Role-based permissions and detailed audit logs for all system access.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
                  <div>
                    <h4 className="font-semibold mb-1">Disaster Recovery</h4>
                    <p className="text-neutral-300 text-sm">Comprehensive business continuity and disaster recovery planning.</p>
                  </div>
                </li>
              </ul>

              <div className="p-4 bg-accent-500/20 rounded-lg border border-accent-500/30">
                <div className="flex items-start gap-2">
                  <Shield size={18} className="text-accent-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-100">
                    <span className="font-medium">Incident Response:</span> In the unlikely event of a security breach, we have established protocols for immediate notification and remediation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Resolution & Consumer Protection */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Dispute Resolution & Consumer Protection
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We maintain transparent processes and fair mechanisms for handling disputes and protecting consumer interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Clear Policies</h3>
              <p className="text-neutral-600 mb-4">
                All transaction terms, fees, and policies are clearly documented and provided to customers before engagement.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Written terms available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Fee transparency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Cancellation terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Complaint Handling</h3>
              <p className="text-neutral-600 mb-4">
                Formal procedures for receiving, investigating, and resolving customer complaints fairly and promptly.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>30-day resolution window</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Documented investigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Written response required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Regulatory Recourse</h3>
              <p className="text-neutral-600 mb-4">
                Customers can escalate unresolved disputes to regulatory authorities for independent review and intervention.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>CBN complaints process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>FIRS escalation available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                  <span>Legal remedies preserved</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Compliance Questions?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            For detailed compliance documentation, audit reports, or regulatory inquiries, contact our compliance team.
          </p>
          <Button href="https://wa.me/2348012345678" variant="accent" icon className="text-lg px-8 py-4">
            Contact Compliance Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Compliance;