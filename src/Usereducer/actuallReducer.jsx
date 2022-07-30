import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const booksData = [
  {
    id: 1,
    name: "pather pachali",
  },
  {
    id: 2,
    name: "Padma Nadir Majhi",
  },
  {
    id: 3,
    name: "Srikanta",
  },
];
const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allbooks = [...state.books, action.payload];
    return {
      ...state,
      books: allbooks,
      ismodelOpen: true,
      modeltext: "A new book has been added",
    };
  }
  if (action.type === "REMOVE") {
    const filtered = [...state.books].filter((book) => {
      return book.id !== action.payload;
    })
      return {
        books: filtered,
        ismodelOpen: true,
        modeltext:<p className="text-danger">A book has been deleted</p>
      };
          
  }
  return state;
};
const Newmassage = ({modeltext}) => {
   return <p>{modeltext}</p>;
};

const ActuallReducer = () => {
  const [mybooklist, dispatch] = useReducer(reducer, {
    books: booksData,
    ismodelOpen: false,
    modeltext: "",
  });

  const [newBook, setnewBook] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      id: new Date().getTime().toString(),
      name: newBook,
    };
    dispatch({
      type: "ADD",
      payload: userInfo,
    });

    setnewBook("");
  };

  const handleClick = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
  console.log(newBook);
  return (
    <>
      <h1>Book List</h1>
      <form
        action=""
        className="d-flex justify-content-evenly"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="bookname">Enter a BookName</label>
          <input
            type="text"
            name="bookname"
            id="bookname"
            value={newBook}
            onChange={(e) => {
              setnewBook(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
      {mybooklist.ismodelOpen && <Newmassage modeltext={mybooklist.modeltext} />}
      {mybooklist.books.map((book) => {
        return (
          <li className="p-3 bg" key={book.id}>
            {book.name}
            <button
              className="btn btn-danger ms-5"
              onClick={() => {
                handleClick(book.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

export default ActuallReducer;
