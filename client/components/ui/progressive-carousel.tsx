'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  ReactNode,
  FC,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface ProgressSliderContextType {
  active: string;
  handleButtonClick: (value: string) => void;
  vertical: boolean;
}

interface ProgressSliderProps {
  children: ReactNode;
  duration?: number;
  fastDuration?: number;
  vertical?: boolean;
  activeSlider: string;
  className?: string;
}

interface SliderContentProps {
  children: ReactNode;
  className?: string;
}

interface SliderWrapperProps {
  children: ReactNode;
  value: string;
  className?: string;
}

interface ProgressBarProps {
  children: ReactNode;
  className?: string;
}

interface SliderBtnProps {
  children: ReactNode;
  value: string;
  className?: string;
  progressBarClass?: string;
}

const ProgressSliderContext = createContext<
  ProgressSliderContextType | undefined
>(undefined);

const ProgressValueContext = createContext<number>(0);

export const useProgressSliderContext = (): ProgressSliderContextType => {
  const context = useContext(ProgressSliderContext);
  if (!context) {
    throw new Error(
      'useProgressSliderContext must be used within a ProgressSlider'
    );
  }
  return context;
};

export const ProgressSlider: FC<ProgressSliderProps> = ({
  children,
  duration = 5000,
  fastDuration = 400,
  vertical = false,
  activeSlider,
  className,
}) => {
  const [active, setActive] = useState<string>(activeSlider);
  const [progress, setProgress] = useState<number>(0);
  const [isFastForward, setIsFastForward] = useState<boolean>(false);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef<number>(0);
  const targetValue = useRef<string | null>(null);

  const sliderValues = useMemo(() => {
    const getChildren = React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) && child.type === SliderContent
    ) as React.ReactElement<{ children?: ReactNode }> | undefined;

    if (!getChildren) return [];

    return React.Children.toArray(getChildren.props.children)
      .filter((child): child is React.ReactElement<{ value?: string }> =>
        React.isValidElement(child)
      )
      .map((child) => child.props.value)
      .filter((v): v is string => typeof v === 'string');
  }, [children]);

  useEffect(() => {
    const animate = (now: number) => {
      const currentDuration = isFastForward ? fastDuration : duration;
      const elapsedTime = now - firstFrameTime.current;
      const timeFraction = elapsedTime / currentDuration;

      if (timeFraction <= 1) {
        setProgress((prev) =>
          isFastForward
            ? prev + (100 - prev) * timeFraction
            : timeFraction * 100
        );
        frame.current = requestAnimationFrame(animate);
      } else {
        if (isFastForward) {
          setIsFastForward(false);
          if (targetValue.current !== null) {
            setActive(targetValue.current);
            targetValue.current = null;
          }
        } else {
          const currentIndex = sliderValues.indexOf(active);
          const nextIndex = (currentIndex + 1) % sliderValues.length;
          setActive(sliderValues[nextIndex]);
        }
        setProgress(0);
        firstFrameTime.current = performance.now();
      }
    };

    if (sliderValues.length > 0) {
      firstFrameTime.current = performance.now();
      frame.current = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [sliderValues, active, isFastForward, duration, fastDuration]);

  const handleButtonClick = useCallback(
    (value: string) => {
      if (value !== active) {
        const elapsedTime = performance.now() - firstFrameTime.current;
        const currentProgress = (elapsedTime / duration) * 100;
        setProgress(currentProgress);
        targetValue.current = value;
        setIsFastForward(true);
        firstFrameTime.current = performance.now();
      }
    },
    [active, duration]
  );

  const sliderContextValue = useMemo(
    () => ({ active, handleButtonClick, vertical }),
    [active, handleButtonClick, vertical]
  );

  return (
    <ProgressSliderContext.Provider value={sliderContextValue}>
      <ProgressValueContext.Provider value={progress}>
        <div className={cn('relative', className)}>{children}</div>
      </ProgressValueContext.Provider>
    </ProgressSliderContext.Provider>
  );
};

export const SliderContent: FC<SliderContentProps> = ({
  children,
  className,
}) => {
  return <div className={cn('', className)}>{children}</div>;
};

export const SliderWrapper: FC<SliderWrapperProps> = ({
  children,
  value,
  className,
}) => {
  const { active } = useProgressSliderContext();

  return (
    <AnimatePresence mode='popLayout'>
      {active === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={cn('', className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const SliderBtnGroup: FC<ProgressBarProps> = ({
  children,
  className,
}) => {
  return <div className={cn('', className)}>{children}</div>;
};

export const SliderBtn: FC<SliderBtnProps> = ({
  children,
  value,
  className,
  progressBarClass,
}) => {
  const { active, handleButtonClick, vertical } = useProgressSliderContext();
  const progress = useContext(ProgressValueContext);
  const isActive = active === value;

  return (
    <button
      type="button"
      className={cn(
        'relative z-0 transition-opacity duration-300',
        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-85',
        className
      )}
      onClick={() => handleButtonClick(value)}
    >
      {children}
      <div
        className="absolute inset-0 overflow-hidden -z-10 max-h-full max-w-full"
        role="progressbar"
        aria-label="تقدم عرض التقييم"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(isActive ? progress : 0)}
      >
        <span
          className={cn('absolute start-0 bottom-0', progressBarClass)}
          style={{
            [vertical ? 'height' : 'width']: isActive ? `${progress}%` : '0%',
          }}
        />
      </div>
    </button>
  );
};
