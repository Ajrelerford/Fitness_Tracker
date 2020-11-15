import axios from 'axios';
const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';

export const callApi = async ({method, body, url, token}) => {
  try {
    const options = {
      method: method || 'get',
      data: body,
      url: `${BASE_URL}${url}`
    }
    console.log('url', options.url);
    if(token) {
      options.headers = {
        'Authorization': `Bearer ${token}`
      }
    }
    const {data} = await axios(options);  
    return data;
  } catch (error) {
    console.error(error)
  }
}