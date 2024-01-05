import axios from 'axios';

const clientRR=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
})
clientRR.interceptors.request.use((req)=>{          //request interceptor clientRR axios instance
    req.meta=req.meta || {};
    req.meta.requestStartedAt=new Date().getTime();
    return req;
});

//response interceptor clientRR axios instance
clientRR.interceptors.response.use(res => {
  res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
  return res;
},
res => {
  res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
  throw res;
});

  //this interseptor must be used in some api call to see the time taken for that api calls

export default clientRR;

