'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('codigo',20).notNullable().unique()
      table.string('nombre',50).notNullable().unique()
      table.float('precio',4).notNullable()
      table.integer('cantidad').notNullable()
      table.string('marca',50).notNullable()
      table.string('proveedor',50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
