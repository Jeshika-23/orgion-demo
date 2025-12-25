
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                shop: resolve(__dirname, 'shop.html'),
                contact: resolve(__dirname, 'contact.html'),
                cart: resolve(__dirname, 'cart.html'),
                checkout: resolve(__dirname, 'checkout.html'),
                product: resolve(__dirname, 'product.html'),
                haircare: resolve(__dirname, 'haircare.html'),
                soaps: resolve(__dirname, 'soaps.html'),
                oils: resolve(__dirname, 'oils.html'),
            },
        },
    },
});
