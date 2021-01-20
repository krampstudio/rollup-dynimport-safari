(function () {
   'use strict';

   function app(){


      return Promise.resolve().then(function () { return lib$1; }).then( result => {
           if( result && typeof result.default === 'function') {
               result.default();
           }
       });
   }

   app()
       .then( () => console.log('done'))
       .catch( err => console.error(err));

   function lib() {
       console.log('imported library');
   }

   var lib$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      'default': lib
   });

}());
//# sourceMappingURL=bundle.js.map
