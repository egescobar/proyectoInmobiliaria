import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { encuesta } from './encuesta';
import { EncuestaService }  from './encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
encuesta: encuesta;
encuestas: encuesta[]=[];
selectedEncuesa:encuesta;

  constructor(
     private  EncuestaService: EncuestaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
     this.encuesta = new encuesta();
    this.encuesta.id_encuesta=0;
  }

  Finalizar(): void {
    if (this.encuesta.id_encuesta == 0) {
      this.EncuestaService.insert(this.encuesta).then(hero => {
        this.encuestas.push(this.encuesta);
        this.selectedEncuesa = null;
        this.encuesta = new encuesta();
      });
    }
    //.then(() => this.goBack());
  }

}
