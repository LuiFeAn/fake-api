import { randomUUID } from 'node:crypto';

export class BaseEntity {
  constructor(private _id?: string) {
    this._id = _id ?? randomUUID();
  }

  get id() {
    return this._id;
  }
}
