# Guia Completo: Publicação do Attos na Google Play Store

Este documento é o seu manual definitivo para publicar o **Attos** na Google Play Store, desde a criação da conta até a aprovação final.

---

## 1. Passo 1: Cadastro Detalhado no Google Play Console

Ao acessar [play.google.com/console/signup](https://play.google.com/console/signup), o Google apresenta um assistente de configuração. Abaixo está a explicação de cada tela e campo:

### Tela 1.1: Escolha do Tipo de Conta (Muito Importante!)
Você terá duas opções:
1. **Conta Pessoal (Para você mesmo - Pessoa Física):**
   - **Para quem é:** Desenvolvedor individual que não possui empresa aberta (CNPJ).
   - **Documentos pedidos:** Seu CPF, CNH ou RG e comprovante de residência no seu nome.
   - **Regra do Google:** Exige realizar um **Teste Fechado com 20 testadores por 14 dias** antes de liberar o app para todo o público.
   - **Recomendação:** Se você não tem empresa (PJ), escolha esta opção.
2. **Conta de Organização (Para Empresa - Pessoa Jurídica):**
   - **Para quem é:** Empresas com CNPJ ativo e registro D-U-N-S (Dun & Bradstreet).
   - **Vantagem:** Não exige o teste de 20 pessoas por 14 dias (publica direto).

---

### Tela 1.2: Informações do Perfil de Desenvolvedor

Preencha os campos com atenção:

1. **Nome do Desenvolvedor (Developer Name):**
   - *O que é:* O nome público que vai aparecer na Play Store embaixo do nome do app (ex: *"Attos Fit"*, *"Vitalix Studios"* ou seu próprio nome).
   - *Dica:* Pode ser o nome da sua marca (ex: `Attos Fit`).
2. **E-mail de Contato (Contact Email):**
   - Digite um e-mail válido que você acessa com frequência. O Google enviará um **código de 6 dígitos** para confirmar que o e-mail é seu.
3. **Número de Telefone de Contato (Contact Phone Number):**
   - Deve ser inserido no padrão internacional com código do país e DDD:
     `+55 (DDD) 9XXXX-XXXX` (exemplo: `+5511987654321`).
   - O Google enviará um SMS com código de confirmação.
4. **Endereço Físico (Address):**
   - Seu endereço residencial (ou da sua empresa).
   - Rua, número, complemento, bairro, cidade, estado e CEP.
   - **Atenção:** O nome e endereço devem ser idênticos aos do comprovante que você enviará na verificação.

---

### Tela 1.3: Experiência e Detalhes dos Aplicativos
O Google fará perguntas básicas sobre os seus planos:
- **Quantos apps pretende publicar no primeiro ano?** -> Marque `1`.
- **Você planeja ganhar dinheiro com seus apps?** -> Marque **`Sim, com compras no app ou assinaturas`**. (Isso já prepara sua conta para o Google Play Billing).
- **Categorias dos apps:** -> Selecione **`Saúde e fitness (Health & Fitness)`**.

---

### Tela 1.4: Termos de Serviço e Pagamento da Taxa
1. Marque as caixas de aceite do **Contrato de Distribuição do Desenvolvedor**.
2. Clique em **Criar conta e pagar**.
3. Uma janela do Google Pay abrirá para o pagamento da **taxa única de US$ 25** (aprox. R$ 130 a R$ 145):
   - Utilize um cartão de crédito com compras internacionais liberadas.
   - O cartão deve estar no mesmo nome do titular da conta.

---

### Tela 1.5: Verificação de Identidade (Após o Pagamento)
Logo após o pagamento ou nas primeiras 24h, aparecerá um aviso vermelho no topo do console: *"Verifique sua identidade"*:
1. Tenha em mãos a foto da sua **CNH** ou **RG**.
2. Fotografe o documento com boa iluminação, sem reflexos e com os 4 cantos visíveis.
3. O Google costuma aprovar a verificação em um prazo de **algumas horas até 2 dias úteis**.

---

## 2. Passo 2: Política de Privacidade (Obrigatória)

Crie uma página pública simples (no Notion, GitHub Pages ou Google Docs compartilhado publicamente como "qualquer pessoa com o link pode ver").

### Modelo de Texto Pronto para Copiar:
```markdown
# Política de Privacidade - Attos Fit

Última atualização: Setembro de 2026

O aplicativo **Attos Fit** respeita a privacidade de seus usuários e tem o compromisso de proteger os dados pessoais coletados.

### 1. Dados Coletados
- **Conta e Perfil:** Nome, endereço de e-mail e foto de perfil fornecidos voluntariamente através do login com a Conta Google (Google Sign-In).
- **Métricas de Fitness:** Histórico de treinos, cargas levantadas, repetições, metas de peso, altura, ingestão de água e dados nutricionais.
- **Imagens e Câmera:** O aplicativo solicita acesso à câmera e galeria exclusivamente para que o usuário capture ou anexe fotos de fichas físicas de treino para interpretação pelo assistente de Inteligência Artificial. As fotos não são compartilhadas com terceiros.

### 2. Finalidade do Tratamento
Os dados coletados destinam-se exclusivamente a:
- Fornecer fichas personalizadas, relatórios de sobrecarga progressiva e cálculos de 1RM.
- Permitir a sincronização em nuvem e recuperação de histórico entre dispositivos.
- Personalizar as respostas do assistente inteligente Attos AI Coach.

### 3. Exclusão de Dados
O usuário tem o direito de solicitar a exclusão definitiva de sua conta e de todos os dados armazenados a qualquer momento através do menu Configurações > Gestão de Dados > "Excluir Conta e Dados" no próprio aplicativo.

### 4. Contato
Para dúvidas sobre esta política, entre em contato pelo e-mail: contato.attosfit@gmail.com
```

---

## 3. Passo 3: Materiais Gráficos da Loja

Prepare os seguintes arquivos antes de abrir a aba da Ficha da Loja:

1. **Ícone do Aplicativo:**
   - Tamanho: `512 x 512 pixels`.
   - Formato: PNG 32-bit com transparência, peso máx de 1 MB.
2. **Gráfico de Recursos (Banner de Topo):**
   - Tamanho: `1024 x 500 pixels`.
   - Formato: PNG ou JPEG.
   - Conteúdo: Logo do Attos + fundo esportivo moderno e slogan *"Treino, Nutrição & IA"*.
3. **Capturas de Tela (Screenshots):**
   - Mínimo de 4 capturas verticais (proporção 9:16, ex: `1080 x 1920 px` ou `1080 x 2400 px`).
   - Sugestão das telas:
     1. Dashboard Inicial (Metas do dia, calorias e água).
     2. Treino Ativo (Cronômetro de descanso e registro de séries).
     3. Attos AI Coach (Chat inteligente analisando treinos).
     4. Otimizador Neural (Geração de divisões ABC/ABCD).
     5. Histórico e Sobrecarga (Gráfico de volume e 1RM).

---

## 4. Passo 4: Textos de Divulgação da Loja

- **Nome do App (máx 30 caracteres):**
  `Attos: Treino, Nutrição & IA`
- **Breve Descrição (máx 80 caracteres):**
  `Monte treinos inteligentes, consulte o Coach IA e acompanhe suas cargas.`
- **Descrição Completa (para copiar no console):**
  ```text
  Potencialize seus resultados na musculação e transforme o seu físico com o Attos!

  O Attos é o seu treinador pessoal de elite e assistente nutricional no bolso, unindo ciência do treinamento com Inteligência Artificial avançada.

  RECURSOS PRINCIPAIS:
  • Execução de Treino Ativo: Cronômetro de descanso automático com avisos sonoros, registro de séries, repetições e cargas com zero lag.
  • Attos AI Coach: Converse com um especialista em biomecânica e nutrição para tirar dúvidas, periodizar rotinas e analisar fotos de fichas físicas com visão computacional.
  • Otimizador Neural de Treinos: Gere divisões completas personalizadas (ABC, ABCD, Push/Pull/Legs) ajustadas aos seus dias e objetivo corporal.
  • Histórico & Sobrecarga Progressiva: Acompanhe o volume total levantado semanalmente em gráficos detalhados e calcule sua 1RM (carga máxima) pela fórmula Brzycki.
  • Módulo Nutricional Pro: Cálculo dinâmico de calorias e macronutrientes conforme seu peso corporal e sugestão de cardápios inteligentes.
  • Backup Seguro em Nuvem: Sincronize seus treinos e cargas com sua Conta Google e nunca perca seus registros ao trocar de smartphone.

  Treine com método. Supere seus limites com o Attos.
  ```

---

## 5. Passo 5: Geração da Chave e do Pacote .AAB

### 5.1. Gerar a Keystore de Release (Chave de Assinatura)
No terminal da raiz do projeto, execute:
```bash
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias attos-key-alias
```
*Guarde o arquivo `my-release-key.jks` e a senha digitada em um local seguro (ex: Google Drive/Pen-drive). Se você perder essa chave, nunca mais conseguirá atualizar o aplicativo.*

### 5.2. Gerar o arquivo .AAB
1. Abra a pasta `android/` no **Android Studio**.
2. Aguarde o Gradle sincronizar.
3. Vá no menu **Build** > **Generate Signed Bundle / APK**.
4. Escolha **Android App Bundle (.aab)**.
5. Selecione o arquivo `my-release-key.jks`, digite as senhas e o alias `attos-key-alias`.
6. Selecione a variante de build **Release**.
7. O arquivo `.aab` será gerado na pasta `android/app/release/app-release.aab`. Este é o arquivo que você sobe no Google Play Console!

---

## 6. Passo 6: Teste Fechado (Os 20 Testadores)

Se a sua conta for pessoal nova, o Google solicitará:
1. No menu lateral do Play Console, vá em **Teste** > **Teste Fechado (Closed Testing)**.
2. Crie uma lista com **20 e-mails de amigos ou parceiros**.
3. Suba o arquivo `app-release.aab`.
4. Envie o link de download gerado pelo console para os seus 20 testadores.
5. Eles devem instalar o app e mantê-lo instalado no celular por **14 dias consecutivos**.
6. No 14º dia, o console liberará o botão **"Inscrever-se para a Produção"**, e seu app estará disponível publicamente na Play Store para qualquer pessoa baixar!
