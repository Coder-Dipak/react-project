import axios from "axios";

export default  function MyInterceptor(){

    /*this is function and we have to call in app.js and this interceptor 
    will work for all normal APIs(axios.get/post..etc),not for client.get ..etc*/
    axios.interceptors.request.use((req) => {
      console.log('my Interceptor-1 called')
      req.headers.authorization = "my secret token";
      return req;
    });
    
}