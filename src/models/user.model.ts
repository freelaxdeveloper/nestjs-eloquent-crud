import Database from '../database';
import * as bcrypt from 'bcrypt';
import { ulid } from 'ulid';

const db = Database.getInstance();
const bookshelf = db.getBookshelf();

export default bookshelf.Model.extend({
  tableName: 'users',
  softDelete: true,
  hasTimestamps: ['created_at', 'updated_at'],
  hidden: ['password'],

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
