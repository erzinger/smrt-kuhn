# Smartinline {#Template}


## Como Usar

### Instalação

Ao criar um novo repositório dentro do [Github](https://github.com/erzinger) selecione este repositório como Template.

A partir disso você pode clonar o repositório para a sua máquina

Para esssas aplicações utilizamos o recurso de **Submodules** do Git, mantendo um repositório separado, que é uma biblioteca de componentes separada.

Para clonar corretamente o repositório deve se usar o comando:

`git clone --recurse-submodules URL_DO_REPOSITÓRIO`

Com isso ele fará o clone tanto do repositório quanto da bibloteca inclusa nele. Para mais informações [aqui](https://git-scm.com/book/en/v2/Git-Tools-Submodules) se encontra a documentação do submodules.

Após o clone do repositório podem ser seguidos os próximos passos:

- [ ] Instalar as dependências do projeto com `npm ci` ou `npm clean-install`

### Configuração da Plataforma

- [ ] Editar o [package.json](/package.json), inserindo as informações de cliente, código da aplicação e o token da aplicação.
- [ ] Editar no [package.json](/package.json) o endereço do cliente no script de desenvolvimento `https://cliente.wnology.io`.
- [ ] Editar o [Settings/Application.ts](/src/Settings/Application.ts), inserindo o `device_id`.

### Configuração das Tags

Dentro do projeto, as tags são responsáveis pela identificação dos valores na plataforma Wegnology; Também por identificar e controlar alguns limites e descrições usadas dentro do Smartinline

Cada Tag é um objeto JS com as seguintes propriedades :
  - `device`: Código do dispositivo Edge que o coleta, podendo haver mais de um dispositivo em um mesmo projeto.
  - `tag`: Código da tag, sendo o mesmo da tag configurada no Wegnology.
  - `title`: Nome ou identificação da Tag, usado na interface; Nome de fácil entendimento.
  - `minValue`: Valor mínimo da tag, usado para identificação em gráfico. 
  - `maxValue`: Valor máximo da tag, usado para identificação em gráfico.
  - `unit`: Unidade de valor da tag, usado na intereface,
  - `Icon`: Ícone que representa visualmente a característica da Tag, usado na interface.

- [ ]  Configurar lista de tags no arquivo [Tags](/src/Settings/Tags.ts) de acordo com o configurado no coletor de dados e wegnology.

### Rodando a Aplicação

- Você pode rodar o ambiente de desenvolvimento utilizando o comando `npm start`.

### Deploy da Aplicação

Dentro da Biblioteca [/smrt-library/ReactDefaults](/src/smrt-library/ReactDefaults/]) existem os Scripts responsáveis por fazer o deploy Automático da aplicação; Como todo o sistema Wegnology possui uma API rest, o deploy é inteiramente automatizado, necessitando apenas do token da aplicação, que foi anteriormente [configurado](#configuração-da-plataforma).

Para fazer o deploy você pode rodar o comando `npm run upload`.

Após configurações relacionadas a número de versão e domínio a ser utilizado, é feito o build automático do React e feito o upload dos dados para a plataforma.