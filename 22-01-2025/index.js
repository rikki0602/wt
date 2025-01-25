function fetchuserdata(user){
    return new Promise((resoolve,reject)=>{
        setTimeout(()=>{
            const user={id:'UserId',name:'John Doe',type:premium};
            resolve(user);
        },1000);
    });
}
function fetchUserSetting(usertype){
    return new Promise((resolve,reject)=>{
        console.log('fetching setting for usertype:$(usertype)');
        const setting=usertype=='premium'
        ?{theme:'dark',notification:true,accesslevel:'high'}
        :{theme:'light',notification:false,accesslevel:'low'}
        resolve(setting);
    });
}
fetchuserdata(1)
.then(user=>fetchUserSetting(user.type))
.then(setting=>{console.log(setting)})
.catch(error=>{console.log(error)})