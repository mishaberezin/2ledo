// const ulrs = [
//   'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
//   'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
//   'https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg',
//   'https://n1s1.elle.ru/29/3c/08/293c089064a46d58a6ca46c1915eb2d7/1500x999_0xac120002_13263901001544189597.jpeg',
//   'https://ask-yug.com/local/templates/new/images/ready-plan-1.png',
//   'https://ik.gipernn.ru/k29g01hao2kva_dag5z_h-600_w-800_zc-1/2-komnatnaya-kvartira-ulica-geroya-chugunova-dom-6-0.jpeg',
// ];

export default {
  nc84n897ncz7hh: {
    // ID карточки
    id: 'nc84n897ncz7hh',

    // ID учеток, владеющих карточкой.
    // Пока всегда одна, но в будущем может быть несколько.
    users: {
      hekdjnv84ns84: {
        id: 'hekdjnv84ns84',
        Name: { value: 'Виктор' },
        Avatar: {
          uri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTEyNjMzMV5BMl5BanBnXkFtZTYwODE0MzQ2._V1_UX172_CR0,0,172,256_AL_.jpg',
        },
      },
    },

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
            ulr:
              'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
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
        minimum: 1,
        maximum: 2,
      },

      // Описание
      Description: {
        value:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)),\nпросторный холл, постирочная и сушильная зона.\n Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\n В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
  },
  nc84n897ncz7h1: {
    // ID карточки
    id: 'nc84n897ncz7h1',

    // ID учеток, владеющих карточкой.
    // Пока всегда одна, но в будущем может быть несколько.
    users: {
      hekdjnv84ns8c: {
        id: 'hekdjnv84ns8c',
        Name: { value: 'Виктор' },
        Avatar: {
          uri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTEyNjMzMV5BMl5BanBnXkFtZTYwODE0MzQ2._V1_UX172_CR0,0,172,256_AL_.jpg',
        },
      },
    },

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
            ulr:
              'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
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
        minimum: 1,
        maximum: 2,
      },

      // Описание
      Description: {
        value:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)),\nпросторный холл, постирочная и сушильная зона.\n Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\n В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
  },
  nc84n897ncz7h2: {
    // ID карточки
    id: 'nc84n897ncz7h2',

    // ID учеток, владеющих карточкой.
    // Пока всегда одна, но в будущем может быть несколько.
    users: {
      hekdjnv84ns8c: {
        id: 'hekdjnv84ns8c',
        Name: { value: 'Виктор' },
        Avatar: {
          uri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTEyNjMzMV5BMl5BanBnXkFtZTYwODE0MzQ2._V1_UX172_CR0,0,172,256_AL_.jpg',
        },
      },
    },

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
            ulr:
              'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
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
        minimum: 1,
        maximum: 2,
      },

      // Описание
      Description: {
        value:
          'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)),\nпросторный холл, постирочная и сушильная зона.\n Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\n В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
      },
    },
  },
};
