const supabaseUrl = "https://mayclnkieddfcmtdlcuc.supabase.co";
const supabaseKey = "sb_publishable_G3DAS1w88uUU4UQouTM-FQ_hXlJCboc";

export const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);