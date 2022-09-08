import { FC, useRef } from "react";
import { Car } from "../../../../../models/car";
import { sliderSettings } from "../../constants/sliderSettings";
import { CarItem } from "../car-item/CarItem";
import { PrevAndNextButtonConatiner } from "../prev-and-next-button-container/PrevAndNextButtonContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarsSliderProps = {
  cars: Car[];
};

export const CarsSlider: FC<CarsSliderProps> = ({ cars }) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <>
      <Slider {...sliderSettings} ref={sliderRef} arrows={false}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} priorityIndex={0} />
        ))}
      </Slider>
      <PrevAndNextButtonConatiner sliderRef={sliderRef} />
    </>
  );
};
