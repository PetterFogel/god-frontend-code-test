import { NextPage } from "next";
import { Button, Link, Logo, View } from "vcc-ui";
import { PageTitle } from "../src/components/common/components/page-title/PageTitle";

const HomePage: NextPage = () => {
  return (
    <View
      extend={{
        height: "60vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Logo type="spreadmark" height={25} />
      </View>
      <PageTitle
        title="Checkout our recharge cars"
        alignStyle="center"
        padding={5}
      />
      <View>
        <Link href={"/recharge-cars"}>
          <Button size="small">Shop</Button>
        </Link>
      </View>
    </View>
  );
};

export default HomePage;
