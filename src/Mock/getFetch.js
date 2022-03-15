



export const productos = [

    { id: '1', title: 'Remera clásica', category: 'remera', size: 'XS S M L XL', description: 'Confeccionado 100% algodón, color blanco',   price: 1200, stock: 6, pictureUrl: 'https://f.fenicio.app/imgs/b18e62/www.textilshop.com.uy/tex/1210/webp/catalogo/500041.bco500041.bco1/460x460/remera-sublimable-unisex-blanco-remera-sublimable-unisex-blanco.jpg' },
    { id: '2', title: 'Pantalón deportivo', category: 'pantalon', size: 'XS S M L XL', description: 'Pantalón deportivo, color negro', price: 1800, stock: 3, pictureUrl: 'https://contents.mediadecathlon.com/p1291890/k$8b32c5745b76f76b4176210e22d36362/pantalon-trekking-montana-trek-900-hombre-gris-oscuro.jpg?&f=800x800' },
    { id: '3', title: 'Gorra', category: 'gorra', size: 'Único', description: 'Gorro de lana, color negro', price: 600, stock: 10, pictureUrl: 'https://f.fenicio.app/imgs/ff4180/www.textilshop.com.uy/tex/a906/webp/catalogo/gorro.cas.neg1/460x460/gorro-de-lana-casquito-negro.jpg' },
    { id: '4', title: 'Calzado', category: 'calzado', size: '39 40 41 42 43 44 45', description: 'Calzado deportivo runner, color azul', price: 2600, stock: 5, pictureUrl: 'https://cdn.shopify.com/s/files/1/0389/1373/6843/products/TOP047941_Mini1.jpg?v=1623339658' },

    { id: '5', title: 'Remera Dama', category: 'remera', size: 'XS S M L XL', description: 'Confeccionado 100% algodón, color negro',   price: 1100, stock: 10, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_800857-MLU41408176533_042020-O.webp' },
    { id: '6', title: 'Pantalón Cargo', category: 'pantalon', size: 'S M L XL', description: 'Material principal: Algodón, Tiro medio, color negro', price: 1400, stock: 4, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_975336-MLU47544113688_092021-O.webp' },
    { id: '7', title: 'Gorra sol', category: 'gorra', size: 'Único', description: 'Modelo: Trucker', price: 1100, stock: 8, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_956462-MLU47502837628_092021-O.webp' },
    { id: '8', title: 'Zapato Botas', category: 'calzado', size: '39 40 41 42 43 44 45', description: 'Modelo: Explorer, confeccionado en cuero, color gris', price: 2600, stock: 5, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_749119-MLU48151077374_112021-O.webp' },
]



export const getFetch = new Promise((res, rej) => {

    setTimeout(() => {
        res(productos)
    }, 3000);

});

