import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../store/blogSlice";

const blank = { title: "", author: "", category: "React", readingTime: "5" };

export default function AddBlogForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(blank);
  const [open, setOpen] = useState(false);

  function submit(event) {
    event.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;
    dispatch(
      addBlog({
        id: Date.now(),
        title: form.title.trim(),
        author: form.author.trim(),
        category: form.category,
        readingTime: Number(form.readingTime),
        featured: false,
      }),
    );
    setForm(blank);
    setOpen(false);
  }

  return (
    <div>
      <button
        className="primary-button"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close form" : "+ Add blog"}
      </button>
      {open && (
        <form className="add-form" onSubmit={submit}>
          <input
            required
            aria-label="Blog title"
            placeholder="Blog title"
            value={form.title}
            onChange={(event) =>
              setForm({ ...form, title: event.target.value })
            }
          />
          <input
            required
            aria-label="Author"
            placeholder="Author"
            value={form.author}
            onChange={(event) =>
              setForm({ ...form, author: event.target.value })
            }
          />
          <select
            aria-label="New blog category"
            value={form.category}
            onChange={(event) =>
              setForm({ ...form, category: event.target.value })
            }
          >
            <option>React</option>
            <option>Redux</option>
            <option>Node</option>
          </select>
          <input
            required
            type="number"
            min="1"
            max="120"
            aria-label="Reading time in minutes"
            value={form.readingTime}
            onChange={(event) =>
              setForm({ ...form, readingTime: event.target.value })
            }
          />
          <button className="primary-button" type="submit">
            Save blog
          </button>
        </form>
      )}
    </div>
  );
}
