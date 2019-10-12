export const landmarks = [
  {
    id: 'belarik',
    type: 'metro',
    data: {
      name: 'Белорусская',
      color: 'green',
    },
  },
  {
    id: 'novoslo',
    type: 'metro',
    data: {
      name: 'Новослободская',
      color: 'brown',
    },
  },
  {
    id: 'dinamo',
    type: 'metro',
    data: {
      name: 'Динамо',
      color: 'green',
    },
  },
  {
    id: 'mendeley',
    type: 'metro',
    data: {
      name: 'Менделеевская',
      color: 'gray',
    },
  },
  {
    id: 'mayako',
    type: 'metro',
    data: {
      name: 'Маяковская',
      color: 'green',
    },
  },
];

export const deck = [
  {
    id: 1,
    Type: 'host',
    data: {
      HostUser: {
        name: 'Виктор',
        avatarUri: require('@toledo/assets/in/avatars/female/1.jpg'),
      },
      NumberOfRooms: 2,
      IsFresh: true,
      Photos: [
        {
          uri:
            'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
        },
        {
          uri:
            'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
        },
        {
          uri:
            'https://www.gd-home.com/wp-content/uploads/2018/07/skandinavskaya-odnokomnatnaya-kvartira-s-malenkoj-kuxnej-1.jpg',
        },
      ],
      Landmark: landmarks[1],
      Address: {
        coords: [55.756459, 37.64482],
        postal: 'Москва, Большой Златоустинский переулок, 6с1',
      },
      RentalPrice: 30000,
      MaxNumberOfPeople: 2,
      RentalPeriod: 'long',
      Description:
        'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)),\nпросторный холл, постирочная и сушильная зона.\n Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\n В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
    },
  },
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
      Landmark: landmarks[2],
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
      Landmark: landmarks[3],
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
    id: 4,
    Type: 'host',
    data: {
      HostUser: {
        name: 'Света',
        avatarUri:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      },
      NumberOfRooms: 2,
      Landmark: landmarks[4],
      Address: {
        coords: [55.756459, 37.64482],
        postal: 'Москва, Большой Златоустинский переулок, 6с1',
      },
      RentalPrice: 30000,
      MaxNumberOfPeople: 2,
      RentalPeriod: 'long',
      Photos: [
        {
          uri:
            'https://n1s1.elle.ru/29/3c/08/293c089064a46d58a6ca46c1915eb2d7/1500x999_0xac120002_13263901001544189597.jpeg',
        },
      ],
      Description:
        'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
    },
  },
  {
    id: 5,
    Type: 'host',
    data: {
      HostUser: {
        name: 'Ольга',
        avatarUri:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      },
      Landmark: landmarks[2],
      Address: {
        coords: [55.756459, 37.64482],
        postal: 'Москва, Большой Златоустинский переулок, 6с1',
      },
      NumberOfRooms: 2,
      RentalPrice: 30000,
      MaxNumberOfPeople: 2,
      RentalPeriod: 'long',
      Photos: [
        {
          uri:
            'https://ik.gipernn.ru/k29g01hao2kva_dag5z_h-600_w-800_zc-1/2-komnatnaya-kvartira-ulica-geroya-chugunova-dom-6-0.jpeg',
        },
      ],
      Description:
        'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой.\n Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона.\nПанорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город.\nВ ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
    },
  },
];
