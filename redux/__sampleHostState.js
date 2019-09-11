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
      type: 'host',

      // Описание карточки (что предлагаю) типа "host"
      data: {},

      // Описание фильтров (что ищу)
      tune: {},
    },
  },
  deck: [{}, {}, {}, {}],
  shelf: [],
};
