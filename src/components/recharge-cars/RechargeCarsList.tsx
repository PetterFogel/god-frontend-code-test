import { FC } from "react";
import { Car } from "../../../models/car";
import { CarItem } from "../common/components/CarItem";
import { Flex, View, Spacer, IconButton } from "vcc-ui";

type RechargeCarsListProps = {
  cars: Car[];
};

export const RechargeCarsList: FC<RechargeCarsListProps> = ({ cars }) => {
  return (
    <View
      maxWidth={1300}
      width={"100%"}
      margin="auto"
      style={{ overflow: "hidden" }}
    >
      <Flex extend={{ flexDirection: "row" }}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </Flex>
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <IconButton
          iconName={"navigation-chevronback"}
          onClick={() => console.log("prev")}
          variant="outline"
        />
        <Spacer />
        <Spacer />
        <IconButton
          iconName={"navigation-chevronforward"}
          onClick={() => console.log("prev")}
          variant="outline"
        />
      </Flex>
    </View>
  );
};
