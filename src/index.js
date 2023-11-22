import Test from './components/Test'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import IconCom from './components/Icon'
import SvgAnimation from './components/SvgAnimation'
import LoadingCom from './components/Loading'

export default function(Vue) {
  Vue.use(Test)
  Vue.use(Test1)
  Vue.use(Test2)
  Vue.use(IconCom)
  Vue.use(SvgAnimation)
  Vue.use(LoadingCom)
}