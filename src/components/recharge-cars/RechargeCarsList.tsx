import { FC } from "react";
import { Car } from "../../../models/car";
import Image from "next/image";
import { Flex, View, Text, Link, Spacer, IconButton } from "vcc-ui";

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
