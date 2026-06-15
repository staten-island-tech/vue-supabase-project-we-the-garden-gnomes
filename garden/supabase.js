import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvronuecuvofvwpizubv.supabase.co'

const supabaseAnonKey = 'sb_publishable_2ICi2eFlTyKtvwUjTvDtKQ_wcFkP2Oo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
