//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/////// EN ESTE ARCHIVO SE LEVANTA EL SERVIDOR, POR ESO INDICA EN QUE PUERTO /////////////////
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { /// FORCE TRUE ES PARA QUE SE REINICIE LA BASE DE DATOS CADA QUE LEVANTAMOS EL SERVIDOR
  server.listen(3001, () => {   /// SE LEVANTA EL SERVIDOR
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
