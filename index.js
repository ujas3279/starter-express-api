require('dotenv').config();

var cron = require('node-cron');
const axios = require('axios');

cron.schedule('* */2 * * *', async () => {
    console.log('hello');
    await axios.get(process.env.Business)
    .then((res) =>{ console.log(res.data.message)});
    await axios.get(process.env.Sports)
    .then((res) =>{ console.log(res.data.message)});
    await axios.get(process.env.Entertainment)
    .then((res) =>{ console.log(res.data.message)});
    await axios.get(process.env.General)
    .then((res) =>{ console.log(res.data.message)});
    await axios.get(process.env.Health)
    .then((res) =>{ console.log(res.data.message)});
    await axios.get(process.env.Technology)
    .then((res) =>{ console.log(res.data.message)});
    await axios.get(process.env.Science)
    .then((res) =>{ console.log(res.data.message)});
});
