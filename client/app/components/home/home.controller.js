import config from '../../app.config'
import template from './home.html'

class HomeController {
  constructor($scope, feedService) {
    this.service = feedService
    this.$scope = $scope
    this.filter = null
    this.filterOptions = config.videoFilters
    this.videos = []
  }

  $onInit () {
    this.unsubscribe = this.service.subscribe(this.onData.bind(this))
  }

  $onDestroy () {
    this.unsubscribe()
  }

  getData() {
    const options = this.filter
      ? { filter: this.filter }
      : undefined
    this.service.load(options)
  }

  onData (data) {
    this.videos = data.items
    this.$scope.$digest()
  }

  handleFilterChange () {
    this.getData()
  }
}

HomeController.$inject = ['$scope', 'feedService']

export default () => {
  return {
    restrict: 'E',
    template: template,
    controller: HomeController,
    controllerAs: 'ctrl'
  }
}