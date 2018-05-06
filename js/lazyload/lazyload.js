/**
 * author oyc
 * data 5-4
 * 
 */

/* 服务于任何图片元素,img幕后,再将origin_src设置过去 */
 var LazyLoadImage=(function () {
     
     return {
         setSrc:function (ele) {
             const url = ele.getAttribute('origin_src') ? ele.getAttribute('origin_src'):'';

             if(!url) return console.log('图片地址未找到');

             const oImg=document.createElement('img');

             oImg.style.display='none';

             document.body.appendChild(oImg);

             //设置图片src后,启动http请求,图片下载完成后 onload 注册回调
             oImg.onload=function () {
                 
                //不会立即执行,后执行
                 console.log('图片下载完成');
                 ele.src=url; 
                 document.body.removeChild(this); //===>oImg 
             }
             console.log('设置src');
             
             oImg.src=url;//先执行
         }
     }
 })();

 