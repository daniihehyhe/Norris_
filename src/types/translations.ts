export interface Translations {
    camera: ServiceTranslation;
    security: ServiceTranslation;
    smartSpeakers: ServiceTranslation;
    sensors: ServiceTranslation;
    curtainsLighting: ServiceTranslation;
}

interface ServiceTranslation {
    title: string;
    description: string;
    image: string;
}
