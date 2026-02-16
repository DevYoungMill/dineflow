import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ptiwszilrzugstwjhkch.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0aXdzemlscnp1Z3N0d2poa2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTc4NTQsImV4cCI6MjA4NjM3Mzg1NH0.O9Cnyqq-HgavCUD7cyUdUIUTEwugu6DpZr0cO-cou0M';

const useSessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: useSessionStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export default supabase;
