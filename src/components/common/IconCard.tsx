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
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: 100%;
  max-width: 400px;
  max-height: 450px;
  aspect-ratio: 2 / 3;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 350px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
    max-height: 250px;
  }
`;

const IconWrapper = styled.div<{ bgColor: keyof typeof theme.color }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.theme.color[props.bgColor]};

  svg {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 768px) {
    height: 60%;
  }

  @media (max-width: 480px) {
    height: 60%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  text-align: center;
  gap: 10px;
  height: 40%;
`;

const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.heading.title3};
  /* font-weight: bold; */
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.text.text2};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.text.text3};
  }
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.text.text2};
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.text.text3};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.text.text4};
  }
`;

export default IconCard;
