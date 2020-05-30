import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boilerplate',
  templateUrl: './boilerplate.component.html',
  styleUrls: ['./boilerplate.component.scss']
})
export class BoilerplateComponent {

  @Input() public title = 'default';
  public value: number = 0;

  public increment(): void {
    this.value++;
  }

}
