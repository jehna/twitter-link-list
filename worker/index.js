import "./env.js"
import { put } from "./laststate.js"
import { getTweets } from "./twitter.js"

async function run() {
  const tweets = []
  for await (const {
    id_str: id,
    full_text: text,
    entities: { urls },
    retweeted_status: isRetweet
  } of getTweets("luotojesse")) {
    const isReply = text.startsWith("@")
    if (isRetweet || urls.length === 0 || isReply) continue
    tweets.push({ text, urls })
  }
  await put([])
  await put(tweets)
}

run()
