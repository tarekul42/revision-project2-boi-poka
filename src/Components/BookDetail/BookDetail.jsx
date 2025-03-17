import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookDetail = () => {
  const { bookId } = useParams();
  console.log(typeof bookId)
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const {bookId: currentBookId, image} = book;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch("/booksData.json");
        const data = await res.json();

        const foundBook = data.find((b) => b.bookId === Number(bookId));

        setBook(foundBook);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]); // 📌 Ensure it runs when bookId changes

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>📚 Book not found!</p>;

  return (
    <div className="my-12">
      <h2>{book.bookName}</h2>
      <img className="w-36" src={image} />
      <br />
      <div className="flex gap-4">
      <button className="btn btn-soft">Read</button>
      <button className="btn btn-accent">Wish List</button>
      </div>
    </div>
  );
};

export default BookDetail;
