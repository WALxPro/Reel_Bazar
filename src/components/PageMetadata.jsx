import { useEffect } from "react";

export default function PageMetadata({ title, description }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      throw new Error('Missing required meta[name="description"] element.');
    }
    meta.setAttribute("content", description);
  }, [title, description]);

  return null;
}
