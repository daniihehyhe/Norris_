// Глобальное объявление интерфейса для сообщений
declare global {
    interface IntlMessages
        extends EnMessages,
            RuMessages,
            KgMessages,
            KzMessages {}
}

// Переопределение функции useTranslations для работы с IntlMessages
import { IntlMessages } from "./src/types/i18n-types";

declare module "next-intl" {
    function useTranslations<T extends keyof IntlMessages = keyof IntlMessages>(
        namespace?: T,
    ): (key: T) => string;
}
