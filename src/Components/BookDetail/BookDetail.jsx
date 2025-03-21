import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  console.log("bookId:", bookId, typeof bookId); // Debugging log

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch("/booksData.json");
        const data = await res.json();

        // Ensure bookId matches correctly
        const foundBook = data.find((b) => String(b.bookId) === String(bookId));

        setBook(foundBook || null);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]); // ✅ Re-run if bookId changes

  const handleMarkAsRead = (id) =>{
    /**
     * 1. understand what to store or save: +> bookId
     * 2. where to store: database
     * 3. array, list, colection: 
     * 4. check: if the book is already in the readList. 
     * 5. if not, then add the book to the list 
     * 6. if yes, do not add the book
    */
    
    addToStoredReadList(id)
    console.log(id)
    
      }

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>📚 Book not found!</p>;

  return (
    <div className="my-12">
      <h2>{book.bookName}</h2>
      <img className="w-36" src={book.image} alt={book.bookName} />{" "}
      {/* Use book.image safely */}
      <br />
      <div className="flex gap-4">
        <button onClick={() => handleMarkAsRead(book.bookId)} className="btn btn-outline">Mark as Read</button>
        <button className="btn btn-accent">Add to Wish List</button>
      </div>
    </div>
  );
};

export default BookDetail;
