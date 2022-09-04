import { FC, useRef } from "react";
import { Car } from "../../../models/car";
import { RechargeCarItem } from "./RechargeCarItem";
import { sliderSettings } from "../common/constants/sliderSettings";
import { Flex, View, Spacer, IconButton } from "vcc-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type RechargeCarsListProps = {
  cars: Car[];
};

export const RechargeCarsList: FC<RechargeCarsListProps> = ({ cars }) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <View maxWidth={1300} width={"100%"} margin="auto">
      <Slider {...sliderSettings} ref={sliderRef}>
        {cars.map((car) => (
          <RechargeCarItem key={car.id} car={car} />
        ))}
      </Slider>
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "1rem",
          padding: "1rem",
          untilL: {
            display: "none",
          },
        }}
      >
        <IconButton
          iconName={"navigation-chevronback"}
          onClick={() => sliderRef!.current!.slickPrev()}
          variant="outline"
        />
        <Spacer size={{ default: 2 }} />
        <IconButton
          iconName={"navigation-chevronforward"}
          onClick={() => sliderRef!.current!.slickNext()}
          variant="outline"
        />
      </Flex>
    </View>
  );
};
