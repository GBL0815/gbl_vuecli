const baseUrl = 'https://mock.yonyoucloud.com/mock/5859/test'
function net(url, data = {}, method = 'get') {
	let header = method === 'get' ? {
		'Authorization': uni.getStorageSync('token'),
	  'X-Requested-With': 'XMLHttpRequest',
	  'Accept': 'application/json',
	  'Content-Type': 'application/json; charset=UTF-8'
	} : {
		'Authorization': uni.getStorageSync('token'),
	  'X-Requested-With': 'XMLHttpRequest',
	  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
	
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url, // 测试服
			data,
			method,
			header,
			dataType: 'json',
			success: (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 500) {
						uni.showToast({
							icon: 'none',
							title: '登录信息过期'
						});
						setTimeout(() => {
							uni.reLaunch({ url: '../index/index' })
						}, 1500)
						return (new Promise((resolve, reject)=>{}))
					}
					resolve(res.data)
				} else {
					uni.showToast({
						icon: 'none',
						title: res.errMsg,
						duration: 2000
					})
					return (new Promise((resolve, reject)=>{}))
				}
			}
		})
	}).catch(e => {
		console.log(e)
	})
}

export default net
