import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from '../../environments/environment'


const SUPABASE_URL = environment.SUPABASE_URL;
const SUPABASE_KEY = environment.SUPABASE_KEY;

// console.log(SUPABASE_URL, SUPABASE_ANON_KEY)

export const supabase:SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);