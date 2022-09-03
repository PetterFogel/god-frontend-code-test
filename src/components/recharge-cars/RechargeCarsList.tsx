import { FC } from "react";
import { Car } from "../../../models/car";
import { CarItem } from "../common/components/car-item/CarItem";
import { Flex, View, Spacer, IconButton, Block } from "vcc-ui";
import { useSpringCarousel } from "react-spring-carousel";

type RechargeCarsListProps = {
  cars: Car[];
};

export const RechargeCarsList: FC<RechargeCarsListProps> = ({ cars }) => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 4,
      withLoop: false,
      items: cars.map((car) => ({
        id: car.id,
        renderItem: <CarItem key={car.id} car={car} />,
      })),
    });

  return (
    <View
      maxWidth={1300}
      width={"100%"}
      margin="auto"
      style={{ overflow: "hidden" }}
    >
      <Block>{carouselFragment}</Block>
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <IconButton
          iconName={"navigation-chevronback"}
          onClick={slideToPrevItem}
          variant="outline"
        />
        <Spacer size={{ default: 2 }} />
        <IconButton
          iconName={"navigation-chevronforward"}
          onClick={slideToNextItem}
          variant="outline"
        />
      </Flex>
    </View>
  );
};
