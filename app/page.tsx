import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import LeadForm from '@/components/LeadForm'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 text-center">
          <div className="hero-animation">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              TikTok Mastery: Unlock Your Potential
            </h1>
            <p className="text-xl text-white mb-8">
              Advanced strategies for content creators, sellers, and affiliates
            </p>
            <a 
              href="#lead-form" 
              className="cta-button inline-block px-8 py-4 text-white font-bold rounded-full"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Content Creators */}
            <div id="creators" className="feature-card p-8">
              <div className="text-4xl mb-4">🎬</div>
              <h2 className="text-2xl font-bold mb-4">For Content Creators</h2>
              <p>Learn how to create viral content, grow your following, and monetize your TikTok presence.</p>
            </div>

            {/* Sellers */}
            <div id="sellers" className="feature-card p-8">
              <div className="text-4xl mb-4">🛍️</div>
              <h2 className="text-2xl font-bold mb-4">For Sellers</h2>
              <p>Discover strategies to showcase your products, leverage user-generated content, and boost sales.</p>
            </div>

            {/* Affiliates */}
            <div id="affiliates" className="feature-card p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-2xl font-bold mb-4">For Affiliates</h2>
              <p>Master affiliate marketing on TikTok, connecting brands with audiences and maximizing earnings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        {/* ... Features content ... */}
      </section>

      {/* Lead Form */}
      <LeadForm />

      <ScrollToTop />
      <Toaster />
    </>
  )
}