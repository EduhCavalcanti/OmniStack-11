
exports.up = function (knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    //Vai fazer o relacionamento com a tabela Ong
    table.string('ong_id').notNullable();
    //Vai criar a chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs')
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};
