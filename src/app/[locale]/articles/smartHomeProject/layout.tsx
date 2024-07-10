import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
   const t = await getTranslations('SmartHomeProject');

   return {
      title: t('title'),
      description: t('intro'),
   };
}
type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
   return (children);
};

export default RootLayout;
