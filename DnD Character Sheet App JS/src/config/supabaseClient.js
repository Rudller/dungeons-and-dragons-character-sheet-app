import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://xlqgujaxepagnjnbhmqw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscWd1amF4ZXBhZ25qbmJobXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NjEzMDksImV4cCI6MjAxMjUzNzMwOX0.VbIt1WybrGuBFXClop59MGZ5fKO07jCEDOToH3pYbG0'

const supabase = createClient(supabaseURL, supabaseKey)

export default supabase