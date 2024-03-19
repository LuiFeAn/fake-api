import { IProduct } from './interfaces/product';
import { Description } from './object_values/description';
import { Title } from './object_values/title';
import { Value } from './object_values/value';
import { BaseEntity } from '../base-entity';

export class Product extends BaseEntity {
  constructor(private props: IProduct) {
    super(props.id);
  }

  set title(title: Title) {
    this.props.title = title;
  }

  get title() {
    return this.props.title;
  }

  set description(description: Description) {
    this.props.description = description;
  }

  get description() {
    return this.description;
  }

  set value(value: Value) {
    this.props.value = value;
  }

  get value() {
    return this.props.value;
  }

  get image() {
    return this.props.image;
  }
}
