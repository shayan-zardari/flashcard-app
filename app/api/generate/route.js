"use client";

import { NextResponse } from "next/server";
import OpenAI   from "openai";

const systemPrompt = `
You are a flashcard creator. Your task is to generate flashcards based on the provided content. Each flashcard should consist of a question or prompt on one side and the answer or information on the other side. 

Please follow these guidelines:
1. Ensure the question is clear, concise, and directly related to the information provided.
2. The answer should be accurate and complete.
3. Include relevant details and context if necessary to enhance understanding.
4. Format the flashcards in a way that is easy to read and study.
5. Only generate 10 flashcards.

For example, if the provided content is about historical events, you might create a flashcard with a question like "What year did the American Revolution begin?" and the answer "1775."

Start by processing the given content and generating the flashcards accordingly.

Return in the following JASON format:
{
    "flashcards":[
        {
          "front": str,
          "back": str 
        }
    ] 
}
`

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.text()
    const completion = await openai().chat.completions.create({
        messages:[
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data}
        ],
        model: 'gpt-4o',
        response_format: {type: 'json-object'}
    })

    console.log(completion.choices[0].messages.content)
    const flashcards = JSON.parse(completion.choices[0].messages.content)

    return NextResponse.json(flashcards.flashcards)
}