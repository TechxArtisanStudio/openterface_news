/**
 * Client-side slideshow for legacy article HTML embedded in markdown.
 */

type SlideshowInstance = {
  changeSlide: (n: number) => void;
  currentSlide: (n: number) => void;
};

declare global {
  interface Window {
    slideshows?: Record<string, SlideshowInstance>;
    changeSlide?: (slideshowId: string, n: number) => void;
    currentSlide?: (slideshowId: string, n: number) => void;
  }
}

class ArticleSlideshow {
  private container: HTMLElement;
  private slideIndex = 1;
  private slides: HTMLCollectionOf<Element>;
  private dots: HTMLCollectionOf<Element>;
  private currentSlideElement: Element | null = null;
  private autoSlide: boolean;
  private autoSlideInterval: number;
  private autoSlideTimer: ReturnType<typeof setInterval> | null = null;
  private isPaused = false;

  constructor(containerId: string, options: { autoSlide?: boolean; autoSlideInterval?: number } = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.container = container;
    this.slides = container.getElementsByClassName('slide');
    this.dots = container.getElementsByClassName('dot');
    this.autoSlide = options.autoSlide ?? false;
    this.autoSlideInterval = options.autoSlideInterval ?? 3000;

    if (this.slides.length > 0) {
      this.currentSlideElement = this.slides[0]!;
      this.currentSlideElement.classList.add('active');
    }

    this.addTouchSupport();
    this.addHoverSupport();

    if (this.autoSlide) this.startAutoSlide();
  }

  changeSlide(n: number) {
    this.showSlides((this.slideIndex += n));
    this.resetAutoSlide();
  }

  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
    this.resetAutoSlide();
  }

  private showSlides(n: number) {
    if (n > this.slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = this.slides.length;

    if (this.currentSlideElement === this.slides[this.slideIndex - 1]) return;

    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i]!.classList.remove('active');
    }
    if (this.dots[this.slideIndex - 1]) {
      this.dots[this.slideIndex - 1]!.classList.add('active');
    }

    this.fadeToSlide(this.slideIndex - 1);
  }

  private fadeToSlide(targetIndex: number) {
    const targetSlide = this.slides[targetIndex];
    const currentSlide = this.currentSlideElement;

    if (!targetSlide) return;

    if (!currentSlide) {
      this.currentSlideElement = targetSlide;
      targetSlide.classList.add('active');
      return;
    }

    if (currentSlide === targetSlide) return;

    currentSlide.classList.remove('active');
    window.setTimeout(() => {
      this.currentSlideElement = targetSlide;
      targetSlide.classList.add('active');
    }, 300);
  }

  private startAutoSlide() {
    if (this.autoSlide && !this.isPaused) {
      this.autoSlideTimer = window.setInterval(() => this.changeSlide(1), this.autoSlideInterval);
    }
  }

  private stopAutoSlide() {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    if (this.autoSlide && !this.isPaused) this.startAutoSlide();
  }

  private addHoverSupport() {
    this.container.addEventListener('mouseenter', () => {
      this.isPaused = true;
      this.stopAutoSlide();
    });
    this.container.addEventListener('mouseleave', () => {
      this.isPaused = false;
      this.resetAutoSlide();
    });
  }

  private addTouchSupport() {
    let startX = 0;
    this.container.addEventListener(
      'touchstart',
      (event) => {
        startX = event.touches[0]?.clientX ?? 0;
      },
      { passive: true },
    );
    this.container.addEventListener(
      'touchend',
      (event) => {
        const endX = event.changedTouches[0]?.clientX ?? 0;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
          this.changeSlide(diff > 0 ? 1 : -1);
        }
      },
      { passive: true },
    );
  }
}

export function initArticleSlideshows(): void {
  window.slideshows = window.slideshows ?? {};

  window.changeSlide = (slideshowId, n) => {
    window.slideshows?.[slideshowId]?.changeSlide(n);
  };

  window.currentSlide = (slideshowId, n) => {
    window.slideshows?.[slideshowId]?.currentSlide(n);
  };

  document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    const element = container as HTMLElement;
    const slideshowId = element.id || `slideshow-${index}`;
    element.id = slideshowId;

    const autoSlide = element.dataset.autoSlide === 'true';
    const autoSlideInterval = Number.parseInt(element.dataset.autoSlideInterval ?? '3000', 10);

    window.slideshows![slideshowId] = new ArticleSlideshow(slideshowId, {
      autoSlide,
      autoSlideInterval,
    });
  });
}
