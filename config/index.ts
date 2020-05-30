// Вся-вся конфигурация приложения.
// В будущем сюда нужно добавить внешнюю конфигурацию (.env)

export const config = {
  api: {
    host: "https://toledo-stage.herokuapp.com/api",
  },
  demoUsers: {
    landlord: {
      phone: "8881234567",
    },
    tenant: {
      phone: "3331234567",
    },
  },
  primeAssets: {
    fonts: {
      "space-mono": require("@src/assets/fonts/space-mono.ttf"),
      "ceracy-desktop-medium": require("@src/assets/fonts/ceracy-desktop-medium.otf"),
      "ceracy-desktop-bold": require("@src/assets/fonts/ceracy-desktop-bold.otf"),
    },
    images: [
      require("@src/assets/images/search-for-flat.jpg"),
      require("@src/assets/images/ready_to_road.gif"),
      require("@src/assets/images/card-tenant.png"),
      require("@src/assets/images/map.png"),
    ],
  },
};
