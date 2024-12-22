export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BoughtOnTikTok',
  description: 'Advanced strategies for TikTok content creators, sellers, and affiliates.',
  url: 'https://boughtontiktok.com',
})

export const getPricingSchema = (plans: any[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'TikTok Mastery Course',
  description: 'Advanced strategies for TikTok content creators, sellers, and affiliates.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: Math.min(...plans.map(plan => plan.price)),
    highPrice: Math.max(...plans.map(plan => plan.price)),
    offerCount: plans.length,
  },
})