'use strict'
const Registro = use('App/Models/Registro')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with registros
 */
class RegistroController {
  /**
   * Show a list of all registros.
   * GET registros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let registro = await Registro.all()
    console.log(registro)
    return response.json(registro)
  }

  /**
   * Render a form to be used for creating a new registro.
   * GET registros/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const nuevo = new Registro();
    nuevo.fecha = request.input('fecha')
    nuevo.producto_id = request.input('producto_id')
    nuevo.total = request.input('total')
    await nuevo.save()
    return response.json(nuevo)
  }

  /**
   * Create/save a new registro.
   * POST registros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single registro.
   * GET registros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const registro = await Registro.find(params.id);
    return response.json(registro)
  }

  /**
   * Render a form to update an existing registro.
   * GET registros/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  
  }

  /**
   * Update registro details.
   * PUT or PATCH registros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const registro = await Registro.find(params.id)
    registro.fecha = request.input('fecha')
    registro.producto_id = request.input('producto_id')
    registro.total = request.input('total')
    await registro.save()
    return response.json(registro)
  }


  /**
   * Delete a registro with id.
   * DELETE registros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const registro = await Registro.find(params.id);
    await registro.delete()
    return response.json(registro)
  }
}

module.exports = RegistroController
