const express = require('express');
const fuelRest = require('fuel-rest');

const settings = {
    auth: {
        clientId: 'c7w238nf6b3s1qwaz3j0ne9o',
        clientSecret: 'OJXd9vvQ3TUcsftzbCqqHcGG'
    }
};

const restClient = new fuelRest(settings);

const app = express();

app.get('/product/:sku', (req, res) => {
  const sku = req.params.sku;

  const options = {
    uri: `/data/v1/customobjectdata/key/Product/rowset/?$filter=sku%20%eq%20${sku}`,
    headers: {}
  };

  RestClient.get(options)
    .then((response) => {
        console.log(response);
        res
          .status(200)
          .json(response);
    })
    .catch((error) => {
        console.log(error);
        res
          .status(500)
          .end();
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on port ${process.env.PORT}`);
});