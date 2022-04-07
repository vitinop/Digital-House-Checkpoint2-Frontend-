const nav = document.querySelector('#defaultHeader');
nav.innerHTML = 
` 
    <nav class="navbar navbar-expand-md navbar-light"
    style="background-color:#f4f4f4; box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 20px -20px;">


    <!-- Icone do Site / redirecionador para mainpage - via bootstrap -->
    <a href="../" class="navbar-brand  h1 ">
      <img class="d-inline-block align-items-center"
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147793639/settings_images/t93fIpiQtiqOtxIRovQA_logo_dh_01.png"
        width="160px" alt="Logo marca DigitalHouse" />
    </a>
    <!-- ----------- -->


    <!-- botão sanduiche do menu responsivo - via bootstrap -->
    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" class="navbar-toggler "
      aria-controls="navbarNav" area-expended="false" aria-label="toggle-navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <!-- ----------- -->


    <!-- Menu de itens -via bootstrap  -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="nav navbar-nav">
        <li class="navItem active">
          <a href="../" class="navLink">
            Home
          </a>
        </li>
        <li class="navItem  active">
          <a href="../#catalogo" class="navLink">
            Catálogo
          </a>
        </li>
        <li class="navItem  active">
          <a href="../pages/sobre-nos.html" class="navLink">
            Sobre Nós
          </a>
        </li>
        <li class="navItem active">
          <a href="../pages/login.html" class="navLink">
            Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
  `;

const foot = document.querySelector('#defaultFooter');
foot.innerHTML = 
`
<footer class="container-fluid">
<section class="teamSection">

    <div class="aluno">
        <p>Luanderson P.</p>

        <a target="_blank" href="https://github.com/LuandersonPontes/CTD" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/luanderson-pontes-790348231/" class="social">
            <i class="bi bi-linkedin"></i></a>
    </div>

    <div class="aluno">
        <p>Matheus E.</p>
        <a target="_blank" href="https://github.com/fehbr800" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/matheus-emanoel-995b23181" class="social">
            <i class="bi bi-linkedin"></i>
        </a>
    </div>

    <div class="aluno">
        <p>Adriano A.</p>
        <a target="_blank" href="https://github.com/Laguiosta" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/adriano-augusto-de-oliveira-43856619a/" class="social">
            <i class="bi bi-linkedin"></i></a>
    </div>

    <div class="aluno">
        <p>Victor Luz</p>
        <a target="_blank" target="_blank" href="https://github.com/vitinop" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/victor-luz-7a531068" class="social">
            <i class="bi bi-linkedin"></i></a>
    </div>

    <div class="aluno">
        <p>Jefferson Mendes</p>
        <a target="_blank" href="https://github.com/JeffersonMendes32" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/jefferson-mendes-26393799/" class="social">
            <i class="bi bi-linkedin"></i>
        </a>
    </div>

    <div class="aluno">
        <p>Natali Souza</p>
        <a target="_blank" href="https://github.com/naay12" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/nataly-souza-a9237622b" class="social">
            <i class="bi bi-linkedin"></i>
        </a>
    </div>

    <div class="aluno">
        <p>Renan A.</p>
        <a target="_blank" href="https://github.com/devrsantos" class="social">
            <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/renan-augusto-santos-568422222" class="social">
            <i class="bi bi-linkedin"></i>
        </a>
    </div>

</section>
<!--teamsection-->



<section class="copyrightSection">
    <p>Checkpoint desenvolvido em 2022</p>

</section>
<!--copyright-->

</footer>
`;