import { menuItems } from "routing/configs";

import Layout from "components/Layout";
import Welcome from "components/Welcome";

const HomeContainer = () => (
  <Layout center>
    <Welcome menuItems={menuItems.filter(item => !item?.noHome)} />
  </Layout>
);

export default HomeContainer;