interface Service<T> {
  findAll: () => Promise<T[]>;
  findById: (id: string) => Promise<T>;
  create: () => Promise<T>;
  update: () => Promise<T>;
  delete: () => Promise<any>;
}
