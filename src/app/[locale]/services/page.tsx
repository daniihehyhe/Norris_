import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";


type Props = {
    params: { locale: string };
};


const ServicesPage = ({ params: { locale } }: Props) => {
    unstable_setRequestLocale(locale);

    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Services</h1>
                    <p className="text-lg">
                        This is the services page. Learn more about our services
                        here.
                    </p>
                    <div className="text-red">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis nam quaerat quia illo minus culpa eveniet
                        exercitationem autem saepe. Nostrum dolor quidem
                        inventore earum nobis unde illum quibusdam assumenda
                        sapiente magnam, vero temporibus eos quae sed
                        accusantium quia distinctio! Maiores nam similique
                        corrupti repellendus obcaecati, amet tempore pariatur
                        iusto harum.
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
