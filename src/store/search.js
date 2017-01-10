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
  query: '',
  category: ''
};

export default function categoriesReducer (state = initialState, action) {
  switch(action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        results: [],
        loading: true,
        query: action.query,
        category: action.category
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
export const searchRequest = (query, category) => {
  return { type: SEARCH_REQUEST, query, category };
}

export const searchResponse = (results) => {
  return { type: SEARCH_RESPONSE, results };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const search = (query, category) => {
  return (dispatch, getState) => {
    dispatch(searchRequest(query, category));

    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeResults = new Array(20).fill().map((book, index) => ({ name: 'Book' + index, id: index, price: index * 10 }));
        dispatch(searchResponse(fakeResults));
        resolve();
      }, 2000);
    });
  };
};
