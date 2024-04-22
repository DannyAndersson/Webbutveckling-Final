// hide show additional input field based on citizenship choise
const medborgarskapAnnat = document.getElementById('medborgarskap-annat');
const annatLand = document.getElementById('annat-land');

medborgarskapAnnat.addEventListener('change', function() {
    if (this.checked) {
        annatLand.style.display = 'block';
    } else {
        annatLand.style.display = 'none';
    }
});