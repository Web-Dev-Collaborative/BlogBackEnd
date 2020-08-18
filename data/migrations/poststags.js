exports.up = function(knex) {
    return knex.schema.createTable('poststags', poststags => {
  
      poststags.increments('poststagsid');
  
      poststags
      .integer('postsid')
      .unsigned()
      .notNullable()
      .references('postsid').inTable('posts')
      .onUpdate('CASCADE').onDelete('RESTRICT');
  
      poststags 
      .integer('tagsid')
      .unsigned()
      .notNullable()
      .references('tagsid').inTable('tags')
      .onUpdate('CASCADE').onDelete('RESTRICT');

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('poststags');
  }