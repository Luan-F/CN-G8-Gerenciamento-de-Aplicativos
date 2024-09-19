# Tutorial AWS CloudFormation
## O que é?
Uma forma de automatizar a criação de uma stack de aplicações.

## Exemplo 1 - CodeCommit
Neste exemplo, vamos criar um repositório no **CodeCommit**.

### Etapa 1 - Subindo o template do repositório
1. Acesse o serviço **S3**
2. Crie um bucket
3. Suba o arquivo `exemplo.zip`

Pronto, agora o template já está no **S3**.

### Etapa 2 - Construindo o template no CodeCommit.
1. Clone este repositório.
    - `git clone https://github.com/Luan-F/CN-G8-Gerenciamento-de-Aplicativos.git`
2. No console da AWS, acesse o serviço CloudFormation.
3. Clique na opção `Create stack` ou `Criar pilha`.
    - Selecione a opção `With new resources (standart)` ou `Com novos recursos (padrão)`
4. No grupo `Prepare template` ou `Preparar modelo`, escolha opção `Choose an existing template` ou `Escolher um modelo existente`.
5. No grupo `Specify template` ou `Especificar modelo`, escolha a opção `Upload a template file` ou `Fazer upload de um arquivo de modelo`.
6. Faça upload o arquivo `code_commit.json`, que está nesta pasta, e avance para a próxima etapa.
7. Preencha o nome da stack e os seus parâmetros.
    - No Campo `BucketName`, coloque o nome do bucket que você usou para subir o arquivo `exemplo.zip`.
    - No Campo `BucketKey`, coloque o nome do arquivo que você subiu no bucket (exemplo.zip).
8. Pronto, agora você pode avançar até a etapa de subimissão do template.

## Exemplo 2 - EC2 com SSH
Neste exemplo, vamos criar uma instância EC2 com o grupo de segurança que permite o acesso via SSH, utilizando um par de chaves.

### Etapa 1 - Criando par de chaves
1. No console da AWS, pesquise `KeyPairs` e selecione a opção do EC2.
2. Selecione a opção de criar um par de chaves.
3. Dê um nome para esse par de chaves.
4. Escolha o tipo de chave.
5. Escolha o formato do arquivo.
6. Clique em criar chave.

Agora você tem a chave que será utilizada para acessar a instância EC2, via SSH.

### Etapa 2 - Criando a stack.
1. Clone este repositório.
    - `git clone https://github.com/Luan-F/CN-G8-Gerenciamento-de-Aplicativos.git`
2. No console da AWS, acesse o serviço CloudFormation.
3. Clique na opção `Create stack` ou `Criar pilha`.
    - Selecione a opção `With new resources (standart)` ou `Com novos recursos (padrão)`
4. No grupo `Prepare template` ou `Preparar modelo`, escolha opção `Choose an existing template` ou `Escolher um modelo existente`.
5. No grupo `Specify template` ou `Especificar modelo`, escolha a opção `Upload a template file` ou `Fazer upload de um arquivo de modelo`.
5. Clique em exemplo e suba o arquivo `ec2.yaml`.
6. Preencha o nome da instância e do grupo de segurança
7. Selecione a chave SSH criada.

Pronto, agora você criou uma instância EC2 com permissão para acesso via SSH (usando um par de chaves).
Para usar, basta rodar o seguinte comando:
```sh
ssh -i <caminho_da_chave> ubuntu@<ip_publico_da_instancia>
```
