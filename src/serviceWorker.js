const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // IPV6 
    window.location.hostname === '[::1]' ||
    // IPV4
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // 返回一个新的URL，作为生成静态文件夹的路径
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href)
    if (publicUrl.origin !== window.location.origin) {
      // 如果静态文件和当前环境不在同一个域，注册没有意义，那就直接返回。
      return
    }

    window.addEventListener('load', () => {
      // 页面加载完成执行
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

      if (isLocalhost) {
        // 如果是本地环境，调用checkValidServiceWorker进行注册
        checkValidServiceWorker(swUrl, config)

        // 注册成功后，打印信息
        navigator.serviceWorker.ready.then(() => {
          console.log(
            '注册成功，更多有关信息请访问 https://bit.ly/CRA-PWA'
          )
        })
      } else {
        // 如果不是本地环境（已经暴露在外网）仅仅只注册 service worker
        registerValidSW(swUrl, config)
      }
    })
  }
}

function registerValidSW(swUrl, config) {
  // 注册有效的serviceWorker，然后使用提供的API进行操作
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      // 如果内容有更新，就会自动进行安装
      registration.onupdatefound = () => {
        const installingWorker = registration.installing
        if (installingWorker == null) {
          return
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // 安装之后判断安装状态进行提示
              console.log(
                '有新的内容以更新完毕。'
              )

              if (config && config.onUpdate) {
                config.onUpdate(registration)
              }
            } else {
              console.log('内容被缓存以供离线使用。')

              if (config && config.onSuccess) {
                config.onSuccess(registration)
              }
            }
          }
        }
      }
    })
    .catch(error => {
      console.error('注册期间发生错误：', error)
    })
}

function checkValidServiceWorker(swUrl, config) {
  // 向服务端申请资源
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // 如果连接失败或者没有返回js
      const contentType = response.headers.get('content-type')
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // 同时当service worker状态就绪的时候取消其注册状态
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload()
          })
        })
      } else {
        // 如果申请到资源，那么就调用 registerValidSW 方法来进行加载
        registerValidSW(swUrl, config)
      }
    })
    .catch(() => {
      console.log(
        '找不到互联网连接，应用正在离线模式下运行。'
      )
    })
}

export function unregister() {
  // 如果支持serviceWorker，并且处于就绪状态，那么调用其提供的取消注册方法
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister()
      })
      .catch(error => {
        console.error(error.message)
      })
  }
}
