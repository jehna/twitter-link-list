export default function SearchInput({ searchInput, setSearchInput }) {
  return (
    <div>
      <label>
        Search:{" "}
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
    </div>
  )
}
