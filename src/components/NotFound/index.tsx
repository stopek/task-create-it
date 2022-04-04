import styled from "styled-components";

const Content = styled.div`
  max-width: 500px;
  width: 100%;
`;

const Error = styled.strong`
  font-size: 50px;
  display: block;
`;

const Message = styled.span`
  font-size: 20px;
`;

const NotFound = () => (
  <Content>
    <Error>UPS, 404</Error>
    <Message>PurPur couldn't find this page :(</Message>
  </Content>
);

export default NotFound;