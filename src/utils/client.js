import axios from 'axios';

//here we are  creating a axios instance and saving it in a variable and export that
const client=axios.create({//create method will take the object url)
  baseURL:'https://jsonplaceholder.typicode.com/',
})
export default client;