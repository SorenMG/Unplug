import AsyncStorage from '@react-native-community/async-storage';
import * as Facebook from 'expo-facebook';

export default {
  /**
   * Checks if the user is authenticated
   * @returns {bool}
   */
  async isAuthenticated() {
    try {
      const token = await AsyncStorage.getItem('@Auth:token');
    } catch (err) {
      return false;
    }
    return true;
  },

  /**
   * Authenticates the user
   * @returns {Promise}
   */
  async authenticate() {
    return Facebook.logInWithReadPermissionsAsync().then(({ token, type }) => {
      if (type === 'cancel') throw new Error('User cancel auth');
      AsyncStorage.setItem('@Auth:token', token);
    });
  },

  /**
   * Logs the user out
   * @returns {bool}
   */
  async logout() {
    try {
      await AsyncStorage.removeItem('@Auth:token');
    } catch (err) {
      return false;
    }
    return true;
  },
};
