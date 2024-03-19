import { Title } from '../object_values/title';
import { Description } from '../object_values/description';
import { Value } from '../object_values/value';

export interface IProduct {
  id?: string;
  title: Title;
  description: Description;
  value: Value;
  image: string;
}
