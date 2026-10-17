# ZapJato App

![ZapJato](./assets/logo.jpg)

Aplicativo móvel para gestão operacional e financeira de lava-jatos, integrado à operação conversacional via WhatsApp.

## Stack Tecnológico

- **Mobile:** React Native, Expo, TypeScript
- **Estilização:** NativeWind (Tailwind CSS)
- **Gerenciamento de Estado:** Zustand
- **Backend:** Supabase (PostgreSQL, Auth, Realtime, RLS)
- **Automação:** n8n, Evolution API

## Arquitetura do Sistema

```text
[ Cliente / Pátio ] ──(WhatsApp)──► [ Evolution API / n8n ]
                                          │
                                          ▼
[ React Native App ] ◄───(Realtime)──── [ Supabase DB ]
