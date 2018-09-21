import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
 /* template: `
      <div>
          <h2>Hello {{name}}</h2>
       </div>
    `*/
  // styleUrls: ["./hello.component.css"]
})

export class HelloComponent {

  @Input()
  name: string;
  title: string

  constructor() {
    this.name = 'Rajesh';
    this.title = `Title passed from component`
  }
}
