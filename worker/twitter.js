import { promisify } from "util"
import Twitter from "twitter"

const client = new Twitter({
  consumer_key: process.env.TW_CONSUMER_API_KEY,
  consumer_secret: process.env.TW_CONSUMER_API_SECRET_KEY,
  access_token_key: process.env.TW_ACCESS_TOKEN,
  access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET
})
const get = promisify(client.get.bind(client))

export async function* getTweets(screenName, maxId) {
  const params = {
    screen_name: screenName,
    count: 200,
    ...(maxId ? { max_id: maxId.toString() } : {})
  }
  const tweets = await get("statuses/user_timeline", params)
  for (const tweet of tweets) {
    yield tweet
  }
  if (tweets.length === 0) return

  const id = BigInt(tweets[tweets.length - 1].id_str)
  const prevId = id - BigInt(1)
  yield* getTweets(screenName, prevId)
}
