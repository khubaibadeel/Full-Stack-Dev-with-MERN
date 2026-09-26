import { useMemo } from "react";

export default function useFilteredBlogs(blogs, searchText, selectedCategory) {
  return useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch = `${blog.title} ${blog.author} ${blog.category}`
        .toLowerCase()
        .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [blogs, searchText, selectedCategory]);
}
