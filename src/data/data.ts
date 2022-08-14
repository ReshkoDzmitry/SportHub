import newsImg1 from "../images/news/image01.jpg";
import newsImg2 from "../images/news/image02.jpg";
import newsImg3 from "../images/news/image03.jpg";

import people1 from "../images/people/people01.png";
import people2 from "../images/people/people02.png";
import people3 from "../images/people/people03.png";

export type NewsType = {
    id: number
    image: any
    alt: string
    data: string
    hashTag: string
    title: string
    description: string
}

export type PeopleType = {
    id: number
    photo: any
    alt: string
    name: string
    post: string
    description: string
}

export const news: NewsType[] = [
    {
        id: 1,
        image: newsImg1,
        alt: 'news1',
        data: 'Сегодня',
        hashTag: 'болельщикам',
        title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
        description: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
    },
    {
        id: 2,
        image: newsImg2,
        alt: 'news2',
        data: '09.07.19',
        hashTag: 'любительский_спорт',
        title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
        description: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
    },
    {
        id: 3,
        image: newsImg3,
        alt: 'news3',
        data: '09.07.19',
        hashTag: 'Профессиональный_спорт',
        title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
        description: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
    },
    {
        id: 4,
        image: newsImg1,
        alt: 'news4',
        data: 'Сегодня',
        hashTag: 'болельщикам',
        title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
        description: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
    },
];

export const people: PeopleType[] = [
    {
        id: 1,
        photo: people1,
        alt: 'people1',
        name: 'Алексей Михайличенко',
        post: 'Главный тренер ф.к. Динамо',
        description: 'Сергей Корниленко станет играющим тренером «Крыльев советов»',
    },
    {
        id: 2,
        photo: people2,
        alt: 'people2',
        name: 'Алексей Михайличенко',
        post: 'Главный тренер ф.к. Динамо',
        description: '«Динамо» как бы начинает работать заново',
    },
    {
        id: 3,
        photo: people3,
        alt: 'people3',
        name: 'Алексей Михайличенко',
        post: 'Главный тренер ф.к. Динамо',
        description: 'Сергей Корниленко станет играющим тренером «Крыльев советов»',
    },
    {
        id: 4,
        photo: people1,
        alt: 'people4',
        name: 'Алексей Михайличенко',
        post: 'Главный тренер ф.к. Динамо',
        description: '«Динамо» как бы начинает работать заново',
    },
];