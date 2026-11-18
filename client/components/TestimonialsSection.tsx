"use client";

import { Star } from "lucide-react";
import { ReactGoogleReviews } from "react-google-reviews";
import { ReviewsCarousel } from "@/components/reviews";
import { toArabicDigits } from "@/utils/toArabicDigits";

export function TestimonialsSection() {
  return (
    <section className="w-full py-space-lg bg-surface" id="reviews">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <ReactGoogleReviews
          layout="custom"
          widgetVersion="v2"
          featurableId="82431b70-1781-449c-a984-d259ef56db3b"
          renderer={(reviews) => {
            if (reviews.length === 0) return null;

            const avgRating = (
              reviews.reduce((sum, r) => sum + r.starRating, 0) / reviews.length
            ).toFixed(1);

            return (
              <>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
                  <div>
                    <span className="font-label-md text-label-md text-secondary font-semibold">
                      تجارب حقيقية
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                      آراء وتجارب المراجعين بالعيادة
                    </h2>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary font-label-lg text-label-lg">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-on-surface">
                      {toArabicDigits(avgRating)} / ٥.٠
                    </span>
                    <span className="text-on-surface-variant font-normal">
                      (بناءً على تقييمات مراجعي العيادة على maps)
                    </span>
                  </div>
                </div>

                <ReviewsCarousel reviews={reviews} />
              </>
            );
          }}
        />
      </div>
    </section>
  );
}
