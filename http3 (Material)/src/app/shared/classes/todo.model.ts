export class Todo {
  id: number;
  todoid: string;
  task: string;
  type: number;
  section: number;
  registerdate: Date;
  state: string;
  description: string;
  disabled: boolean;
  todotask: [{
    id: number;
    todotaskid: string;
    task: string;
    registerdate: Date;
    state: string;
    disabled: boolean;
  }];
}
