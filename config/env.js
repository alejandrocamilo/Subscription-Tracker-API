import {config} from 'dotenv';

const envFile =
    process.env.NODE_ENV === "production"
        ? ".env.production.local"
        : ".env.development.local";

config({path: envFile});

export const {PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_KEY,
    ARCJET_ENV,
    QSTASH_URL,
    QSTASH_TOKEN,
    LOCAL_URL,
    RENDER_URL,
    EMAIL_PASSWORD,
    ADMIN_USER_ID
} = process.env;