import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import COLORS from '../constants/colors';

import FavoritesGroupsList from '../components/FavoritesGroupsList';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
    desc:
      'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой. Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона. Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город. В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
  },
  {
    id: 2,
    text: 'Card #2',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
    desc:
      'Уютная стандартная отделка. Апартаменты полностью укомплектованы мебелью и всей необходимой техникой бытовой и кухонной техникой. Функциональная планировка: Кухня-студия, совмещенная с просторной гостиной, спальня с собственной ванной и сан.узлом (сан.узлы так же полностью укомплектованы (См. фото)), просторный холл, постирочная и сушильная зона. Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город. В ночное время огни небоскребов никого не оставят равнодушными. Москва Сити - это Москва будущего, строящийся международный деловой квартал из ультрасовременных небоскрёбов.',
  },
  {
    id: 3,
    text: 'Card #3',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    title: 'Видовая двушка в Котельниках',
    metro: 'Войковская',
    metroDistance: 300,
    price: '30 000',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

const groups = [
  { title: 'Да', items: DATA.slice(0, 1) },
  { title: 'Думаем', items: DATA.slice(1) },
];

function FavoritesScreen() {
  return (
    <Layout style={styles.container}>
      <FavoritesGroupsList groups={groups} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.screenBackground,
  },
});

export default FavoritesScreen;
