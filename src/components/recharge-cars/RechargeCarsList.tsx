import { FC, useRef } from "react";
import { Car } from "../../../models/car";
import { sliderSettings } from "../common/constants/sliderSettings";
import { Flex, View, Spacer, IconButton } from "vcc-ui";
import { CarItem } from "../common/components/car-item/CarItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevAndNextButtonConatiner } from "../common/components/prev-and-next-button-container/PrevAndNextButtonContainer";

type RechargeCarsListProps = {
  cars: Car[];
};

export const RechargeCarsList: FC<RechargeCarsListProps> = ({ cars }) => {
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
