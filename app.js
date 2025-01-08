import 'dotenv/config'
import express from 'express'
const app = express();

const port = 3000;

const githubData = {
    "login": "sujalshah593",
    "id": 166280914,
    "node_id": "U_kgDOCek-0g",
    "avatar_url": "https://avatars.githubusercontent.com/u/166280914?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sujalshah593",
    "html_url": "https://github.com/sujalshah593",
    "followers_url": "https://api.github.com/users/sujalshah593/followers",
    "following_url": "https://api.github.com/users/sujalshah593/following{/other_user}",
    "gists_url": "https://api.github.com/users/sujalshah593/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sujalshah593/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sujalshah593/subscriptions",
    "organizations_url": "https://api.github.com/users/sujalshah593/orgs",
    "repos_url": "https://api.github.com/users/sujalshah593/repos",
    "events_url": "https://api.github.com/users/sujalshah593/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sujalshah593/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-04-07T06:36:40Z",
    "updated_at": "2025-01-06T16:58:45Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/twitter', (req, res) => {
    res.send('Sujal Shah');
})

app.get('/login',(req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})