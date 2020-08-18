exports.up = function(knex) {
    return knex.schema.createTable('posts', posts => {
  
      posts.increments('postsid');
  
      posts
        .integer('authorsid')
        .unsigned()
        .notNullable()
        .references('authorsid').inTable('authors')
        .onUpdate('CASCADE').onDelete('RESTRICT');
  
      posts 
        .integer('likes')
        .unsigned()
        .notNullable()
        .defaultTo(0);
  
      posts 
        .integer('reads')
        .unsigned()
        .notNullable()
        .defaultTo(0);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
  }