export function changePriceTwo (val) {
  // 如果字符串不存在返回空字符串
  if (!val) return ''

  // 文本转换为float
  let result = parseFloat(val)

  // 如果文本是整型，代表没有小数点
  if (Number.isInteger(result)) return val

  return result.toFixed(2)
}

// 转换倒计时组件 -->  xx:xx:xx
export function surplusTime (val) {
  if (!val) {
    return ''
  }
  // 判断时间格式是不是 小时:分钟:秒
  if (val.indexOf(':') === -1) {
    return val
  }

  const arr = val.split(':')
  let result = ''

  if (parseInt(arr[0]) < 10) {
    result = '0' + arr[0]
  } else {
    result = arr[0]
  }

  if (parseInt(arr[1]) < 10) {
    result = result + ':0' + arr[1]
  } else {
    result = result + ':' + arr[1]
  }

  if (parseInt(arr[2]) < 10) {
    result = result + ':0' + arr[2]
  } else {
    result = result + ':' + arr[2]
  }

  return result
}
