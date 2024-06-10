/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// Определение типов сообщений
type EnMessages = typeof import("./messages/en.json");
type RuMessages = typeof import("./messages/ru.json");
type KgMessages = typeof import("./messages/kg.json");
type KzMessages = typeof import("./messages/kz.json");

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
