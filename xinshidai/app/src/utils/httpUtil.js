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

  static post (router,params,successCallBack,failedCallBack){
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    var body = paramsArray.join('&')
      console.log(body)
    fetch(router,{
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
      },
      body:body
    }).then((response) => {
      return response.text()
    }).then((data) => {
      console.log(data)
      successCallBack(data)
    }).catch((error) => {
      console.log(error+"shibaile")
      failedCallBack(error)
    }).done()
  }


}
