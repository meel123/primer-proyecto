import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// servicio de Autenticacion
import { AuthService } from '../../services/auth.service'; 
// servicio de firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
// servicio de rutas que otorga angular
import { Router } from '@angular/router'; 
// importamos paqueteria de criptacion 
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'], 
})
export class RegistroComponent {
  // este "hide" es para el input de contraseña
  hide = true;

  // IMPORTACION DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: "",
  }; 

  //crear una coleccion para usuarios
  coleccionUsuarios: Usuario[] = []; 

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router, 
  ) {}

  //funcion para el usuario
 async registrar() {
  }) 

  const uid = await this.servicioAuth.obtenerUid(); 

  this.usuarios.uid = uid; 

  /**
   * SHA-256: Es un algoritmo de hashing seguro que toma una entrada (en este caso la 
   * contraseña) y produce una cadena de caracteres HEXADECIMAL que representa su HASH
   * 
   * toString(): convierte el resultado del has en una cadena de caracteres legible 
   */
  this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString(); 

  // this.guardarUsuario() guardaba la informacion del usuario en la coleccion
  this.guardarUsuario(); 

  // llamamos a la funcion limpiarInputs() para que se ejecute
  this.limpiarImputs(); 
 } 

 // funcion para agregar NUEVO USUARIO
 async guardarUsuario(){
  
 }



    //const credenciales = {
    //uid: this.usuarios.uid="",
    //nombre: this.usuarios.nombre="",
    //apellido: this.usuarios.apellido="",
    //email: this.usuarios.email="",
    //rol: this.usuarios.rol="",
    //password: this.usuarios.password=""
    //}

    //enviamos los nuevos registros por medio del metodo push a la coleccion 
    // this.coleccionUsuarios.push(credenciales);

    // this.limpiarinputs();
    //por consola
    //console.log(credenciales)
    //console.log(this.coleccionUsuarios)
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    // const "res" = resguarda una respuesta
    const res = await this.servicioAuth.Registrar(credenciales.email, credenciales.password) 
    // el metodo then nos devuelve la respuesta esperada por la promesa 
    .then(res => {
      alert("ha agregado un usuario con exito")
      // accedemos al servicio de rutas -> metodo navigate
      // metodo NAVIGATE = permite dirigirnos a diferentes vistas
      this.servicioRutas.navigate(["/inicio"]);
    })
    // el metodo catch toma una falla y la vuelve un ERROR
    .catch(error => {
      alert('hubo un problema al registrar un nuevo usuario :(');
    })

    const uid = await this.servicioAuth.obtenerUid(); 

    this.usuarios.uid = uid; 

    // this.guardarUsuario() guardaba la informacion del usuario en la coleccion 
    this.guardarUsuario(); 

    // llamamos a la funcion limpiarImputs() para que se ejecute
    this.limpiarinputs();
  }

  // funcion para agregar NUEVO USUARIO
  async guardarUsuario(){
 this 
  }

  limpiarinputs() {
    const inputs = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
  }
}
