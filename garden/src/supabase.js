import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvronuecuvofvwpizubv.supabase.co'

const supabaseAnonKey = 'sb_publishable_2ICi2eFlTyKtvwUjTvDtKQ_wcFkP2Oo'

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
