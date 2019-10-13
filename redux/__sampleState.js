import { images } from '@toledo/assets';
import { landmarks } from '../server/db';

export default {
  app: {
    token: null,
  },
  localState: {
    currentCardId: 'nc84n897ncz7hh',
  },
  user: {
    id: 'hekdjnv84ns8c',
    cards: ['nc84n821ncz7hb', 'nc84n897ncz7hh'], // Карточки, связанные с учеткой
    data: {
      UserName: 'Misha Berezin',
      UserPhones: ['+79262558011'],
      UserGender: 'male', // ['male', 'female']
      UserBirthYear: 1988,
      UserPhotos: [
        images.userFaceImage,
        images.userAdditionalImage,
        images.userAdditionalImage2,
      ],
      UserAvatar: images.avatarMale9,
    },
  },
  cards: {
    nc84n897ncz7hh: {
      id: 'nc84n897ncz7hh',
      users: ['hekdjnv84ns8c'],
      type: 'host',
      data: {
        HostUser: {
          name: 'Виктор',
          avatarUri:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTEyNjMzMV5BMl5BanBnXkFtZTYwODE0MzQ2._V1_UX172_CR0,0,172,256_AL_.jpg',
        },
        Address: {
          coords: [55.756459, 37.64482],
          postal: 'Москва, Большой Златоустинский переулок, 6с1',
        },
        Landmark: landmarks[2],
        NumberOfRooms: 2,
        Floor: 4,
        Photos: [images.flatInterior, images.flatExterior, images.flatToilet],
        RentalPeriod: 'long',
        RentalPrice: 60000,
        MaxNumberOfPeople: 2,
        Description: 'Сдаю только не беспокоить славянам просьба спасибо.',
      },
    },
    nc84n821ncz7hb: {
      id: 'nc84n821ncz7hb',
      users: ['hekdjnv84ns8c'],
      type: 'tenant',
      data: {
        Photos: [images.faceImage, images.runningManImage, images.sampleFemale],
        NumberOfPeople: 2,
        Description: 'Неторопливо ищу квартиру на продолжительный срок.',
        TargetPrice: 50000,
        MinNumberOfRooms: 1,
        RentalPeriod: 'long',
        Landmark: landmarks[0],
      },
    },
  },
  deck: [],
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
              uri:
                'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
            },
          ],
          Landmark: landmarks[0],
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
              uri:
                'https://srbu.ru/images/stroitelnye-raboty/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe/studiya-ili-odnokomnatnaya-kvartira-chto-luchshe.jpg',
            },
          ],
          Landmark: landmarks[4],
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
