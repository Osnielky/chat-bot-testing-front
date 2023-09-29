
import axios from 'axios';

function ChatGPTRequest(inputText) {

    //     try {
    //         const result = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
    //             prompt: inputText,
    //             max_tokens: 150
    //         }, {
    //             headers: {
    //                 'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
    //                 'Content-Type': 'application/json'
    //             }
    //         });

    //         setResponse(result.data.choices[0].text.trim());
    //     } catch (error) {
    //         console.error("There was an error with the request:", error);
    
    // };

    return inputText+ " Roque ";
}

export default ChatGPTRequest;
