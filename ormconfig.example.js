const config = {
  development: {
    username: 'postgres',
    password: '',
    database: 'starter_development',
    host: '127.0.0.1',
    type: 'postgres',
    entities: ['**/**/*.entity.ts'],
    migrations: ['migration/*.ts'],
    cli: {
      migrationsDir: 'migration',
    },
  },
  test: {
    username: 'postgres',
    password: '',
    database: 'starter_test',
    host: '127.0.0.1',
    type: 'postgres',
    logging: false,
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];
