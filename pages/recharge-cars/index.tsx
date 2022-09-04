import { NextPage } from "next";
import { useState } from "react";
import { TabNav, TabNavItem, Text, View } from "vcc-ui";
import { Car } from "../../models/car";
import { ErrorPanel } from "../../src/components/common/components/error-panel/ErrorPanel";
import { Loader } from "../../src/components/common/components/loader/Loader";
import { RechargeCarsFilterPanel } from "../../src/components/recharge-cars/RechargeCarsFilterPanel";
import { RechargeCarsList } from "../../src/components/recharge-cars/RechargeCarsList";
import { useFetchCars } from "../../src/hooks/rechargeCarsHooks";

const RechargeCarsPage: NextPage = () => {
  const { data, isLoading, error } = useFetchCars();
  const [selectedBodyType, setSelectedBodyType] = useState("all");

  const bodyTypeSelectHandler = (bodyType: string) => {
    setSelectedBodyType(bodyType);
  };

  const filterDataByBodyTypeHandler = (data: Car[], bodyType: string) => {
    return bodyType === "all"
      ? data
      : data.filter((car) => car.bodyType === bodyType);
  };

  if (error) return <ErrorPanel />;

  return (
    <View spacing={3} padding={1}>
      <View padding={3} alignSelf={"center"}>
        <Text
          variant="hillary"
          subStyle="emphasis"
          style={{ fontSize: "2rem" }}
        >
          Our models
        </Text>
      </View>
      <RechargeCarsFilterPanel
        selectedType={selectedBodyType}
        onValueChange={bodyTypeSelectHandler}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <RechargeCarsList
          cars={filterDataByBodyTypeHandler(data, selectedBodyType)}
        />
      )}
    </View>
  );
};

export default RechargeCarsPage;
