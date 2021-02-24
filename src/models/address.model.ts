import Database from '../database';

const db = Database.getInstance();
const bookshelf = db.getBookshelf();

import User from './user.model';

export default bookshelf.model('Address', {
  tableName: 'addresses',
  softDelete: true,
  hasTimestamps: ['created_at', 'updated_at'],

  user() {
    return this.belongsTo(User);
  },
});
