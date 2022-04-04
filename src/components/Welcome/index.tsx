import styled from "styled-components";

import Layout from "ui/Layout";

const Message = styled.div`
  font-size: 90px;
  font-weight: 700;
`;

const Welcome = () => (
  <Layout center>
    <Message>
      Hello Word!
    </Message>
  </Layout>
);

export default Welcome;