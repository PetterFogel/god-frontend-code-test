import { NextPage } from "next";
import { Button, Link, Logo, Text, View } from "vcc-ui";

const HomePage: NextPage = () => {
  return (
    <View
      extend={{
        height: "50vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Logo type="spreadmark" height={32} />
      </View>
      <View padding={3}>
        <Text variant={"bates"} style={{ fontSize: "1rem" }}>
          Checkout our recharge cars
        </Text>
      </View>
      <View>
        <Link href={"/recharge-cars"}>
          <Button>Shop</Button>
        </Link>
      </View>
    </View>
  );
};

export default HomePage;
