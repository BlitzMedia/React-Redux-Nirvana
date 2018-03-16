const myFakeApi = async (url) => {
  const startTime = new Date();
  console.log('START', startTime - startTime)

  await fakeDelay(1000)
  const slug = url.replace('https://www.mydopesite.com/api/', '')
  const data = postsLists[slug]

  console.log('END', new Date() - startTime, slug);

  return data
}

export default myFakeApi

// const posts = {
//   'react-redux': {
//     title: 'React REdux TUtorial',
//     caption: 'bla bla bla'
//   },
//   'functional-programming': {
//     title: 'Function Programming',
//     caption: 'lorem ipsum'
//   }
// }

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

const fakeDelay = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


















// fetch(`/api/posts/${slug}`)


// const myFakeApi = () => {
//   return fetch('https://davidwalsh.name/some/url')
//     .then(function(result) { // 1000
//       return fetch('http://anotherapi/' + result.slug) // 1400
//     })
//     .then(function(finalResult) {
//       // do something
//     })
// }

// export default myFakeApi


// const myFakeApi = async () => {
//   console.log('START', new Date)
//   const result = await fetch('https://davidwalsh.name/some/url')
//   console.log('MIDDLE', new Date)
//   const result2 = await fetch('http://anotherapi/' + result.slug)
//   console.log('END', new Date)
//   return result2
// }

// // START 0
// // MIDDLE 1000
// // END 3000

// // THIS IS DATA THAT WOULD BE ON A SERVER
// // INSTEAD WE ARE GONNA DO A FAKE DELAY
// // AND THEN RETURN THIS DATA THATS ALREADY ON THE CLIENT
// const posts = {
//   'react-redux': {
//     title: 'React REdux TUtorial',
//     caption: 'bla bla bla'
//   },
//   'functional-programming': {
//     title: 'Function Programming',
//     caption: 'lorem ipsum'
//   }
// }


// // https://www.mydopesite.com/api
// // https://www.mydopesite.com/api/posts/react-redux
// // https://www.mydopesite.com/api/posts/functional-programming


// const myFakeApi = async (url) => {
//   console.log('START', new Date)

//   await fakeDelay(1000)
//   const slug = url.replace('https://www.mydopesite.com/api/posts', '')
//   const data = posts[slug]

//   console.log('END', new Date, data)

//   return data
// }


// const fakeDelay = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }





// fetch().then(result => )












// class MyAsyncComponent extends React.Component {
//   state = {}
//   async onGetData(slug) {
//     const url = `https://www.mydopesite.com/api/${slug}`
//     const data = await myFakeApi(url)
//     this.setState({ slug, data })
//   }

//   render() {
//     if (!this.state.data) {
//       return (
//         <div>
//           <span>NO DATA</span>
//           <button onClick={() => onGetData('react-redux')}>GET REACT</button>
//           <button onClick={() => onGetData('functional-programming')}>GET FP</button>
//         </div>
//       )
//     }

//     return (
//       <div>
//         <h1>{data.title}</h1>
//         <h2>{data.caption}</h2>
//         {slug === 'react-redux'
//           ? <button onClick={() => onGetData('functional-programming')}>GET FP</button>
//           : <button onClick={() => onGetData('react-redux')}>GET REACT</button>
//         }
//       </div>
//     )
//   }
// }
