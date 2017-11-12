import template from './video-item.html'

class VideoItemController {

  static get defaultTitle () {
    return 'Unknown Video'
  }

  constructor ($scope, $sce) {
    this.$scope = $scope
    this.$sce = $sce
    this.playerHTML = ''
    this._data = {
      views: 0,
      source: this.source,
      videoRef: null,
      title: VideoItemController.defaultTitle
    }
  }

  generatePlayerHTML () {
    let html = ''
    switch (this.data.source) {
      case 'youtube':
        html = `<iframe src="https://www.youtube.com/embed/${this.data.videoRef}?autoplay=0" width="100%" height="100%" frameborder="0"></iframe>`
        break;
      case 'facebook':
        html = `<iframe src="https://www.facebook.com/video/embed?video_id=${this.data.videoRef}" width="100%" height="100%" frameborder="0"></iframe>`
        break;
      case 'url':
        html = `<video width="100%" height="100%" controls><source src="${this.data.videoRef}" type="video/mp4"></video>`
        break;
    }
    this.playerHTML = this.$sce.trustAsHtml(html)
  }

  set data (raw) {
    this._data = {
      views: raw.views,
      source: raw.source,
      videoRef: this.videoRef,
      title: raw.title || VideoItemController.defaultTitle
    }
    switch (raw.source) {
      case 'youtube':
      case 'facebook':
        this._data.videoRef = raw.videoId
        break;
      case 'url':
        this._data.videoRef = raw.url
        break;
    }
    this.generatePlayerHTML()
  }

  get data () {
    return this._data
  }

}

VideoItemController.$inject = ['$scope', '$sce']

export default () => {
  return {
    restrict: 'E',
    scope: {
      data: '=data'
    },
    template: template,
    controller: VideoItemController,
    bindToController: true,
    controllerAs: 'ctrl'
  }
}