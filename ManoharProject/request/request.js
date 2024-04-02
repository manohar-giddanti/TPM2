const baseUrl = 'http://localhost:60626/api/CommonCall';//develop in local

const request = (date = {}, type = 'POST') => {  
    return new Promise((resolve, reject) => {  
        uni.request({
            method: type,
            url: baseUrl,
            data: date,
            dataType: 'JSON',  
        }).then((response) => {  
            let [error, res] = response;    
			res.data.RetData = 	res.data.RetData.replace(/\n/g, '\\n');   
            resolve(res);   
        }).catch(error => {  
            let [err, res] = error;  
            reject(err)  
        })    
    });   
}    
export default request;  
export var CompanyCode = 'APHMESTEST02';   
export var CompanyName = 'APHMESTEST500';   
export var uploadUrl = 'http://10.30.1.191:8092'; 