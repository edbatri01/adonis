'use strict'

const Producto = use('App/Models/Producto')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productos
 */
class ProductoController {
  /**
   * Show a list of all productos.
   * GET productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let producto = await Producto.all();
    console.log(producto.rows);
    return response.json(producto.rows)
  }

  /**
   * Render a form to be used for creating a new producto.
   * GET productos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const nuevo = new Producto();
    nuevo.codigo = request.input('codigo')
    nuevo.nombre = request.input('nombre')
    nuevo.precio = request.input('precio')
    nuevo.cantidad = request.input('cantidad')
    nuevo.marca = request.input('marca')
    nuevo.proveedor = request.input('cantidad')
    await nuevo.save()
    return response.json(nuevo)
  }

  /**
   * Create/save a new producto.
   * POST productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single producto.
   * GET productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const producto = await Producto.find(params.id);
    return response.json(producto)

  }

  /**
   * Render a form to update an existing producto.
   * GET productos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update producto details.
   * PUT or PATCH productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const products = await Producto.find(params.id)
    products.codigo = request.input('codigo')
    products.nombre = request.input('nombre')
    products.precio = request.input('precio')
    products.cantidad = request.input('cantidad')
    products.marca = request.input('marca')
    products.proveedor = request.input('proveedor')
    await products.save()
    return response.json(products)
  }

  /**
   * Delete a producto with id.
   * DELETE productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const producto = await Producto.find(params.id);
    await producto.delete()
    return response.json(producto)
  }
}

module.exports = ProductoController
