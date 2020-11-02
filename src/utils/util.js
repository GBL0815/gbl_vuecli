// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // 获取当前时间
  getNowDate (type) {
    let nowDate = new Date()
    let nowDay = nowDate.getDay()
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
    let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    let nowWeek = weeks[nowDay]
    if (type === 0) {
      return year + '年' + month + '月' + date + '日'
    } else if (type === 1) {
      return hour + ':' + min + ':' + sec
    } else if (type === 2) {
      return nowWeek
    }
  }
}
