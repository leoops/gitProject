import Axios from 'axios';

const BASE_URL = 'https://api.github.com';

export default Axios.create({
  baseURL: BASE_URL,
});
