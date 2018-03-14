import React from 'react'
import myFakeApi from './fakeApi'

export default class MyAsyncComponent extends React.Component {
  state = {}
  async onGetData(slug) {
    const url = `https://www.mydopesite.com/api/${slug}`
    const posts = await myFakeApi(url)
    this.setState({ slug, posts })
  }

  render() {
    if (!this.state.posts) {
      return (
        <div>
          <span>NO DATA</span>
          <button onClick={() => this.onGetData('react-redux')}>GET REACT</button>
          <button onClick={() => this.onGetData('functional-programming')}>GET FP</button>
        </div>
      )
    }

    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <h2>{post.caption}</h2>
            <div style={{ height: 1, width: 100, backgroundColor: 'blue' }}></div>
          </div>
        ))}

        <div style={{ marginTop: 20 }}>
          {this.state.slug === 'react-redux'
            ? <button onClick={() => this.onGetData('functional-programming')}>GET FP</button>
            : <button onClick={() => this.onGetData('react-redux')}>GET REACT</button>
          }
        </div>
      </div>
    )
  }
}

