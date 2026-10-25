/* ============================================================
   AutismSense IoT - Configuração de conexão com o Supabase
   ------------------------------------------------------------
   1. Crie um projeto em https://supabase.com
   2. Em Settings > API, copie:
      - Project URL      -> SUPABASE_URL
      - anon public key  -> SUPABASE_ANON_KEY
   3. Cole abaixo e abra login.html
   ============================================================ */

const SUPABASE_URL = "https://mdeettkvwkopovadlcss.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZWV0dGt2d2tvcG92YWRsY3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTgyMzksImV4cCI6MjEwNjg5NDIzOX0.-JidQ9dQ92FkFbpoGDTjFW4YWlaBJgKzxm83Sa3wjYg";

/* Nome da tabela de leituras (deve existir no banco - ver LEIA-ME.md) */
const TABELA_LEITURAS = "leituras";

/* Intervalo de envio do dispositivo simulado (ms) */
const INTERVALO_ENVIO_MS = 5000;

/* Dispositivo que "envia" os dados */
const DISPOSITIVO_ID = "ESP32-SIM-01";
