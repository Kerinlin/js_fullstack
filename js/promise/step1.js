class Promise{
    constructor(executor){
        this.status='pending'
        this.value=undefined;
        this.reason=undefined;  //失败原因
        this.onResolveCallbacks=[];
        this.onRejectCallbacks=[];

        // value为excutor调用时传来的值
        let resolve=(value)=>{
            if(this.status=='pending'){
                this.status='resolved';
                this.value=value;
                this.onResolveCallbacks.forEach(fn => fn());
            }
        }


        let reject=(reason)=>{
            if (this.status == 'pending'){
                this.status='rejected';
                this.reason=reason;
                this.onRejectCallbacks.forEach(fn => fn());
            }
        }
        executor(resolve,reject);
    }
    then(onFullFilled,onRejected){
        // console.log(this.status);
        if(this.status=='resolved'){
            onFullFilled(this.value)
        }
        if (this.status == 'rejected'){
            onRejected(this.reason)
        }
        if(this.status=='pending'){
            this.onResolveCallbacks.push(()=>{
                onFullFilled(this.value);
            })
            this.onRejectCallbacks.push(()=>{
                onRejected(this.reason);
            })
        }
        
    }
}
const p = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('hello world');  
    }, 1000); 
    // resolve('hello world');
    // reject('test');
})

p.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})
module.exports=Promise


// promise状态：
// 1.pending
// 2.resolve
// 3.reject