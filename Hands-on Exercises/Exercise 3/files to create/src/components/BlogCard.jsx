import { memo } from "react";

function BlogCard({ blog, onDelete, onToggleFeatured }) {
  return (
    <article className="blog-card">
      <div className="card-top">
        <span className={`tag tag-${blog.category.toLowerCase()}`}>
          {blog.category}
        </span>
        <button
          className={`star ${blog.featured ? "is-featured" : ""}`}
          type="button"
          onClick={() => onToggleFeatured(blog.id)}
          aria-label={`${blog.featured ? "Remove" : "Mark"} ${blog.title} ${blog.featured ? "from" : "as"} featured`}
          title={blog.featured ? "Remove featured" : "Mark featured"}
        >
          {blog.featured ? "★" : "☆"}
        </button>
      </div>
      <h3>{blog.title}</h3>
      <p className="card-meta">
        By {blog.author} <span>·</span> {blog.readingTime} min read
      </p>
      <div className="card-footer">
        <span className={blog.featured ? "featured-label" : "regular-label"}>
          {blog.featured ? "● Featured" : "○ Standard"}
        </span>
        <button
          className="delete-button"
          type="button"
          onClick={() => onDelete(blog.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default memo(BlogCard);
