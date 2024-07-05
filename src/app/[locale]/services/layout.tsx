import TheFooter from '@/components/TheFooter';
import TheHeader from '@/components/TheHeader';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
   const t = await getTranslations('mainMeta');

   return {
      title: t('serviceTitle'),
      description: t('ServiceDescription'),
   };
}
type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
   return (children);
};

export default RootLayout;
