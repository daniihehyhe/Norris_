'use client'
import React from 'react';
import SmartHomeServiceCaring from './component/SmartHomeServiceCaring';
import SecuritySystems from './component/ProtectingYourSafetySecuritySystems';
import SmartHomeProject from './component/SmartHomeProject';
import LinkPage from '@/components/LinkPage';
import SafeNestSecureSmartHome from '../home/SafeNestSecureSmartHome';


const ServicesPage = () => {
   return (
      <>
      <SafeNestSecureSmartHome/>
         <SmartHomeServiceCaring />
         <SecuritySystems />
         <SmartHomeProject />
      </>
   );
};

export default ServicesPage;
