// Update with your config settings.

module.exports = {
  
  development: {
    client: 'sqlite3',
    connection: { 
      filename: './data/MedCabinet.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './data/seeds' 
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    }
  },
  seedData: {
    client: 'sqlite3',
    connection: { 
      filename: './data/cannabis.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './data/seeds' 
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    }
  },

};
