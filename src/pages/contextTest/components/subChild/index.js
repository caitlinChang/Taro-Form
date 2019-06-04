import Taro, { Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'

/** 自定义表单，表单和校验分离 */
export default class SubChild extends Component {
   
  static contextType = ColorContext
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {}
  componentDidShow () {}
  componentDidHide () {}

  render () {
    const color = this.context
    return (
        <View>
            <Text>我的颜色是{color};</Text>
        </View>
    )
  }
}