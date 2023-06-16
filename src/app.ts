import express, { Express } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import ChatServer from './models/server';
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const server = new ChatServer(port);
server.start();
