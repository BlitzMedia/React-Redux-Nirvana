// ASSIGNMENT:
// TAKE this boilerplate/starter-kit: 
// - git clone it and forget about the Nirvana repo for this week
// - remove everything in `server/src` besides `index.js`
// - Remove all usages of `new Router()` 
// - make a flat URL structure for all your `.get` calls, ie: app.get('/api/books/:bookTitle') instead of
//   api.get('/:bookTitle') 

// - THEN PLAY WITH IT!

// BEGINNING OF SERVER EXPERIMENTATION:


const express = require('express')
const app = express()


app.get('/api/books/:bookTitle', myFakeApi)

const api = new express.Router()

api.get('/:slug', myFakeApi)

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




app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})