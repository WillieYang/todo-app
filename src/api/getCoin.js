import axios from 'axios';

const getCoin = (coinId, callback) => {
  axios.get(`https://api.coinmarketcap.com/v1/ticker/${coinId}/`)
    .then((res) => {
      console.log(`res in axios: ${JSON.stringify(res.data[0])}`);
      callback.call(window, res.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getCoin;
