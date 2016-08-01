let exports
import prod from './configureStore.prod'
import dev from './configureStore.dev'

if (process.env.NODE_ENV === 'production') {
  exports = prod
} else {
  exports = dev
}
export default exports
