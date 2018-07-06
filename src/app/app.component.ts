import { Component } from '@angular/core';
// import * as d3 from 'd3';

declare const d3;
declare const textures;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
    this.setTextureBg();
  }

  private setTextureBg() {
    const svg = d3.select('#bg-texture')
      .append('svg');
    const t = textures.circles()
      .thicker();
    svg.call(t);
    svg.append("circle")
      .style("fill", t.url());
  }
}
