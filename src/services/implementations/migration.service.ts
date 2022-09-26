import { IMigration } from "../interfaces/imigration.service";
const { exec } = require('child_process');

export class Migration implements IMigration {

    async migrateTables(reject, resolve) {
        
        await new Promise(() => {
            const migrate = exec(
                'sequelize db:migrate',
                { env: process.env },
                err => (err ? reject(err) : resolve())
            );

            // Forward stdout+stderr to this process
            migrate.stdout.pipe(process.stdout);
            migrate.stderr.pipe(process.stderr);
        });
    }
    async seedData(reject, resolve) {

        await  new Promise(() => {
            const migrate = exec(
                'sequelize db:seed:all',
                { env: process.env },
                err => (err ? reject(err) : resolve())
            );

            // Forward stdout+stderr to this process
            migrate.stdout.pipe(process.stdout);
            migrate.stderr.pipe(process.stderr);
        });

     }

}