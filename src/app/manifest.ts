import {MetadataRoute} from 'next'


export default function manifest(): MetadataRoute.Manifest{
    return{

        name: "Smart Home Norris.kg",
        short_name: "norris.kg",
        description: "Система «умного дома» от Norris.kg в Бишкеке для квартир, офисов, гостиниц и других объектов от компании «Норрис Сервис». Разработка проектов под индивидуальный заказ, большой выбор готовых решений. Разработка печатных плат, интегральных схем, разработка программного обеспечения для контроллеров. Монтаж, наладка, обслуживание оборудования на высоком профессиональном уровне.",
        start_url: "/",
        background_color:"#fff",
        theme_color:"#fff",
        display:"standalone",
        orientation:"portrait",
        icons:[
            {
                src: "/public/logo_norris.png",
                sizes: "196x196 512x512 144x144 192x192 128x128 120x120 180x180",
                type: "image/png",
                purpose: "maskable"
            },
        ],
    }
}