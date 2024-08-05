import Students from './models/student';

async function init() {
    const isDev = true;

    await Students.sync({ alter: isDev });
}

const dbInit = () => {
    init();
}

export default dbInit;
