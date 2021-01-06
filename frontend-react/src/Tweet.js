import React from "react"
import "./Tweet.css"

export default function Tweet({ tweet }) {
  return (
    <li className="tweet" key={tweet.text}>
      {tweetText(tweet)}
    </li>
  )
}

function tweetText(tweet) {
  const tweetText = tweet.text
  const elements = []
  let pointer = 0
  for (const url of tweet.urls) {
    elements.push(tweetText.slice(pointer, url.indices[0]))
    elements.push(<a href={url.expanded_url}>{url.expanded_url}</a>)
    pointer = url.indices[1]
  }
  elements.push(tweetText.slice(pointer))

  return React.createElement(React.Fragment, null, elements)
}
