import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

interface IconCardProps {
  to: string;
  bgColor: keyof typeof theme.color;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({
  to,
  bgColor,
  Icon,
  title,
  description,
}) => {
  return (
    <StyledLink to={to}>
      <IconWrapper bgColor={bgColor}>
        <Icon />
      </IconWrapper>
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TextWrapper>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: 100%;
  aspect-ratio: 280 / 300;

  @media (max-width: 768px) {
    aspect-ratio: 200 / 250; 
  
  }

  @media (max-width: 480px) {
    aspect-ratio: 150 / 200; 
    width: 80%;
  }
`;

const IconWrapper = styled.div<{ bgColor: keyof typeof theme.color }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 66.67%;
  background-color: ${(props) => props.theme.color[props.bgColor]};

  svg {
    width: 50%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  height: 33.33%;
`;

const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.text.text1};
  font-weight: bold;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.text.text2};
  margin: 0;
`;

export default IconCard;
