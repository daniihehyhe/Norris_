// src/types/translations.d.ts
export interface SmartHomeServiceTranslation {
    title: string;
    description: string;
    image: string;
}

export interface Translations {
    camera: SmartHomeServiceTranslation;
    security: SmartHomeServiceTranslation;
    smartSpeakers: SmartHomeServiceTranslation;
    sensors: SmartHomeServiceTranslation;
    curtainsLighting: SmartHomeServiceTranslation;
}
