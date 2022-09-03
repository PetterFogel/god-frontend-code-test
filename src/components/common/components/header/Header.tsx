import { FC } from "react";
import { Link, Logo, TabNav, View } from "vcc-ui";

export const Header: FC = () => {
  return (
    <TabNav textAlign="left">
      <View padding={2}>
        <Link href={"/"}>
          <Logo type="spreadmark" height={8} />
        </Link>
      </View>
    </TabNav>
  );
};
