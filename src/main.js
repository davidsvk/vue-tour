import VTour from './components/VTour'
import VStep from './components/VStep'
import { VueTourSymbol } from 'vue-tour/useApi'

export * from 'vue-tour/useApi'

const VueTour = {
  install (app, options) {
    app.component(VTour.name, VTour)
    app.component(VStep.name, VStep)

    // Object containing Tour objects (see VTour.vue) where the tour name is used as key
    app.config.globalProperties.$tours = {}
    console.log(app.config.globalProperties.$tours)
    app.provide(VueTourSymbol, app.config.globalProperties.$tours)
  }
}

export default VueTour

if (typeof window !== 'undefined' && window.Vue) {
  window.app.use(VueTour)
}
