import BlogCard from "./BlogCard";

export default function BlogList({ blogs, onDelete, onToggleFeatured }) {
  if (blogs.length === 0)
    return <p className="empty-state">No blogs match your filters.</p>;

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onDelete={onDelete}
          onToggleFeatured={onToggleFeatured}
        />
      ))}
    </div>
  );
}
