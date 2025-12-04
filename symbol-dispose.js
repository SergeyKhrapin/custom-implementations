class Disposable {
  constructor() {
    this.disposed = false;
  }

  [Symbol.dispose]() {
    console.log('object has been disposed')
    this.disposed = true;
  }

  get isDisposed() {
    return this.disposed;
  }
}

const resource = new Disposable();

{
  using resourceUsed = resource;
  console.log(resource.isDisposed); // false
}

console.log(resource.isDisposed); // true
