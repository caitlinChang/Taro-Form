import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

/** 自定义表单，表单和校验分离 */
export default class CustomFormItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
        error:'',
        valid:false,
        validating:false // ????不知道这个代表什么意思
    }
  }
  componentWillMount () {}
  componentDidShow () {}
  componentDidHide () {}

  getChildContext(){
      return {
          form: this
      }
  }

  parent(){
      return this.context.component
  }
  /**
   * 判断是否必填,有一个rule要求必填，则改表单必填
   */
  isRequired(){
      let rules = this.getRules()
      let isRequired = false

      if(rules && rules.length){
          rules.every(rule => {
              if(rule.required){
                  isRequired = true

                  return false
              }
              return true
          })
      }
      return isRequired
  }

  onFieldBlur(){
      this.validate('blur')
  }
  onFieldChange(){
      // ?????
  }
  validate(trigger,cb){
      const rules = this.getFilteredRule(trigger) //获取到规范的rules

      if(!rules || rules.length === 0){
          if( cb instanceof Function){
              cb()
          }

          return true
      }
      this.setState({validating: true})

      const descriptor = { [this.props.prop]: rules}
      const validator = new AsyncValidator(descriptor)
      const model = { [this.props.prop]: this.fieldValue() }


  }
  /**
   * 获取该FIled初始值，可以为undefined
   */
  getInitialValue(){
      const value = this.parent().props.model[this.props.prop]

      if(value === undefined){
          return value
      } else {
          return JSON.parse(JSON.stringify(value)) //做转换
      }
  }
  fieldValue(){
    const model = this.parent().props.model
    if(!model || !this.props.prop) { return }
    const temp = this.props.prop.split(':')
    
  }
  /**
   * 重置
   */
  resetField(){
    let { valid, error } = this.state

    valid = true;
    error = '';

    this.setState({ valid, error })

    let value = this.fieldValue()
  }

  

  

  render () {
    return <View className='custom-form'>{this.props.children}</View>
  }
}