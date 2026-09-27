import {
  Briefcase,
  CircleCheck,
  CircleX,
  Cloud,
  ListOrdered,
  Mail,
  Scale,
  Server,
  TrendingUp,
  Zap,
} from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import PageHeader from '@/components/ui/PageHeader'
import Link from '@/components/common/Link'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'
import { personRef } from '@/libs/seo/person'

const PAGE_TITLE = 'Azure Cost Optimisation for .NET Teams'
const PAGE_DESCRIPTION =
  'I help .NET teams cut Azure spend — not with a dashboard and a list of recommendations, but by changing the infrastructure and the code that produce the cost.'

export const metadata = genPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'Azure cost optimisation',
    'Azure cost optimization',
    'FinOps',
    '.NET',
    'Azure cost assessment',
    'cloud cost engineering',
  ],
  alternates: { canonical: './' },
  openGraph: {
    title: `${PAGE_TITLE} | Djordje Nedovic`,
    url: `${siteMetadata.siteUrl}/services`,
  },
  twitter: {
    title: `${PAGE_TITLE} | Djordje Nedovic`,
  },
})

const credentials = [
  '8+ years in .NET',
  'AZ-204 · AZ-500 · FinOps Certified Practitioner',
  'Fintech · Insurance · Airline',
]

type Service = {
  step: string
  title: string
  intro: string
  points: string[]
  price: string
}

const services: Service[] = [
  {
    step: '01 · Start here',
    title: 'Azure Cost Assessment',
    intro:
      'Two weeks, fixed fee. I go through your subscriptions and tell you exactly where the money goes and what is worth fixing first.',
    points: [
      'Spend breakdown by team, product and environment',
      'Idle, orphaned and oversized resources, quantified',
      'Reservation and savings plan position: coverage and utilisation',
      'Tagging, allocation and governance gaps',
      'A prioritised plan with estimated savings per item',
    ],
    price: '[YOUR FIXED FEE]',
  },
  {
    step: '02 · Implementation',
    title: 'Optimisation & Governance',
    intro: 'The findings, actually carried out — as code, in your repositories and your pipelines.',
    points: [
      'Tagging and allocation enforced through Azure Policy and Terraform',
      'Budgets, cost alerts and anomaly detection wired to the right owners',
      'Rightsizing and shutdown schedules for non-production',
      'Commitment strategy: what to buy, at what scope, and when not to',
      'Reporting your finance team can actually read',
    ],
    price: '[YOUR DAY RATE] / day',
  },
  {
    step: '03 · Application level',
    title: 'Application Cost Engineering',
    intro:
      'Some spend cannot be fixed from the portal. When the architecture is the cost, the fix is in the code.',
    points: [
      'Memory and CPU profiling that lets you drop a tier',
      'Always-on workloads moved to event-driven and serverless',
      'Legacy services containerised and consolidated onto AKS',
      'Chatty cross-region calls and egress designed out',
      'Cost per transaction as a tracked engineering metric',
    ],
    price: 'Project based',
  },
]

const results = [
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden="true" />,
    headline: '~€50k / year',
    body: 'Redesigned foreign-currency transaction processing for a bank into a distributed REST API, freeing the equivalent of 0.75 FTE in annual operational effort.',
  },
  {
    icon: <Zap className="h-6 w-6" aria-hidden="true" />,
    headline: '3 GB → 800 MB',
    body: "Cut an airline application's memory footprint by over 70%, which made a smaller, cheaper instance class viable in production.",
  },
  {
    icon: <Server className="h-6 w-6" aria-hidden="true" />,
    headline: 'Service Fabric → AKS',
    body: 'Migrated legacy microservices onto right-sized, elastically scaled infrastructure, reducing both operational overhead and compute footprint.',
  },
]

const steps = [
  {
    title: 'Call',
    body: 'Thirty minutes about your estate, your bill and what is worrying you.',
  },
  {
    title: 'Read-only access',
    body: 'Cost Management Reader and Reader on the subscriptions in scope. Nothing more.',
  },
  {
    title: 'Assessment',
    body: 'Two weeks to findings, sized savings and a plan your team can act on alone if you prefer.',
  },
  {
    title: 'Implementation',
    body: 'Optional. I carry out the plan with your engineers and hand over the code and the runbook.',
  },
]

const fit = {
  good: [
    'You spend somewhere between [LOWER BOUND] and [UPPER BOUND] a year on Azure',
    'You run .NET',
    'Your bill grows faster than your customer base, and nobody owns it full time',
    'You want the fix, not a governance framework',
  ],
  bad: [
    'You are primarily on AWS or GCP',
    'You already have a FinOps team and want extra hands on reporting',
    'You want a number cut by a fixed percentage regardless of what it does to the product',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${PAGE_TITLE} — Djordje Nedovic`,
  url: `${siteMetadata.siteUrl}/services`,
  description: PAGE_DESCRIPTION,
  areaServed: 'Worldwide',
  provider: {
    ...personRef,
    jobTitle: 'Senior Software Engineer',
    sameAs: [siteMetadata.linkedin, siteMetadata.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Novi Sad',
      addressCountry: 'RS',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Azure cost optimisation services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.intro,
      },
    })),
  },
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-2">
          <span className="flex-shrink-0 text-primary-500 dark:text-primary-400" aria-hidden="true">
            •
          </span>
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        title="Azure cost optimisation for .NET teams"
        description="I help .NET teams cut their Azure spend through hands-on cost optimisation. Most cost work stops at a report full of recommendations someone else has to implement — I find where the money goes, then change the infrastructure and the code that produce it."
      >
        {credentials.map((c) => (
          <Badge key={c} variant="neutral">
            {c}
          </Badge>
        ))}
      </PageHeader>

      <div className="space-y-8 pb-12">
        <Card>
          <CardHeader>
            <CardTitle>
              <Scale className="h-6 w-6" aria-hidden="true" />
              How I approach Azure cost optimisation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  What you usually get
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  A dashboard, a tagging policy nobody enforces, and a list of rightsizing
                  recommendations handed to an engineering team that already has a backlog. Six
                  months later the report is stale and the bill is higher.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  What I do instead
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  I write the Terraform, the policies and the pipelines. I open the .NET solution
                  and fix the workload that needs a bigger VM because it leaks memory. The saving is
                  implemented, not recommended.
                </p>
                <Link
                  href="/posts/subscription-rule-migration"
                  className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Example: debugging an undocumented AzureRM bug in a Terraform migration &rarr;
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Briefcase className="h-6 w-6" aria-hidden="true" />
              Ways to work together
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900/40"
                >
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {service.step}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="mb-4 mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.intro}
                  </p>
                  <div className="mb-6">
                    <BulletList items={service.points} />
                  </div>
                  <p className="mt-auto border-t border-slate-200 pt-4 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:text-slate-100">
                    {service.price}
                  </p>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <TrendingUp className="h-6 w-6" aria-hidden="true" />
              Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {results.map((r) => (
                <div key={r.headline} className="space-y-3 text-center">
                  <div className="flex justify-center text-primary-600 dark:text-primary-400">
                    {r.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{r.headline}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{r.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center">
              <Link
                href="/about"
                className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Full experience and certifications on the About page &rarr;
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <ListOrdered className="h-6 w-6" aria-hidden="true" />
              How an engagement runs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li key={step.title} className="space-y-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Cloud className="h-6 w-6" aria-hidden="true" />
              Is this a fit?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                  <CircleCheck className="h-5 w-5 text-primary-500" aria-hidden="true" />A good fit
                  if
                </h3>
                <BulletList items={fit.good} />
              </div>
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                  <CircleX className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  Probably not if
                </h3>
                <BulletList items={fit.bad} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="muted" id="contact" className="scroll-mt-20 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight">Let&rsquo;s talk</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Send me last month&rsquo;s Azure bill and one sentence about what worries you. You will
            get an honest answer about whether there is anything worth doing — including when the
            answer is no.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${siteMetadata.email}`} size="lg">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get in touch
            </Button>
            <Button href={siteMetadata.linkedin} variant="secondary" size="lg">
              LinkedIn
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Based in Novi Sad, Serbia · Working remotely across CET and US hours
          </p>
        </Card>
      </div>
    </>
  )
}
