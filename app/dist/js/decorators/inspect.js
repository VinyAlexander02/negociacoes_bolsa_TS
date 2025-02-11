export function inspect(target, propertykey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`---Método ${propertykey}`);
        console.log(`---Parâmetro: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`---retorno ${retorno}`);
        return retorno;
    };
    return descriptor;
}
