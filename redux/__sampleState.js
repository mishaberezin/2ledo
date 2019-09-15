export default {
  app: {},
  localState: {
    currentCard: 'nc84n821ncz7hb',
  },
  user: {
    id: 'hekdjnv84ns8c',
    phones: ['+79262558011'],
    name: 'Misha',
    gender: 'male',
    birthYear: 1988,
    photos: ['sgtv5765ig7ubhj'],
    links: ['https://www.instagram.com/kimkardashian'], // Соцсети и пр.
    cards: ['nc889secjcz7hh'], // Карточки, связанные с учеткой
  },
  cards: {
    nc84n897ncz7hh: {
      // ID карточки
      // Тип: String
      id: 'nc84n897ncz7hh',

      // ID учеток, владеющих карточкой.
      // Пока всегда одна, но в будущем может быть несколько.
      // Тип: [String]
      users: ['hekdjnv84ns8c'],

      // Тип карточки.
      // От типа зависит поле data.
      // Пока арендатор и арендодатель, но в будущем добавим агентские типы.
      // Тип: ['tenant', 'host']
      type: 'host',

      // Описание карточки типа "host". Что предлагаю, кого ищу.
      data: {
        // Координаты: широта, долгота
        // Type: [Number, Number]
        coords: [55.756459, 37.64482],

        // Адрес текстом
        // Type: String
        address: 'Москва, Большой Златоустинский переулок, 6с1',

        // Этаж
        // Type: Number
        floor: 4,

        // Количество изолированных комнат
        // 5 означает 5+.
        // Type: [0, 1, 2, 3, 4, 5]
        numberOfRooms: 2,

        // Фотографии. Порядок имеет значение.
        // Тип: [Object]
        photos: [
          {
            id: 'fnu48t89jscj74', // ID в хранилище картинок.
            caption: null,
          },
        ],

        // Срок сдачи. Больше года, меньше года.
        // Type: ['short', 'long']
        rentalPeriod: 'long',

        // Структура затрат арендатора.
        // Состоит из очень разных кусков.
        price: {
          rent: {
            value: 60000,
          },
          utilities: {
            value: true,
          },
          commission: {
            value: 20000,
          },
          deposit: {
            value: 50000,
          },
        },

        maxNumberOfPeople: 2,

        // Описание
        // Type: String
        description:
          'Неторопливо ищу комнату на продолжительный срок. Спасибо.',
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
        photos: [],

        // Сколько человек будет проживать в квартире.
        // Type: Number
        numberOfPeople: 2,

        // Описание
        // Type: String
        description:
          'Неторопливо ищу комнату на продолжительный срок. Спасибо.',

        // Оптимальная цена в рублях. При поиске мы не будем
        // ее использовать в точности,
        // но будем показывать максимально близкие по цене предложения.
        // Type: Number
        price: 50000,

        // Минимальное количество изолированных комнат.
        // Нужно подумать про кейс со студиями.
        // Type: Number
        minNumberOfRooms: 1,

        // Срок аренды. Больше года, меньше года.
        // Type: ['short', 'long']
        rentalPeriod: 'long',

        // ID геоточек, в окрестностях которых ищем квартиру.
        // На старте это метро, но идейно можно использовать что угодно.
        // В городах без метро свои ориентиры,
        // в города с метро ориентиры не только метро.
        // Type: [String]
        geopoints: ['msk-12348'],
      },
    },
  },
  deck: [{}, {}, {}, {}],
  shelf: [],
};
