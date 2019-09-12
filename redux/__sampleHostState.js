export default {
  app: {},
  localState: {
    currentCard: 'nc84n897ncz7hh',
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
      id: 'nc889secjcz7hh',

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
  },
  deck: [{}, {}, {}, {}],
  shelf: [],
};
