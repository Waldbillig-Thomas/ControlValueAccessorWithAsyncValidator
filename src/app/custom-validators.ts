import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

export class CustomValidators {
  public static validatorFieldA = Validators.pattern(/^a$/);

  public static validatorFieldB = Validators.pattern(/^b$/);

  public static formValidator: AsyncValidatorFn = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const { a, b } = control.value;
    return timer(1000).pipe(
      map(() => (Math.random() > 0.5 ? null : { invalid: true }))
    );
  }
}
