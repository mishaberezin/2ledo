// Хранилище картинок 😂
import { images } from '@toledo/assets';

export const imageFiles = [
  { source: images.faceImage },
  { source: images.runningManImage },
];

export function getImageById(id) {
  return imageFiles.find(item => item.id === id);
}
