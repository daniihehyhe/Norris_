// components/SecuritySystems.tsx
// На страже вашей безопасности
// Что может делать охранно-пожарная сигнализация?
// Услуги нашей компании
import React from "react";
import smart_home from '@/../public/assets/smart_home.jpeg';
import Image from "next/image";
import { FcNext } from "react-icons/fc";


const ProtectingYourSafetySecuritySystems: React.FC = () => {
    return (
        <main>

            <h5 className="text-titleText font-bold mb-4 text-center">
                На страже вашей безопасности
            </h5>



            {/* На страже вашей безопасности */}
            <section className="flex flex-col lg:flex-row">



            <aside className="text-white bg-black  p-6 md:p-10  shadow-2xl">
         <div className="relative rounded-full w-40 h-40 md:w-60 md:h-60 mx-auto mb-6">
            <Image
               src={smart_home}
               fill
               className="object-cover rounded-full"
               alt="smart home"
            />
         </div>

         <p className="text-lg mb-4 text-center md:text-left">
            В комплектацию ОПС «умного дома» входят
         </p>
         <ul className="list-disc list-inside mb-4 text-center md:text-left">
            <li className="flex mb-3"> <FcNext className="mr-5 fixed-icon-size"/>Камеры наблюдения, видеодомофоны.</li>
            <li className="flex"> <FcNext className="mr-5 fixed-icon-size"/>Датчики движения, дыма, газоуловители и другие приборы.</li>
         </ul>
      </aside>

      <div className="flex flex-col">
         <div className="p-5 shadow-2xl grow md:mb-0">
            <p className="text-subText italic mb-4">
               Защитить своих близких от опасности, имущество от хищений поможет Smart house, или "умный дом". 
               Это — современная автоматизированная многофункциональная система, устанавливаемая
            </p>
            <ul className="flex flex-col gap-3 mb-4">
               <li className="flex"> <FcNext className="mr-5 fixed-icon-size"/> В городских квартирах.</li>
               <li className="flex"> <FcNext className="mr-5 fixed-icon-size"/> Частных домовладениях.</li>
               <li className="flex"> <FcNext className="mr-5 fixed-icon-size"/> В офисах, банках.</li>
               <li className="flex"> <FcNext className="mr-5 fixed-icon-size"/> На предприятиях.</li>
               <li className="flex"> <FcNext className="mr-5 fixed-icon-size"/> В торговых, складских помещениях.</li>
               <li className="flex"> <FcNext className="mr-5 fixed-icon-size"/> На объектах особой секретности.</li>
            </ul>
         </div>

         <div className="bg-gray-400 p-5 text-text-subText  shadow-2xl ">
            Размещают устройства на внутренних, наружных стенах зданий, прилегающих к ним территориях, а также на воротах, ограждающих конструкциях. Показания приборов, записи с видеокамер в реальном времени поступают на управляющий блок, сохраняются в архиве. Видеотехника может работать как в непрерывном режиме, так и включаться в определенные часы, например, только в вечернее, ночное время. В случае возникновения опасной ситуации "умная" техника подает тревожный сигнал, предает информацию в службу охраны. Владельцы помещения оповещаются о тревоге электронным письмом, получают на телефон уведомление, сообщение WhatsApp или СМС-сообщение.
         </div>
      </div>

            </section>




            <h3 className="text-2xl font-bold mb-4">
                Что может делать охранно-пожарная сигнализация?
            </h3>
            <p className="text-lg mb-4">
                ОПС выполняет множество полезных и важных функций. Ей можно
                задать различные задачи, исходя из особенностей и требований
                объекта. К основным из них можно отнести:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Контроль доступа на объект. Программное обеспечение имеет
                    функцию распознавания лиц "свой-чужой", предупредит, если к
                    вашей двери подойдет не внесенный в базу данных субъект.
                </li>
                <li>
                    Защита от проникновения на территорию. Срабатывает, если на
                    охраняемом периметре появляется посторонний человек. На
                    случайно забредшую во двор кошку или собаку внимания она не
                    обратит.
                </li>
                <li>
                    Предотвращение протечек воды, утечки газа, замыканий
                    электросистемы. При возникновении аварийных ситуаций
                    коммуникации в "умном доме" автоматически отключаются. При
                    возгорании срабатывают приборы пожаротушения.
                </li>
            </ul>
            <p className="text-lg mb-4">
                ОПС интегрируется с другой аппаратурой, что позволяет
                значительно расширить ее функционал. "Умный дом" способен
                выполнять не только охранные, но и множество иных задач:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Открывать гаражные ворота.</li>
                <li>Создавать видимость присутствия хозяев.</li>
                <li>Включать и выключать свет в заданное время.</li>
                <li>Поднимать и опускать жалюзи.</li>
                <li>Работать в качестве радионяни.</li>
            </ul>
            <p className="text-lg mb-4">
                Основные преимущества "умной" техники — надежность, быстрота
                реагирования, простота настроек, возможность управлять ею
                удаленно.
            </p>
            <h3 className="text-2xl font-bold mb-4">Услуги нашей компании</h3>
            <p className="text-lg mb-4">
                "Норрис Сервис" предлагает широкий спектр услуг по оборудованию
                "умных домов". Принимаем заявки от организаций и частных лиц из
                Бишкека, населенных пунктов Чуйской области, Алматы. В перечень
                работ входят:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Выезд специалистов на объект, определение текущих задач.
                    Подготовка чертежей, расчет сметы.
                </li>
                <li>
                    Подбор компонентов оборудования, монтаж, подключение,
                    наладка.
                </li>
                <li>
                    При необходимости проводится прокладка, модернизация
                    силовых, слаботочных линий.
                </li>
                <li>
                    Программирование программ, сценариев, ПЛК, контроллеров.
                </li>
                <li>
                    Занимаемся разработкой интегральных схем и программным
                    обеспечением к ним.
                </li>
            </ul>
            <p className="text-lg mb-4">
                "Умные дома" разрабатываются с учетом планировки, места
                расположения, назначения помещений, требований заказчика. Работы
                проводятся в установленный договором срок профессионально,
                качественно в соответствии со строительными нормами и правилами.
            </p>
            <p className="text-lg mb-4">
                Хотите оборудовать ОПС, обеспечить дому надежную оборону от
                нежелательных вторжений? Позвоните нам по телефону или
                электронной почте, заполните форму заказа. Охранная
                сигнализация, выполняемая нами, имеет различные способы
                управления домом: дистанционное, голосовое, автоматическое.
            </p>
            <p className="text-lg mb-4">
                Стоимость оказываемых нами услуг доступна для потребителей. При
                выполнении комплексных задач, для застройщиков мы предоставляем
                удобные скидки. Оговорить условия сотрудничества,
                воспользоваться бесплатной консультативной помощью вы можете,
                связавшись с менеджерами компании.
            </p>
        </main>
    );
};

export default ProtectingYourSafetySecuritySystems;