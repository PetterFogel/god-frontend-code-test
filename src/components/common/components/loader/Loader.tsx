import { FC } from "react";
import { Flex, LoadingBar } from "vcc-ui";

export const Loader: FC = () => {
  return (
    <Flex
      extend={{
        justifyContent: "center",
        width: "100%",
        height: "40vh",
        margin: "auto",
        maxWidth: 900,
      }}
    >
      <LoadingBar isLoading />
    </Flex>
  );
};
