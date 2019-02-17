import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random
from discord import Game


Client = discord.client
client = commands.Bot(command_prefix = '!')
Clientdiscord = discord.Client()


@client.event
async def on_ready()
    await client.change_presence(game=Game(name='rolling around'))
    print('Ready, Freddy') 


@client.event
async def on_message(message)
    if message.content == '-test'
    if message.content == '-test'
        await client.send_message(message.channel,'NICE BABE')
client.run('NTQ2NTYyODE0NzY1MDM5NjI3.D0qDcw.rO44vtxIjSl-lvXmzMTaaOM_gas')
1234
    if message.content.startswith('-gamble')
        randomlist = [Win,Lose]
        await client.send_message(message.channel,(random.choice(randomlist)))
