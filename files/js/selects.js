var select1 = document.getElementById("entry.2063734318");
select1.onchange = function() {
updateSelect2();
}
function updateSelect2() {
    document.getElementById('rubro').classList.remove('d-none'); 
    var select2 = document.getElementById("rubro");
    select2.innerHTML = "";    
    if (select1.value == "Artesanos") {
    select2.innerHTML = `<div class='form-group'>`+
        `<label>¿Que rubro?</label>`+
        `<input type='text' name='entry.531915248' id='entry.531915248' placeholder='Ingrese su rubro' class='form-control'>`+
        `</div>`;
    } else if (select1.value == "Emprendedores") {
    select2.innerHTML =  `<div class='form-group'>`+
        `<label>¿Que rubro?</label>`+
        `<input type='text' name='entry.531915248' id='entry.531915248' placeholder='Ingrese su rubro' class='form-control'>`+
        `</div>`;
    }  
}
function showDiv() {
    const selectedValue = document.querySelector('option[name="seleccion"]:checked').value;
    const addClass = selectedValue === 'Si' ? 'd-block' : 'd-none';
    const removeClass = selectedValue === 'No' ? 'd-block' : 'd-none';
    document.getElementById('ganado').classList.add(addClass);
    document.getElementById('ganado').classList.remove(removeClass);
  }  
  function showDiv2() {
    const selectedValue = document.querySelector('option[name="select"]:checked').value;
    const addClass = selectedValue === 'Si' ? 'd-block' : 'd-none';
    const removeClass = selectedValue === 'No' ? 'd-block' : 'd-none';
    document.getElementById('clientes').classList.add(addClass);
    document.getElementById('clientes').classList.remove(removeClass);
  }  