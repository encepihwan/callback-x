require('dotenv').config();
const express = require('express');
const TwitterApi = require('twitter-api-v2').default;

const app = express();
const port = 3000;

// Inisialisasi client Twitter
const client = new TwitterApi(process.env.BEARER_TOKEN);

// Callback URI
app.get('/callback', async (req, res) => {
    try {
        // Contoh: Mendapatkan informasi pengguna (sesuaikan dengan kebutuhan Anda)
        const user = await client.v2.userByUsername('username_anda');
        console.log(user);

        res.send('Authentication successful!');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('Hello dunia!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);   
});