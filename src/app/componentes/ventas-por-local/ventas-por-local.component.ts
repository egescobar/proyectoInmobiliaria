import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas-por-local',
  templateUrl: './ventas-por-local.component.html',
  styleUrls: ['./ventas-por-local.component.css']
})
export class VentasPorLocalComponent implements OnInit {

 // Doughnut
  public doughnutChartLabels:string[] = ['Venas Wilde', 'Ventas Sarandi', 'Ventas Palermo'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
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
