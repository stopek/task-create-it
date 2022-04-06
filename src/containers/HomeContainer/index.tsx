import Layout from "components/Layout";
import Welcome from "components/Welcome";

import { menuItems } from "routing/configs";

const HomeContainer = () => (
  <Layout center>
    <Welcome menuItems={menuItems.filter(item => !item?.noHome)} />
  </Layout>
);

export default HomeContainer;