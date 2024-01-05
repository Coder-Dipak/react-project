import axios from 'axios';

const clientIS=axios.create({                       //created axios instance
  baseURL:'https://jsonplaceholder.typicode.com/',
})

/*Interceptor(request):every time a 'request' being made this 'interceptor' 
will fire with the written 'function' inside it*/
clientIS.interceptors.request.use(function(req){ 
                                                console.log('interceptor called');
                                                console.log(req);//this is req object having various fields that we can modify.
                                                req.headers['accept']='this is my token';//here we are adding a token to the header pf req object,we can see it in network passing
                                                return req;//after writing the modify logic return the request
                                  });
/*clientIS is the axios instance variable having above interceptor,
so while calling any Api call(get,post,put,patch,delete) by clientIS 
will go through above interceptor
*/

/*interceptor will work with Client(axios instance) method only as it modifies the data before sending the final request */

export default clientIS;   
