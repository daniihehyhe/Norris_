// src/types/translations.ts
export interface ServiceTranslation {
    title: never;
    description: never;
    image: never;
}

export interface Translations {
    camera: ServiceTranslation;
    security: ServiceTranslation;
    smartSpeakers: ServiceTranslation;
    sensors: ServiceTranslation;
    curtainsLighting: ServiceTranslation;
}
