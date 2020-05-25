<template>
  <form @submit="addCita()">
                <p class="mt-5 pt-5"/>
                <div class="form-group">
                    <b>Nombre y apellidos</b>
                    <input v-model="nombre" class="form-control form-control-lg" type="text" required>
                </div>
                <div class="form-group">
                    <b>Nº Seguridad Social</b>
                    <input v-model="nss" class="form-control form-control-lg" type="text" required>
                </div>
                <div class="form-group">
                    <b>Nº Contacto</b>
                    <input v-model="contacto" class="form-control form-control-lg" type="text" required>
                </div>
                <div class="form-group">
                    <b>¿En los últimos 14 días ha comenzado a presentar al menos uno
                           de los siguientes síntomas que previamente no tenía: Tos, dificultad para
                           respirar, dolor de garganta, fiebre de más de 37º?
                    </b>
                    <div class="form-check">
                      <input v-model="p1" class="form-check-input" type="radio" name="pregunta1" id="si1" value="si" required>
                      <b class="form-check-label text-primary" for="gridRadios1">Si</b>
                    </div>
                    <div class="form-check">
                        <input v-model="p1" class="form-check-input" type="radio" name="pregunta1" id="no1" value="no" required>
                        <b class="form-check-label text-primary" for="gridRadios2">No</b>
                    </div>
                </div>
                
                <div class="form-group">
                    <b>¿Ha estado en alguna de las zonas de transmisión
                           comunitaria en los últimos 14 días?
                    </b>
                    <div class="form-check">
                      <input v-model="p2" class="form-check-input" type="radio" name="pregunta2" id="si2" value="si" required>
                      <b class="form-check-label text-primary" for="gridRadios1">Si</b>
                    </div>
                    <div class="form-check">
                        <input v-model="p2" class="form-check-input" type="radio" name="pregunta2" id="no2" value="no" required>
                        <b class="form-check-label text-primary" for="gridRadios2">No</b>
                    </div>
                </div>
                <div class="form-group">
                    <b>¿Ha tenido contacto estrecho en los últimos 14 días con una persona que sea un caso probable o confirmado de padecer coronavirus?
                    </b>
                    <div class="form-check">
                      <input v-model="p3" class="form-check-input" type="radio" name="pregunta3" id="si3" value="si" required>
                      <b class="form-check-label text-primary" for="gridRadios1">Si</b>
                    </div>
                    <div class="form-check">
                        <input v-model="p3" class="form-check-input" type="radio" name="pregunta3" id="no3" value="no" required>
                        <b class="form-check-label text-primary" for="gridRadios2">No</b>
                    </div>
                </div>
                 <div class="form-group">
                    <b>¿Ha perdido en mayor o menos medida el sentido del olfato y/o gusto?</b>
                    <div class="form-check">
                      <input v-model="p4" class="form-check-input" type="radio" name="pregunta4" id="si4" value="si" required>
                      <b class="form-check-label text-primary" for="gridRadios1">Si</b>
                    </div>
                    <div class="form-check">
                        <input v-model="p4" class="form-check-input" type="radio" name="pregunta4" id="no4" value="no" required>
                        <b class="form-check-label text-primary" for="gridRadios2">No</b>
                    </div>
                </div>
                 <div class="form-group">
                    <b>¿Tiene obstrucción nasal, secreción o goteo?</b>
                    <div class="form-check">
                      <input v-model="p5" class="form-check-input" type="radio" name="pregunta5" id="si" value="si" required>
                      <b class="form-check-label text-primary" for="gridRadios1">Si</b>
                    </div>
                    <div class="form-check">
                        <input v-model="p5" class="form-check-input" type="radio" name="pregunta5" id="no5" value="no" required>
                        <b class="form-check-label text-primary" for="gridRadios2">No</b>
                    </div>
                </div>
                
                <button type="submit" id="btnenviar" class="btn mb-3">Enviar</button>
                
             </form>
        
</template>

<script>
import { db } from "../main";
export default {
  name: 'Cita',
  data() {
    return {
      nombre: "",
      nss: "",
      contacto: "",
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      respuestas: [],
      citas: []
    };
  },
  firestore() {
    return {
      citas: db.collection("citas")
    };
  },methods:{
    addCita(){
      this.respuestas = {0: this.nombre, 1: this.nss, 2: this.contacto, 3: this.p1, 4: this.p2, 5: this.p3, 6: this.p4, 7: this.p5} 
      
          console.log(this.respuestas);
      db.collection("citas").doc(this.nombre+this.nss).set({id: this.nombre+this.nss ,respuestas: this.respuestas })
        .then(function() {
          console.log("Document successfully written!");
        })
    }
  
  }
}
</script>