<h1>Desafio NetWall</h1>
<h2>Introdução</h2>
<p>Este é um desafio criado pela empresa Net Wall para o cargo de desenvolvedor full stack. Nele foram utilizadas as tecnologias Laravel e React no back end e front end respectivamente.</p>
<h2>Instalação e Configuração</h2>
<h3>Laravel</h3>
<h4>Introdução</h4>
<p>Antes de realizar a instalação da aplicação é necessário ter a versão do PHP 8.2 ou acima pois a versão do Laravel instalada é a 11.9 que requer tal versão do PHP. É necessário também ter o Composer instalado.</p>
<p>Apache 2 não é necessário para rodar o backend da aplicação pois o front end não será administrado pelo Blade e sim pelo React.</p>
<h4>Instalação</h4>
<p>Para instalar o back end em Laravel é necessário, após a clonagem do reposiório, abrir um terminal na pasta backend do sistema e executar o comando composer install</p>
<h4>Configuração</h4>
<p>É necessário fazer alguns ajustes em seu sistema para que a aplicação rode conforme esperado. Primeiramente devemos copiar o arquivo .env.example para .env e ajustar o arquivo .env responsável por configurar o ambiente Laravel.</p>
<p>Nele faça: </p>
<ol>
   <li>
      <b>APP_URL=endereço de seu sistema até a pasta public</b>
      <small>Verifique se a conexão é HTTP ou HTTPS</small>
   </li>
   <li>
      APP_TIMEZONE=America/Sao_Paulo
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
<h3> Introdução </h3>
<p>É necessário ter o NodeJS instalado na márquina e essa aplicação foi constuida com a versão 23 e o npm versão 10.9</p>
<p>O front end foi construído utilizando ReactJS, React Route e TailwindCSS. para instalar o front end é necessário abrir um terminal na pasta fronten e executar o comando npm install. Esse comando instalará todos os pacotes necessários.</p>
<h3>Configuração</h3>
<p>Dentro da pasta frontend dentro da pasta utils existe um arquivo JS chamado script onde logo no início é configurado a base_url da api. Você deve configurar de acordo com o que foi ajustado no backend Ex: http://meu_ip:8000/api/</p>
<h2>Banco de dados</h2>
<h3>Introdução</h3>
<p>O banco de dados foi constuído com MYSQL e possui poucas tabelas sendo as principais users, rooms e meetings. A tabela users é responsável por guardar dados referentes aos usuários como nome e senha. A tabela rooms guarda dados sobre as salas de reuniões e a tabela meetings é responsável por manter dados sobre as reuniões como datas de inicio e fim, sala reservada, título da reunião e observações.</p>
<p></p>
<p></p>
<h2>API</h2>
<h3>Introdução</h3>
<p>A API faz o meio de campo entre o fron end e o back end com seus diversos end points cada qual responsável por uma tarefa.</p>
<h3>End Points</h3>
   <ul>
      <li>/login - Do tipo POST é responsável por verificar os dados de login</li>
      <li>/logup - Do tipo POST é responsável por verificar os dados de logup</li>
      <li>/checkUser - Do tipo GET verifica se o usuário é valido permitindo ou não que determinado usuário possar usar o sistema</li>
      <li>/logout - Do tipo GET é responsável por terminar a sessão do usuário</li>
      <li>/getMeetings - Do tipo GET seu papel é retornar as reuniões agendadas pelo usuário logado</li>
      <li>/getMyReserves - Do tipo GET é responsável por trazer todo o histórico de reuniões do usuário</li>
      <li>/getMeetingRooms - Do tipo GET nos traz a lista de salas de reuniões cadastradas</li>
      <li>/newMeeting - Do tipo POST é responsável por criar uma nova reunião</li>
      <li>/updateMeeting - Do tipo PUT atualiza dados de uma determinada reunião</li>
      <li>/updateRoom - Do tipo PUT atualiza dados referentes as salas onde serão realizadas as reuniões</li>
      <li>/deleteRoom - Do tipo DELETE apaga uma determinada sala. Deve ser usada com cuidado pois apaga junto todas as reuniões ligagas a ela.</li>
      <li>/createRoom - Do tipo POST seu papel é criar uma nova sala de reunião</li>
      <li>/getMeetingDetails - Do tipo GET sua função é trazer dados detalhandos de determinada reunião</li>
      <li>/getNotAvailableDates - Apesar de seu nome é um endpoint do tipo GET pois nos traz dados referentes a disponibildade de uma sala e para isso enviamos o ID da sala</li>
      <li></li>
   </ul>
<h3>POSTMAN/INSOMNIA</h3>
<p>Para utilizar esses aplicativos é necessário configurar o headers pois o tipo de dados que são trafegados são strings JSON.</p>
<p>Content-type = Application/Json</p>
<p>Accept = Application/Json</p>