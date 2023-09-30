import axios from 'axios'

const loginApiRequest = async (username, password) => {
  const {data} = await axios.get('https://random-data-api.com/api/v2/users?size=1&is_xml=false');

  return data;
}
export default loginApiRequest;