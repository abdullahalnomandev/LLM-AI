const OpenAI = require('openai');
const { InputTokens } = require('openai/resources/responses/input-tokens.js');
require('dotenv').config()

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
  const completion = await openai.chat.completions.create({
    model: "stepfun/step-3.5-flash:free",
    messages: [
      { role: "user", content: "What is react?" }
    ],
  })

  console.log(completion.choices[0].message)
}



const anaLizeGoal = async () => {
  const goalText = "Learn Python";
  const durationDays = "7";
  const prompt = `Users want to ${goalText} within ${durationDays} days. Create a plan to ${goalText} in ${durationDays} days.
  
   Create plan stractured in 5 steps:
   Create a list of tasks.


   Return as json with this structure
   
   example.
   
   {
    "plan": [
      "Task 1",
      "Task 2",
      "Task 3",
      "Task 4",
      "Task 5"
    ]
  }
  `;


  try {

    const completion = await openai.chat.completions.create({
      model: "stepfun/step-3.5-flash:free",
      messages: [
        { role: "user", content: prompt }
      ],
    })
    console.log(completion.choices[0].message)
  } catch (error) {
    console.error(error)

  }
}


// main()
anaLizeGoal()