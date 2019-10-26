'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('productos', 'ProductoController.index')
Route.get('productos/delete/:id','ProductoController.destroy')
Route.post('productos/crearProducto', 'ProductoController.create')
Route.post('productos/modificarProducto/:id','ProductoController.update')
Route.get('productos/:id','ProductoController.show')

Route.get('registros', 'RegistroController.index')
Route.get('registros/delete/:id','RegistroController.destroy')
Route.post('registros/crearRegistro', 'RegistroController.create')
Route.post('registros/modificarRegistro/:id','RegistroController.update')
Route.get('registros/:id','RegistroController.show')



