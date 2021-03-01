import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const intialBookA = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Hercules',
  category: 'Action',
};

const initialBookB = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Ojadike',
  category: 'Action',
};

const intialBookC = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Doctor Strange',
  category: 'Sci-Fi',
};

const initialState = [intialBookA, initialBookB, intialBookC];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
