export class Value {
  constructor(private _value: number) {
    this._value = +_value.toFixed(2);
  }

  get value() {
    return this._value;
  }
}
