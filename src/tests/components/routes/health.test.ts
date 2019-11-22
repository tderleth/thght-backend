/* eslint-disable import/no-extraneous-dependencies */

import * as request from 'supertest';
import { app } from '../../../app';

describe('component/routes/health', () => {
  it('should return status OK', async () => {
    const { body } = await request(app)
      .get('/health')
      .set('Accept', 'application/json')
      .expect(200);

    expect(body).toEqual({
      status: 'OK',
    });
  });
});
