// useApi.js
import { inject } from 'vue'

export const VueTourSymbol = Symbol('vue_tour')

export function useVueTour () {
  const VueTour = inject(VueTourSymbol)
  if (!VueTour) throw new Error('ERROR - No VueTour provided!!!')
  return VueTour
}
