import { ul, text } from "https://cdn.skypack.dev/longwood"
import { importStyle } from "./style.js"
import Tweet from "./Tweet.js"
import TweetsContext from "./TweetsContext.js"
importStyle("./TweetList.css")

export default function TweetList({ filter }) {
  return TweetsContext.consumer((tweets) =>
    tweets.length === 0
      ? text("Loading tweets...")
      : ul({
          className: "tweet-list",
          children: tweets.filter(filter).map((tweet) => Tweet({ tweet }))
        })
  )
}
