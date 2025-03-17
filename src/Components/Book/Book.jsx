import React from "react";
import { FaRegStar } from 'react-icons/fa';

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6 ">
      <figure className="bg-blue-200 p-8 rounded-lg">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-4">
          {tags.map((tag, index) => (
            <button key={index} className="btn btn-soft btn-success">
              {tag}
            </button>
          ))}
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="card-actions justify-between border-t-2 border-dashed pt-4 mt-2">
          <div className="badge badge-outline">{category}</div>
          <div className="badge">{rating}<FaRegStar/></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
