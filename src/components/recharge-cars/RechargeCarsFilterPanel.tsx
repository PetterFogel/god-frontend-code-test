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
        isActive={selectedType === "all"}
        onClick={() => {
          onValueChange("all");
        }}
      >
        ALL
      </TabNavItem>
      <TabNavItem
        isActive={selectedType === BodyTypes.SUV}
        onClick={() => {
          onValueChange("suv");
        }}
      >
        SUV
      </TabNavItem>
      <TabNavItem
        isActive={selectedType === BodyTypes.SEDAN}
        onClick={() => {
          onValueChange("sedan");
        }}
      >
        SEDAN
      </TabNavItem>
      <TabNavItem
        isActive={selectedType === BodyTypes.ESTATE}
        onClick={() => {
          onValueChange("estate");
        }}
      >
        ESTATE
      </TabNavItem>
    </TabNav>
  );
};
