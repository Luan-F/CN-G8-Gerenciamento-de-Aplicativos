# AWS CodeDeploy

## O que é?
O AWS CodeDeploy é um serviço da Amazon Web Services que automatiza o processo de deployment (implantação) de código em diversos ambientes, como EC2, AWS Lambda, servidores on-premises e instâncias ECS (Elastic Container Service). Ele ajuda a garantir atualizações consistentes e sem tempo de inatividade, tornando o processo de implantação mais seguro e eficiente, sem afetar o ambiente de produção. É parte da AWS DevOps suite e facilita o gerenciamento de atualizações de software.

## Funcionamento

1. Aplicações suportadas: AWS CodeDeploy permite realizar deploy de aplicações em servidores EC2, instâncias on-premises ou em funções Lambda.

2. Agente CodeDeploy: Em ambientes EC2 ou on-premises, o agente CodeDeploy é necessário para se comunicar com o serviço e aplicar as mudanças de código.

3. Arquivo de AppSpec: Esse arquivo especifica como a aplicação será instalada, quais comandos executar antes e depois da implantação, e onde colocar os arquivos.

4. Etapas do Deploy:
   1. Criação do AppSpec.yaml: Um arquivo de especificação para o serviço entender os passos de instalação.
   
   2. Revisão do pipeline: O AWS CodeDeploy pode ser integrado a ferramentas como AWS CodePipeline.
   
   3. Estratégias de Deploy: CodeDeploy oferece diferentes estratégias, como Blue/Green ou Rolling Update, para minimizar o impacto das mudanças.

5. Monitoramento e rollback: CodeDeploy pode monitorar automaticamente implantações e reverter para versões anteriores caso ocorra algum erro.

## Tutorial

1. Configurando o Lambda
   1. Acesse o AWS Management Console.
   2. Navegue até AWS Lambda e clique em Criar Função.
   3. Selecione "Usar um esquema" e forneça um nome para a função, como "LambdaCD".
   4. Defina o esquema ( como um "Hello World").
   5. Clique em Criar Função.
   6. Insira algum código identificável de versão.
   7. Clique em "Configure test event" e dê um nome para o evento como "teste_LambdaCD".
   8. Clique em Ações e clique em Publicar nova versão com o nome "v1"
   9. Clique no menu no nome da Função, como "LambdaCD", altere o código e publique com a descrição "v2".
   10. Crie um alias com o nome "beta" para a versão "v1"

3. Configurando o CodeDeploy
   1. Crie uma aplicação CodeDeploy com o nome "CNCD" para a plataforma Lambda.
   2. Crie um grupo de implantação com o nome "meuGrupoLambda".
   3. Selecione a função de serviço
   4. Clique em Criar implantação
   5. Selecione YAML e adicione o código:

   ```
   version: 0.0
   Resources:
   - myLambdaFunction:
      Type: AWS::Lambda::Function
      Properties:
        Name: lambdaCD
        Alias: Beta
        CurrentVersion: 1
        TargetVersion: 2
   ```
