import { config } from 'dotenv'
config()

export default {
  port: process.env.PORT || 4000,
  apiUrl: process.env.API_URL || '',
};
