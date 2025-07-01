'use client';
import { assets } from '@/assets';
import AntdAlert from '@/components/antd/Alert';
import AntdButton from '@/components/antd/Button';
import AntdCheckbox from '@/components/antd/Checkbox';
import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import AntdSelect from '@/components/antd/Select/Single';
import AntdTextArea from '@/components/antd/TextArea';
import FormLayout from '@/components/layout/Form';
import FormSection from '@/components/layout/Form/Content/FormSection';
import InlineForm from '@/components/layout/Form/Content/FormSection/InlineForm';
import EmailFormItem from '@/components/ui/Common/FormItems/Email';
import PhoneNumberFormItem from '@/components/ui/Common/FormItems/PhoneNumber';
import { ReferralOptions } from '@/constants/forms/onboarding';
import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { ClientTypeOptions } from './constant';

const ClientCreateSection = () => {
  const [form] = Form.useForm();

  return (
    <FormLayout
      name="client"
      backRoute="/clients"
      contentWidth="664px"
      form={form}
    >
      <FormSection>
        <InlineForm>
          <AntdFormItem name="firstName" label="Voornaam">
            <AntdInput placeholder="Voer voornaam van klant in" />
          </AntdFormItem>
          <AntdFormItem name="lastName" label="Achternaam">
            <AntdInput placeholder="Voer achternaam van klant in" />
          </AntdFormItem>
        </InlineForm>
        <AntdFormItem
          name="companyName"
          label="Bedrijfsnaam"
          style={{ marginBottom: 8 }}
        >
          <AntdInput placeholder="Voer bedrijfsnaam in" />
        </AntdFormItem>
        <AntdFormItem
          name="useCompanyNameAsPrimary"
          valuePropName="checked"
          rules={[{ required: false }]}
        >
          <AntdCheckbox>Gebruik bedrijfsnaam als primaire naam</AntdCheckbox>
        </AntdFormItem>
        <AntdFormItem
          name="kvkNumber"
          label="KVK-nummer"
          tooltip="Het KVK-nummer is een uniek 8-cijferig registratienummer van de Kamer van Koophandel. Elk bedrijf dat in Nederland staat ingeschreven heeft er een."
        >
          <AntdInput placeholder="Bijvoorbeeld 69317526" />
        </AntdFormItem>
        <AntdFormItem
          name="referral"
          label="Leadbron"
          hasFeedback={false}
          initialValue={ReferralOptions[0].value}
        >
          <AntdSelect
            placeholder="Selecteer een optie"
            options={ReferralOptions}
          />
        </AntdFormItem>
      </FormSection>
      <FormSection title="Contactgegevens" titleIcon={assets.phoneContact}>
        <InlineForm>
          <Form.Item label="Type" style={{ width: '160px' }}>
            <AntdSelect
              placeholder="Selecteer type"
              options={ClientTypeOptions}
              style={{ width: '160px' }}
            />
          </Form.Item>
          <PhoneNumberFormItem required />
        </InlineForm>
        <EmailFormItem
          name="workEmail"
          label="Werk E-mailadres"
          placeholder="Bijvoorbeeld planning@deorangekraan.nl"
          tooltip="Het e-mailadres dat wordt gebruikt voor dagelijkse communicatie, werkupdates en algemene correspondentie met de klant."
          style={{ marginBottom: 8 }}
        />
        <AntdFormItem
          name="useWorkEmailAsInvoiceEmail"
          valuePropName="checked"
          rules={[{ required: false }]}
        >
          <AntdCheckbox>Zelfde als Factuur E-mailadres</AntdCheckbox>
        </AntdFormItem>

        <EmailFormItem
          name="invoiceEmail"
          label="Factuur E-mailadres"
          placeholder="Bijvoorbeeld facturen@deorangekraan.nl"
          tooltip="Het e-mailadres waarnaar facturen, betalingsherinneringen en andere financiële communicatie worden verstuurd. Dit kan verschillen van het werk e-mailadres."
        />
      </FormSection>
      <FormSection title="Adressen" titleIcon={assets.mapPin}>
        <AntdFormItem
          name="address"
          label="Straatnaam en Huisnummer"
          style={{ marginBottom: 8 }}
          hasFeedback={false}
        >
          <AntdTextArea placeholder="Voer straatnaam en huisnummer in" />
        </AntdFormItem>
        <InlineForm>
          <AntdFormItem name="city" label="Plaats" style={{ marginBottom: 8 }}>
            <AntdInput placeholder="Voer plaats in" />
          </AntdFormItem>
          <AntdFormItem
            name="postalCode"
            label="Postcode"
            style={{ marginBottom: 8 }}
          >
            <AntdInput placeholder="Voer postcode in" />
          </AntdFormItem>
        </InlineForm>
        <InlineForm>
          <AntdFormItem name="country" label="Land" style={{ marginBottom: 8 }}>
            <AntdInput placeholder="Voer land in" />
          </AntdFormItem>
          <AntdFormItem
            name="province"
            label="Provincie"
            style={{ marginBottom: 8 }}
          >
            <AntdInput placeholder="Voer postcode in" />
          </AntdFormItem>
        </InlineForm>
        <AntdFormItem
          name="useAddressAsInvoiceAddress"
          valuePropName="checked"
          rules={[{ required: false }]}
        >
          <AntdCheckbox>Gebruik als Factuuradres</AntdCheckbox>
        </AntdFormItem>
        <AntdButton
          color="primary"
          variant="outlined"
          shape="round"
          icon={<PlusOutlined />}
        >
          Adres Toevoegen
        </AntdButton>
      </FormSection>
      <FormSection title="Factuurgegevens" titleIcon={assets.cardWithExpiry}>
        <AntdFormItem
          name="btwNumber"
          label="BTW-nummer"
          tooltip="Het BTW-nummer is uw unieke belastingidentificatienummer uitgegeven door de Nederlandse Belastingdienst. Het formaat is NL gevolgd door 9 cijfers en eindigt met B01 (Bijvoorbeeld: NL123456789B01)."
          rules={[{ required: true, message: '' }]}
        >
          <AntdInput placeholder="Bijvoorbeeld NL123456789B01" />
        </AntdFormItem>
        {
          <AntdAlert
            type="error"
            message="Factuuradres ontbreekt"
            description="Selecteer een bestaand adres als factuuradres of maak een nieuwe aan."
          />
        }
      </FormSection>
    </FormLayout>
  );
};

export default ClientCreateSection;
