import { FC, RefObject } from "react";
import { Flex, IconButton, Spacer } from "vcc-ui";
import Slider from "react-slick";

type PrevAndNextButtonConatinerProps = {
  sliderRef: RefObject<Slider>;
};

export const PrevAndNextButtonConatiner: FC<
  PrevAndNextButtonConatinerProps
> = ({ sliderRef }) => {
  return (
    <Flex
      extend={{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: "1rem",
        padding: "1rem",
        untilL: {
          display: "none",
        },
      }}
    >
      <IconButton
        iconName={"navigation-chevronback"}
        onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
        variant="outline"
      />
      <Spacer size={{ default: 2 }} />
      <IconButton
        iconName={"navigation-chevronforward"}
        onClick={() => sliderRef.current && sliderRef.current.slickNext()}
        variant="outline"
      />
    </Flex>
  );
};
