<p></p>
<h1>Desafio NetWall</h1>
<h2>Introdução</h2>
<p>Este é um desafio criado pela empresa Net Wall para o cargo de desenvolvedor full stack. Nele foram utilizadas as tecnologias Laravel e React no back en e front end respectivamente.</p>


<h2>Instalação e Configuração</h2>
<h3>Laravel</h3>
<h4>Introdução</h4>
<p>Antes de realizar a instalação da aplicação é necessário ter a versão do PHP 8.2 ou acima pois a versão do Laravel instalada é a 11.9 que requer tal versão do PHP. É necessário também ter o Composer instalado.</p>
<p>Apache 2 não é necessário para rodar o backend da aplicação pois o front end nnão será administrado pelo Blade e sim pelo React.</p>
<h4>Instalação</h4>
<p>Para instalar o back end em Laravel é necessário, após a clonagem do reposiório, abrir um terminal na pasta backend do sistema e executar o 
comando composer install</p>
<h4>Configuração</h4>
<p>É nnecessário fazer alguns ajustes em seu sistema para que a aplicação rode conforme esperado. Primeiramente devemos ajustar o arquivo .env responsável por configurar o ambiente Laravel.</p>
<b>APP_URL=endereço de seu sistema até a pasta public</b>
<p>Verifique se a conexão é HTTP ou HTTPS</p>
<b>Banco de dados</b>
<ul>
   <li>DB_CONNECTION=mysql</li>
   <li>DB_HOST=ip banco de dados</li>
   <li>DB_PORT=3306</li>
   <li>DB_DATABASE=reunir</li>
   <li>DB_USERNAME=seu usuario</li>
   <li>DB_PASSWORD=sua senha</li>
</ul>
<p>Verifique se a pasta storage possui permissão de escrita e leitura. Caso não possua ajuste as permissões.</p>
<p></p>


<p></p>
<p></p>

<p>O banco de dados possui um usuário administrador e três salas já cadastradas</p>


<h2>Front End</h2>

<h2>Back End</h2>

<h2>Banco de Dados</h2>