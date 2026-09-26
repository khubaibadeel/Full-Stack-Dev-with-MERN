import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BlogStats from "./components/BlogStats";
import BlogList from "./components/BlogList";
import AddBlogForm from "./components/AddBlogForm";
import useFilteredBlogs from "./hooks/useFilteredBlogs";
import { deleteBlog, loadBlogs, toggleFeatured } from "./store/blogSlice";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const { blogs, searchText, selectedCategory, loading, error } = useSelector(
    (state) => state.blog,
  );

  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);
  const categories = useMemo(
    () => ["All", ...new Set(blogs.map((blog) => blog.category))],
    [blogs],
  );
  const filteredBlogs = useFilteredBlogs(blogs, searchText, selectedCategory);
  const handleDelete = useCallback(
    (id) => dispatch(deleteBlog(id)),
    [dispatch],
  );
  const handleToggleFeatured = useCallback(
    (id) => dispatch(toggleFeatured(id)),
    [dispatch],
  );

  return (
    <>
      <Header />
      <main className="dashboard">
        <div className="eyebrow">CONTENT OVERVIEW</div>
        <div className="intro">
          <div>
            <h1>Your blog dashboard</h1>
            <p>Explore, organize and manage your articles in one place.</p>
          </div>
          <AddBlogForm />
        </div>
        <BlogStats blogs={blogs} />
        <div className="section-heading">
          <div>
            <h2>All articles</h2>
            <p>
              {filteredBlogs.length}{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"} found
            </p>
          </div>
        </div>
        <SearchBar categories={categories} />
        <button
          className="test-error"
          type="button"
          onClick={() => dispatch(loadBlogs({ simulateFailure: true }))}
        >
          Test loading error
        </button>
        {loading && (
          <div className="notice" role="status">
            Loading blogs...
          </div>
        )}
        {error && (
          <div className="notice error" role="alert">
            {error}{" "}
            <button type="button" onClick={() => dispatch(loadBlogs())}>
              Retry
            </button>
          </div>
        )}
        {!loading && !error && (
          <BlogList
            blogs={filteredBlogs}
            onDelete={handleDelete}
            onToggleFeatured={handleToggleFeatured}
          />
        )}
      </main>
    </>
  );
}
