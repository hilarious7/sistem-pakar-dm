interface EnvConfig {
  DATABASE_URL: string;
  PORT: number;
}

function getEnvConfig(): EnvConfig {
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }
  const PORT = parseInt(process.env.PORT || '3000', 10);
  return { DATABASE_URL, PORT };
}

export const env = getEnvConfig();
