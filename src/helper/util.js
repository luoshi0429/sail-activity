const formatTime = (date, fmt) => {
  if (!date) return ''
  if (typeof date === 'number') {
    date = new Date(date)
  }
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }

  return fmt
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const validatePhone = (phone) => {
  // 手机号码校验规则
  // let valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
  let valid_rule = /^1[0-9]\d{9}$/
  console.log(phone, 'phone')
  return valid_rule.test(phone)
}

/**
 * 只保留中文英文数字, 删除字符
 */
function removeCharacter(str) {
  return str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\？|\，|\！|\。]/g, '')
}

function parseUrlToArgs (url) {
  var args = {}
  if (url) {
    url = decodeURIComponent(url)
    var qs = url.substring(url.lastIndexOf('?') + 1)
    var items = qs.length > 0 ? qs.split('&') : []
    var item = null
    var name = null
    var value = null
    for (var i = 0; i < items.length; i++) {
      item = items[i].split('=')
      // 用decodeURIComponent()分别解码name 和value（因为查询字符串应该是被编码过的）。
      name = decodeURIComponent(item[0])
      value = name === 'paramSkynet' ? item[1] : decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value
      }
    }
  }

  return args
}

export default {
  formatTime,
  formatNumber,
  removeCharacter,
  parseUrlToArgs,
  validatePhone
}
