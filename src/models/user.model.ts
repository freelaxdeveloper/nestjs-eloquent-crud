import Database from '../database';
import * as bcrypt from 'bcrypt';
import { ulid } from 'ulid';

const db = Database.getInstance();
const bookshelf = db.getBookshelf();

import Address from './address.model';
import Company from './company.model';

export default bookshelf.model('User', {
  tableName: 'users',
  softDelete: true,
  hasTimestamps: ['created_at', 'updated_at'],
  hidden: ['password'],

  addresses() {
    return this.hasMany(Address);
  },

  companies() {
    return this.belongsToMany(Company, 'users_companies', 'user_id', 'company_id');
  },

  initialize() {
    this.on('fetching', (model, attrs, options) => {
      options.query.whereNull('deleted_at');
    });

    this.on('creating', async (model) => {
      const hashPassword = await bcrypt.hashSync(
        String(model.attributes['password']),
        10,
      );
      this.set('password', hashPassword);
      this.set('ulid', ulid());
    });

    this.on('updating', async (model) => {
      const hashPassword = await bcrypt.hashSync(
        String(model.attributes['password']),
        10,
      );
      if (model.attributes['password']) {
        this.set('password', hashPassword);
      }
    });
  },
});
