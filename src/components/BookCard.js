import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Proptypes from 'prop-types';

const BookCard = ({ book }) => {
  const renderBooks = book.map((book) => (
    <>
      <div className="bookContainer">
        <div>
          <p>{ book.category }</p>
          <p>{ book.title }</p>
          <p>{ book.author }</p>
          <ul>
            <li><button type="button">Comments</button></li>
            <li><button type="button">Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div>
          <div>Chart</div>
          <p>{ book.progres }</p>
        </div>
        <div>
          <p>status</p>
          <p>{ book.currentChapter }</p>
          <p>{ book.chapterNumber }</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </>
  ));
  return (
    <div>
      {' '}
      { renderBooks }
      {' '}
    </div>
  );
};

BookCard.propTypes = {
  book: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default BookCard;
