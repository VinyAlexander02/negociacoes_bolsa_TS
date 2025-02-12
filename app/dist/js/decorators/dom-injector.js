export function domInjector(selector) {
    return function (target, propertykey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
            }
            return elemento;
        };
        Object.defineProperty(target, propertykey, {
            get: getter,
        });
    };
}
