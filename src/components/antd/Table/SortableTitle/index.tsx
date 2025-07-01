import { assets } from '@/assets';
import Image from 'next/image';
import { ReactNode } from 'react';

type SortOrder = 'ascend' | 'descend' | null | undefined;

interface SortableTitleProps {
  title: ReactNode;
  sortedOrder: SortOrder;
}

const size = 12;

const SortableTitle = ({ title, sortedOrder }: SortableTitleProps) => {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {title}
      {sortedOrder === 'ascend' ? (
        <Image
          src={assets.chevrons.ChevronUpBlack.src}
          alt="arrow up"
          width={size}
          height={size}
        />
      ) : (
        <Image
          src={assets.chevrons.ChevronDownBlack.src}
          alt="arrow down"
          width={size}
          height={size}
          style={{
            opacity:
              sortedOrder === null || sortedOrder === undefined ? 0.5 : 1,
          }}
        />
      )}
    </div>
  );
};

export default SortableTitle;
