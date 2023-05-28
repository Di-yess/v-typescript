export interface ITask {
  id: number;
  title: string;
  description: string;
  userId: number;
  updatedAt: string;
  createdAt: string;
}

export interface ICreateTask {
  title: string;
  description: string;
}
