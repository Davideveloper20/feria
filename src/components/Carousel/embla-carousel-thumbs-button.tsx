import React, { FC, MouseEvent } from "react";

interface ThumbProps {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Thumb: FC<ThumbProps> = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="categories"
        />
      </button>
    </div>
  );
};
