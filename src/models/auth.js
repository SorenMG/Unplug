import initialState from '../store/auth';
import * as Facebook from 'expo-facebook';
import { getPersistor } from '@rematch/persist';
import HandleErrorMessage from '../lib/format-error-messages';

export default {
  namespace: 'auth',

  /**
   * Initial state
   */
  state: initialState,

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Authenticates the user
     * @returns {Promise}
     */
    async authenticate() {
      try {
        const { token, type } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile', 'read_requests'],
        });
        if (type === 'cancel') return;
        dispatch.auth.replace({ token: token });
      } catch (err) {
        throw HandleErrorMessage(err);
      }
    },

    async logout() {
      getPersistor().purge();
    },
  }),

  /**
   * Reducers
   */
  reducers: {
    /**
     * Replace list in store
     * @param {obj} state
     * @param {obj} payload
     */
    replace(state, payload) {
      return payload;
    },
  },
};
