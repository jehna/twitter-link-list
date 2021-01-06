import { useState } from "react"
import SearchInput from "./SearchInput"
import TweetList from "./TweetList"
import "./App.css"

function App() {
  const [searchInput, setSearchInput] = useState("")
  return (
    <div>
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <TweetList
        filter={(tweet) =>
          searchInput.trim().length === 0 ||
          tweet.text.toLowerCase().includes(searchInput.trim().toLowerCase())
        }
      />
    </div>
  )
}

export default App
