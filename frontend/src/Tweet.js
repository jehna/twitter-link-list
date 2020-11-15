import { li, text, a } from "https://cdn.skypack.dev/longwood";
import { importStyle } from "./style.js";
importStyle("./Tweet.css");

export default function Tweet({ tweet }) {
  return li({ className: "tweet", children: tweetText(tweet) });
}

function tweetText(tweet) {
  const tweetText = tweet.text;
  const elements = [];
  let pointer = 0;
  for (const url of tweet.urls) {
    elements.push(text(tweetText.slice(pointer, url.indices[0])));
    elements.push(
      a({ children: [text(url.expanded_url)], href: url.expanded_url })
    );
    pointer = url.indices[1];
  }
  elements.push(text(tweetText.slice(pointer)));

  return elements;
}
