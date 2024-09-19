# AWS Elastic Beanstalk

## O que é?

É uma plataforma como um serviço (ou PaaS) que facilita a rápida implantação, escalabilidade e gerenciamento de suas aplicações e serviços web.

O Elastic Beanstalk vai lidar automaticamente com:

- Provisionamento e configuração da infraestrutura
- Implantação
- Balanceamento de Carga (Load Balance)
- Escalabilidade (Auto scaling)
- Monitoramento
- Análise e depuração
- Registro em logs

A premissa básica do Elastic Beanstalk é que você vai ter um ambiente totalmente funcional e gerenciável para sua aplicação, bastando apenas fazer o upload do seu código.

Para isso ele vai dar suporte à algumas plataformas (ou tecnologias) como Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker, etc.

Vale ressaltar que o Elastic Beanstalk é um serviço gratuito, ou seja, você não irá pagar para usá-lo, mas sim pelos demais serviços que ele provisiona (EC2, RDS, Load Balance, etc.)

## Tutorial de criação de uma aplicação com Elastic Beanstalk
1. No console da AWS, pesquise pelo serviço **Elastic Beanstalk**
2. Clique na opção `Criar aplicação`

### Etapa 1 - Configurar o ambiente
1. Dê um nome a aplicação, por exemplo `app-teste`. A partir disso ele irá gerar automaticamente um Nome de ambiente e Domínio para aplicação, então não iremos modificar esses campos.
2. Em plataforma iremos selecionar o tipo `Plataforma gerenciada`
3. Na seleção de plataformas iremos selecionar `Python` e as demais opções serão selecionadas automaticamente
4. Em Código da aplicação iremos deixar selecionado `Aplicação de amostra`
5. Em Predefinições iremos deixar selecionado `Instância única (qualificada para o nível gratuito)`
6. Clique em `Próximo`

### Etapa 2 - Configurar o acesso ao serviço
![image](https://github.com/user-attachments/assets/d8c69461-a4f7-45b7-8a7a-8f4747862ae0)
1. Em perfil de serviço selecione `Usar um perfil de serviço existente`
2. Em Perfis de serviço existentes selecione `LabRole`
3. Em Par de chaves EC2 selecione `vockey`
4. Em Perfil de instância do EC2 selecione `LabInstanceProfile`
5. Clique em Próximo

### Etapa 3 - Definir redes, banco de dados e etiquetas
1. Em VPC iremos selecionar a opção padrão
2. Em Configurações de instâncias, iremos selecionar duas Sub-redes de instância, por exemplo `us-east-1a` e `us-east-1e`
3. Clique em Próximo

### Etapa 4 - Configurar tráfego e escalabilidade da instância
1. Clique em Próximo

### Etapa 5 - Configurar atualizações, monitoramento e registros em logs
1. Em Monitoramento, iremos selecionar a opção `Básico` para os relatórios de integridade do sistema
2. Em Atualizações gerenciadas da plataforma iremos desmarcar a opção Atualizações gerenciadas - Ativado
3. Clique em Próximo

### Etapa 6 - Analisar
1. Clique em Enviar

Agora iremos aguardar a criação da aplicação e podemos acompanhar pelo console na aba de `Eventos` enquanto esse processo ocorre. Ao finalizar a criação podemos acessar o link disponível em `Domínio` e verificar a nossa aplicação no ar. Para visualizar os serviços provisionados pelo Elastic Beanstalk podemos ir no serviço EC2, onde devemos ver a instância, grupo de auto scaling e ip elástico referentes a aplicação.

