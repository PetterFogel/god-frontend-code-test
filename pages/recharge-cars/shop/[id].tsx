import { FC } from "react";
import { useRouter } from "next/router";
import { useFetchSpecificCar } from "../../../src/hooks/rechargeCarsHooks";
import { ErrorPanel } from "../../../src/components/common/components/error-panel/ErrorPanel";
import { Loader } from "../../../src/components/common/components/loader/Loader";
import { Flex, Link, Text, View } from "vcc-ui";

const RechargeCarDetails: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useFetchSpecificCar(id);

  if (error) return <ErrorPanel />;
  if (isLoading) return <Loader />;

  return (
    <Flex
      extend={{
        padding: "2rem",
        maxWidth: "900",
        width: "100%",
        margin: "auto",
      }}
    >
      <View>
        <Text
          variant="hillary"
          subStyle="emphasis"
          style={{ fontSize: "2rem" }}
        >
          SHOP
        </Text>
      </View>
      {data && (
        <View>
          <Text variant="hillary" style={{ fontSize: "1.5rem" }}>
            {data.id}
          </Text>
        </View>
      )}
      <Link href={"/recharge-cars"}>BACK</Link>
    </Flex>
  );
};

export default RechargeCarDetails;
