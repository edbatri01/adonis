'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistroSchema extends Schema {
  up () {
    this.create('registros', (table) => {
      table.increments()
      table.date('fecha').notNullable()
      table.integer('producto_id').unsigned().references('id').inTable('productos')
      table.float('total',4).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('registros')
  }
}

module.exports = RegistroSchema
