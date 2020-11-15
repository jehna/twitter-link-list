import { input, div, text, label } from "https://cdn.skypack.dev/longwood";

export default function SearchInput({ searchInput, setSearchInput }) {
  return div(
    label(
      text(`Search: `),
      input({
        value: searchInput,
        onkeyup: (e) => setSearchInput(e.target.value)
      })
    )
  );
}
