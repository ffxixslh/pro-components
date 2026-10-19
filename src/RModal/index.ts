import { attachPropertiesToComponent } from '@ffxixslh/utils';
import { RModalBody } from './Body';
import { RModalClose } from './Close';
import { RModalContext, type RModalContextType } from './Context';
import { RModalFooter } from './Footer';
import { open } from './open';
import { RModalProForm } from './ProForm';
import { RModalReset } from './Reset';
import { RModal as _RModal, type RModalProps } from './RModal';
import { RModalSubmit } from './Submit';
import { useRModal } from './useRModal';

export type { RModalContextType, RModalProps };

export const RModal = attachPropertiesToComponent(_RModal, {
  Context: RModalContext,
  open: open,
  Body: RModalBody,
  Footer: RModalFooter,
  Submit: RModalSubmit,
  Reset: RModalReset,
  Close: RModalClose,
  useRModal: useRModal,
  ProForm: RModalProForm,
});
