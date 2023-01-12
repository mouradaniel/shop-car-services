import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 7);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, document, username, "isAdmin", created_at)
      values('${id}', 'admin', 'admin@shopcar.com', '${password}', '11122233312', 'admin_shop', true, 'now()')
    `,
  );
}

create().then(() => console.log('Admin created!'));
