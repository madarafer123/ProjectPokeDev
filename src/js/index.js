/* Selects all elements with the class "pokedev" */
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

/* Adds a click event to each of the selected elements */
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev(); // Hides the currently visible card

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev); // Shows the selected pokedev's card

        desativarPokedevNaListagem(); // Removes the "ativo" class from the active pokedev in the listing
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado); // Adds the "ativo" class to the selected pokedev in the listing
    });
});

/* Function that activates (adds the "ativo" class) the selected pokedev in the listing */
function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado); // Gets the element by ID
    pokedevSelecionadoNaListagem.classList.add("ativo"); // Adds the "ativo" class to the selected pokedev
}

/* Function that deactivates (removes the "ativo" class) the currently active pokedev in the listing */
function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo"); // Selects the pokedev that is currently active
    pokedevAtivoNaListagem.classList.remove("ativo"); // Removes the "ativo" class
}

/* Function that shows the selected pokedev's card */
function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value; // Gets the ID of the clicked pokedev
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado; // Creates the ID of the corresponding card for the pokedev
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir); // Selects the card by the generated ID
    cartaoPokedevParaAbrir.classList.add("aberto"); // Adds the "aberto" class to show the card
    return idPokedevSelecionado; // Returns the ID of the selected pokedev
}

/* Function that hides the currently open card */
function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto"); // Selects the card that is open
    cartaoPokedevAberto.classList.remove("aberto"); // Removes the "aberto" class to hide it
}
