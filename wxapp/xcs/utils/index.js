import * as Mock from './mock'
Mock["list"]
const DEGAULT_REQUEST_OPTIONS={
    url:'',
    data:{},
    header:{
        'Content-Type':'application/json'
    },
    method:'GET',
    dataType:'json'
}

let util={
    request(opt){
        // 生成对象
        let options=Object.assign({},DEGAULT_REQUEST_OPTIONS,opt);
        let{url,data,header,method,dataType,mock=false}=options
        // console.log(url, data, header, method, dataType, mock);
        return new Promise((resolve,reject)=>{
            if(mock){
                let res={
                    statusCode:200,
                    data:Mock[url]
                }
              resolve(res.data);  
              return 
            }
            wx.request({
                url,
                data,
                method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {}, // 设置请求的 header
                dataType,
                success (res){
                    // success
                    resolve(res.data)
                },
                fail(err){
                    reject(err)
                }
            })
        });      
    }
}

export default util