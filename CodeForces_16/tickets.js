class Tickets {
	
	constructor(n) {
		this.n = n;
	}

	bayTickets() {
	
		let schoolArray = [],
			priceArray = [];
	
		for (let i = 1; i <= this.n; i += 1) {
			schoolArray[schoolArray.length] = i;
		}

		for (let j = 0; j < schoolArray.length - 1; j += 1) {
			for (let k = j + 1; k < schoolArray.length; k += 1) {
				priceArray[priceArray.length] = (schoolArray[j] + schoolArray[k]) % (this.n + 1);
			}
		}

		return Math.min(...priceArray);
	}
}

MYAPP = {}; // global object for name space

MYAPP.n = Number(prompt("Enter n :"));

let ticket = new Tickets(MYAPP.n);

console.log(ticket.bayTickets());