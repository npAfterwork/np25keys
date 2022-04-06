import {Directive, Input} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
/**
 * Usage:
 * ---------
 *
 * @Component({
 * 							providers:   [
 * 								{
 * 									provide:     NG_VALUE_ACCESSOR,
 * 									useExisting: forwardRef(() => MyComponent),
 * 									multi:       true
 * 								}
 * 							]
 * 						})
 */
@Directive()
export class NPBaseValueAccessor<T> implements ControlValueAccessor {

	protected _value: T;
	protected initial: T;

	onTouch: () => void;
	onChange: (_: any) => void;
	@Input() disabled: boolean;

	@Input()
	set value(value: T) {
		this._value = value;
		this.updateInitialValue();
		this.notifyValueChange();
	}

	get value(): T {
		return this._value;
	}

	private updateInitialValue() {
		if (!this.initial && (typeof this._value !== 'undefined')) {
			this.initial = this._value;
		}
	}

	notifyValueChange(): void {
		if (this.onChange) {
			this.onChange(this.value);
		}
	}

	/**
	 * Registers a callback function that is called when the control's value
	 * changes in the UI.
	 */
	registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}

	/**
   * Registers a callback function that is called by the forms API on initialization
	 * to update the form model on blur.
	 */
	registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}

	/**
	 * Function that is called by the forms API when the control status changes to
	 * or from 'DISABLED'. Depending on the status, it enables or disables the
	 * appropriate DOM element.
	 */
	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	/**
	 * This method is called by the forms API to write to the view when programmatic
	 * changes from model to view are requested.
	 */
	writeValue(obj: any): void {
		this._value = obj;
		this.updateInitialValue();
	}

}
