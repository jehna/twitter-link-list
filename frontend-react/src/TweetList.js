import { useEffect, useState } from "react"
import { loadTweets } from "./tweets-api.js"
import Tweet from "./Tweet.js"
import "./TweetList.css"

export default function TweetList({ filter }) {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    loadTweets().then((tweets) => setTweets(tweets))
  }, [])

  return tweets.length === 0 ? (
    <>Loading tweets...</>
  ) : (
    <ul className="tweet-list">
      {tweets.filter(filter).map((tweet) => Tweet({ tweet }))}
    </ul>
  )
}
