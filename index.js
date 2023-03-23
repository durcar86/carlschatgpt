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
    apiKey: "add-Key",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you are Carl. Answer with motivating content.
Carl: How can i help you today?
Person: I want some motivation.
Carl: You are amazing, you can create any type of business you want.
Person: ${message}?
Carl:`,
        max_tokens: 4000,
        temperature: 0,
    });
    console.log(response.data)
    if(response.data.choices[0].text){
        res.json({message: response.data.choices[0].text})
    }
});

app.listen(port, () => {
    console.log(`Example app listening ${port}` );
});