// ASSIGNMENT:
// TAKE this boilerplate: https://github.com/hexacta/react-express-starter-kit

// - git clone it and forget about the Nirvana repo for this week
// - remove everything in `server/src` besides `index.js`
// - Remove all usages of `new Router()`
// - remake the exact same API in the simpler style of using Express (i.e. no Routers
//)
// - MAIN WORK: make a flat URL structure for all your `.get` calls, ie: app.get('/api/books/:bookTitle') instead of
//   api.get('/:bookTitle')

// - THEN PLAY WITH IT!


// - when done create a new repo on github and push it there (make sure to do `sudo rm -rf .git` and `git init` to make it a new git repo of your own)
// docs: http://expressjs.com/en/guide/routing.html


// ADAPTATION OF FAKE CLIENT API TO HOW IT WOULD LOOK ON THE SERVER:

const express = require('express')
const app = express()

const myRealApi = (req, res) => {
  const slug = req.params.slug
  const posts = postsLists[slug]
  res.json(posts)
}

const postsLists = {
  'react-redux': [
    {
      title: 'React Redux Tutorial',
      caption: 'bla bla bla',
    },
    {
      title: 'Redux-First Router is the BOMB!',
      caption: 'ghjgh hjkkj bla'
    }
  ],
  'functional-programming': [
    {
      title: 'Function Programming',
      caption: '12434213 ips5688765um'
    },
    {
      title: 'Haskel and Clojurescript',
      caption: 'asfdsdf ipsfdasfadsum'
    }
  ]
}

app.get('/api/:slug', myRealApi)

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
