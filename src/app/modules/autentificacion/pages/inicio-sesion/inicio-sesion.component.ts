import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router'; 
import * as CryptoJS from 'crypto-js'; 


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true
  //definimos la propiedad que guarda la coleccion 
  public usuariolocal: Usuario[]
  //utilizo un constructor para las credenciales correctas 
  constructor() {
    this.usuariolocal = [{
      uid: "", //atributos de tipo any = reciben valores indefinidos 
      nombre: "Melani",
      apellido: "Gadea",
      email: "gadeamelani6@gmail.com",
      rol: "visitante",
      password: "1234"
    }]
  }
//###################################################################### FIN LOCAL
 
const credenciales = {
  email: this.usuarioIngresado.email, 
  password: this.usuarioIngresado.password 
} 

try{
  // Obtenemos el usuario desde la BD -> Cloud Firestore 
const usuarioBD = await this.servicioAuth.obtenerUsuario(Credentiales.email); 

// ! -> si es diferente 
// .empy -> metodo de Firebase para marcar si algo es vacio
if(!usuarioBD || usuarioBD.empty){
  alert('El correo electronico no esta registrado'); 
  this.limpiarImputs(); 
  return;
 }

 /* Primer documento (registro) en la coleccion de usuarios que se obtiene desde la 
 consulta.
 */ 

 const usuarioDoc = usuarioBD.docs[0]; 

 /**
  * Extrae los datos del documento en forma de un objeto y se especifica como el tipo de 
  * "Usuario" -> haciendo referencia a nuestra interfaz de Usuario.
  */
 const usuarioData = usuarioDoc.data() as Usuario; 

 // Hash de la contraseña ingresada por el usuario 
 const hashedPassword = CryptoJS.SHA256(credenciales.password).toString(); 

 if(hashedPassword !== usuarioData.password){
  alert("Contraseña incorrecta"); 

  this.usuarioIngresado.password = ''; 
  return; 
 }

 const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password); 
.then((res) => {
  alert('Se ha logrado con exito');

  this.servicioRutas.navigate(['/inicio']);
  }) 
  .catch((err) => {
    alert('Hubo un problema al iniciar sesion' + err); 

    this.limpiarImputs();
  }) 
} catch(error){
  this.limpiarImputs(); 
 } 
} 

// Funcion para vaciar el formulario
limpiarImputs() {

}

  this.servicioRutas.navigate(['/inicio']); 
  // IMPORTACION DEL MODELO / INTERFAZ
  inicio_sesion: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: ""
  }

  //crear una coleccion para usuarios
  coleccionUsuarios: Usuario[] = []


  //funcion para el inicio de sesion
  enviar() {
    const credenciales = {
      uid: this.inicio_sesion.uid,
      nombre: this.inicio_sesion.nombre,
      apellido: this.inicio_sesion.apellido,
      email: this.inicio_sesion.email,
      rol: this.inicio_sesion.rol,
      password: this.inicio_sesion.password,
    }

    for (let i = 0; i < this.usuariolocal.length; i++) {
      const orden = this.usuariolocal[i];

      if (orden.email === credenciales.email && 
          orden.password === credenciales.password) {
        alert("inicio de sesion")
      }
      else {
        alert("fallo inicio sesion")
      }
    }



    //por consola
    console.log(credenciales)
    console.log(this.coleccionUsuarios)

  }
}



