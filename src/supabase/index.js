
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmlxwyvbgetqluvrorpj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbHh3eXZiZ2V0cWx1dnJvcnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNTc2MzMsImV4cCI6MjA1NjYzMzYzM30.Fy8AP6Jz19ViKu1PB3HkFM1Ih0ti4auNML-TUwB2flY"

export const supabase = createClient(supabaseUrl, supabaseKey)