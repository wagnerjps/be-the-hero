// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'd6m90fld1n8196',
      user:     'bolcuvedqzqqij',
      password: 'c0d76b66a52da7f6d99810c55dfce7cb7293b108ca16d6d12c5c8c2f41cc755a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'd6m90fld1n8196',
      user:     'bolcuvedqzqqij',
      password: 'c0d76b66a52da7f6d99810c55dfce7cb7293b108ca16d6d12c5c8c2f41cc755a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
