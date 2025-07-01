'use client';
import AntdForm from '@/components/antd/Form';
import UnsavedChangesModal from '@/components/ui/Private/UnsavedChangesModal';
import { Form } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import FormContent from './Content';
import FormFooter from './Footer';
import FormHeader from './Header';
import styles from './index.module.scss';
import { FormProps, FormValues } from './type';

const FormLayout = ({
  name,
  children,
  backRoute,
  contentWidth,
  initialValues,
  form,
}: FormProps) => {
  const router = useRouter();
  const [submittable, setSubmittable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const values = Form.useWatch([], form);

  const onFinish = (values: FormValues) => {
    console.warn(values);
  };

  const handleBack = () => {
    if (form.isFieldsTouched(true)) {
      setShowModal(true);
    } else {
      router.replace(backRoute);
    }
  };

  useEffect(() => {
    const checkValid = async () => {
      try {
        await form.validateFields({ validateOnly: true });
        setSubmittable(true);
      } catch {
        setSubmittable(false);
      }
    };
    checkValid();
  }, [values, form]);

  return (
    <React.Fragment>
      <AntdForm
        form={form}
        onFinish={onFinish}
        name={name}
        colon={false}
        layout="vertical"
        initialValues={initialValues}
      >
        <div className={styles.formLayout}>
          <FormHeader submittable={submittable} handleBack={handleBack} />
          <FormContent contentWidth={contentWidth}>{children}</FormContent>
          <FormFooter submittable={submittable} handleBack={handleBack} />
        </div>
      </AntdForm>
      <UnsavedChangesModal
        open={showModal}
        setShowModal={setShowModal}
        backRoute={backRoute}
      />
    </React.Fragment>
  );
};

export default FormLayout;
