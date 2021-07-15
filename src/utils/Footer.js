import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const StyledContainer = styled.footer`
 width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  background-color: black;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  `;

const Footer = () => {
  return (
    <StyledContainer>
      <p>Desarrollado por Macarena Reale Portelli</p>

      <div>
        <a
          href="https://github.com/Macarealeportelli"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton style={{ color: "#fafafa" }} aria-label="add an alarm">
            <GitHubIcon />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/macarena-reale-portelli"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton style={{ color: "#fafafa" }} aria-label="add an alarm">
            <LinkedInIcon />
          </IconButton>
        </a>
      </div>
    </StyledContainer>
  );
};

export default Footer;
