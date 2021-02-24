import Database from '../database';
import { ulid } from 'ulid';

const db = Database.getInstance();
const bookshelf = db.getBookshelf();

import User from './user.model';

export default bookshelf.model('Company', {
  tableName: 'companies',
  softDelete: true,
  hasTimestamps: ['created_at', 'updated_at'],

  users() {
    return this.belongsToMany(User, 'users_companies', 'company_id', 'user_id');
  },

  initialize() {
    this.on('fetching', (model, attrs, options) => {
      options.query.whereNull('deleted_at');
    });
    this.on('creating', async () => {
      this.set('ulid', ulid());
    });
  },
});
