import mongoose from "mongoose";
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const MONGODB_URI = serverRuntimeConfig.mongoDbConnection
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

export { dbMiddleware };

async function dbMiddleware() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}