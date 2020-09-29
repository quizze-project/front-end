import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ModalHeaderProps {
  headerColor?: string;
}

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  padding: 4% 10%;
  overflow-y: auto;

  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const ModalContent = styled(motion.div)`
  background: #FFFFFF;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
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