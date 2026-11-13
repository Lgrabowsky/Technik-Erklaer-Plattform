import * as migration_20261113_131605_initial from './20261113_131605_initial';

export const migrations = [
  {
    up: migration_20261113_131605_initial.up,
    down: migration_20261113_131605_initial.down,
    name: '20261113_131605_initial'
  },
];
