interface PricingCardProps {
  title: string
  price: number
  features: string[]
  isFeatured?: boolean
  onSelect: () => void
}

export default function PricingCard({
  title,
  price,
  features,
  isFeatured,
  onSelect,
}: PricingCardProps) {
  return (
    <div className={`price-card ${isFeatured ? 'featured' : ''} bg-white p-8 rounded-lg shadow-lg`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-4xl font-bold mb-4">${price}</div>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">✓ {feature}</li>
        ))}
      </ul>
      <button 
        onClick={onSelect}
        className="cta-button w-full py-3 rounded-lg text-white font-bold"
        aria-label={`Select ${title} package`}
      >
        Buy Now
      </button>
    </div>
  )
}