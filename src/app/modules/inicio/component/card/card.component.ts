import { Component } from '@angular/core';
//IMPORTAMOS LA INTERFAZ PARA CIUDAD
import { Ciudad } from 'src/app/models/ciudad';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA --> TIPO ARRAY
  public info: Ciudad[];

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id: "", 
        nombre: "Nueva York",
        subtitulo: "incluye 5 distritos que se ubican donde el río Hudson desemboca en el océano Atlántico. En su centro se encuentra Manhattan, un distrito densamente poblado que se encuentra entre los principales centros comerciales, financieros y culturales del mundo.",
        poblacion: "Poblacion:  8,336 millones habitantes",
        ubicacion: "Ubicacion: Estados Unidos",
        imagen: "https://media.staticontent.com/media/pictures/bfb80462-7604-4711-8bfb-576e01508817",
        alt: "imagen de Nueva York"
      },

      {
        id: "",
        nombre: "Chicago",
        subtitulo: "en el lago Michigan de Illinois, se encuentra entre las ciudades más grandes de los EE.UU. Es famosa por su arquitectura atrevida y tiene un perfil en el que destacan rascacielos como el icónico Centro John Hancock, la torre Willis de 1,451 pies.",
        poblacion: " Poblacion:  2,590,002. habitantes",
        ubicacion: "Ubicacion: Estados Unidos",
        imagen: "https://www.fodors.com/wp-content/uploads/2019/05/WhatNOTtodoinChicago__HERO_iStock-996188444.jpg",
        alt: "imagen de Chicago"
      },

      {
        id: "",
        nombre: "Londres",
        subtitulo: " la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana.",
        poblacion: " Poblacion: 8.799.800 millones habitantes",
        ubicacion: "Ubicacion: Inglaterra",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/248px-London_Skyline_%28125508655%29.jpeg",
        alt: ""
      },
    ]
  }
}
