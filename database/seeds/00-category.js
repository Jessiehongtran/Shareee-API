
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        { category_name: 'book'},
        { category_name: 'movie'},
        { category_name: 'music'}
      ]);
    });
};
