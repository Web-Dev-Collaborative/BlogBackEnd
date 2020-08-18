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
        .notNullable();
  
      posts 
        .integer('reads')
        .unsigned()
        .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
  }