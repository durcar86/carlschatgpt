// A express server
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "add-org",
    apiKey: "add-key",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    const response = await openai.createCompletaion({
        model: "test-davinci-003",
        prompt: "Say this is a test",
        mac_tokens: 7,
        temperature: 0,
    });
    console.log(response.data)
    res.json({
        message: "Hello World!"
    });
});

app.listen(port, () => {
    console.log(`Example app listening ${port}` );
});