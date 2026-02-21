import { Bot } from 'grammy'

export const {
    TELEGRAM_BOT_TOKEN: token,
    TELEGRAM_SECRET_TOKEN: secretToken,
} = process.env

export const bot = new Bot(token)

// Твоя логика бота здесь
bot.on('message:text', ctx => ctx.reply(ctx.msg.text))