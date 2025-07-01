'use client';

import AntdModal from '@/components/antd/Modal';
import { useRouter } from 'next/navigation';

interface UnsavedChangesModalProps {
  open: boolean;
  setShowModal: (showModal: boolean) => void;
  backRoute: string;
}

const UnsavedChangesModal = ({
  open,
  setShowModal,
  backRoute,
}: UnsavedChangesModalProps) => {
  const router = useRouter();

  const handleStay = () => {
    setShowModal(false);
  };

  const handleDiscard = () => {
    setShowModal(false);
    router.replace(backRoute);
  };

  return (
    <AntdModal
      width={520}
      title="Niet-opgeslagen wijzigingen"
      open={open}
      okText="Blijf op de pagina"
      cancelText="Verlaat zonder op te slaan"
      onOk={() => {
        handleStay();
      }}
      onCancel={() => {
        handleDiscard();
      }}
      customCancel={() => {
        handleStay();
      }}
    >
      Je hebt niet-opgeslagen wijzigingen. Als je deze pagina verlaat, gaan je
      wijzigingen verloren.
    </AntdModal>
  );
};

export default UnsavedChangesModal;
