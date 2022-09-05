import { FC } from "react";
import { TabNav, TabNavItem } from "vcc-ui";
import { BodyTypes } from "../common/constants/enums";

type RechargeCarsFilterPanelProps = {
  selectedType: string;
  onValueChange: (bodyType: string) => void;
};

export const RechargeCarsFilterPanel: FC<RechargeCarsFilterPanelProps> = ({
  selectedType,
  onValueChange,
}) => {
  return (
    <TabNav enableLineTransition>
      <TabNavItem
        isActive={selectedType === BodyTypes.ALL}
        onClick={() => {
          onValueChange("all");
        }}
      >
        All
      </TabNavItem>
      <TabNavItem
        isActive={selectedType === BodyTypes.SUV}
        onClick={() => {
          onValueChange("suv");
        }}
      >
        Suv
      </TabNavItem>
      <TabNavItem
        isActive={selectedType === BodyTypes.SEDAN}
        onClick={() => {
          onValueChange("sedan");
        }}
      >
        Sedan
      </TabNavItem>
      <TabNavItem
        isActive={selectedType === BodyTypes.ESTATE}
        onClick={() => {
          onValueChange("estate");
        }}
      >
        Estate
      </TabNavItem>
    </TabNav>
  );
};
