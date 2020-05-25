<template>
  <body id="fondo">
  <div class="container mb-3">
    <div class="alert alert-danger alert-dismissible fade show fixed-bottom" role="alert">
        Esta web utiliza
        <strong>cookies</strong> 
          y otras tecnologías para que podamos mejorar su experiencia en nuestros sitios.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">Aceptar cookies</span>
        </button>
    </div>
    <nav class="navbar navbar-expand-sm navbar-light fixed-top">
        <a class="navbar-brand" ><img src="./assets/img/logohospital.png"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link tag="li" id="router" class="mr-2 nav-link" class-active="active" to="/" exact>Inicio</router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="li" class-active="active" class="mr-2 nav-link" to="/elhospital" exact>El Hospital</router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="li" class-active="active" class="mr-2 nav-link" to="/servicios" exact>Servicios</router-link>
                </li>
                <li class="nav-item">
                  <router-link tag="li" class-active="active" class="mr-2 nav-link" to="/cita" exact>Pedir cita</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <router-view />

  </div>
    <footer>
      <div class="row d-flex align-items-center">
        <div class="col-md-7 col-lg-8">
            <p class="text-md-left mt-3">C/IES Azarquiel Nº2DAM Telef:2019-2020 © 2020 Copyright: Nuria Majano</p>
            <p></p>
        </div>
          <div class="col-md-5 col-lg-4 ml-lg-0">
          <img src="./assets/img/rss.png" class="img-responsive img-pequeña" alt="...">
          <img src="./assets/img/facebook.png" class="img-responsive img-pequeña" alt="...">
          <img src="./assets/img/twitter.png" class="img-responsive img-pequeña" alt="...">
          <img src="./assets/img/linkedin.png" class="img-responsive img-pequeña" alt="...">
        </div>
      </div>  
    </footer> 
  </body>
</template>

<script>

export default {
  name: 'App',
}
</script>