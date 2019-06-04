import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

/** 自定义表单，表单和校验分离 */
export default class CustomForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
        fields:[]//存放子组件
    }
  }
  componentWillMount () {}
  componentDidShow () {}
  componentDidHide () {}

  getChildContext(){
      return {
          component:this
      }
  }
  /**
   * @param field 参数类型为组件
   */
  addField(filed){
      this.state.fields.push(filed)
  }
  /**
   * @param field 参数类型为组件
   */
  removeField(field){
      if(field.props.prop){
          this.state.fields.splice(this.state.fields.indexOf(field),1)
      }
  }
  /**
   * 重置表单数据
   */
  resetFields(){
      this.state.fields.forEach( field => {
          field.resetField()
      })
  }
  /**
   * 表单校验
   * @param callback function ??????
   */ 
  validate(callback){
    let valid = true
    let count = 0

    //如果需要验证的fields为空，则调用验证时立即返回callback
    if(this.state.fields.length === 0 && callback){
        callback(true)
    }

    this.state.fields.forEach(field => {
        field.validate('', errors => {
            if(errors){
                valid = false
            }
            if( typeof callback === 'function' && ++count === this.state.fields.length){
                callback(valid)
            }
        })
    })

  }

  /**
   * 单个表单校验
   * @param {*} prop  string
   * @param {*} cb function
   */
  validateField(prop,cb){
      const field = this.state.fields.filter(field => field.props.prop === prop)[0]

      if(!field){ throw new Error('must call validateField with valid prop string!')}

      field.validate('',cb)
  }

  render () {
    return <View className='custom-form' onSubmit={this.props.onSubmit.bind(this)}>{this.props.children}</View>
  }
}