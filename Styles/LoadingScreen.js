import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    position: 'relative', // Добавляем относительное позиционирование для псевдоэлемента
  },
  angleBackground: {
    position: 'absolute', // Устанавливаем абсолютную позицию
    top: 0, // Располагаем элемент в верхней части
    right: 0, // Располагаем элемент в правой части
    width: '100%', // Растягиваем по всей ширине контейнера
    height: '100%', // Растягиваем по всей высоте контейнера
    backgroundColor: 'green',
    transform: [{ rotate: '45deg' }],
  },
  title: {
    fontSize: 24,
    marginBottom: 60,
    color: '#98FB98',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});