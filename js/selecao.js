document.getElementById('inputType').addEventListener('change', function() {
    const inputType = this.value;
    const outputType = document.getElementById('outputType').value;

    // Desabilita a opção de saída selecionada se for igual à entrada
    const outputOptions = document.getElementById('outputType').querySelectorAll('option');
    outputOptions.forEach(option => {
        if (option.value === inputType) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    });

    // Se o valor da saída for igual ao da entrada, desmarque a saída
    if (inputType === outputType) {
        document.getElementById('outputType').value = '';
    }

    // Exibir as seções de coordenadas
    toggleSections(inputType, outputType);
});

document.getElementById('outputType').addEventListener('change', function() {
    const outputType = this.value;
    const inputType = document.getElementById('inputType').value;

    // Desabilita a opção de entrada selecionada se for igual à saída
    const inputOptions = document.getElementById('inputType').querySelectorAll('option');
    inputOptions.forEach(option => {
        if (option.value === outputType) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    });

    // Se o valor da entrada for igual ao da saída, desmarque a entrada
    if (inputType === outputType) {
        document.getElementById('inputType').value = '';
    }

    // Exibir as seções de coordenadas
    toggleSections(inputType, outputType);
});

function toggleSections(inputType, outputType) {
    // Inicialmente escondemos as seções
    document.getElementById('elipsoidaisInputs').classList.add('d-none');
    document.getElementById('cartesianasInputs').classList.add('d-none');
    document.getElementById('elipsoidaisOutputs').classList.add('d-none');
    document.getElementById('cartesianasOutputs').classList.add('d-none');

    // Exibir a seção de entrada
    if (inputType === 'elipsoidais') {
        document.getElementById('elipsoidaisInputs').classList.remove('d-none');
    } else if (inputType === 'cartesianas') {
        document.getElementById('cartesianasInputs').classList.remove('d-none');
    }

    // Exibir a seção de saída
    if (outputType === 'elipsoidais') {
        document.getElementById('elipsoidaisOutputs').classList.remove('d-none');
    } else if (outputType === 'cartesianas') {
        document.getElementById('cartesianasOutputs').classList.remove('d-none');
    }
}