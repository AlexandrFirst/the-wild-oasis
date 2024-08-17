import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mdczozkbybcyiyqbxjxt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kY3pvemtieWJjeWl5cWJ4anh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4NTk2MTEsImV4cCI6MjAzNzQzNTYxMX0.fETklAHVv1CrBUrkOGiX8gBbzCMBNl5V-8NM6sSZxYU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
