const express = require('express');
const request = require('request');
const authMiddleware = require('../middlewares/auth');
const api = require('../config/api.json');

const router = express.Router();

router.use(authMiddleware);

router.get('/toplist', (req, res) => {
    const build_coin_data = coin => {
        ide = coin['CoinInfo']['Id']
        fullName = coin['CoinInfo']['FullName']
        name = coin['CoinInfo']['Name']
        price = parseFloat(coin['RAW']['BRL']['PRICE']).toFixed(2)
        high = parseFloat(coin['RAW']['BRL']['HIGHDAY']).toFixed(2)
        low = parseFloat(coin['RAW']['BRL']['LOWDAY']).toFixed(2)
        changepct = parseFloat(coin['RAW']['BRL']['CHANGEPCTDAY']).toFixed(2)

        data = {
            'id' : ide,
            'fullName': fullName,
            'name' : name,
            'price' : price,
            'high' : high,
            'low' : low,
            'changepct' : changepct,
        }

        return data
    }

    request({url: api.url, qs: api.params}, function(err, response, body) {
        let json = JSON.parse(body)
        let data = { 'coins': json['Data'].map(coin => build_coin_data(coin))}
        res.send(data)
    });

});

module.exports = app => app.use('/coins', router);