"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
  useProgressSliderContext,
} from "@/components/ui/progressive-carousel";
import { ReviewCard, type ReviewItem } from "./ReviewCard";

interface ReviewsCarouselProps {
  reviews: ReviewItem[];
}

function ReviewSelectorStrip({
  reviews,
  getSlideId,
}: {
  reviews: ReviewItem[];
  getSlideId: (review: ReviewItem, index: number) => string;
}) {
  const { active } = useProgressSliderContext();
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const marker = strip.querySelector<HTMLElement>(
      `[data-slide-id="${CSS.escape(active)}"]`
    );
    const activeBtn = marker?.closest("button");
    if (!activeBtn) return;

    const targetLeft =
      activeBtn.offsetLeft - strip.clientWidth / 2 + activeBtn.clientWidth / 2;
    strip.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [active]);

  return (
    <div
      ref={stripRef}
      className="mt-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <SliderBtnGroup className="flex items-stretch gap-2.5 w-max min-w-full">
        {reviews.map((review, index) => {
          const id = getSlideId(review, index);
          return (
            <SliderBtn
              key={id}
              value={id}
              className="w-44 sm:w-48 shrink-0 cursor-pointer rounded-2xl border border-outline-variant/35 bg-surface-container-lowest/80 px-3 py-2.5 text-start overflow-hidden backdrop-blur-sm hover:border-primary/35 transition-colors"
              progressBarClass="bg-primary/10 h-full border-b-2 border-primary"
            >
              <span data-slide-id={id} className="sr-only" />
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-[10px] shrink-0">
                  {review.reviewer.displayName.charAt(0)}
                </span>
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  {review.reviewer.displayName}
                </span>
              </div>
              <div className="flex items-center gap-1 text-secondary">
                <Star className="w-3 h-3 fill-current shrink-0" />
                <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                  {review.comment?.trim() || "تقييم عبر خرائط جوجل"}
                </p>
              </div>
            </SliderBtn>
          );
        })}
      </SliderBtnGroup>
    </div>
  );
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  if (reviews.length === 0) return null;

  const getSlideId = (review: ReviewItem, index: number) =>
    review.reviewId || `review-${index}`;

  const firstSlide = getSlideId(reviews[0], 0);

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressSlider duration={5000} fastDuration={350} activeSlider={firstSlide}>
        <SliderContent className="relative">
          {reviews.map((review, index) => (
            <SliderWrapper
              key={getSlideId(review, index)}
              value={getSlideId(review, index)}
            >
              <ReviewCard review={review} />
            </SliderWrapper>
          ))}
        </SliderContent>

        <ReviewSelectorStrip reviews={reviews} getSlideId={getSlideId} />
      </ProgressSlider>
    </div>
  );
}
