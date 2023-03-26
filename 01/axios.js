const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
      params : 
      {
        api_key: '63e957abf0494570a34e62aaed9b787f'
      }
  });

  module.exports = instanciaAxios;