import { FC, RefObject } from "react";
import { Flex, IconButton, Spacer } from "vcc-ui";
import Slider from "react-slick";

type PrevAndNextButtonConatinerProps = {
  sliderRef: RefObject<Slider>;
};

export const PrevAndNextButtonConatiner: FC<
  PrevAndNextButtonConatinerProps
> = ({ sliderRef }) => {
  const prevBtnHandler = () => {
    if (sliderRef.current) return sliderRef.current.slickPrev();
  };

  const nextBtnHandler = () => {
    if (sliderRef.current) return sliderRef.current.slickNext();
  };

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
        onClick={() => prevBtnHandler()}
        variant="outline"
      />
      <Spacer size={{ default: 2 }} />
      <IconButton
        iconName={"navigation-chevronforward"}
        onClick={() => nextBtnHandler()}
        variant="outline"
      />
    </Flex>
  );
};
