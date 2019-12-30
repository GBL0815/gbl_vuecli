export default {
  // 获取当前dateTime
  getNowDateTime () {
    let nowDate = new Date()
    let year = nowDate.getFullYear()
    let month = nowDate.getMonth() + 1
    if (month < 10) month = '0' + month
    let date = nowDate.getDate()
    if (date < 10) date = '0' + date
    let hour = nowDate.getHours()
    if (hour < 10) hour = '0' + hour
    let min = nowDate.getMinutes()
    if (min < 10) min = '0' + min
    let sec = nowDate.getSeconds()
    if (sec < 10) sec = '0' + sec
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
  },
  // 获取当前date
  getNowDate () {
    let nowDate = new Date()
    let year = nowDate.getFullYear()
    let month = nowDate.getMonth() + 1
    if (month < 10) month = '0' + month
    let date = nowDate.getDate()
    if (date < 10) date = '0' + date
    return year + '-' + month + '-' + date
  }
}
