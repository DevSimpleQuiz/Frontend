import styled from "styled-components";
import { FaGithub } from "react-icons/fa"; // GitHub 아이콘 import

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Title>
          <h2>DEVSIMPLEQUIZ</h2>
        </Title>
        <p>© 2024 DEVSIMPLEQUIZ. All rights reserved.</p>

        <SocialLinks>
          <a
            href="https://github.com/DevSimpleQuiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.grey3};
  padding: 40px 40px 80px 40px;
  margin-top: 40px;
  display: flex;
  align-items: start;
  justify-content: start;
  color: ${({ theme }) => theme.color.grey1};
`;

const FooterContent = styled.div`
  text-align: start;
  width: 100%;
  p {
    margin: 0;
    padding: 10px 0;
    font-size: 14px;
  }
`;

const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
  width: 100%;
  h2 {
    padding-bottom: 10px;
    font-size: 20px;
  }
`;

const SocialLinks = styled.div`
  a {
    color: ${({ theme }) => theme.color.grey1};

    &:hover {
      color: ${({ theme }) => theme.color.grey2};
    }
  }
`;

export default Footer;
