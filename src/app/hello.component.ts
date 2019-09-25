import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { NgModule, OnInit} from '@angular/core'

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent  {
   data: any;
  options:any;
 

ngOnInit(){
    this.data = {
            labels: ['0-5','6-10','11-15','16-20','21-25','26-30'],
            datasets: [
                {
                    data: [35, 62, 15,80,32,22],
                    backgroundColor: [
                        "#36A2EB",
                        "#36A2EB",
                        "#36A2EB",
                         "#36A2EB",
                        "#36A2EB",
                        "#36A2EB",
                    ]
                    
                }]    
            };
  this.options = {
        onAnimationComplete: function() {
          this.showTooltip(this.segments, true);
          },

          tooltipEvents: [],
          tooltips: {
               intersect: true
          },
      showTooltips: true,
        title: {
          display: true,
          text: 'Exception',
          fontSize: 12
      },
    legend: {
     position: 'bottom'
    }
}
            
  }
}