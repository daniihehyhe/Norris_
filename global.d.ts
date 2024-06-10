type EnMessages = typeof import ("./src/messages/en.json");
type RuMessages = typeof import("./src/messages/ru.json");
type KgMessages = typeof import("./src/messages/kg.json");
type KzMessages = typeof import("./src/messages/kz.json");


declare interface IntlMessages extends EnMessages, RuMessages, KgMessages, KzMessages {}