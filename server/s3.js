// Хранилище картинок 😂
import files from '@toledo/assets';

// export const images = [
//   { id: 'fnu48t89jscj74', source: require('../assets/s3/fnu48t89jscj74.jpg') },
//   { id: 'xru48t89eecj74', source: require('../assets/s3/xru48t89eecj74.png') },
// ];
export const images = [
  { id: 'fnu48t89jscj74', source: files.faceImage },
  { id: 'xru48t89eecj74', source: files.runningManImage },
];

export function getImageById(id) {
  return images.find(item => item.id === id);
}
