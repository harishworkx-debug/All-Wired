import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Phone,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Share2,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import { getBlogPost, getRelatedBlogPosts } from '@/data/blog';
import { BUSINESS } from '@/data/business';
import { articleSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/schema';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category);
  const path = `/blog/${post.slug}`;

  const jsonLd = [
    localBusinessSchema(),
    articleSchema(post),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Electrical Guides', path: '/blog' },
      { name: post.title, path },
    ]),
    ...(post.faqs.length > 0 ? [faqSchema(post.faqs)] : []),
  ];

  return (
    <>
      <Seo
        title={post.seoTitle}
        description={post.metaDescription}
        path={path}
        jsonLd={jsonLd}
        ogImage={post.image}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Electrical Guides', path: '/blog' },
              { name: post.title },
            ]}
          />
        </div>
      </div>

      {/* Article Header & Main Container */}
      <article className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Article Content */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-navy-500">
                  <span className="rounded-full bg-electric-100 px-3 py-1 font-semibold text-electric-700">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.publishDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                <h1 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl text-balance">
                  {post.title}
                </h1>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-600 text-pretty">
                  {post.excerpt}
                </p>

                {/* Featured Image */}
                <div className="mt-8 overflow-hidden rounded-2xl shadow-md bg-navy-100">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-auto w-full object-cover max-h-[440px]"
                    loading="eager"
                  />
                </div>

                {/* Primary Service Callout Banner */}
                <div className="mt-8 rounded-xl border border-electric-200 bg-electric-50/70 p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-electric-700">
                        Professional Service Recommendation
                      </p>
                      <p className="mt-1 text-sm sm:text-base font-bold text-navy-900">
                        Need help with {post.mainKeyword.toLowerCase()}?
                      </p>
                      <p className="text-xs sm:text-sm text-navy-600">
                        All Wired provides licensed, code-compliant installations throughout American Fork, Lehi, and Utah County.
                      </p>
                    </div>
                    <Link
                      to={post.targetService.url}
                      className="inline-flex shrink-0 items-center justify-center rounded-xl bg-electric-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow hover:bg-electric-500 transition-colors"
                    >
                      {post.targetService.name}
                      <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Article Body Sections */}
                <div className="mt-10 space-y-10 text-navy-700">
                  {post.sections.map((section, idx) => (
                    <section key={idx} className="space-y-4">
                      <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                        {section.h2}
                      </h2>

                      {section.lead && (
                        <p className="text-base sm:text-lg font-medium leading-relaxed text-navy-800">
                          {section.lead}
                        </p>
                      )}

                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-navy-600">
                          {p}
                        </p>
                      ))}

                      {section.callout && (
                        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-4 sm:p-5">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                            <p className="text-xs sm:text-sm leading-relaxed text-navy-800 font-medium">
                              {section.callout}
                            </p>
                          </div>
                        </div>
                      )}

                      {section.internalLink && (
                        <div className="my-4 rounded-xl border border-navy-100 bg-white p-4 shadow-sm">
                          <p className="text-sm text-navy-600">
                            {section.internalLink.context}{' '}
                            <Link
                              to={section.internalLink.url}
                              className="font-bold text-electric-600 hover:text-electric-700 underline underline-offset-2"
                            >
                              {section.internalLink.anchor}
                            </Link>
                            .
                          </p>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* In-Article Internal Link to Secondary Service if applicable */}
                {post.secondaryService && (
                  <div className="mt-10 rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Related Electrical Services
                    </h3>
                    <p className="mt-2 text-sm text-navy-600">
                      Learn more about our code-compliant{' '}
                      <Link
                        to={post.secondaryService.url}
                        className="font-semibold text-electric-600 hover:text-electric-700 underline"
                      >
                        {post.secondaryService.anchorText}
                      </Link>{' '}
                      or explore our full portfolio of residential electrical solutions.
                    </p>
                  </div>
                )}

                {/* Article FAQs */}
                {post.faqs.length > 0 && (
                  <div className="mt-12 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900">
                      Frequently Asked Questions
                    </h2>
                    <div className="mt-6">
                      <FaqList faqs={post.faqs} />
                    </div>
                  </div>
                )}

                {/* Back to Guides Link */}
                <div className="mt-10 pt-6 border-t border-navy-200">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-700"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back to All Electrical Guides
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <Reveal delay={100}>
              <div className="sticky top-24 space-y-6">
                {/* Author & Credibility Card */}
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-amber-400 font-bold">
                      AW
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-navy-900">
                        {BUSINESS.legalName}
                      </h4>
                      <p className="text-xs text-navy-500">
                        Utah Licensed Electrician #{BUSINESS.license.number}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-navy-600">
                    Over 40 years of hands-on electrical contracting experience in American Fork, Lehi, and Utah County.
                  </p>
                </div>

                {/* Call to Action Card */}
                <div className="rounded-2xl bg-navy-900 p-6 text-center shadow-lg">
                  <Phone className="mx-auto h-8 w-8 text-amber-400" aria-hidden="true" />
                  <h4 className="mt-3 font-display text-lg font-bold text-white">
                    Have an Electrical Project?
                  </h4>
                  <p className="mt-2 text-xs text-gray-300">
                    Speak directly with a licensed electrician. Free estimates & same-day emergency response.
                  </p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-3 block font-display text-2xl font-bold text-white hover:text-amber-400"
                  >
                    {BUSINESS.phone}
                  </a>
                  <div className="mt-4">
                    <CallButton variant="primary" label="Call Now" className="w-full" />
                  </div>
                </div>

                {/* Core Service Links Widget */}
                <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                  <h4 className="font-display text-sm font-bold text-navy-900">
                    Core Electrical Services
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm">
                    <li>
                      <Link
                        to="/electrical-repairs-and-upgrades"
                        className="text-navy-700 hover:text-electric-600 font-medium transition-colors"
                      >
                        → Electrical Repairs & Panel Upgrades
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wiring-and-installations"
                        className="text-navy-700 hover:text-electric-600 font-medium transition-colors"
                      >
                        → Wiring & Installations
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lighting-solutions"
                        className="text-navy-700 hover:text-electric-600 font-medium transition-colors"
                      >
                        → Lighting Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/generators-and-backup-power"
                        className="text-navy-700 hover:text-electric-600 font-medium transition-colors"
                      >
                        → Generators & Backup Power
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ev-chargers-and-modern-power"
                        className="text-navy-700 hover:text-electric-600 font-medium transition-colors"
                      >
                        → EV Chargers & Modern Power
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Related Articles Widget */}
                {relatedPosts.length > 0 && (
                  <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                    <h4 className="font-display text-sm font-bold text-navy-900">
                      Related Guides
                    </h4>
                    <div className="mt-3 space-y-3">
                      {relatedPosts.map((r) => (
                        <Link
                          key={r.slug}
                          to={`/blog/${r.slug}`}
                          className="group block text-xs"
                        >
                          <span className="font-semibold text-navy-800 group-hover:text-electric-600 transition-colors line-clamp-2">
                            {r.title}
                          </span>
                          <span className="mt-1 block text-navy-400">
                            {r.readTime}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <CtaSection
        title={`Ready to Resolve Your ${post.mainKeyword} Needs?`}
        subtitle="Call All Wired today for a licensed assessment in American Fork, Lehi, or surrounding Utah communities. Free estimates and over 40 years of trusted experience."
      />
    </>
  );
}

