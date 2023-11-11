import Test from './components/Test'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

// export default function(Vue) {
//   Vue.use(Test)
//   Vue.use(Test1)
//   Vue.use(Test2)
// }

export function test(Vue) {
  Vue.use(Test)
}
export function test1(Vue) {
  Vue.use(Test1)
}
export function test2(Vue) {
  Vue.use(Test2)
}