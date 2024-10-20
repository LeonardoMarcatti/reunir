<p></p>
<h1>Desafio NetWall</h1>
<h2>Introdução</h2>
<p>Este é um desafio criado pela empresa Net Wall para o cargo de desenvolvedor full stack. Nele foram utilizadas as tecnologias Laravel e React no back end e front end respectivamente.</p>
<h2>Instalação e Configuração</h2>
<h3>Laravel</h3>
<h4>Introdução</h4>
<p>Antes de realizar a instalação da aplicação é necessário ter a versão do PHP 8.2 ou acima pois a versão do Laravel instalada é a 11.9 que requer tal versão do PHP. É necessário também ter o Composer instalado.</p>
<p>Apache 2 não é necessário para rodar o backend da aplicação pois o front end não será administrado pelo Blade e sim pelo React.</p>
<h4>Instalação</h4>
<p>Para instalar o back end em Laravel é necessário, após a clonagem do reposiório, abrir um terminal na pasta backend do sistema e executar o 
comando composer install</p>
<h4>Configuração</h4>
<p>É necessário fazer alguns ajustes em seu sistema para que a aplicação rode conforme esperado. Primeiramente devemos copiar o arquivo .env.example para .env e ajustar o arquivo .env responsável por configurar o ambiente Laravel.</p>
<p>Nele faça: </p>
<ol>
   <li>
      <b>APP_URL=endereço de seu sistema até a pasta public</b>
      <small>Verifique se a conexão é HTTP ou HTTPS</small>
   </li>
   <li>
      <b>Banco de dados</b>
      <ul>
         <li>DB_CONNECTION=mysql</li>
         <li>DB_HOST=ip banco de dados</li>
         <li>DB_PORT=3306</li>
         <li>DB_DATABASE=reunir</li>
         <li>DB_USERNAME=seu usuario</li>
         <li>DB_PASSWORD=sua senha</li>
      </ul>
   </li>
   <li>Verifique se a pasta storage possui permissão de escrita e leitura. Caso não possua ajuste as permissões.</li>
   <li>
      Ainda no terminal, dentro da pasta backend, execute o comando php artisan migrate e depois php artisan db:seed. Esses comandos criarão o banco de dados, as tabelas bem como criará um usuário administrador do sistema e três salas de reuniões que podem ser alteradas mais tarde.
   </li>
   <li>Execute o comando php artisan serve --host=ip_do_servidor para iniciar o backend</li>
</ol>

<h2>Front End</h2>

<h2>Back End</h2>

<h2>Banco de Dados</h2>