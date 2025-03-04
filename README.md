# Projeto de Filosofia

Este projeto é uma aplicação Angular que permite explorar ideias filosóficas que moldaram o pensamento humano ao longo dos séculos. Ele inclui funcionalidades como busca, filtragem e visualização de filosofias em diferentes layouts (grade ou lista).

## Funcionalidades

- **Exploração de Filosofias:** Descubra ideias filosóficas de grandes pensadores.
- **Busca:** Encontre filosofias por nome.
- **Filtros:** Filtre filosofias por categoria (Ética, Metafísica, Epistemologia).
- **Modo Escuro:** Suporte para temas claros e escuros.
- **Visualização Flexível:** Alternar entre visualização em grade e lista.

## Tecnologias Utilizadas

- **Angular:** Framework front-end para construção da aplicação.
- **TypeScript:** Linguagem principal do projeto.
- **SCSS:** Estilização dos componentes.
- **Angular Router:** Navegação e rotas da aplicação.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (geralmente instalado com o Node.js)
- Angular CLI (instalado globalmente)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/EvandroRodCoelho/philosophies.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd philosophies
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

### Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

2. Abra o navegador e acesse:

   ```bash
   http://localhost:4200
   ```

### Build para Produção

Para gerar uma versão otimizada do projeto para produção, execute:

```bash
ng build --configuration production
```

Os arquivos gerados estarão na pasta `dist/`.


## Configurações Adicionais

### Modo Escuro

O projeto suporta temas claros e escuros. O modo escuro pode ser ativado ou desativado através do `ThemeService`.

### Filtros

Os filtros disponíveis são:
- Todos
- Ética
- Metafísica
- Epistemologia

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Nome:** Evandro Rodrigues Coelho
- **Email:** evandrorodcoelho@gmail.com
- **GitHub:** [EvandroRodCoelho](https://github.com/EvandroRodCoelho)

## Créditos

- Ícones por [Icons8](https://icons8.com/).
