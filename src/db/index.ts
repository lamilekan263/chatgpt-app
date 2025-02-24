import { sql } from "@vercel/postgres"

import type { Chat, ChatWithMessages, Message } from "../types"


export async function createChat(
    userEmail: string,
    name: string,
    msgs: Message[]
) {

    await sql`INSERT INTO chats (user_email, name) VALUES (${userEmail, name})`

    const { rows: lastInsertId } = await sql`SELECT currval(pg_get_serial_sequence('chats', 'id'))`

    const chatId = lastInsertId[0].currval;

    for (const msg of msgs) {
        await sql`INSERT INTO messages (chat_id,role,content) VALUES`
    }

    return chatId
}