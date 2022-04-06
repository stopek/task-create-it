import styled from "styled-components";

import { paths } from "routing/paths";
import { primaryFont, secondaryFont } from "styles/configs";
import { ClearLink } from "styles/styled";

const ProjectName = styled.h3`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: inherit;
  line-height: 1;
  padding: 0;
  margin: 0;
  text-align: inherit;
  display: inline-flex;
  flex-direction: column;
`;

const Motto = styled.span`
  font-size: 40%;
  font-family: ${secondaryFont};
`;

const LogoLink = styled(ClearLink)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = () => (
  <LogoLink to={paths.HOMEPAGE}>
    <ProjectName>
    <span>
      PURPUR<span className="neon-text">PRIME</span>
    </span>

      <Motto>
        .be prime like PurPur PRIME
      </Motto>
    </ProjectName>
  </LogoLink>
);

export default Logo;