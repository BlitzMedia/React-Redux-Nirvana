import React from 'react'
import myFakeApi from './fakeApi'

export default class MyAsyncComponent extends React.Component {
  state = {}
  async onGetData(slug) {
    const url = `https://www.mydopesite.com/api/${slug}`
    const data = await myFakeApi(url)
    this.setState({ slug, data })
  }

  render() {
    if (!this.state.data) {
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
        <h1>{this.state.data.title}</h1>
        <h2>{this.state.data.caption}</h2>
        {this.state.slug === 'react-redux'
          ? <button onClick={() => this.onGetData('functional-programming')}>GET FP</button>
          : <button onClick={() => this.onGetData('react-redux')}>GET REACT</button>
        }
      </div>
    )
  }
}