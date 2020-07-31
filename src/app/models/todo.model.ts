export class Todo {
  id: number;
  name: string;
  complete: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}