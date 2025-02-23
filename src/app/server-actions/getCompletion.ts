"use server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function getCompletion(messageHistory: { role: "user" | "assistant"; content: string }[]) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messageHistory
    });
    const assistantMessage = response.choices[0].message;

    const formattedMessage = {
        role: assistantMessage.role as "user" | "assistant",
        content: assistantMessage.content ?? "" // Ensure content is never null
    };
    return {
        messages: [...messageHistory, formattedMessage]
    };
}
