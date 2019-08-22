import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_ASYNC_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filter, first, map, takeUntil, tap } from 'rxjs/operators';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-version1',
  templateUrl: './version1.component.html',
  styleUrls: ['./version1.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Version1Component),
      multi: true
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => Version1Component),
      multi: true
    }
  ]
})
export class Version1Component
  implements OnInit, OnDestroy, ControlValueAccessor, AsyncValidator {
  public readonly form: FormGroup;
  private readonly destroy$ = new Subject<void>();
  private changeCallback = (_: any) => undefined;
  private touchedCallback = () => undefined;

  constructor() {
    this.form = new FormGroup(
      {
        a: new FormControl(null, {
          validators: [CustomValidators.validatorFieldA]
        }),
        b: new FormControl(null, {
          validators: [CustomValidators.validatorFieldB]
        })
      },
      { asyncValidators: [CustomValidators.formValidator] }
    );

    this.form.valueChanges
      .pipe(
        tap(value => console.log('CUSTOM CVA: value changes', value)),
        tap(() => this.touchedCallback()),
        tap(value => this.changeCallback(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnInit() {}

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ██╗   ██╗ █████╗ ██╗     ██╗██████╗  █████╗ ████████╗ ██████╗ ██████╗
  // ██║   ██║██╔══██╗██║     ██║██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
  // ██║   ██║███████║██║     ██║██║  ██║███████║   ██║   ██║   ██║██████╔╝
  // ╚██╗ ██╔╝██╔══██║██║     ██║██║  ██║██╔══██║   ██║   ██║   ██║██╔══██╗
  //  ╚████╔╝ ██║  ██║███████╗██║██████╔╝██║  ██║   ██║   ╚██████╔╝██║  ██║
  //   ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝

  public validate(control: AbstractControl): Observable<ValidationErrors> {
    console.log('CUSTOM CVA: validate', control.status, control.value);
    return this.form.statusChanges.pipe(
      tap(status => console.log('CUSTOM CVA: statusChanges', status)),
      filter(status => status !== 'PENDING'),
      map(status => (status === 'VALID' ? null : { invalid: true })),
      first()
    );
  }

  // public registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

  //  ██████╗██╗   ██╗ █████╗
  // ██╔════╝██║   ██║██╔══██╗
  // ██║     ██║   ██║███████║
  // ██║     ╚██╗ ██╔╝██╔══██║
  // ╚██████╗ ╚████╔╝ ██║  ██║
  //  ╚═════╝  ╚═══╝  ╚═╝  ╚═╝

  public writeValue(value): void {
    console.log('CUSTOM CVA: writeValue', value);
    this.form.setValue(value || { a: '', b: '' });
  }

  public registerOnChange(callback: any): void {
    console.log('CUSTOM CVA: registerOnChange');
    this.changeCallback = callback;
    // propagate current value
    callback(this.form.value);
  }

  public registerOnTouched(callback: any): void {
    console.log('CUSTOM CVA: registerOnTouched');
    this.touchedCallback = callback;
  }

  public setDisabledState(isDisabled: boolean): void {
    console.log('CUSTOM CVA: setDisabledState', isDisabled);
    throw new Error('Method not implemented.');
  }
}
