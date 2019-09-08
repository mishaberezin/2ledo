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
      id: 'nc84n897ncz7hh', // ID профиля
      users: ['hekdjnv84ns8c'], // Учетки, связанные с карточкой
      type: 'tenant', // host, agent
      data: {
        photos: [],
        numberOfPeople: 2,
        description:
          'Неторопливо ищу комнату на продолжительный срок. Спасибо.',
      },
      tune: {
        price: 50,
        numberOfRooms: 1,
        firstFloorIsOk: true,
        metro: 'Строгино',
      },
    },
  },
  deck: [],
  shelf: [],
};
