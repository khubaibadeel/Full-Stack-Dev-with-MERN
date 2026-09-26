import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchText } from "../store/blogSlice";

export default function SearchBar({ categories }) {
  const dispatch = useDispatch();
  const { searchText, selectedCategory } = useSelector((state) => state.blog);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="filters">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">
          ⌕
        </span>
        <input
          ref={inputRef}
          value={searchText}
          onChange={(event) => dispatch(setSearchText(event.target.value))}
          placeholder="Search by title, author or category"
          aria-label="Search blogs"
        />
      </label>
      <label className="category-field">
        <span>Category</span>
        <select
          value={selectedCategory}
          onChange={(event) => dispatch(setCategory(event.target.value))}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
