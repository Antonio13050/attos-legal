# Guia de Monetização e Assinaturas (Attos PRO & RevenueCat)

Este documento descreve a arquitetura de monetização, o faturamento in-app via Google Play e Apple App Store com **RevenueCat**, o fluxo de restauração de compras e as diretrizes para publicação comercial.

---

## 1. Passo 1: Integração com RevenueCat (Concluído)

### 1.1. O que foi implementado no código
- **Biblioteca Nativa:** Instalado `@revenuecat/purchases-capacitor`.
- **Sincronização Nativa:** Executado `npx cap sync` para vincular os plugins no projeto nativo Android (`android/`).
- **Permissão de Faturamento:** Adicionada a permissão oficial no [`android/app/src/main/AndroidManifest.xml`](../android/app/src/main/AndroidManifest.xml):
  ```xml
  <uses-permission android:name="com.android.vending.BILLING" />
  ```
- **Camada de Serviço Centralizada ([`subscriptionService.ts`](../subscriptionService.ts)):**
  - `initRevenueCat()`: Inicializa o SDK nativo com chaves públicas configuráveis.
  - `upgradeToPro(planType)`: Busca as ofertas ativas na loja (`Purchases.getOfferings()`), identifica o pacote (Anual ou Mensal) e dispara a janela nativa de pagamento do Google Play / App Store (`Purchases.purchasePackage()`).
  - `CustomerInfoUpdateListener`: Ouve alterações de assinatura e renovações em segundo plano.
  - **Fallback Inteligente para Desenvolvimento Web:** Se o app estiver rodando no navegador ou no ambiente de desenvolvimento local (`Capacitor.isNativePlatform() === false`), o fluxo simula a compra com sucesso para que a equipe consiga testar as telas e ferramentas sem precisar de emulador Android ou sandbox.

### 1.2. Configuração no RevenueCat Dashboard & Google Play Console
Para ativar as cobranças reais em produção:

1. **No Google Play Console:**
   - Acesse **Monetização com o Google Play** > **Produtos** > **Assinaturas**.
   - Crie uma assinatura com o identificador base: `attos_pro`.
   - Adicione 2 planos base (Base Plans):
     - `attos-pro-monthly` (R$ 19,90/mês).
     - `attos-pro-yearly` (R$ 142,80/ano ou R$ 11,90/mês).
2. **No RevenueCat Dashboard (app.revenuecat.com):**
   - Crie um projeto "Attos".
   - Em **Project Settings** > **API Keys**, copie a **Public Android API key** (`goog_...`).
   - Crie um **Entitlement** com o identificador: `pro` (ou `attos_pro`).
   - Crie um **Offering** padrão (`default`) e vincule os 2 pacotes (Packages):
     - `$rc_monthly` -> apontando para o produto mensal do Google Play.
     - `$rc_annual` -> apontando para o produto anual do Google Play.
3. **No arquivo `.env` do projeto:**
   ```env
   VITE_REVENUECAT_GOOGLE_API_KEY=goog_sua_chave_publica_aqui
   VITE_REVENUECAT_APPLE_API_KEY=appl_sua_chave_publica_aqui
   ```

---

## 2. Passo 2: Mecanismo de "Restaurar Compras" (Concluído)

### 2.1. Requisito das Lojas
Tanto a **Google Play Store** quanto a **Apple App Store** reprovam aplicativos que não permitam ao usuário recuperar uma assinatura comprada previamente após reinstalar o aplicativo ou trocar de smartphone.

### 2.2. Como foi implementado
- No serviço [`subscriptionService.ts`](../subscriptionService.ts), a função `restorePurchases()` consulta `Purchases.restorePurchases()`, valida se o entitlement `pro` continua ativo e atualiza o estado local do aplicativo.
- No modal de vendas ([`components/PaywallModal.tsx`](../components/PaywallModal.tsx)), foi adicionado o botão **"Restaurar Compras"** com ícone de sincronização e feedback visual (sucesso ou alerta caso não haja compra ativa vinculada à conta Google/Apple).

---

## 3. Passo 3: Backup e Sincronização em Nuvem Firestore (Concluído)

Optamos pela **Opção A (Sincronização em Nuvem Real via Firestore com arquitetura Offline-First)** para garantir retenção máxima e entregar a promessa premium do plano Attos PRO.

### 3.1. Arquitetura Implementada ([`cloudSyncService.ts`](../cloudSyncService.ts))
- **Offline-First:** O aplicativo continua funcionando com 0ms de lag, lendo e gravando imediatamente no `localStorage` do celular. O treino na academia nunca depende de conexão com a internet.
- **Coleção no Firestore:** Os dados do usuário são consolidados e salvos sob o caminho seguro `/users/{uid}/vault/backup`.
- **Entidades Sincronizadas:**
  - Fichas de treino e divisões (`fitmaster_plans`).
  - Histórico completo de treinos, séries e cargas levantadas (`fitmaster_history`).
  - Exercícios personalizados (`fitmaster_custom_exercises`).
  - Biometria, questionário de consultoria e anamnese do atleta.
  - Metas de água, suplementação e macronutrientes da nutrição.
  - Status de assinatura e data de expiração do Attos PRO.
- **Gatilhos Automáticos:**
  - **Pós-Login:** Ao conectar com a Conta Google (`authService.ts`), o app verifica se há um backup remoto; se o aparelho for novo, restaura os treinos automaticamente; caso já tenha treinos locais, envia a cópia atualizada para a nuvem.
  - **Término de Treino:** Ao concluir uma sessão de treino em [`pages/ActiveWorkout.tsx`](../pages/ActiveWorkout.tsx), o histórico atualizado é enviado em segundo plano de forma silenciosa e não-bloqueante.
- **Controles Manuais no Perfil ([`pages/Profile.tsx`](../pages/Profile.tsx)):**
  - Exibição da data/hora exata da última sincronização.
  - Botão **"Sincronizar"**: força o envio imediato para a nuvem com feedback visual em modal.
  - Botão **"Restaurar"**: modal com confirmação de segurança para baixar e restaurar os dados da nuvem em novos aparelhos.

