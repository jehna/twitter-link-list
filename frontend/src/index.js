import App from "./App.js";
import { loadTweets } from "./tweets-api.js";
import TweetsContext from "./TweetsContext.js";

loadTweets().then((tweets) => TweetsContext.setState(tweets));

const render = TweetsContext.provider(App());
render(document.getElementById("app"));
