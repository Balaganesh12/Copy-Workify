'use client';

import AuthFormHeader from '@/components/ui/Public/AuthBasicLayout/Header';
import { Flex } from 'antd';

export default function NotFound() {
  return (
    <Flex vertical style={{ minHeight: '100vh', padding: '2rem' }}>
      <AuthFormHeader
        title="Pagina niet gevonden"
        text="De opgevraagde pagina kon niet worden gevonden."
      />
    </Flex>
  );
}
