import type { CSSProperties, ComponentType, MouseEvent, ReactNode } from 'react';

export interface TiltedCardLayerProps {
  depth?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface TiltedCardProps {
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  containerHeight?: number | string;
  containerWidth?: number | string;
  imageHeight?: number | string;
  imageWidth?: number | string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
  overlayContent?: ReactNode;
  displayOverlayContent?: boolean;
  overlayDepth?: number;
  children?: ReactNode;
  backContent?: ReactNode;
  flipOnClick?: boolean;
  flipped?: boolean;
  onFlip?: (flipped: boolean) => void;
  radius?: number | string;
  perspective?: number | string;
  smoothness?: number;
  glare?: number;
  glareColor?: string;
  shadow?: number;
  parallax?: number;
  axis?: 'both' | 'horizontal' | 'vertical';
  reverse?: boolean;
  trackWindow?: boolean;
  floating?: boolean;
  gyroscope?: boolean;
  intro?: boolean;
  introDelay?: number;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  style?: CSSProperties;
}

export declare const TiltedCardLayer: ComponentType<TiltedCardLayerProps>;
declare const TiltedCard: ComponentType<TiltedCardProps>;

export default TiltedCard;

