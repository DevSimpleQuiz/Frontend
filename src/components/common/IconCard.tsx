import React from "react";
import styled, { css } from "styled-components";
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

const StyledLink = styled(Link).attrs((props) => ({
  role: "button", // role 속성 추가
  "aria-label": `${props.title} 카드`, // aria-label 속성 추가
}))`

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

`;

const cardCommonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  aspect-ratio: 2 / 3;
`;

// IconCard의 고정 크기 설정 (아이콘 크기 고정)
const IconWrapper = styled.div<{ bgColor: keyof typeof theme.color }>`
  ${cardCommonStyles};
  width: 100%;
  height: 300px;
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
  svg {
    width: 50%;
    height: 50%;
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
  font-size: ${({ theme }) => theme.heading.title4};
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.text.text2};
  }

`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.text.text2};
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.text.text3};
  }
`;

export default React.memo(IconCard);
// IconCard 컴포넌트는 동일한 props로 리렌더링할 필요가 없으므로 React.memo로 최적화
