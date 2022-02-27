
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '325fee33d2msh0f2eed8193ddd57p17f045jsn17104bf547ac' ,
    },
  });
    
  return data;
}


