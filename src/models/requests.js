import Api from '../lib/api';
import initialState from '../store/requests';
import HandleErrorMessage from '../lib/format-error-messages';

/**
 * Transform the endpoint data structure into our redux store format
 * @param {obj} item
 */
const transform = (item) => ({
  id: item.from.id,
  name: item.from.name,
  picture: item.from.picture,
});

export default {
  namespace: 'requets',

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
    async authenticateUser() {
      // Authenticate with Facebook SDK
    },

    /**
     * Get a list of friend requests from the API
     * @return {Promise}
     */
    async fetchRequests() {
      // Maybe add an accelerator here
      try {
        const response = await Api.get('/me/friendrequests');
        const { data } = response;

        if (data === null) {
          throw Error('You have no friend requests');
        }

        return dispatch.requests.replace({ data });
      } catch (err) {
        throw HandleErrorMessage(err);
      }
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
      const { data } = state;
      return transform(data);
    },
  },
};
