
import { v4 as uuid} from 'uuid';
import { hash } from 'bcrypt';

import CreateConnection from '../index';

async function create () {
    const createConnection = await CreateConnection("localhost");

    const id = uuid();
    const password = await hash("admin", 8);

    await createConnection.query(
        `INSERT INTO users(id, name, username, email, password, "adminCompany", "admin", company_id, created_at)
            values('${id}','Diego Bayerl Hupp', 'admin', 'dbayerlhupp@admin.com', '${password}', true, true, null, 'now()')
        `
    )

    await createConnection.close;
}

create().then(() => console.log("usuário admin criado"));