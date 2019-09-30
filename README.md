# Концепция

## Установка

1.  Поставить на телефон приложение [Expo](https://expo.io/);
2.  Установить Expo глобально `npm install expo-cli --global`;
3.  Подтянуть зависимости `npm ci`;
4.  Стартануть проект `npm start`;
    5.А В появившейся странице в браузере сканировать QR код с телефона и открыть Expo;
    5.Б Установить Simulator и запускать приложение на компе

## Даташейпы

Объекты юзера и карточки представляются набором типизированных кусочков и мета-инфой (референсы, id и т.д.). Типизированные кусочки, описывающие объект, находятся в поле `data`.

```js
{
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
  }
}
```

Название поля совпадает с типом (интерфейсом). Каждому типу может соответствовать атомарный компонент.

Общий подход такой. Если одно значение (любого типа), то кусочек выглядит так:

```js
{
  Type: 'hello'
}
{
  Type: 1234
}
{
  Type: {
    min: 12,
    max: 21
  }
}
{
  Type: [
    {
      id: 1234,
    },
    {
      id: 1235,
    },
  ]
}
```

Если есть мета инфа, то передается объект, а значение в поле value. Т.о. value является особым ключевым.

```js
{
  Type: {
    type: 'interesting',
    value: 'hello',
  }
}
```

## Рецепты

Чистый запуск:

```sh
git clean -xdf
npm install
expo start --ios --clear
```

Дебаг:
https://medium.com/@tetsuyahasegawa/how-to-integrate-react-native-debugger-to-your-expo-react-native-project-db1d631fad02
