import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const book = getBook(parseInt(params.bookID));

  if (book) {
    return (
      <main>
        <h2>
          قیمت کل : {`${book.amount} تومان`}
        </h2>
        <p>
          نام کتاب : {book.name}
        </p>
        <p>
          تاریخ انتشار : {book.due}
        </p>
        <p>
          <button
            onClick={() => {
              console.log("al;j");
              deleteBook(book.number);
              navigate("/books" + location.search);
            }}
          >
            حذف کتاب
          </button>
        </p>
      </main>
    );
  } else {
    return (
      <main style={{ padding: "1rem 2.5rem" }}>
        <h2>کتاب مورد نظر یافت نشد</h2>
      </main>
    );
  }
};

export default Book;
