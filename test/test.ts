import { expect, tap } from 'tapbundle';
import * as smartbucket from '../ts/index';

tap.test('first test', async () => {
  console.log(smartbucket.standardExport);
});

tap.start();
