import { NextPage } from "next";
import { useState } from "react";
import { TabNav, TabNavItem, Text, View } from "vcc-ui";
import { Car } from "../../models/car";
import { ErrorPanel } from "../../src/components/common/components/error-panel/ErrorPanel";
import { Loader } from "../../src/components/common/components/loader/Loader";
import { filterDataByBodyTypeHandler } from "../../src/components/common/functions/filterDataByBodyTypeHandler";
import { RechargeCarsFilterPanel } from "../../src/components/recharge-cars/RechargeCarsFilterPanel";
import { RechargeCarsList } from "../../src/components/recharge-cars/RechargeCarsList";
import { useFetchCars } from "../../src/hooks/rechargeCarsHooks";

const RechargeCarsPage: NextPage = () => {
  const { data, isLoading, error } = useFetchCars();
  const [selectedBodyType, setSelectedBodyType] = useState("all");

  const filteredData = filterDataByBodyTypeHandler(data, selectedBodyType);

  const bodyTypeSelectHandler = (bodyType: string) => {
    setSelectedBodyType(bodyType);
  };

  if (error) return <ErrorPanel />;

  return (
    <View
      extend={{
        margin: "auto",
        maxWidth: 1300,
        width: "100%",
        marginBottom: "4rem",
      }}
    >
      <RechargeCarsFilterPanel
        selectedType={selectedBodyType}
        onValueChange={bodyTypeSelectHandler}
      />
      {isLoading ? <Loader /> : <RechargeCarsList cars={filteredData} />}
    </View>
  );
};

export default RechargeCarsPage;
