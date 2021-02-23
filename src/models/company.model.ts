import Database from '../database';
import { ulid } from 'ulid';

const db = Database.getInstance();
const bookshelf = db.getBookshelf();

export default bookshelf.Model.extend({
  tableName: 'companies',
  softDelete: true,
  hasTimestamps: ['created_at', 'updated_at'],

  initialize() {
    this.on('fetching', (model, attrs, options) => {
      options.query.whereNull('deleted_at');
    });
    this.on('creating', async () => {
      this.set('ulid', ulid());
    });
  },
});
