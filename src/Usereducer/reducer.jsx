import React from "react";
import { useState } from "react";

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

const Modal = ({modaltext}) => {
    return <p className="text-primary text-center">{modaltext }</p>
};

const Reducer = () => {
  const [ismodalOpen, setismodalOpen] = useState(false);
  const [modaltext, setismodaltext] = useState("");
  const [books, setbooks] = useState(booksData);
  const [bookname, setbookname] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    setbooks((previousbooks) => {
      const newbook = { id: new Date().getTime().toString(), name: bookname };

      return [...previousbooks, newbook];
    });
      setismodalOpen(true);
      setismodaltext("a new book has been added")

    setbookname("");
  };
  return (
    <>
      <h1>Book List</h1>

      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="bookname">Enter a book Name</label>
        <input
          type="text"
          name="bookname"
          required
          onChange={(e) => {
            setbookname(e.target.value);
            console.log(bookname);
          }}
          id="bookname"
          value={bookname}
        />
        <button type="submit">Add Book</button>
          </form>
          {ismodalOpen && <Modal modaltext={modaltext} /> }

      {  books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </>
  );
};

export default Reducer;
