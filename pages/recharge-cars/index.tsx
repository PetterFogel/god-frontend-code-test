import { NextPage } from "next";
import { useEffect } from "react";
import { Text, View } from "vcc-ui";
import { RechargeCarsList } from "../../src/components/recharge-cars/RechargeCarsList";
import { useFetchCars } from "../../src/hooks/useFetchCars";

const RechargeCars: NextPage = () => {
  const { data, isLoading, error } = useFetchCars();

  if (error) return <p>Something went wrong...</p>;

  return (
    <View spacing={3} padding={1}>
      <View padding={3} alignSelf={"center"}>
        <Text variant="hillary" subStyle="emphasis">
          Our models
        </Text>
      </View>
      {isLoading ? <p>Loading...</p> : <RechargeCarsList cars={data} />}
    </View>
  );
};

export default RechargeCars;
