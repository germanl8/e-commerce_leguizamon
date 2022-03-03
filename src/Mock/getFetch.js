export const productos = [
    { id: 1, name: 'remera', description: 'remera clasica', stock: 10 },
    { id: 2, name: 'calzado', description: 'calzado deportivo', stock: 15 },
    { id: 3, name: 'pantalon', description: 'pantalon deportivo', stock: 10 },
    { id: 4, name: 'camiseta', description: 'camiseta deportiva', stock: 10 }

]

export const getFetch = new Promise((res, rej) => {

    setTimeout(() => {
        res(productos)
    }, 3000);
});
