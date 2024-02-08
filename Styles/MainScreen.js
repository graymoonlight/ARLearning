import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    marginBottom: 60,
    color: '#98FB98',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#98FB98',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    marginTop: -200,
  }
});