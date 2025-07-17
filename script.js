
function calcularIMC() {
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const resultado = document.getElementById("resultado");
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  // Limpa resultado ao digitar
  pesoInput.addEventListener('input', () => resultado.innerHTML = "");
  alturaInput.addEventListener('input', () => resultado.innerHTML = "");

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.innerHTML = "Por favor, preencha os campos corretamente.";
    resultado.style.color = "#ffcc00";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> - <span>${classificacao}</span>`;
  resultado.style.color = "#ffffff";
  resultado.setAttribute('aria-live', 'polite');
  resultado.setAttribute('role', 'status');

  // Foca no resultado para acessibilidade
  resultado.focus && resultado.focus();
}
