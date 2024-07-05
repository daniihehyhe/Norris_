'use client'
import React from 'react';
import Services from './component/Security';
import SmartHomeService from './component/SmartHomeService';
import SecuritySystems from './component/SecuritySystems';
import ClimateControl from './component/ClimateControl';
import SmartLighting from './component/SmartLight';
import HomeAutomation from './component/HomeAutomation';
import PowerSystems from './component/PowerSystems';
import Multimedia from './component/Multimedia';
import SmartHomeProject from './component/SmartHomeProject';
import LinkPage from '@/components/LinkPage';
import SafeNestSecureSmartHome from '../home/SafeNestSecureSmartHome';


const ServicesPage = () => {
   return (
      <>
         <Services />
      <SafeNestSecureSmartHome/>
         <SmartHomeService />
         <SecuritySystems />
         <ClimateControl />
         <SmartLighting />
         <HomeAutomation />
         <PowerSystems />
         <Multimedia />
         <SmartHomeProject />
         <LinkPage />
      </>
   );
};

export default ServicesPage;
