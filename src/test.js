
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success');
    },1000);
    setTimeout(()=>{
        reject('falit');
    },500);

});

p.then((data)=>{
    console.log('then:',data)
});

p.catch(reason=>{
    console.log('catch:',reason)
});

console.log('p:',p)

