import styled from "styled-components";

const Message = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 90px;
  font-weight: 700;
  color: white;
  background: #181818;
`;

const Welcome = () => (
  <Message>Hello Word!</Message>
);

export default Welcome;