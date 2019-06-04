import Taro, { Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'

import Child from './components/child/index'

const ColorContext = Taro.createContext('subChildColor')

export default class ContextTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {}
  componentDidShow () {}
  componentDidHide () {}

  render () {
    const subChildColor = 'red'
    return (
        <View>
            <ColorContext.Provider value={subChildColor}>
                <Child></Child>
            </ColorContext.Provider>
        </View>
    )
  }
}