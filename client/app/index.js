import './index.scss'
import angular from 'angular'
import FeedService from './services/feed-service'
import HomeComponent from './components/home/home.controller'
import VideoItem from './components/video-item/video-item'
import PrettyNum from './filters/pretty-number'
import 'bootstrap'
angular
  .module('app', [])
  .factory('feedService', FeedService)
  .directive('homePage', HomeComponent)
  .directive('videoItem', VideoItem)
  .filter('prettyNum', PrettyNum)

