import styled from "styled-components";

import { styled as style } from "@mui/material/styles";

import { paths } from "routing/paths";
import { primaryFont, secondaryFont } from "styles/configs";
import { ClearLink } from "styles/styled";

import "./styles.scss";

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

const LogoLink = style(ClearLink)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 100%;

  ${props => props.theme.breakpoints.down("sm")} {
    transform: scale(0.8);
    transform-origin: inherit;
  }
`;

interface ILogo {
  withoutMotto?: boolean;
}

const Logo = ({ withoutMotto }: ILogo) => (
  <LogoLink to={paths.HOMEPAGE}>
    <ProjectName>
      <span>
        PURPUR<span className="neon-text">PRIME</span>
      </span>

      {!withoutMotto && (
        <Motto>
          .be prime like PurPur PRIME
        </Motto>
      )}
    </ProjectName>
  </LogoLink>
);

export default Logo;