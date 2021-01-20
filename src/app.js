

export default function app(){


   return import('./lib.js').then( result => {
        if( result && typeof result.default === 'function') {
            result.default();
        }
    });
}
