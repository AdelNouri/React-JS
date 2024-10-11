import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getBooks } from "../data/data";

const Books = () => {
  const books = getBooks();
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams("fomr");

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderLeft: "solid 1px", padding: "1rem" }}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter: filter });
            } else {
              setSearchParams({});
            }
          }}
          type="text"
          placeholder="جستجوی کتاب"
        />
        {books
          .filter(book => {
            let filter = searchParams.get("filter");
            if (!filter) return books;
            let name = book.name.toLowerCase();

            return name.startsWith(filter);
          })
          .map(book =>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to={`/books/${book.number}${location.search}`}
              key={`${book.number}`}
            >
              {` ${book.name}`}
            </NavLink>
          )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Books;
