import { createClient } from '@supabase/supabase-js';
import { getClientEnv } from './env';

const supabaseUrl = getClientEnv('VITE_SUPABASE_URL');
const supabaseKey = getClientEnv('VITE_SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing required Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);