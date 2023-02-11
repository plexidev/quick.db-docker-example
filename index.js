const {QuickDB} = require("quick.db");
const db = new QuickDB();

async function main() {
	await db.set("hello", "world");
	console.log(`hello ${await db.get("hello")}`);
}

main();
