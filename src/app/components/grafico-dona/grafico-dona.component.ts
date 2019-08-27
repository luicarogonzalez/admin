import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

 // tslint:disable-next-line: no-input-rename
 @Input('chartLabels') public doughnutChartLabels: string[] = [];
 // tslint:disable-next-line: no-input-rename
 @Input('chartData') public doughnutChartData: number[] =     [];
 // tslint:disable-next-line: no-input-rename
 @Input('chartType') public doughnutChartType: string = '';  
 constructor() { }

  ngOnInit() {
  }

}
