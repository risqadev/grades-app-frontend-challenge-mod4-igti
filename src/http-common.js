import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  // baseURL: 'https://grades-backend-rscamacho.herokuapp.com',
  baseURL: 'http://localhost:3003',
  // baseURL: process.env.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
