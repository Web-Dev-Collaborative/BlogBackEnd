exports.up = function(knex) {
    return knex.schema.createTable('authors', authors => {
  
      authors.increments('authorsid');
  
      authors
        .string('firstName', 256)
        .notNullable();
  
      authors 
        .string('lastName', 256)
        .notNullable();
  
      authors 
        .string('bio');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('authors');
  }