import { assets } from '@/assets';
import Image from 'next/image';

interface Props {
  open: boolean;
}

const ChevronSuffixIcon = ({ open }: Props) => {
  const icon = open
    ? assets.chevrons.ChevronUpBlack
    : assets.chevrons.ChevronDownBlack;

  return (
    <Image src={icon.src} alt={icon.alt} width={12} height={12} priority />
  );
};

export default ChevronSuffixIcon;
