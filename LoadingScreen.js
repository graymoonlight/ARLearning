import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles/LoadingScreen';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Переход к следующему экрану после задержки в 5 секунд
      navigation.replace('MainScreen');
    }, 5000);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.angleBackground}></View>
        <Text style={styles.title}>Language! AR</Text>
      <ActivityIndicator size="large" color="#FFA500" />
    </View>
  );
};

export default LoadingScreen;