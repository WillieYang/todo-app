import axios from 'axios';

const baseUrl = 'https://api.coinmarketcap.com/v1/ticker';

const axiosGet = async (API) => {
  const axiosConfig = await axios({
    method: 'get',
    url: `${baseUrl}/${API}`,
  });
  console.log(axiosConfig);
  console.log(`Returned Promise: ${axiosConfig}`);
  return axiosConfig;
};

export { axiosGet as default };
