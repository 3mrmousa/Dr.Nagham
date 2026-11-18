"use client";

import { Quote, Star } from "lucide-react";
import { toArabicDigits } from "@/utils/toArabicDigits";

export interface ReviewItem {
  reviewId?: string | null;
  starRating: number;
  comment?: string | null;
  reviewer: {
    displayName: string;
    profilePhotoUrl?: string | null;
  };
}

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const commentText = review.comment?.trim() || "تقييم عبر خرائط جوجل.";
  const isRtl = /[\u0600-\u06FF]/.test(commentText);
  const stars = Math.max(0, Math.min(5, Math.round(review.starRating || 5)));

  return (
    <article className="relative overflow-hidden rounded-3xl border border-outline-variant/35 bg-surface-container-lowest p-6 md:p-9 shadow-[0_12px_40px_-16px_rgba(27,28,26,0.08)] flex flex-col justify-between gap-6 min-h-[250px] md:min-h-[270px]">
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute top-6 end-6 w-14 h-14 text-primary/8"
      />

      {/* Top: Reviewer & Rating */}
      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 min-w-0">
          {review.reviewer.profilePhotoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={review.reviewer.profilePhotoUrl}
              alt={review.reviewer.displayName}
              className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary-fixed"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-base shrink-0">
              {review.reviewer.displayName.charAt(0)}
            </div>
          )}

          <div className="min-w-0">
            <p className="font-label-lg text-label-lg text-on-surface font-bold truncate">
              {review.reviewer.displayName}
            </p>
            <p className="font-label-md text-label-md text-on-surface-variant">
              مراجع عبر خرائط جوجل
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-fixed/45 px-3 py-1.5 text-secondary shrink-0">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < stars ? "fill-current text-secondary" : "text-secondary/25"
                }`}
              />
            ))}
          </div>
          <span className="font-label-md text-label-md font-bold text-on-secondary-fixed">
            {toArabicDigits(stars.toFixed(1))}
          </span>
        </div>
      </div>

      {/* Comment */}
      <p
        dir={isRtl ? "rtl" : "ltr"}
        className="relative font-body-lg text-base md:text-lg text-on-surface leading-relaxed line-clamp-4"
      >
        {commentText}
      </p>
    </article>
  );
}

