# AutismSense IoT — Sistema Web + Supabase (com simulador embarcado)

Solução web do projeto **AutismSense IoT** (UNIVESP, Projeto Integrador VI):
monitoramento de nível de ruído, luminosidade, temperatura e umidade para
apoio ao conforto sensorial no ambiente escolar.

## 📁 Estrutura

```
autismsense-iot/
├── dashboard.html     → painel de visualização (cards, gráfico, alertas)
├── simulador.html     → simula o firmware do dispositivo embarcado (ESP32)
├── css/style.css      → tema visual
└── js/config.js       → URL + anon key do Supabase (EDITAR!)
```

## 🗄️ 1. Criar o banco no Supabase

1. Crie um projeto gratuito em https://supabase.com
2. Abra **SQL Editor** e execute:

```sql
create table leituras (
  id bigint generated always as identity primary key,
  dispositivo text default 'ESP32-SIM-01',
  ruido_db real,
  lux real,
  temperatura real,
  umidade real,
  criado_em timestamptz default now()
);

alter table leituras enable row level security;

create policy "leitura publica" on leituras
  for select using (true);

create policy "insercao publica" on leituras
  for insert with check (true);
```

> ⚠️ As políticas abertas são aceitáveis para protótipo acadêmico.
> Em produção, use chaves com escopo restrito ou autenticação.

## 🔑 2. Configurar a conexão

Em **Settings → API** do Supabase, copie:

- **Project URL** → `SUPABASE_URL`
- **anon public key** → `SUPABASE_ANON_KEY`

Cole em `js/config.js`.

## ▶️ 3. Executar

Sirva a pasta por HTTP (não abra via `file://`, pois módulos e mic exigem servidor):

```bash
cd autismsense-iot
python -m http.server 8080
```

Abra:

- `http://localhost:8080/simulador.html` → clique **▶ Iniciar envio**
  (opcional: use o microfone real para simular o sensor de ruído)
- `http://localhost:8080/dashboard.html` → acompanhe em tempo real

O dashboard se atualiza automaticamente (Realtime) a cada inserção.

## 🔌 Sobre a simulação embarcada

O simulador replica o fluxo previsto para o hardware real:

```
Sensores (MAX9814, BH1750, DHT22) → ESP32 → WiFi/HTTP → Supabase → Dashboard web
```

Com deslizadores é possível simular cenários da rotina escolar (aula silenciosa,
recreio agitado, mudança de iluminação etc.). O firmware do ESP32 (fase futura do
projeto) enviará exatamente o mesmo JSON que o simulador insere.

## 📌 Aviso

Sistema com finalidade exclusivamente informativa: **não** realiza diagnóstico,
**não** substitui avaliação profissional e **não** estabelece relação causal
entre leituras ambientais e comportamento. Dados ambientais apenas, conforme LGPD.
