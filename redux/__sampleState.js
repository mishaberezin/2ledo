import { landmarks } from '../server/db';

export default {
  app: {
    token: null,
  },
  localState: {
    currentCard: 'nc84n821ncz7hb',
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
      // ID карточки
      id: 'nc84n897ncz7hh',

      // ID учетных записей, владеющих карточкой.
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
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        NumberOfRooms: 2,
        Floor: 4,
        Photos: [
          {
            id: 'fnu48t89jscj74', // ID в хранилище картинок
          },
        ],
        RentalPeriod: 'long',
        RentalPrice: 60000,
        MaxNumberOfPeople: 2,
        Description: 'Сдаю только не беспокоить славянам просьба спасибо.',
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
