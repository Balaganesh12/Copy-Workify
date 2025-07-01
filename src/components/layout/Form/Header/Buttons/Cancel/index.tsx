import AntdButton from '@/components/antd/Button';

interface CancelButtonProps {
  handleBack: () => void;
}

const CancelButton = ({ handleBack }: CancelButtonProps) => {
  return (
    <AntdButton type="default" danger shape="round" onClick={handleBack}>
      Annuleren
    </AntdButton>
  );
};

export default CancelButton;
