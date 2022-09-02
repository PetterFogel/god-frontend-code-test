import { FC } from "react";
import { Car } from "../../../../models/car";
import { Flex, View, Text, Link } from "vcc-ui";
import Image from "next/image";

type CarItemProps = {
  car: Car;
};

export const CarItem: FC<CarItemProps> = ({ car }) => {
  return (
    <View key={car.id} padding={1.5} extend={{ flex: "25%" }}>
      <Text
        variant="bates"
        style={{ color: "grey", fontSize: "0.8rem" }}
        subStyle="emphasis"
      >
        {car.bodyType.toUpperCase()}
      </Text>
      <View extend={{ flexDirection: "row" }}>
        <Text subStyle="emphasis" extend={{ marginRight: "0.3rem" }}>
          {car.modelName}
        </Text>
        <Text>{car.modelType}</Text>
      </View>
      <Image
        src={car.imageUrl}
        alt={car.modelName}
        width={"100%"}
        height={"100%"}
        layout={"responsive"}
        objectFit={"contain"}
      />
      <Flex
        extend={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/" arrow="right" style={{ margin: "0rem 1rem" }}>
          LEARN
        </Link>
        <Link href="/" arrow="right" style={{ margin: "0rem 1rem" }}>
          SHOP
        </Link>
      </Flex>
    </View>
  );
};
