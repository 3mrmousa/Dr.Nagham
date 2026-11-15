"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ReactGoogleReviews } from "react-google-reviews";
import { useEffect, useState } from "react";
import { toArabicDigits } from "@/utils/toArabicDigits";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchstartX] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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

            const activeIndex = currentIndex % reviews.length;

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

                <div
                  className="max-w-2xl mx-auto overflow-hidden rounded-2xl"
                  onTouchStart={(e) => setTouchstartX(e.touches[0].clientX)}
                  onTouchEnd={(e) => {
                    const touchEndX = e.changedTouches[0].clientX;
                    const distance = touchEndX - touchStartX;

                    if (distance > 50) {
                      setCurrentIndex((prev) => prev + 1);
                    } else if (distance < -50) {
                      setCurrentIndex((prev) =>
                        prev === 0 ? reviews.length - 1 : prev - 1,
                      );
                    }
                  }}
                >
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${activeIndex * 100}%)` }}
                  >
                    {reviews.map((review, index) => (
                      <article
                        key={review.reviewId ?? index}
                        className="w-full shrink-0 h-60 min-h-56 p-6 md:p-8 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-5"
                      >
                        <div>
                          <div className="flex justify-end items-center gap-1 text-secondary">
                            {Array.from(
                              { length: review.starRating },
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-current"
                                />
                              ),
                            )}
                          </div>
                          <p
                            dir="ltr"
                            className="font-body-md text-body-md text-on-surface leading-relaxed mt-3 line-clamp-3"
                          >
                            {review.comment
                              ? `${review.comment}`
                              : "تقييم عبر خرائط جوجل."}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-3">
                          {review.reviewer.profilePhotoUrl ? (
                            <img
                              src={review.reviewer.profilePhotoUrl}
                              alt={review.reviewer.displayName}
                              className="w-11 h-11 rounded-full object-cover shrink-0 border border-outline-variant/30"
                            />
                          ) : (
                            <div className="w-11 h-11 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-sm shrink-0">
                              {review.reviewer.displayName.charAt(0)}
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="font-label-lg text-label-lg text-on-surface font-bold truncate">
                              {review.reviewer.displayName}
                            </p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">
                              مراجع عبر خرائط جوجل
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-space-md flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === 0 ? reviews.length - 1 : prev - 1,
                      )
                    }
                    aria-label="التقييم التالي"
                    className="w-10 h-10 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    aria-label="التقييم السابق"
                    className="w-10 h-10 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              </>
            );
          }}
        />
      </div>
    </section>
  );
}
