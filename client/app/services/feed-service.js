import angular from 'angular'
import {Subject} from 'rxjs'
import config from '../app.config'

class FeedService {
  constructor(endpoint) {
    this.endpoint = endpoint
    this.$feed = new Subject()
  }
  
  subscribe (...args) {
    return this.$feed.subscribe(...args)
  }
  
  load (options = {}) {
    let qParams = ''
    if (options.filter && options.filter.length) {
      qParams = `?filter=${options.filter}`
    }
    fetch(`${this.endpoint}${qParams}`)
    .then(r => r.json())
    .then(d => {
      this.$feed.next(d)
    })
  }
}

export default () => {
  return new FeedService(config.endpoint)
}