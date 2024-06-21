import logging
from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext
import hashlib

# Configure O Log
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# Dicionário Para Armazenar Os Hashes Das Mensagens Recebidas
hashes = set()

def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text('Olá! Eu Sou Um Bot Que Exclui Mensagens Duplicadas.')

def hash_message(message) -> str:
    """Cria Um Hash SHA256 Da Mensagem"""
    return hashlib.sha256(message.encode()).hexdigest()

def handle_message(update: Update, context: CallbackContext) -> None:
    global hashes
    message = update.message

    # Verifica Se A Mensagem Tem Texto
    if message.text:
        message_hash = hash_message(message.text)
    # Verifica Se A Mensagem Tem Uma Foto
    elif message.photo:
        file_id = message.photo[-1].file_id  # A Melhor Qualidade Da Foto
        file = context.bot.get_file(file_id)
        file_content = file.download_as_bytearray()
        message_hash = hashlib.sha256(file_content).hexdigest()
    # Verifica Se A Mensagem Tem Um Vídeo
    elif message.video:
        file_id = message.video.file_id
        file = context.bot.get_file(file_id)
        file_content = file.download_as_bytearray()
        message_hash = hashlib.sha256(file_content).hexdigest()
    else:
        return  # Ignora Outros Tipos De Mensagem

    if message_hash in hashes:
        message.delete()
    else:
        hashes.add(message_hash)

def main() -> None:
    # Token Do Bot
    token = '6422590090:AAHH8iu0-d6epQd7b1_7UEMZTr7LDuSCVcQ'
    
    updater = Updater(token)

    dispatcher = updater.dispatcher

    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(MessageHandler(Filters.all & ~Filters.command, handle_message))

    updater.start_polling()

    updater.idle()

if __name__ == '__main__':
    main()