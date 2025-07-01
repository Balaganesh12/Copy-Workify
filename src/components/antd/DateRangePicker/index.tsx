import { assets } from '@/assets';
import { CloseCircleOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styles from './index.module.scss';

const { RangePicker } = DatePicker;

const RangePickerDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
  const ref = useRef(null);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the picker
    setDates(null);
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.selectInput} onClick={() => setOpen(true)}>
        <div className={styles.selectWrapper}>
          <div className={styles.frameWrapper}>
            <Image
              src={assets.Calendar.src}
              alt={assets.Calendar.alt}
              width={20}
              height={20}
              className={styles.calendarIcon}
            />
            {dates ? (
              <span className={styles.dateText}>
                {`${dates[0].format('MMM D, YYYY')} - ${dates[1].format('MMM D, YYYY')}`}
              </span>
            ) : (
              <span className={styles.periodText}>Periode</span>
            )}
          </div>

          <div className={styles.dateRangePickerRight}>
            {dates && (
              <CloseCircleOutlined
                onClick={handleClear}
                className={styles.clearIcon}
                style={{
                  fontSize: 16,
                  cursor: 'pointer',
                }}
              />
            )}

            <Image
              src={
                open
                  ? assets.chevrons.ChevronUpBlack.src
                  : assets.chevrons.ChevronDownBlack.src
              }
              alt={
                open
                  ? assets.chevrons.ChevronUpBlack.alt
                  : assets.chevrons.ChevronDownBlack.alt
              }
              className={styles.downArrow}
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>

      {open && (
        <RangePicker
          ref={ref}
          open={open}
          value={dates}
          placement="bottomLeft"
          style={{
            position: 'absolute',
            top: 0,
            minWidth: '130px',
            maxWidth: '325px',
            pointerEvents: 'none',
            zIndex: -1,
          }}
          onChange={(range) => {
            if (range?.[0] && range?.[1]) {
              setDates([range[0], range[1]]);
            } else {
              setDates(null);
            }
            setOpen(false);
          }}
          onOpenChange={(o) => setOpen(o)}
        />
      )}
    </div>
  );
};

export default RangePickerDemo;
