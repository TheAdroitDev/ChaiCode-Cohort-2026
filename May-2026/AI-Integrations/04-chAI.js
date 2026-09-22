import { checkOpenAI } from "./01-chAI.js";

const client = await checkOpenAI();
const model = "gpt-4o-mini";

console.log(client.baseURL);

async function askQuestion(systemPrompt, userPrompt) {
  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });
  return response.choices[0].message.content;
}

const userQuestion = "My name is Hitesh, tell me a 1 line joke";

const friendly = await askQuestion(
  "You always respond in 1 line",
  userQuestion,
);

console.log("++++++++++ Friendly response: ++++++++++");
console.log(friendly);

const userQuestion2 = "Tell me my Name";

const formal = await askQuestion("You always respond in 1 line", userQuestion2);

console.log("++++++++++ Formal response: ++++++++++");
console.log(formal);
