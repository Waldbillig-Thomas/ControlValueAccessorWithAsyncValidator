import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ControlValueAccessor,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css']
})
export class Version1Component
  implements OnInit, ControlValueAccessor, AsyncValidator {
  constructor() {}

  public ngOnInit() {}

  // ██╗   ██╗ █████╗ ██╗     ██╗██████╗  █████╗ ████████╗ ██████╗ ██████╗
  // ██║   ██║██╔══██╗██║     ██║██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
  // ██║   ██║███████║██║     ██║██║  ██║███████║   ██║   ██║   ██║██████╔╝
  // ╚██╗ ██╔╝██╔══██║██║     ██║██║  ██║██╔══██║   ██║   ██║   ██║██╔══██╗
  //  ╚████╔╝ ██║  ██║███████╗██║██████╔╝██║  ██║   ██║   ╚██████╔╝██║  ██║
  //   ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝

  public validate(
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> {
    throw new Error('Method not implemented.');
  }

  public registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

  //  ██████╗██╗   ██╗ █████╗
  // ██╔════╝██║   ██║██╔══██╗
  // ██║     ██║   ██║███████║
  // ██║     ╚██╗ ██╔╝██╔══██║
  // ╚██████╗ ╚████╔╝ ██║  ██║
  //  ╚═════╝  ╚═══╝  ╚═╝  ╚═╝

  public writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  public registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  public registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
