# Фронтенд

## Установка

**Только iOS**

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

---

![relations](/relations.svg)

Перегенерировать диаграмму 👆: `npm run arkit`

## Как дебажить?

Expo поддерживает `console.log` из коробки 🙃

Если нужно что-то более существенное:

- RNDebugger (дерево компонентов, нетворк, Redux)
- Дебаггер в VScode (дебаг брейкпоинтами не выходя из редактора)

### RNDebugger

Скоро в Expo прорастет поддержка дебагера [Flipper](https://reactnative.dev/blog/2020/03/26/version-0.62) из коробки, тогда все станет совсем хорошо, а пока наиболее продвинутый вариант – RNDebugger.

1. [Установка](https://github.com/jhen0409/react-native-debugger#notice-react-native-compatibility):

   ```sh
   brew update && brew cask install https://raw.githubusercontent.com/caskroom/homebrew-cask/b6ac3795c1df9f97242481c0817b1165e3e6306a/Casks/react-native-debugger.rb
   ```

2. Отредактировать конфиг:

   ```txt
   Debugger → Open config file

   defaultRNPackagerPorts: [19001],
   ```

3. В симуляторе включить Remote Debug:
   ```txt
   Device → Shake (⌃⌘Z) → Debug Remote JS
   ```

### Дебаггер в VScode

1. Поставить расширение [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)

2. Запустить Metro Bundler как обычно:

   ```sh
   npm start
   ```

3. Запустить дебаг-конфигурацию `Debug Expo App` в VScode. Конфигурация сразу должна быть доступна, так как уже лежит в репозитории, в файле `.vscode/launch.json`.

4. В симуляторе включить Remote Debug:
   ```txt
   Device → Shake (⌃⌘Z) → Debug Remote JS
   ```

## Рецепты

〰 Полный перезапуск:

```sh
git clean -xdf
npm ci
expo start --ios --clear
```

〰 Перезагрузка приложения в Симуляторе:

```txt
Device → Shake (⌃⌘Z) → Reload
```

Действие Shake вызывает меню Expo. Для удобства можно вынести кнопку Shake на тачбар.

## Ссылки

Старый репозиторий: https://gitlab.com/flitch/frontend

Состояние репозитория перед тем как все было переделано для Прототипа, находится в ветке `archive`.
