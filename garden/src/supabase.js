import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (
  !supabaseUrl ||
  !supabaseAnonKey ||
  supabaseUrl.includes('your-project') ||
  supabaseAnonKey.includes('your-anon-public-key')
) {
  console.error(
    'Supabase is not configured. Update garden/.env.local with your real VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
    { supabaseUrl, supabaseAnonKey },
  )
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')
