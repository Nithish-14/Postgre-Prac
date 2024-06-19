import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://usernamme:password@host/dbname");
    await client.connect();
    return client;
}