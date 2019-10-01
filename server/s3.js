// Хранилище картинок 😂

export const images = [
  { id: 'fnu48t89jscj74', source: require('../assets/s3/fnu48t89jscj74.jpg') },
  { id: 'xru48t89eecj74', source: require('../assets/s3/xru48t89eecj74.png') },
];

export function getImageById(id) {
  return images.find(item => item.id === id);
}
