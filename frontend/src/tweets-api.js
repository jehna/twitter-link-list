export async function loadTweets() {
  const res = await fetch("https://api.laststate.io/states/twitter-list-links");
  return res.json();
}
