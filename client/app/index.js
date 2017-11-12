import './index.scss'
import angular from 'angular'
import FeedService from './services/feed-service'
import HomeComponent from './components/home/home.controller'
import VideoItem from './components/video-item/video-item'

angular
  .module('app', [])
  .factory('feedService', FeedService)
  .directive('homePage', HomeComponent)
  .directive('videoItem', VideoItem)