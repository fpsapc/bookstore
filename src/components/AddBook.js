import React from 'react';

const AddBook = () => (
  <div>
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title" />
      <select key="author">
        <option value="Authors">All authors</option>
      </select>
      <button type="button">Add Book</button>
    </form>

  </div>
);

export default AddBook;
