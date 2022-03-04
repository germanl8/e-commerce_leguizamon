
// export const productos = [
//     { id: 1, title: 'remera', description: 'remera clasica', stock: 10 },
//     { id: 2, name: 'calzado', description: 'calzado deportivo', stock: 15 },
//     { id: 3, name: 'pantalon', description: 'pantalon deportivo', stock: 10 },
//     { id: 4, name: 'camiseta', description: 'camiseta deportiva', stock: 10 }

// ]


export const productos = [
    { id: 1, title: 'Remera', price: 1200, stock: 6, pictureUrl: 'https://f.fenicio.app/imgs/b18e62/www.textilshop.com.uy/tex/1210/webp/catalogo/500041.bco500041.bco1/460x460/remera-sublimable-unisex-blanco-remera-sublimable-unisex-blanco.jpg' },
    { id: 2, title: 'Pantalón', price: 1800, stock: 3, pictureUrl: 'https://contents.mediadecathlon.com/p1291890/k$8b32c5745b76f76b4176210e22d36362/pantalon-trekking-montana-trek-900-hombre-gris-oscuro.jpg?&f=800x800' },
    { id: 3, title: 'Gorra', price: 600, stock: 10, pictureUrl: 'https://f.fenicio.app/imgs/ff4180/www.textilshop.com.uy/tex/a906/webp/catalogo/gorro.cas.neg1/460x460/gorro-de-lana-casquito-negro.jpg' },
    { id: 4, title: 'Calzado', price: 2600, stock: 5, pictureUrl: 'https://cdn.shopify.com/s/files/1/0389/1373/6843/products/TOP047941_Mini1.jpg?v=1623339658' },

]



export const getFetch = new Promise((res, rej) => {

    setTimeout(() => {
        res(productos)
    }, 3000);
});
