import React from 'react';
import styled from 'styled-components';

interface HintModalProps {
  initialConstant: string;
  visible: boolean;
}

const HintModal: React.FC<HintModalProps> = ({ initialConstant, visible }) => {
  if (!visible) return null;

  return (
    <ModalContent>
      <p>초성은 {initialConstant} 입니다.</p>
    </ModalContent>
  );
};

export default HintModal;

const ModalContent = styled.div`
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  white-space: nowrap; 
`;