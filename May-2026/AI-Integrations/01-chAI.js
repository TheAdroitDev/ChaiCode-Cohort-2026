import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.OPENAI_API_KEY;

export const apiKeyChecker = () => {
    if (!API_KEY) {
        console.log('OPENAI_API_KEY is not defined in the environment variables.');
        process.exit(1)
    }
}
// don't get it mixed and confused
export const checkOpenAI = async () => {
    const openai = (await (import('openai'))).default
    const client = new openai.OpenAI({
        apiKey: API_KEY
    })

    if (!client) {
        console.log('Failed to initialize OpenAI client.');
        process.exit(1)
    }
    console.log("OpenAI client initiated");
    return client
}