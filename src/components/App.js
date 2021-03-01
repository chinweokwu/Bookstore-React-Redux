import React from 'react';
import BooksList from '../containers/BookList';
import BooksForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
