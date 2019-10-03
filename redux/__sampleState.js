export default {
  app: {
    token: null,
  },
  localState: {
    currentCard: 'nc84n821ncz7hb',
  },
  user: {
    id: 'hekdjnv84ns8c',
    cards: ['nc889secjcz7hh'], // Карточки, связанные с учеткой
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
      // ID карточки
      id: 'nc84n897ncz7hh',

      // ID учеток, владеющих карточкой.
      // Пока всегда одна, но в будущем может быть несколько.
      users: ['hekdjnv84ns8c'],

      // Тип карточки.
      // От типа зависит содержимое поля data.
      // Пока два типа: арендатор и арендодатель.
      // В будущем появятся агентские типы.
      type: 'host',

      // Описание карточки типа "host" (ищу жильца).
      // Каждое поле описывает кусочек карточки.
      // Имя поля это ID интерфейса (data shape).
      data: {
        // Координаты: широта, долгота
        // Type: [Number, Number]
        Coords: [55.756459, 37.64482],

        // Адрес текстом
        // Type: String
        Address: 'Москва, Большой Златоустинский переулок, 6с1',

        // Этаж
        // Type: Number
        Floor: 4,

        // Количество изолированных комнат
        // 5 означает 5+.
        // Type: [0, 1, 2, 3, 4, 5]
        NumberOfRooms: 2,

        // Фотографии. Порядок имеет значение.
        Photos: [
          {
            id: 'fnu48t89jscj74', // ID в хранилище картинок.
            caption: null,
          },
        ],

        // Срок сдачи. Больше года, меньше года.
        RentalPeriod: 'long', // ['short', 'long']

        // Структура затрат арендатора.
        // Состоит из очень разных кусков.
        Price: {
          rent: 60000,
          utilities: true,
          commission: 20000,
          deposit: 50000,
        },

        NumberOfPeopleRange: {
          min: 0,
          max: 2,
        },

        // Описание
        Description:
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
        Photos: [
          {
            id: 'fnu48t89jscj74', // ID в хранилище картинок.
            caption: null,
          },
          {
            id: 'xru48t89eecj74',
            caption: null,
          },
        ],

        // Сколько человек будет проживать в квартире.
        NumberOfPeople: 2,

        // Описание
        Description:
          'Неторопливо ищу комнату на продолжительный срок. Спасибо.',

        // Оптимальная цена в рублях. При поиске мы не будем
        // ее использовать в точности,
        // но будем показывать максимально близкие по цене предложения.
        // Type: Number
        TargetPrice: 50000,

        // Минимальное количество изолированных комнат.
        // Нужно подумать про кейс со студиями.
        // Type: Number
        NumberOfRoomsRange: {
          min: 1,
          max: Infinity,
        },

        // Срок аренды. Больше года, меньше года.
        // value: ['short', 'long']
        RentalPeriod: 'long',

        // ID геоточек, в окрестностях которых ищем квартиру.
        // На старте это метро, но идейно можно использовать что угодно.
        // В городах без метро свои ориентиры,
        // в города с метро ориентиры не только метро.
        // Type: [String]
        Landmarks: [
          { id: 'msk-12348', name: 'Белорусская', color: 'green' },
          { id: 'msk-12348', name: 'Новослободская', color: 'gray' },
        ],
      },
    },
  },
  deck: [{}, {}, {}, {}],
  shelf: [],
};
