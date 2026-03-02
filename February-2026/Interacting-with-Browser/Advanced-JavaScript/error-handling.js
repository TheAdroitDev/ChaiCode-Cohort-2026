function bootNavigation(map) {
    try {
        const result = console.log(`Map is loaded ${map}`);
        if (!result) {
            throw new Error("Map was not passed in this function")
        }
        return "NAV_OK"
    } catch (error) {
        console.log(error);
        console.log(`Navigation crashed! : ${error.message}`);
    }
    finally {
        console.log('Navigation sequence completed');

    }
}
const status1 = bootNavigation(true);
console.log(`Navigation Result is: ${status1}`);
