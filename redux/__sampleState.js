import { landmarks } from '../server/db';

export default {
  app: {
    token: null,
  },
  localState: {
    currentCard: 'nc84n897ncz7hh',
  },
  user: {
    id: 'hekdjnv84ns8c',
    cards: ['nc84n821ncz7hb', 'nc84n897ncz7hh'], // Карточки, связанные с учеткой
    data: {
      UserName: 'Misha',
      UserPhones: ['+79262558011'],
      UserGender: 'male', // ['male', 'female']
      UserBirthYear: 1988,
      UserPhotos: [{ id: 'sgtv5765ig7ubhj' }],
      UserLinks: [{ value: 'https://www.instagram.com/kimkardashian' }],
    },
  },
  cards: {
    nc84n897ncz7hh: {
      id: 1,
      type: 'host',
      isFresh: true,
      user: {
        name: 'Виктор',
        avatarUri:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTEyNjMzMV5BMl5BanBnXkFtZTYwODE0MzQ2._V1_UX172_CR0,0,172,256_AL_.jpg',
      },
      data: {
        numberOfRooms: 2,
        isFresh: true,
        photos: [
          'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
          'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
          'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
        ],
        landmarks: [
          {
            id: 'mendeley',
            type: 'metro',
            data: {
              name: 'Менделеевская',
              color: 'gray',
            },
          },
          {
            id: 'dinamo',
            type: 'metro',
            data: {
              name: 'Динамо',
              color: 'green',
            },
          },
        ],
        address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        rentalPrice: 30000,
        maxNumberOfPeople: 2,
        rentalPeriod: 'long',
        description:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)),\nпросторный холл, постирочная и сушильная зона.\n Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\n В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
    nc84n821ncz7hb: {
      // ID карточки
      // Тип: String
      id: 'nc84n821ncz7hb',

      // ID учеток, владеющих карточкой.
      // Пока может быть только одна,
      // но в будущем может быть несколько,
      // поэтому сразу массив.
      // Тип: [String]
      users: ['hekdjnv84ns8c'],

      // Тип карточки.
      // От типа зависит набор остальных полей.
      // Пока арендатор и арендодатель, но в будущем добавим агента.
      // Тип: ['tenant', 'host']
      type: 'tenant',

      // Описание карточки (что предлагаю) типа "tenant"
      data: {
        // ID фотографий в хранилище картинок.
        // Порядок имеет значение, первая заглавная.
        // Тип: [String]
        Photos: [
          {
            id: 'fnu48t89jscj74',
          },
          {
            id: 'xru48t89eecj74',
          },
        ],

        // Сколько человек будет проживать в квартире.
        NumberOfPeople: 2,

        // Описание
        Description: 'Неторопливо ищу квартиру на продолжительный срок.',

        // Оптимальная цена в рублях.
        TargetPrice: 50000,

        // Минимальное количество изолированных комнат.
        // Студия это 0 комнат.
        MinNumberOfRooms: 1,

        // Срок аренды. Больше года, меньше года, любой.
        RentalPeriod: 'long',

        // Локация, в окрестностях которой ищем квартиру.
        // На старте это метро, но идейно может быть что угодно.
        Landmark: landmarks[0],
      },
    },
  },
  deck: [],
  shelf: [],
};
