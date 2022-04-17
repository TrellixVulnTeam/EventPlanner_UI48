const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports= app =>{

app.use(
    createProxyMiddleware('/event', {

        target:'http://localhost:9000',
        changeOrigin:true,
    }


    
    
)
)

var url = '/users?user_id=' + localStorage.getItem('token1');
app.use(
   
    createProxyMiddleware(url, {

        target:'http://localhost:9000',
        changeOrigin:true,
    }
    
))

}
