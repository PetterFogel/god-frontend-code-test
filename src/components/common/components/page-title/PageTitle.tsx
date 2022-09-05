import { FC } from "react";
import { View, Text } from "vcc-ui";

type PageTitleProps = {
  title: string;
  alignStyle: string;
  padding: number;
};

export const PageTitle: FC<PageTitleProps> = ({
  title,
  alignStyle,
  padding,
}) => {
  return (
    <View padding={padding} alignSelf={alignStyle}>
      <Text variant="hillary" subStyle="emphasis" style={{ fontSize: "2rem" }}>
        {title}
      </Text>
    </View>
  );
};
