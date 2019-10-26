'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Registro extends Model {
    static get table () {
        return 'registros'
    }
}

module.exports = Registro
