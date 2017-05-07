class Task {
	constructor(title) {
		this._title = title;
		this.done = false;
		Task.count += 1;
		console.log("Doing a task");
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	static getDefaultTitle() {
		return "Task";
	}

	complete() {
		this.done = true;
		console.log(`The task "${this.title}" was done`);
	}
}

Task.count = 0;

class SubTask extends Task {
	constructor(title) {
		super(title); // must be first
		console.log("Doing a subTask");
	}

	complete() {
		super.complete();
		console.log(`The subTask "${this.title}" was done`);

	}
}

let task = new Task("Learn JavaScript");
let subTask = new SubTask("Learn ES6");

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);