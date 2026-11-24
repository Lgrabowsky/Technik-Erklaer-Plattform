import * as migration_20261113_131605_initial from './20261113_131605_initial';
import * as migration_20261124_174236_media_quellenangabe from './20261124_174236_media_quellenangabe';

export const migrations = [
  {
    up: migration_20261113_131605_initial.up,
    down: migration_20261113_131605_initial.down,
    name: '20261113_131605_initial',
  },
  {
    up: migration_20261124_174236_media_quellenangabe.up,
    down: migration_20261124_174236_media_quellenangabe.down,
    name: '20261124_174236_media_quellenangabe'
  },
];
