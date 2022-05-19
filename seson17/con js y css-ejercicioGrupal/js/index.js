const ordSubmit = document.querySelector('.orderSubmit');

function ordenalo() {
  const ordSubmit = document.querySelector('.orderSubmit');
    const n1 = Number(document.querySelector('#num1').value);
    const n2 = Number(document.querySelector('#num2').value);
    const n3 = Number(document.querySelector('#num3').value);
    const n4 = Number(document.querySelector('#num4').value);

    var lista = [n1, n2, n3, n4];
    var n, i, k, aux;
    n = lista.length;
   //https://3con14.biz/js/tips-and-tricks/17-ordenamiento-por-burbuja.html#demo
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
      for (i = 0; i < (n - k); i++) {
        if (lista[i] > lista[i + 1]) {
          aux = lista[i];
          lista[i] = lista[i + 1];
          lista[i + 1] = aux;
        }
      }
    }
    const numerosordenados = document.querySelector('.numerosordenados')
    numerosordenados.textContent = 'Probando: ' + lista;

    ordSubmit.addEventListener('click', ordenalo);
  }
  