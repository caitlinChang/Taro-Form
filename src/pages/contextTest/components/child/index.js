import Taro, { Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.scss'

import SubChild from '../subChild/index'

/** 自定义表单，表单和校验分离 */
export default class Child extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {}
  componentDidShow () {}
  componentDidHide () {}

  render () {
    // const subColor = this.props.subColor
    return (
        <View>
            <Text>这里是Child组件</Text>
            <SubChild></SubChild>
        </View>
    )
  }
}