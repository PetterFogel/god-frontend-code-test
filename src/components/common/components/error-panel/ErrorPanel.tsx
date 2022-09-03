import { FC } from "react";
import { Flex, Icon, Spacer, Text } from "vcc-ui";

export const ErrorPanel: FC = () => {
  return (
    <Flex
      extend={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "40vh",
        margin: "auto",
        fontSize: "3rem",
      }}
    >
      <Icon type="error-40" color="alert" />
      <Spacer />
      <Text variant="hillary" style={{ fontSize: "2rem", color: "#bf2012" }}>
        Something went wrong.
      </Text>
    </Flex>
  );
};
