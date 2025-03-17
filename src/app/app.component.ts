import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  date: Date = new Date();
  fecha?: number;

  ngOnInit(): void {
    this.getYear();
  }

  irLink() {
    const linkDescarga =
      'https://drive.google.com/file/d/1BOEg_UPr2IgctEi_AhUPHf-QObtCxiRu/view?usp=drive_link'; // Reemplaza esto con tu URL de descarga directa

    window.open(linkDescarga, '_blank'); // Abre la URL en una nueva pestaña
  }

  getYear() {
    this.fecha = this.date.getFullYear();
  }
}
