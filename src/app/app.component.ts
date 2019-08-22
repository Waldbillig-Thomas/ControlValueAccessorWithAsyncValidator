import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form1 = new FormGroup({
    field1: new FormControl(null, { validators: [Validators.required] }),
    field2: new FormControl(null, { validators: [] })
  });
}
