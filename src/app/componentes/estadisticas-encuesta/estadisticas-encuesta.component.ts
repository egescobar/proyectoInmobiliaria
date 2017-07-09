import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas-encuesta',
  templateUrl: './estadisticas-encuesta.component.html',
  styleUrls: ['./estadisticas-encuesta.component.css']
})
export class EstadisticasEncuestaComponent implements OnInit {
public pieChartLabels:string[] = ['Personas a las que le gusto el sistema', 'Personas a las que le NO gusto el sistema'];
  public pieChartData:number[] = [800, 450];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
