import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {theme} from "../../styles/theme";

interface IconCardProps {
  to: string;
  bgColor: keyof typeof theme.color;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ to, bgColor, Icon, title, description }) => {
  return (
    <StyledLink to={to}>
      <IconWrapper bgColor={bgColor}>
        <Icon />
      </IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 240px;
  height: 250px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
`;

const IconWrapper = styled.div<{ bgColor: keyof typeof theme.color }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: ${props => props.theme.color[props.bgColor]};

  svg {
    width: 120px;
  }
`;

const CardTitle = styled.p`
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: left;
  font-size: ${({ theme }) => theme.text.text2};
  font-weight: bold;
`;

const CardDescription = styled.p`
  align-self: flex-start;
  margin-left: 20px;
  text-align: left;
  font-size: ${({ theme }) => theme.text.text3};
`;

export default IconCard;
