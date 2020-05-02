# Фронтенд

## Установка

📲 Работает только под iOS

1.  Поставить на телефон приложение [Expo](https://expo.io/)
2.  Поставить на компьютер [Xcode](https://developer.apple.com/xcode/resources/)
3.  Установить [Node.js + NPM](https://nodejs.org/) (npm идет в комплекте)
4.  Установить `expo-cli` глобально
    ```
    npm install expo-cli --global
    ```
5.  Склонировать репозиторий
6.  Подтянуть зависимости `npm ci`
7.  Стартануть проект `npm start` <br>
    7.А Отсканировать появившийся QR код с помощью камеры на телефоне и открыть ссылку в Expo; <br>
    7.Б Запустить приложение в программе Simulator (идет вместе с Xcode) на компе;

## Данные на фронте

Объекты:

- User (учетка)
- Card (карточка)

Коллекции:

- Deck (набор карточек для выдачи)
- Shelf (отобранные карточки)

## Компоненто-ориентированный даташейп

Объекты учетки и карточки матчатся на **структурированные** объекты интерфейса и могут иметь разные представления и начинку. Такие типы объектов удобно выражать компоненто-ориентированными даташейпами.

Это значит что объект состоит из мета информации и данных, которые разбиты на изолированные кусочки. Каждый кусочек типизирован и отрисовывается атомарным компонентом с совместимым типом.

К примеру Книга:

```js
{
  id: "b3b76f1bc0ba",
  data: {
    Name: "Harry Potter and the Goblet of Fire",
    MinimumAge: 8,
    NumberOfPages: 464,
    Series: {
      id: "49ea1a2b",
      internalRef: "ty543ds9j",
      data: {
        name: "Harry Potter",
      }
    },
    Publisher: {
      name: "Levine Books",
      link: "https://www.arthuralevinebooks.com/"
    }
  }
}
```

В корне любая мета информация (айдишники, линковка, флаг AB-теста). В поле `data` структурированная начинка. Каждое поле в `data` с большой буквы (как TS интерфейс). На другом конце React-компонент, который реализует этот интерфейс.

Интерфейс React-компонента это всегда объект, а кусочки данных в основном необъектного типа. Поэтому есть простая форма и каноничная форма.

Простая форма:

```js
Type: [anything];
```

Каноничная форма:

```js
Type: {
  data: [anything];
}
```

Реальный пример:

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

## Рецепты

🍒 Чистый пезапуск:

```sh
git clean -xdf
npm ci
expo start --ios --clear
```

🍒 Перезагрузка приложения в Симуляторе:
```txt
Device → Shake (⌃⌘Z) → Reload
```

Дебаг:
https://medium.com/@tetsuyahasegawa/how-to-integrate-react-native-debugger-to-your-expo-react-native-project-db1d631fad02
