import moment from 'moment';
import Api from '../lib/api';
import initialState from '../store/jobs';

export default {
  namespace: 'jobs',

  /**
   *  Initial state
   */
  state: initialState,

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Get a single item from the API
     * @param {number} id
     * @returns {Promise[obj]}
     */
    // async fetchSingle(id) {
    // }
  }),

  /**
   * Reducers
   */
};
