require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "shreyashthantharate",
    "id": 156114974,
    "node_id": "U_kgDOCU4gHg",
    "avatar_url": "https://avatars.githubusercontent.com/u/156114974?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shreyashthantharate",
    "html_url": "https://github.com/shreyashthantharate",
    "followers_url": "https://api.github.com/users/shreyashthantharate/followers",
    "following_url": "https://api.github.com/users/shreyashthantharate/following{/other_user}",
    "gists_url": "https://api.github.com/users/shreyashthantharate/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shreyashthantharate/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shreyashthantharate/subscriptions",
    "organizations_url": "https://api.github.com/users/shreyashthantharate/orgs",
    "repos_url": "https://api.github.com/users/shreyashthantharate/repos",
    "events_url": "https://api.github.com/users/shreyashthantharate/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shreyashthantharate/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-01-09T16:58:36Z",
    "updated_at": "2024-08-25T17:32:36Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("Hello Twitter User : shreyashthantharate")
})

app.get("/login", (req, res) => {
    res.send("<h1> Please login at hello world </h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h2> Digital Shreyash</h2>")
})

app.get("/github", (req, res) => {
    res.send(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})