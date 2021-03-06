function override(label :string) {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    }
}

// class Test{
//     @override('helo00')
//     name: string;
// }

// let t = new Test();
// console.log(t.name);

