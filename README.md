# Фронтенд

## Установка

**Работает только под iOS**

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

## Рецепты

🧾 Хард релоад:

```sh
git clean -xdf
npm ci
expo start --ios --clear
```

🧾 Перезагрузка приложения в Симуляторе:

```txt
Device → Shake (⌃⌘Z) → Reload
```

Действие Shake вызывает меню Expo. Для удобства можно вынести кнопку Shake на тачбар.

🧾 Дебаггер

Скоро в Expo появится поддержка дебагера [Flipper](https://reactnative.dev/blog/2020/03/26/version-0.62) из коробки. Тогда все станет совсем хорошо, а пока ставим наиболее продвинутый вариант – RNDebugger.

1. Установка:
   ```sh
   brew update && brew cask install https://raw.githubusercontent.com/caskroom/homebrew-cask/b6ac3795c1df9f97242481c0817b1165e3e6306a/Casks/react-native-debugger.rb
   ```
2. Отредактировать конфиг:

   ```txt
   Debugger → Open config file

   defaultRNPackagerPorts: [19001],
   ```

3. В симуляторе:
   ```txt
   Device → Shake (⌃⌘Z) → Debug Remote JS
   ```

## Ссылки

Старый репозиторий: https://gitlab.com/flitch/frontend
