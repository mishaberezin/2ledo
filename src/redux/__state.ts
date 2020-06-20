import { images } from "@src/assets";
import { landmarks } from "@src/data/landmarks";

export const sampleState = {
  localState: {
    currentCardId: "nc84n897ncz7hh",
  },
  user: {
    id: "hekdjnv84ns8c",
    cards: ["nc84n821ncz7hb", "nc84n897ncz7hh"], // Карточки, связанные с учеткой
    data: {
      UserName: "Misha Berezin",
      UserPhones: ["+79262558011"],
      UserGender: "male", // ['male', 'female']
      UserBirthYear: 1988,
      UserPhotos: [
        images.userFaceImage,
        images.userAdditionalImage,
        images.userAdditionalImage2,
      ],
    },
  },
};
