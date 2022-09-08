import { FC } from "react";
import { Car } from "../../../models/car";
import { CarsSlider } from "../common/components/cars-slider/CarsSlider";

type RechargeCarsListProps = {
  cars: Car[];
};

export const RechargeCarsList: FC<RechargeCarsListProps> = ({ cars }) => {
  return (
    <>
      <CarsSlider cars={cars} />
    </>
  );
};
