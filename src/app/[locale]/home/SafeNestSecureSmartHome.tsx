import React from 'react';
import offender from '@/../public/assets/offender.webp';
import Image from 'next/image';
import { FaExclamationTriangle } from 'react-icons/fa';
import layout_plan from '@/../public/images/layout_plan.webp';
import { LuPencilRuler } from 'react-icons/lu';

function SafeNestSecureSmartHome() {
   return (
      <>
         <main className="flex flex-col px-2">
            <section className="flex flex-col  md:flex-row mb-14  justify-center items-start md:items-center">
               <div className="mb-5 md:mb-0 md:mr-5 w-20 md:w-96">
                  <Image
                     src={offender}
                     alt="Smart Home"
                     layout="responsive"
                  />
               </div>

               <div>
                  <h1 className="text-titleText mb-5">
                     {' '}
                     Как защитить себя от злоумышленников?
                  </h1>
                  <p className="text-subText italic">
                     Система безопасности может быть как проводной,
                     так и беспроводной. Проводная более надежна,
                     обеспечивает хорошее качество сигнала. Наряду с
                     приборами, постоянно работающими от электросети,
                     в ней могут использоваться и беспроводные
                     устройства.
                  </p>
               </div>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10">
               <div className="md:w-1/2">
                  <p className="text-subText leading-8">
                     Имущество нуждается в надежной защите. Этот
                     вопрос волнует как простых обывателей,
                     опасающихся бытовых краж, пожаров, так и
                     финансовые, коммерческие организации,
                     промышленные предприятия. Система безопасности,
                     установленная в вашем магазине, офисе, квартире
                     вовремя предупредит о чрезвычайной ситуации,
                     предпримет меры по защите.
                  </p>
               </div>
               <ul className="md:w-1/2 text-base text-subText text-black leading-loose list-none p-5 bg-gray-300">
                  <li className="flex items-center mb-2 ">
                     <FaExclamationTriangle className="text-yellow-500 mr-4" />
                     Охранная, пожарная сигнализация.
                  </li>
                  <li className="flex items-center mb-2">
                     <FaExclamationTriangle className="text-yellow-500 mr-4" />
                     Видеооборудование, домофоны.
                  </li>
                  <li className="flex items-center mb-2">
                     <FaExclamationTriangle className="text-yellow-500 mr-4" />
                     Датчики задымления, движения, извещатели.
                  </li>
                  <li className="flex items-center mb-2">
                     <FaExclamationTriangle className="text-yellow-500 mr-4" />
                     Электронные замки и другие технические средства.
                  </li>
               </ul>
            </section>
         </main>
         <main>
            <section
               className="flex  flex-col md:flex-row gap-3 md:h-screen mt-10 items-center justify-center bg-center bg-cover bg-no-repeat"
               style={{ backgroundImage: `url(${layout_plan.src})` }}
            >
               <div className="md:w-1/2 bg-stone-600 mt-5 bg-opacity-95 text-white p-3">
                  <p className="text-titleText ">
                     Какие услуги мы предлагаем?
                  </p>
                  <p className="text-contText">
                     Если вы проживаете в Бишкеке, другом городе
                     Кыргызстана, хотите оборудовать системами «умного
                     дома» офис, квартиру, обратитесь в нашу компанию.
                     «Норрис Сервис» — команда специалистов,
                     обладающая большим опытом в сфере практического
                     применения IT-технологий.
                  </p>
                  <p className="text-contText">
                     Компания принимает заказы на переоборудование
                     домов различного назначения, проводит его быстро,
                     качественно, по удобным ценам. Позвоните нам,
                     оставьте заявку на сайте, укажите свои
                     персональные данные. Менеджеры оперативно
                     свяжутся с вами, ответят на все вопросы,
                     связанные с системой безопасности, определят
                     точные срок и стоимость ее установки. Мы
                     учитываем назначение, архитектурные особенности
                     объекта, требования клиентов, их финансовые
                     возможности. Специалисты norris.kg «Норрис
                     Сервис» сделают все для того, чтобы обеспечить
                     вашу безопасность и комфорт.
                  </p>
               </div>

               <ul className="md:w-1/2 mb-5 text-base text-subText text-white leading-loose list-none p-5 bg-green-900 bg-opacity-75">
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 mr-4" />
                     Разработку типовых и индивидуальных проектов.
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 mr-4" />
                     Подготовку сметной документации.
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 mr-4" />
                     Прокладку слаботочных и силовых сетей.
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 mr-4" />
                     Монтаж, подключение, обслуживание техники.
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 mr-4" />
                     Программирование программ, сценариев, ПЛК,
                     контроллеров.
                  </li>
                  <li className="flex items-center mb-2">
                     <LuPencilRuler className="text-red-900 mr-4" />
                     Занимаемся разработкой интегральных схем и
                     программным обеспечением к ним.
                  </li>
               </ul>
            </section>
         </main>
      </>
   );
}

export default SafeNestSecureSmartHome;
