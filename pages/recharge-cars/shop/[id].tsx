import { FC } from "react";
import { useRouter } from "next/router";
import { useFetchSpecificCar } from "../../../src/hooks/rechargeCarsHooks";
import { Flex, Link, Text, View } from "vcc-ui";
import { ErrorPanel } from "../../../src/components/common/components/error-panel/ErrorPanel";
import { PageTitle } from "../../../src/components/common/components/page-title/PageTitle";
import { Loader } from "../../../src/components/common/components/loader/Loader";

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
        maxWidth: 900,
        width: "100%",
        margin: "auto",
      }}
    >
      <PageTitle title="Shop" alignStyle="start" padding={0} />
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
