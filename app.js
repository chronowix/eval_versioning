function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier titre";
    editBtn.onclick = () => {
      // Insérer ici le code pour modifier le titre du livre
        let input = document.createElement('input');
        input.type = 'text'; // typage de la variable input
        input.value = book.title; // valeur de la variable (ici titre du livre)
        let validateBtn = document.createElement('button'); //btn pour valider la modif
        validateBtn.textContent = "Valider la modification";
        validateBtn.onclick = () => { // ce qui se passe lorsqu'on clique sur Valider la modification
            books[index].title = input.value; //change l'ancien titre avec le nouveau
            renderBooks();
        };
        tr.innerHTML =''
        tr.appendChild(input);
        tr.appendChild(validateBtn);
        //seule chose pas réussi: faire en sorte que le titre reste changé dans le localStorage après un refresh
    };
    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
