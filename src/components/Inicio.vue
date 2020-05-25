<template>
  <div>

   <div id="carouselExampleInterval" class="carousel slide text-center" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" data-interval="3000">
                    <img src="../assets/img/hos1.jpg" alt="slider1"> 
                </div>
                <div class="carousel-item active" data-interval="3000">
                    <img src="../assets/img/hos2.jpg"  alt="slider2">  
                </div>
                <div class="carousel-item" data-interval="3000">
                    <img src="../assets/img/hos3.jpg" alt="slider3">
                    
                </div>
            </div>
            <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>

            <div class="col mt-5 bg-primary text-center pt-5 pb-5">
                <h1>Bienvenido a la página web del Hospital Santa Iris</h1>
                <p>El Hospital de Santa Iris es un centro privado y concertado de alta cualificación técnica y humana. Nuestra prioridad es ofrecer la máxima calidad asistencial a todos los pacientes y desarrollar nuestras actividades profesionales con un sentido general de trabajo en equipo y un elevado nivel profesional.</p>
            </div>

          <div class="col mt-5 pb-2 pt-1">
               <div  class="row pt-3 text center">
                   <div class="col" id="verde">
                   <h3 class="pb-3 mt-3">Servicios Médicos</h3>
                   <p>Contamos con la gran mayoría de especialidades médicas de modo que nuestros pacientes puedan recibir una atención integral de calidad.</p>
               </div>
                   <div class="col" id="verdenormal">
                    <h3 class="pb-3 mt-3">Instituto Oral</h3>
                    <p>El Instituto Oral y Maxilofacial es un centro moderno, dotado de la última tecnología y con un equipo humano de primer nivel.</p>
                </div>
                   <div class="col" id="verdeoscuro">
                    <h3 class="pb-3 mt-3">Medios de Diagnóstico</h3>
                    <p>Contamos con laboratorios propios de Análisis Clínicos y Anatomía Patológica, además de Resonancia Magnética abierta, TAC, Ecógrafo y Radiología convencional.</p>
                </div>
            </div>
          </div>
           
          <div id="verde" class="col">
              <h3 class="text-center pt-2 mt-5">Otros servicios ofrecidos</h3>
              <div class="row mt-5 text-center offset-1 pt-1">
                    <div class="mr-3 mb-3" style="width: 18rem;">
                        <img src="../assets/img/atencion.jpg" class="card-img-top" alt="...">
                           <router-link tag="li" class-active="active" class="btn btn-primary mt-5" to="/servicios" exact>Servicio de Asistencia Domiciliaria</router-link>
                    </div>
                    <div class="mr-3 mb-3" style="width: 18rem;">
                        <img src="../assets/img/cuadro.jpg" class="card-img-top" alt="...">
                        <router-link tag="li" class-active="active" class="btn btn-primary mt-5" to="/servicios" exact>Atención Accidentados de Tráfico</router-link>
                    </div>
                    <div class="mr-3 mb-3" style="width: 18rem;">
                      <img src="../assets/img/medico.jpg" class="card-img-top" alt="...">
                      <router-link tag="li" class-active="active" class="btn btn-primary mt-5" to="/servicios" exact>Chequeos personalizados</router-link>
                  </div>
             </div>
          </div>
            
        </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>