import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Brand Generation',
    description: 'Leverage GPT-4 and Stability AI to create unique, professional brand identities in minutes.',
  },
  {
    name: 'Complete Brand Kits',
    description: 'Get everything you need: logos, color palettes, typography, brand guidelines, and marketing mockups.',
  },
  {
    name: 'Smart Recommendations',
    description: 'Receive AI-driven suggestions for brand naming, taglines, and mission statements.',
  },
  {
    name: 'Instant Delivery',
    description: 'Download your brand assets immediately in various formats suitable for both digital and print use.',
  },
]

export function HomePage() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Generate Your Brand Identity in Minutes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            BrandSnap uses advanced AI to create complete, cohesive brand identities. Get professional-quality logos, color schemes, typography, and brand guidelines instantly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/generator"
              className="btn-primary"
            >
              Start Generating
              <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/gallery"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View Gallery <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-600">
              Faster brand creation
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to build your brand
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create a professional brand identity in minutes, not months. Our AI-powered platform handles everything from logo design to brand guidelines.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
} 