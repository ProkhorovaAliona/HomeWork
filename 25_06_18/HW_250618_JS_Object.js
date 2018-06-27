
let today = new Date();

let person = {
	initial: {
		name: 'Aliona',
		surname: 'Prokhorova',
		getName: () => {
			return this.name + ' ' + this.surname
		}
	},
	date: {
		year: 1993,
		month: 05,
		day: 31,
		getAge: () => {
			return today.getFullYear() - this.year
		}
	}
}

let fullName = document.querySelector('.fullName')
let getName = document.querySelector('.btn_name');
let Age = document.querySelector('.Age');
let getAge = document.querySelector('.btn_age');

getName.addEventListener('click', () => {
	fullName.innerHTML = person.initial.getName();
})

getAge.addEventListener('click', () => {
	Age.innerHTML = person.date.getAge();
})


