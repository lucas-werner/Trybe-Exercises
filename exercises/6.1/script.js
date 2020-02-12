window.onload = function() {

const estadosSelect = document.getElementById('estado');
const estadosList = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

estadosList.forEach(estado => {
  option = new Option(estado, estado.toLowerCase());
  estadosSelect.options[estadosSelect.options.length] = option;
});
}
