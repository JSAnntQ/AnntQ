const Koa = require('koa')
const axios = require('axios')

const app = new Koa()
const request = require('request');

const http = require("http");
app.use(async (ctx) => {
  let result = await request({
    method: 'POST',

    uri: 'http://23.226.181.226:8332',
    headers:{
      user: 'zlbipt',
      password: 'zl@123bipt!678',
      Authorzation:'Basic emxiaXB0OnpsQDEyM2JpcHQhNjc4'
    },
    auth: {
      user: 'zlbipt',
      password: 'zl@123bipt!678'

    },
    data:{"jsonrpc": "1.0", "id":"curltest", "method": "getblockchaininfo", "params": [] }
  }, (error, response, body) => {
    debugger
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    return response
  });
  ctx.body = result
})

app.listen(3000)