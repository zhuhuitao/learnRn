const host = 'http://www.yihuan100.com:82/api/'

export default class HttpUtil{

  static get(router,params,successCallBack,failedCallBack) {
    var url = host
    if (params) {
      let paramsArray = []
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (host.search(/\?/) === -1) {
        url += router + '?' + paramsArray.join('&')
      }else {
        url += '&'+ paramsArray.join('&')
      }
    }
    console.log(url)
    fetch(url,{
      method:'GET',
    }).then((response) => {
      return response.json()
    }).then((data) => {
      successCallBack(data)
    }).catch((err) => {
      failedCallBack(err)
    }).done()
  }


}
