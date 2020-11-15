import "./env.js"
import { put } from "./laststate.js"
import { getTweets } from "./twitter.js"

async function run() {
  const tweets = []
  for await (const {
    id_str: id,
    text,
    entities: { urls }
  } of getTweets("luotojesse")) {
    if (urls.length > 0) tweets.push({ text, id, urls })
  }
  await put(tweets)
}

run()
