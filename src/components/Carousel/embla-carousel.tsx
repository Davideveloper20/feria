import React, { useState, useEffect, useCallback, FC } from "react";
import useRouter from "next/router";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { Thumb } from "./embla-carousel-thumbs-button";

interface EmblaCarouselProps {
  slides: Category[];
  options: EmblaCarouselType;
}

interface Category {
  name: string;
  image: string;
}

const EmblaCarousel: FC<EmblaCarouselProps> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const navigateToProductDetail = (name: string) => {
    const router = useRouter;
    router.push({
      pathname: "/categorie",
      query: { product: name },
    });
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">



        {slides.map((slide, index) => (
            <div
              className="embla__slide"
              key={index}
              onClick={() => navigateToProductDetail(slide.name)}
            >
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <div className="embla__slide__content">
                <img
                  className="embla__slide__img"
                  src={slide.image}
                  alt="categories"
                />
                <div className="embla__slide__title">{slide.name}</div>
              </div>
            </div>
          ))}


        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={slide.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;