
import { v4 as uuid} from 'uuid';
import { hash } from 'bcrypt';

import CreateConnection from '../index';

async function create () {
    const createConnection = await CreateConnection("localhost");

    const id = uuid();
    const password = await hash("admin", 8);

    await createConnection.query(
        `INSERT INTO users(id, name, username, email, password, "adminCompany", "admin", created_at)
            values('${id}','ADMINISTRADOR', 'admin', 'admin@admin.com', '${password}', true, true, 'now()')
        `
    )

    await createConnection.close;
}

create().then(() => console.log("usuário admin criado"));