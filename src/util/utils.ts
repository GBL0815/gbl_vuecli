export default {
  // 获取当前时间
  getNowDate (type: number): string {
    const nowDate: Date = new Date()
    const nowDay: number = nowDate.getDay()
    const year: string = nowDate.getFullYear() + ''
    let month: string | number = nowDate.getMonth() + 1
    if (month < 10) { month = '0' + month }
    let date: string | number = nowDate.getDate()
    if (date < 10) { date = '0' + date }
    let hour: string | number = nowDate.getHours()
    if (hour < 10) { hour = '0' + hour }
    let min: string | number = nowDate.getMinutes()
    if (min < 10) { min = '0' + min }
    let sec: string | number = nowDate.getSeconds()
    if (sec < 10) { sec = '0' + sec }
    const weeks: string[] = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const nowWeek: string = weeks[nowDay]
    if (type === 0) return year + '年' + month + '月' + date + '日'
    if (type === 1) return hour + ':' + min + ':' + sec
    if (type === 2) return nowWeek
    return '参数错误'
  }
}
