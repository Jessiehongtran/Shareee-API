
exports.up = function(knex) {
  return knex.schema.createTable('item', table => {
    table.increments()
    table.string('link')
    table.string('title')
    table.string('genre')
    table.string('by')
    table.string('review')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('added_by')
    table.integer('likes')
    table.integer('category_id')
         .notNullable()
         .unsigned()
         .references('id')
         .inTable('category')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('item');
};
