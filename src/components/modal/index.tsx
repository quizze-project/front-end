import React, { forwardRef, HTMLAttributes, useCallback, useImperativeHandle, useState } from 'react';
import { ModalBody, ModalContainer, ModalContent, ModalHeader, ModalSubtitle, ModalTitle } from './style';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  headerColor?: string;
}

export interface ModalHandles {
  open: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  { title, subtitle, headerColor, children }, ref
) => {
  const [ visible, setVisible ] = useState(false);

  const open = useCallback(() => {
    document.body.style.overflowY = 'hidden';
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    document.body.style.overflowY = '';
    setVisible(false);
  }, []);

  useImperativeHandle(ref, () => {
    return { open, close };
  });

  if(!visible) {
    return null;
  }

  return (
    <ModalContainer onClick={close}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        variants={{
          hidden: { scale: 0, opacity: 0},
          visible: { scale: 1, opacity: 1}
        }}
        initial="hidden"
        animate="visible"
      >
        <ModalHeader headerColor={headerColor}>
          <ModalTitle>{title}</ModalTitle>
          {subtitle ? (<ModalSubtitle>{subtitle}</ModalSubtitle>) : null}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}

export default forwardRef(Modal);