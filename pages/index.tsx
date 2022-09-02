import { NextPage } from "next";
import { Button, Link, Logo, Spacer, Text, View } from "vcc-ui";

const HomePage: NextPage = () => {
  return (
    <View
      spacing={3}
      maxWidth={1000}
      margin="auto"
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      height={"70vh"}
    >
      <View padding={5}>
        <Logo type="spreadmark" height={32} />
      </View>
      <View padding={3}>
        <Text variant={"bates"} as="h2">
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
