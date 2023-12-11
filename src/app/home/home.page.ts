import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  irLink(){
    const linkDescarga = 'https://drive.google.com/file/d/1BOEg_UPr2IgctEi_AhUPHf-QObtCxiRu/view?usp=drive_link'; // Reemplaza esto con tu URL de descarga directa

    window.open(linkDescarga, '_blank'); // Abre la URL en una nueva pestaña
  }

}
