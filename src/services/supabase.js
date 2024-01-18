import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hffvktyonywqscecrfxb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZnZrdHlvbnl3cXNjZWNyZnhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MjU4MzUsImV4cCI6MjAyMDQwMTgzNX0.Cfyv8MN3nvEgXUnuZXSiRY5nvEHR2ub9cnFpW5jG6bU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// as we enable rsl policies in supabase for only reading data it is safe to write key here
