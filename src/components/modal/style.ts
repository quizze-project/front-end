import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ModalHeaderProps {
  headerColor?: string;
}

export const ModalContainer = styled.div`
  position: absolute;
  /* display: flex;
  align-items: flex-start;
  justify-content: center; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 10%;

  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;

  @media (max-width: 1024px) {
    padding: 0 5%;
  }
`;

export const ModalContent = styled(motion.div)`
  background: #FFFFFF;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
  width: 80%;
  margin: 3rem auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ModalHeader = styled.div<ModalHeaderProps>`
  padding: 1.6rem 10%;
  text-align: center;
  background-color: ${props => props.headerColor || 'var(--green)'};
`;

export const ModalTitle = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

export const ModalSubtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
`;

export const ModalBody = styled.div`
  padding: 1rem 10%;
`;