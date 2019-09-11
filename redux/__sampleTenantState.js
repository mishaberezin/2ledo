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
    cards: ['nc84n897ncz7hh'], // Карточки, связанные с учеткой
  },
  cards: {
    nc84n897ncz7hh: {
      // ID карточки
      // Тип: String
      id: 'nc84n897ncz7hh',

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
        // Первая фотография заглавная.
        // Тип: [String]
        photos: [],

        // Сколько человек будет проживать в квартире.
        // Type: Number
        numberOfPeople: 2,

        // Описание
        // Type: String
        description:
          'Неторопливо ищу комнату на продолжительный срок. Спасибо.',
      },

      // Описание фильтров (что ищу)
      tune: {
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
        // Можно добавить еще варианты в будущем, но
        // Type: ['short', 'long']
        rentalPeriod: 'long',

        // Флаг "не первый этаж".
        // Type: Boolean
        firstFloorIsOk: true,

        // ID геоточек, в окрестностях которых ищем квартиру.
        // На старте это метро, но идейно можно использовать что угодно.
        // В городах без метро свои ориентиры,
        // в города с метро ориентиры не только метро.
        // Type: [String]
        metro: ['msk-12348'],
      },
    },
  },
  deck: [{}, {}, {}, {}],
  shelf: [],
};

// В выдаче никакие поля в данных карточки не стоит считать обязательными.
