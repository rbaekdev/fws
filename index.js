const fwsDdbStore = (state, setState, data) => {
	console.log(state);
	let db = state || {};
	if (data[0]) {
		const obj = Object.assign(
			{},
			...data.map((entry, i) => {
				if (i > 0) {
					const { pk, ...rest } = entry;
					return { [pk]: state[data[0]] && state[data[0]][pk] ? { ...state[data[0]][pk], ...rest } : rest };
				}
			})
		);
		db = {
			...db,
			[data[0]]: { ...db[data[0]], ...obj },
		};
		return setState(db);
	} else {
		console.error("Table name must be provided");
	}
};

// const stateExample = { posts: {} };
// const dataExample = [
// 	"posts",
// 	{ pk: 0, title: "Hello World", author: "Richard", body: "Hi there!" },
// 	{ pk: 1, title: "Goodbye", author: "Richard", body: "Have a good day!" },
// ];
// const dataExampleB = [
// 	"posts",
// 	{ pk: 0, newKey: "This is a new key" },
// 	{ pk: 2, title: "Test B", author: "Richard", body: "Hey!" },
// ];

// const setExample = (state) => {
// 	console.log("A: ", state);
// 	fwsDdbStore(state, setExampleB, dataExampleB);
// };

// const setExampleB = (state) => {
// 	console.log("B: ", state);
// };

// fwsDdbStore(stateExample, setExample, dataExample);
