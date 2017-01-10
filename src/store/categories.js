// ------------------------------------
// Constants
// ------------------------------------
export const CATEGORIES_FETCHED = Symbol('CATEGORIES_FETCHED');
export const CATEGORIES_LOADING = Symbol('CATEGORIES_LOADING');

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { list: [], loading: false };
export default function categoriesReducer (state = initialState, action) {
  switch(action.type) {
    case CATEGORIES_FETCHED: {
      return {
        ...state,
        list: action.categories,
      }
    }
    case CATEGORIES_LOADING: {
      return {
        ...state,
        loading: action.loading
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
export const updateCategories = (categories) => {
  return { type: CATEGORIES_FETCHED, categories };
}

export const setLoading = (loading) => {
  return { type: CATEGORIES_LOADING, loading };
}

function shouldFetchCategories(state) {
  return !state.categories.loading && state.categories.list.length === 0;
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const fetchCategories = () => {
  return (dispatch, getState) => {
    if (!shouldFetchCategories(getState())) {
      return Promise.resolve();
    }

    dispatch(setLoading(true));

    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeCategories = [
          { name: 'Category1', id: 1 },
          { name: 'Category2', id: 2 },
          { name: 'Category3', id: 3 },
          { name: 'Category4', id: 4 },
          { name: 'Category5', id: 5 },
          { name: 'Category6', id: 6 }
        ];

        dispatch(updateCategories(fakeCategories));
        dispatch(setLoading(false));

        resolve();
      }, 1000);
    });
  };
};
