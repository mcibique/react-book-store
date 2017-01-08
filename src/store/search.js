// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_RESPONSE = Symbol('SEARCH_RESPONSE');
export const SEARCH_REQUEST = Symbol('SEARCH_REQUEST');

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  results: [],
  loading: false,
  query: ''
};

export default function categoriesReducer (state = initialState, action) {
  switch(action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        results: [],
        loading: true,
        query: action.query
      }
    }
    case SEARCH_RESPONSE: {
      return {
        ...state,
        loading: false,
        results: action.results
      }
    }
    default: {
      return state;
    }
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export const searchRequest = (query) => {
  return { type: SEARCH_REQUEST, query };
}

export const searchResponse = (results) => {
  return { type: SEARCH_RESPONSE, results };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const search = (query) => {
  return (dispatch, getState) => {
    dispatch(searchRequest(query));

    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeResults = new Array(20).fill().map((book, index) => ({ name: 'Book' + index, id: index }));

        console.log('fakeResults', fakeResults);
        dispatch(searchResponse(fakeResults));
        resolve();
      }, 2000);
    });
  };
};
