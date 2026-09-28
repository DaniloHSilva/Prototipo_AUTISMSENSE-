/* ============================================================
   AutismSense IoT - Configuração de conexão com o Supabase
   ------------------------------------------------------------
   1. Crie um projeto em https://supabase.com
   2. Em Settings > API, copie:
      - Project URL      -> SUPABASE_URL
      - anon public key  -> SUPABASE_ANON_KEY
   3. Cole abaixo e abra o dashboard.html e o simulador.html
   ============================================================ */

const SUPABASE_URL = "https://sbgpbipcfyqkwwshxdlv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiZ3BiaXBjZnlxa3d3c2h4ZGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NDM3MTAsImV4cCI6MjEwNTExOTcxMH0.FCIPijkat-_Nbq4WM4RHtNq5s-7jPe1eXmKnBzox0BQ";

/* Nome da tabela de leituras (deve existir no banco - ver LEIA-ME.md) */
const TABELA_LEITURAS = "leituras";

/* Intervalo de envio do dispositivo simulado (ms) */
const INTERVALO_ENVIO_MS = 5000;

/* Dispositivo que "envia" os dados */
const DISPOSITIVO_ID = "ESP32-SIM-01";
