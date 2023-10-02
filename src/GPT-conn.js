
import axios from 'axios';
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';
const key = "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";


const handleAsk = async (inputText) => {
  // first-GPT-key
        
    const headers = {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json'
    };
 
    const data = {
        prompt: inputText,
        max_tokens: 100
    };

    try {
        const response = await axios.post(OPENAI_API_URL, data, { headers: headers });
        return response //.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error querying OpenAI:", error);
        throw error;
    }
}

export default handleAsk;
