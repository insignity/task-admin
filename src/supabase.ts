import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xrtuuzuoulswknatbaql.supabase.co"
const supabaseKey = "sb_publishable_ixIeree5YOzyPA-d1KB1Ng_V8Q-CnVx"

export const supabase = createClient(supabaseUrl, supabaseKey)