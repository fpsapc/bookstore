import React from 'react';

const BookCard = () => (
  <div>
    <div>
      <p>category</p>
      <p>title</p>
      <p>author</p>
      <ul>
        <li><button type="button">Comments</button></li>
        <li><button type="button">Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
    <div>
      <div>chart</div>
      <p>percentage</p>
    </div>
    <div>
      <p>status</p>
      <p>currentChapter</p>
      <p>chapterNumber</p>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

export default BookCard;
