export async function loadTweets() {
  const res = await fetch("/tmp-data-dump-before-transition-to-heroku.json")
  return res.json()
}
