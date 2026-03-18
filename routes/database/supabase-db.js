import { Pool } from 'pg';

export const pool = new Pool({
    host: "aws-1-us-east-1.pooler.supabase.com",
    port: 5432,
    database: "postgres",
    user: "postgres.midudxjcdkabwcofvnqz",
    password: "ecosistemas2006!",
})