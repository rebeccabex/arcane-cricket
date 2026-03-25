import axios from 'axios';

export const apiCall = async () => {
  await axios.get('http://localhost:8080').then((response) => response.data as string)
}
