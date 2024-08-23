import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard generator designed to create concise and effective study aids. Your task is to process the provided content and generate flashcards that are useful for quick review and memorization.

Instructions:

Content Processing: 

Examine the given content carefully to identify key concepts, terms, and important information that can be used to create flashcards.

Flashcard Creation:

Create exactly 10 flashcards.

For each flashcard, create a clear and straightforward question (front) that prompts recall of the relevant information.
Provide a brief, accurate answer (back) that directly addresses the question.
Formatting:

Ensure that both the questions and answers are short, clear, and to the point.
Each flashcard should focus on one concept or fact to facilitate easy memorization and review.
Output Format:

Return the flashcards in the following JSON format:
{
    "flashcards":[
        {
          "front": "string representing the question",
          "back": "string representing the answer" 
        }
    ] 
}
`

export async function POST(req) {
    const data = await req.text();
    const openai = new OpenAI()
    console.log([{ role: 'system', content: systemPrompt },
    { role: 'user', content: data }])

    // return NextResponse.json({
    //     message: "Hello World"
    // })
    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: data }
        ],
        model: 'gpt-4o',
        response_format: { type: 'json_object' }
    })

    // console.log(completion.choices[0].messages.content)
    console.log(completion.choices[0].message.content)
    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}

// export async function POST(req){
//     console.log("Hello World")
//     return NextResponse.json({
//         message: "Hello World"
//     })
// }