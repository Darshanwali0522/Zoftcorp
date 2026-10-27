import React from 'react';
import { Star, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ClientReview, CLIENT_REVIEWS } from '@/data/reviews';

interface ClientReviewsSectionProps {
  reviews?: ClientReview[];
}

export const ClientReviewsSection: React.FC<ClientReviewsSectionProps> = ({
  reviews = CLIENT_REVIEWS,
}) => {
  const publishedReviews = reviews.filter((r) => r.published);
  const hasReviews = publishedReviews.length > 0;

  return (
    <section
      id="client-reviews"
      aria-labelledby="client-reviews-heading"
      className="py-20 md:py-28 border-b border-slate-200/80 bg-slate-50/70 scroll-mt-16"
    >
      <Container>
        {/* Section Heading & Context */}
        <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5 text-[#0066CC]" />
            CLIENT VOICES &amp; FEEDBACK
          </span>
          <h2
            id="client-reviews-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans"
          >
            Client Reviews
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            What enterprise engineering leaders and database stakeholders say about partnering with Zoftcorp.
          </p>
        </div>

        {/* Dynamic Reviews Grid OR Polished Empty State */}
        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {publishedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#00B3FF]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  {review.rating && (
                    <div className="flex items-center gap-1 text-[#FF9900]" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating! ? 'fill-current' : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Review Quote */}
                  <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans italic">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Client Metadata & Scope Badge */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div>
                    <div className="font-bold text-slate-900 text-sm font-sans">
                      {review.clientName}
                    </div>
                    {(review.clientRole || review.companyName) && (
                      <div className="text-xs text-slate-500 font-sans">
                        {[review.clientRole, review.companyName].filter(Boolean).join(' • ')}
                      </div>
                    )}
                  </div>
                  {review.projectScope && (
                    <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {review.projectScope}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Polished, intentional empty state ready for future admin CMS publishing */
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-6 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#00B3FF]/10 text-[#0066CC] flex items-center justify-center mx-auto border border-[#00B3FF]/20">
              <MessageSquare className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0066CC] bg-[#00B3FF]/10 px-3 py-1 rounded-full">
                CLIENT REVIEWS COMING SOON
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#01153B] font-sans tracking-tight">
                Verified Client Reviews Are Being Compiled
              </h3>
            </div>

            <p className="text-base text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
              We are assembling verified feedback and references from recent enterprise database migrations, FinOps governance, and managed DBA engagements. Reviews managed through our advisory practice will be published here.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
                <span>Verified Engagements</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0066CC]" />
                <span>Architecture &amp; DBA Advisory</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
                <span>Client Reference Available Upon Request</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Request Client References</span>
              </a>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
