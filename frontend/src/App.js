import { div } from "https://cdn.skypack.dev/longwood"
import { createState } from "https://cdn.skypack.dev/longwood-usestate"
import SearchInput from "./SearchInput.js"
import { importStyle } from "./style.js"
import TweetList from "./TweetList.js"
importStyle("./App.css")

const useSearchInput = createState("")

export default function () {
  return useSearchInput((searchInput, setSearchInput) =>
    div(
      SearchInput({ searchInput, setSearchInput }),
      TweetList({
        filter: (tweet) =>
          searchInput.trim().length === 0 ||
          tweet.text.toLowerCase().includes(searchInput.trim().toLowerCase())
      })
    )
  )
}
