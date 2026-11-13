import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import { BLOG_POSTS, type BlogPost } from '@/data/blog';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema';

const CATEGORIES = [
  'All',
  'Electrical Panels',
  'EV Charging',
  'Home Wiring',
  'Lighting',
  'Generators',
  'Safety',
] as const;

export default function BlogOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const jsonLd = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Electrical Guides', path: '/blog' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Electrical Guides & Advice for Utah Homeowners | All Wired LLC"
        description="Expert guides on electrical panel upgrades, Level 2 EV charging, breaker repairs, generators, and home electrical safety from All Wired in American Fork, UT."
        path="/blog"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-900/80" />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
              <BookOpen className="h-3 w-3" aria-hidden="true" />
              Electrical Knowledge Hub
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              Electrical Guides & Resources for Utah Homeowners
            </h1>
            <p className="mt-4 text-base text-gray-300 sm:text-lg text-pretty">
              Helpful, practical advice written by licensed master electricians with over 40 years of experience. Learn what to look for, how systems work, and when to call a professional.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Electrical Guides' }]} />
        </div>
      </div>

      {/* Main Content */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-navy-700 border border-navy-100 hover:border-electric-300 hover:text-electric-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Articles */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 50}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-electric-200 hover:shadow-lg">
                  <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-navy-100">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-navy-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {post.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-lg font-bold text-navy-900 transition-colors group-hover:text-electric-600">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-navy-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 border-t border-navy-50 pt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-electric-600 group-hover:underline">
                        Read Guide
                      </span>
                      <ArrowRight className="h-4 w-4 text-electric-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Need Hands-On Electrical Assistance in American Fork?"
        subtitle="Have a question about your home's electrical panel, EV charger, or wiring? Talk directly with our master electricians. Free estimates and 40+ years experience."
      />
    </>
  );
}

