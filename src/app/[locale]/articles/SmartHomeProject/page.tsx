// components/SmartHomeProject.tsx

import React from 'react';
import { MdHome, MdBuild, MdSecurity, MdOutlineEngineering } from 'react-icons/md';
import Image from 'next/image';
import layout_plan from '@public/images/layout_plan.webp';
import flat from '@public/images/flat.jpg';
import flat2 from '@public/images/flat2.webp';

const SmartHomeProject: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-orange-800">
        Проект "умного дома" от NORRIS.KG
      </h2>
      <p className="text-lg mb-4">
        Закажите в Бишкеке разработку проекта "умного дома" через сайт
        NORRIS.KG. Принимаем заявки от всех заинтересованных в наших
        услугах государственных, коммерческих организаций, частных лиц.
        Предлагаем удобные цены, гарантируем профессиональное выполнение
        полного пакета проектной документации, точное соблюдение сроков
        выполнения заказа.
      </p>
      <h3 className="text-2xl font-bold mb-4">
        <MdHome className="inline-block text-orange-800" /> "Умный дом": что это, из чего он состоит?
      </h3>
      <p className="text-lg mb-4">
        Высокотехнологичные многофункциональные интеллектуальные здания
        широко востребованы на рынке нашей страны. Система объединяет в
        себе различные технические средства, слаженная работа которых
        обеспечивает сохранность имущества, комфорт и здоровье людей. В
        комплектацию входит:
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>Контроллер.</li>
        <li>Различные типы датчиков.</li>
        <li>Модули расширения.</li>
        <li>Набор исполнительных устройств.</li>
        <li>
          Программирование программ, сценариев, ПЛК, контроллеров.
        </li>
        <li>
          Разработка интегральных схем и программное обеспечение к
          ним.
        </li>
      </ul>
      <Image src={layout_plan} alt="Layout Plan" className="rounded-lg shadow-md mb-8" />
      <p className="text-lg mb-4">
        Для введения их в эксплуатацию требуется прокладка силовых
        кабелей и слаботочных линий. Управление и настройка рабочих
        параметров проводится при помощи компьютера, ПДУ, голосовых
        команд, сенсорных панелей или удаленно — через смартфон.
      </p>
      <p className="text-lg mb-4">
        Чтобы оборудование было правильно интегрировано,
        взаимодействовало между собой без сбоев и задержек, следует
        уделить особое внимание проектированию.
      </p>
      <h3 className="text-2xl font-bold mb-4">
        <MdBuild className="inline-block text-orange-800" /> Что включает в себя работа над проектом?
      </h3>
      <p className="text-lg mb-4">
        Состоит она из ряда мероприятий, каждое из которых играет важное
        значение в успешной реализации поставленной задачи. Их можно
        условно разделить на несколько основных этапов:
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>
          <strong>Сбор информации об объекте:</strong> Оценивается
          состояние коммуникаций, архитектура, планировка помещений,
          удобство подключения к электропитанию. Учитывается
          назначение здания, требования владельцев, возможность
          использования при дальнейшей долговременной эксплуатации
          дополнительных подсистем.
        </li>
        <li>
          <strong>Создание эскиза:</strong> Рассчитывается количество
          деталей, длина, сечение проводов и кабелей, необходимых для
          проведения монтажа в "умном доме". Выполняется и
          согласовывается с заказчиком смета. При необходимости в нее
          вносятся изменения.
        </li>
        <li>
          <strong>Подготовка документации:</strong> Создаются чертежи,
          по которым в здании будут размещаться щитовая, видеокамеры,
          блоки питания и другие элементы. Моделируются пути прокладки
          слаботочных и силовых кабельных линий.
        </li>
        <li>
          <strong>Определение сроков выполнения работ:</strong>
          Утверждается график, расписываются инструкции для бригад
          монтажников.
        </li>
      </ul>
      <Image src={flat} alt="Smart Home" className="rounded-lg shadow-md mb-8" />
      <p className="text-lg mb-4">
        После детальной разработки системы начинается процесс ее
        реализации согласно утвержденному плану.
      </p>
      <h3 className="text-2xl font-bold mb-4">
        <MdSecurity className="inline-block text-orange-800" /> Почему следует обратиться в нашу компанию?
      </h3>
      <p className="text-lg mb-4">
        Не обладая достаточным опытом и знаниями, невозможно качественно
        выполнить весь комплекс работ в "умном доме". Чтобы избежать
        нежелательных последствий, не стоит проводить их самостоятельно.
        Потребовались услуги профессионалов? Обратитесь в "Норрис
        Сервис". Специализация компании — автоматизация зданий
        различного назначения. В число наших заказчиков входят известные
        в Бишкеке промышленные и коммерческие организации. География
        продаж "умного дома" с каждым годом расширяется, охватывает
        Алматы и города Чуйской области. Нашими сильными сторонами
        являются:
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>
          Высокий профессионализм инженерно-технического состава.
          Большой практический опыт специалистов позволяет заниматься
          проектами любой сложности.
        </li>
        <li>
          Ответственное отношение к работе и строгое выполнение
          договорных обязательств.
        </li>
        <li>
          Разумная ценовая политика, делающая наши услуги доступными
          широкому кругу потребителей.
        </li>
      </ul>
      <Image src={flat2} alt="Smart Home" className="rounded-lg shadow-md mb-8" />
      <p className="text-lg mb-4">
        Мы предлагаем множество готовых решений. Вы можете выбрать одно
        из них или оставить заявку на разработку проекта под
        индивидуальный заказ. Во внимание принимаются финансовые
        возможности и предпочтения клиентов. Для разработки системы
        применяются компьютерные программы, что позволяет нам эффективно
        выполнять свою работу. При монтаже используются качественные
        комплектующие, прошедшие обязательную сертификацию.
      </p>
      <p className="text-lg mb-4">
        Чтобы заказать "умный дом", свяжитесь с менеджерами NORRIS.KG по
        электронной почте или телефону, оставьте свою заявку. Мы
        оперативно перезвоним вам, рассчитаем стоимость проекта, уточним
        сроки его реализации. Квартира или офис, переоборудованные под
        "умный дом" по нашему проекту, станут надежным обеспечением
        вашей безопасности и комфорта.
      </p>
    </div>
  );
};

export default SmartHomeProject;