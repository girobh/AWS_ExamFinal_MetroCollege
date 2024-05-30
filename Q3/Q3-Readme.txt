Para executar o arquivo e implantar os recursos no AWS, siga as etapas abaixo:

Certifique-se de ter o AWS CLI instalado e configurado em seu ambiente. Você pode instalá-lo e configurá-lo seguindo as instruções oficiais da AWS: Installing the AWS CLI

No terminal, navegue até o diretório onde você salvou o arquivo .ts e execute o seguinte comando para instalar as dependências do CDK:

npm install aws-cdk-lib aws-cdk-lib/aws-ec2 aws-cdk-lib/aws-sqs aws-cdk-lib/aws-sns aws-cdk-lib/aws-secretsmanager

Em seguida, compile o código TypeScript para JavaScript usando o seguinte comando:

npx tsc

Após a compilação, você verá um arquivo JavaScript correspondente (deploy-stack.js) gerado no mesmo diretório.
Agora, você pode implantar os recursos na AWS executando o seguinte comando:
Copy
cdk deploy