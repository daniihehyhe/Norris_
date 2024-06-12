type EnMessages = typeof import ("./messages/en.json");
type RuMessages = typeof import("./messages/ru.json");
type KgMessages = typeof import("./messages/kg.json");
type KzMessages = typeof import("./messages/kz.json");


declare interface IntlMessages extends EnMessages, RuMessages, KgMessages, KzMessages {}