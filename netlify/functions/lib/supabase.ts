import { createClient } from '@supabase/supabase-js';
import { getServerEnv } from './env';

const supabaseUrl = getServerEnv('VITE_SUPABASE_URL');
const supabaseKey = getServerEnv('VITE_SUPABASE_ANON_KEY');

export const supabase = createClient(supabaseUrl, supabaseKey);