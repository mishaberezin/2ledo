export default {
  app: {},
  localState: {
    currentCard: 'nc84n821ncz7hb',
  },
  user: {
    id: 'hekdjnv84ns8c',
    cards: ['nc889secjcz7hh'], // Карточки, связанные с учеткой
    data: {
      UserName: {
        value: 'Misha',
      },
      UserPhones: {
        items: ['+79262558011'],
      },
      UserGender: {
        value: 'male', // ['male', 'female']
      },
      UserBirthYear: {
        value: 1988,
      },
      UserPhotos: {
        items: [{ id: 'sgtv5765ig7ubhj' }],
      },
      UserLinks: {
        items: [{ value: 'https://www.instagram.com/kimkardashian' }],
      },
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
      // Пока арендатор и арендодатель, но в будущем добавим агентские типы.
      type: 'host',

      // Описание карточки типа "host" (ищу жильца).
      // Каждое поле описывает кусочек карточки.
      // Имя поля это ID интерфейса (data shape).
      data: {
        // Координаты: широта, долгота
        // Type: [Number, Number]
        Coords: {
          value: [55.756459, 37.64482],
        },

        Name: {
          value: 'Уютная двушка',
        },

        // Адрес текстом
        // Type: String
        Address: {
          value: 'Москва, Большой Златоустинский переулок, 6с1',
        },

        // Этаж
        // Type: Number
        Floor: {
          value: 4,
        },

        // Количество изолированных комнат
        // 5 означает 5+.
        // Type: [0, 1, 2, 3, 4, 5]
        NumberOfRooms: {
          value: 2,
        },

        // Фотографии. Порядок имеет значение.
        Photos: {
          items: [
            {
              id: 'fnu48t89jscj74', // ID в хранилище картинок.
              caption: null,
            },
          ],
        },

        // Срок сдачи. Больше года, меньше года.
        RentalPeriod: {
          value: 'long', // ['short', 'long']
        },

        // Структура затрат арендатора.
        // Состоит из очень разных кусков.
        Price: {
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

        NumberOfPeopleRange: {
          minimum: 0,
          maximum: 2,
        },

        // Описание
        Description: {
          value: 'Неторопливо ищу комнату на продолжительный срок. Спасибо.',
        },
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
        Photos: {
          items: [
            {
              id: 'fnu48t89jscj74', // ID в хранилище картинок.
              caption: null,
            },
          ],
        },

        // Сколько человек будет проживать в квартире.
        // Type: Number
        NumberOfPeople: {
          value: 2,
        },

        // Описание
        // Type: String
        Description: {
          value: 'Неторопливо ищу комнату на продолжительный срок. Спасибо.',
        },

        // Оптимальная цена в рублях. При поиске мы не будем
        // ее использовать в точности,
        // но будем показывать максимально близкие по цене предложения.
        // Type: Number
        PriceRange: {
          minimum: null,
          optimal: 50000,
          maximum: null,
        },

        // Минимальное количество изолированных комнат.
        // Нужно подумать про кейс со студиями.
        // Type: Number
        NumberOfRoomsRange: {
          minimum: 1,
          maximum: Infinity,
        },

        // Срок аренды. Больше года, меньше года.
        // value: ['short', 'long']
        RentalPeriod: {
          value: 'long',
        },

        // ID геоточек, в окрестностях которых ищем квартиру.
        // На старте это метро, но идейно можно использовать что угодно.
        // В городах без метро свои ориентиры,
        // в города с метро ориентиры не только метро.
        // Type: [String]
        Landmarks: {
          items: [{ id: 'msk-12348' }],
        },
      },
    },
  },
  deck: [{}, {}, {}, {}],
  shelf: [],
};
