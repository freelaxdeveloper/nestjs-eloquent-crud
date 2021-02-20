import Database from '../database';

const db = Database.getInstance();
const bookshelf = db.getBookshelf();

export default bookshelf.model('User', {
  tableName: 'users',
  hidden: ['password'],
});
