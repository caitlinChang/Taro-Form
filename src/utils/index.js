/**
 * 类型检查
 */
export function createPropTYpe(validate){
    function checkType(isRequired, props, propName, componentName){
        componentName = componentName || '<<anonymous>>'
        if(props[propName] == null){
            if(isReuqired){
                return new Error(`Reuqired ${propName} was not specified in '${componentName}'`)
            }
        }
    }
}