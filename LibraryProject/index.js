console.log("this is Index page");

function Book(name, author, type) {
	this.name = name;
	this.author = author;
	this.type = type;
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function Display() {

}

Display.prototype.add = function (book) {
	console.log("Adding to UI");
	let tablebody = document.getElementById('table-body');
	let uistring = `
					<tr>
						<td>${book.name}</td>
						<td>${book.author}</td>
						<td>${book.type}</td>
					</tr> `
	tablebody.innerHTML += uistring;
}

Display.prototype.clear = function () {
	libraryForm = document.getElementById('libraryForm');
	libraryForm.reset();
}

Display.prototype.validate = function (book) {
	if (book.name.length < 3 || book.author.length < 3) {
		return false;
	}
	else {
		return true;
	}
}

Display.prototype.show = function (type, displaymessage) {
	let message = document.getElementById('messages');
	message.innerHTML = `
						<div class="alert alert-${type} alert-dismissible fade show" role="alert">
							<strong>Messase! </strong> ${displaymessage}
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>	
								`
}


function libraryFormSubmit(e) {
	e.preventDefault();

	let name = document.getElementById('name').value;
	let author = document.getElementById('author').value;

	let fiction = document.getElementById('fiction');
	let programming = document.getElementById('programming');
	let cooking = document.getElementById('cooking');
	let type;

	if (fiction.checked) {
		type = fiction.value;
	}
	else if (programming.checked) {
		type = programming.value;
	}
	else if (cooking.checked) {
		type = cooking.value;
	}


	let book = new Book(name, author, type);
	console.log(book);

	let display = new Display();


	if (display.validate(book)) {
		display.add(book);
		display.show('success', 'Your book has been successully added');
		display.clear();
	}

	else {
		display.show('danger', 'This book cant be added');
	}



}