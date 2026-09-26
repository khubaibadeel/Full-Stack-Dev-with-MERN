export default function BlogStats({ blogs }) {
  const featured = blogs.filter((blog) => blog.featured).length;
  const categories = new Set(blogs.map((blog) => blog.category)).size;
  const minutes = blogs.reduce((sum, blog) => sum + blog.readingTime, 0);
  return (
    <section className="stats" aria-label="Blog statistics">
      <div className="stat">
        <span>Total blogs</span>
        <strong>{blogs.length}</strong>
        <small>Published articles</small>
      </div>
      <div className="stat">
        <span>Featured</span>
        <strong>{featured}</strong>
        <small>Highlighted reads</small>
      </div>
      <div className="stat">
        <span>Categories</span>
        <strong>{categories}</strong>
        <small>Topics covered</small>
      </div>
      <div className="stat">
        <span>Reading time</span>
        <strong>
          {minutes}
          <em> min</em>
        </strong>
        <small>Across all articles</small>
      </div>
    </section>
  );
}
