import styled from "styled-components";

const Message = styled.div`
  font-size: 90px;
  font-weight: 700;
`;

const Welcome = () => (
  <Message>
    Hello Word!
  </Message>
);

export default Welcome;