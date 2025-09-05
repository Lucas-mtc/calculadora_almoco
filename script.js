function calcularRetorno() {
  const input = document.getElementById("horaSaida").value;
  if (!input) {
    alert("Por favor, informe o horário de saída.");
    return;
  }

  const [horas, minutos] = input.split(":").map(Number);
  let totalMinutos = horas * 60 + minutos;
  totalMinutos += 90;
  totalMinutos = totalMinutos % (24 * 60);

  const horasRetorno = Math.floor(totalMinutos / 60);
  const minutosRetorno = totalMinutos % 60;

  const retornoFormatado = `${String(horasRetorno).padStart(2, "0")}:${String(
    minutosRetorno
  ).padStart(2, "0")}`;
  document.getElementById(
    "resultado"
  ).textContent = `Você deve retornar às ${retornoFormatado}`;
}
