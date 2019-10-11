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
      Type: 'host',
      IsFresh: true,
      data: {
        HostUser: {
          name: 'Виктор',
          avatarUri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTEyNjMzMV5BMl5BanBnXkFtZTYwODE0MzQ2._V1_UX172_CR0,0,172,256_AL_.jpg',
        },
        NumberOfRooms: 2,
        IsFresh: true,
        Photos: [
          {
            url:
              'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
          },
          {
            url:
              'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
          },
          {
            url:
              'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
          },
        ],
        Landmarks: [
          {
            id: 'mendeley',
            Type: 'metro',
            data: {
              name: 'Менделеевская',
              color: 'gray',
            },
          },
          {
            id: 'dinamo',
            Type: 'metro',
            data: {
              name: 'Динамо',
              color: 'green',
            },
          },
        ],
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        RentalPrice: 30000,
        MaxNumberOfPeople: 2,
        RentalPeriod: 'long',
        Description:
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
      Type: 'tenant',

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
  deck: [
    {
      id: 1,
      Type: 'host',
      data: {
        HostUser: {
          name: 'Виктор',
          avatarUri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTEyNjMzMV5BMl5BanBnXkFtZTYwODE0MzQ2._V1_UX172_CR0,0,172,256_AL_.jpg',
        },
        NumberOfRooms: 2,
        IsFresh: true,
        Photos: [
          {
            url:
              'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
          },
          {
            url:
              'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
          },
          {
            url:
              'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
          },
        ],
        Landmarks: [
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
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        RentalPrice: 30000,
        MaxNumberOfPeople: 2,
        RentalPeriod: 'long',
        Description:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)),\nпросторный холл, постирочная и сушильная зона.\n Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\n В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
    {
      id: 2,
      Type: 'host',
      data: {
        NumberOfRooms: 2,
        HostUser: {
          name: 'Татьяна',
          avatarUri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
        },
        Photos: [
          {
            url:
              'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
          },
        ],
        Landmarks: [
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
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        RentalPrice: 30000,
        MaxNumberOfPeople: 2,
        RentalPeriod: 'long',
        Description:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
    {
      id: 3,
      Type: 'host',
      data: {
        HostUser: {
          name: 'Ольга',
          avatarUri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
        },
        NumberOfRooms: 2,
        Photos: [
          {
            url:
              'https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg',
          },
        ],
        Landmarks: [
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
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        RentalPrice: 30000,
        MaxNumberOfPeople: 2,
        RentalPeriod: 'long',
        Description:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
    {
      id: 4,
      Type: 'host',
      data: {
        HostUser: {
          name: 'Света',
          avatarUri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
        },
        NumberOfRooms: 2,
        Landmarks: [
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
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        RentalPrice: 30000,
        MaxNumberOfPeople: 2,
        RentalPeriod: 'long',
        Photos: [
          {
            url:
              'https://n1s1.elle.ru/29/3c/08/293c089064a46d58a6ca46c1915eb2d7/1500x999_0xac120002_13263901001544189597.jpeg',
          },
        ],
        Description:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
    {
      id: 5,
      Type: 'host',
      data: {
        HostUser: {
          name: 'Ольга',
          avatarUri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
        },
        Landmarks: [
          {
            id: 'mendeley',
            type: 'metro',
            data: {
              name: 'Менделеевская',
              color: 'gray',
            },
          },
        ],
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        NumberOfRooms: 2,
        RentalPrice: 30000,
        MaxNumberOfPeople: 2,
        RentalPeriod: 'long',
        Photos: [
          {
            url:
              'https://ik.gipernn.ru/k29g01hao2kva_dag5z_h-600_w-800_zc-1/2-komnatnaya-kvartira-ulica-geroya-chugunova-dom-6-0.jpeg',
          },
        ],
        Description:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
  ],
  shelf: {
    disliked: [],
    liked: [
      {
        id: 2,
        Type: 'host',
        data: {
          NumberOfRooms: 2,
          HostUser: {
            name: 'Татьяна',
            avatarUri:
              'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
          },
          Photos: [
            {
              url:
                'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
            },
          ],
          Landmarks: [
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
          Address: {
            coords: [55.756459, 37.64482],
            postal: 'Москва, Большой Златоустинский переулок, 6с1',
          },
          RentalPrice: 30000,
          MaxNumberOfPeople: 2,
          RentalPeriod: 'long',
          Description:
            'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
        },
      },
      {
        id: 3,
        Type: 'host',
        data: {
          HostUser: {
            name: 'Ольга',
            avatarUri:
              'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
          },
          NumberOfRooms: 2,
          Photos: [
            {
              url:
                'https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg',
            },
          ],
          Landmarks: [
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
          Address: {
            coords: [55.756459, 37.64482],
            postal: 'Москва, Большой Златоустинский переулок, 6с1',
          },
          RentalPrice: 30000,
          MaxNumberOfPeople: 2,
          RentalPeriod: 'long',
          Description:
            'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
        },
      },
    ],
  },
};
