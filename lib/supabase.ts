import { createClient } from '@supabase/supabase-js';

const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ``;
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || ``;

export const supabase = createClient(apiUrl, apiKey);
