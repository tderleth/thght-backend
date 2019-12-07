/* eslint-disable import/no-extraneous-dependencies */

import { db } from '../../../database';

describe('component/database/connection', () => {
  it('should return tbd', async () => {
    const response = await db.raw('select 1+1 as result');
    expect(response.rows).toEqual([{ result: 2 }]);
  });
});
