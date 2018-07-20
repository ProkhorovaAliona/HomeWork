let user = [{
	name: '   _A l iona',
	surname: 'Prokhorova_   '
},{
	name: 'Alex',
	surname: 'Litvin'
}];

let keys = Object.keys(user);

keys.reduce((acc, itemKey, key) => {
	let item = user[itemKey];
	let n = item.name.trim();
	console.log(n+'=');
	console.log(item.surname);

},0);

