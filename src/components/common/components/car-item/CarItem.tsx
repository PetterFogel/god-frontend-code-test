import { FC } from "react";
import { Car } from "../../../../../models/car";
import { Flex, View, Text, Link, Block } from "vcc-ui";
import Image from "next/image";

type CarItemProps = {
  car: Car;
  priorityIndex?: Number;
};

export const CarItem: FC<CarItemProps> = ({ car, priorityIndex }) => {
  return (
    <>
      <Block extend={{ flex: "25%", padding: 15 }}>
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
          priority={priorityIndex === 0}
        />
        <Flex
          extend={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href={`/recharge-cars/learn/${car.id}`}
            arrow="right"
            style={{ margin: "0rem 1rem" }}
          >
            LEARN
          </Link>
          <Link
            href={`/recharge-cars/shop/${car.id}`}
            arrow="right"
            style={{ margin: "0rem 1rem" }}
          >
            SHOP
          </Link>
        </Flex>
      </Block>
    </>
  );
};
