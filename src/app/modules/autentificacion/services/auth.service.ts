import { Injectable } from '@angular/core';
// Servicio de AUTENTIFICACION de FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Referenciar Auth de firebase para inicializarlo  
  constructor(
    private auth: AngularFireAuth, 
    private servicioFirestore: AngularFirestore 
  ) { }

  // Funcion para REGISTRO
  Registrar(email: string, password: string) {
    // Retorna nueva info de EMAIL y CONTRASEÑA
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Funcion para INICIO DE SESION 
  IniciarSesion(email: string, password: string){ 
    //validar el email y contraseña
    return this.auth.signInWithEmailAndPassword(email, password);

  }

  // Funcion para cerrar sesion
  CerrarSesion() {
    return this.auth.signOut()
  }

  
// Funcion para tomar UID 
async obtenerUid(){ 
}

// que busca un usuario en la coleccion de 'usuarios' cuyo correo electronico coincida con el valor proporcionado
obtenerUsuario(email: string){
  return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '**', email)).get().toPromise();
}
} 