import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles/MainScreen';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleLearnPress = () => {
    navigation.navigate('ARScene');
  };
  const handleWordsPress = () => {
    // Переход к экрану слов
  };

  const handleSettingsPress = () => {
    // Переход к экрану настроек
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./Images/Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Language! AR</Text>
      <TouchableOpacity style={styles.button} onPress={handleLearnPress}>
        <Text style={styles.buttonText}>Learn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleWordsPress}>
        <Text style={styles.buttonText}>My Words</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSettingsPress}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;