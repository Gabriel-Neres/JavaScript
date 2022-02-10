const btn = document.querySelector('button')
const fundo = document.querySelector('div')
const classes = ['bg1', 'bg2', 'bg3']
let x = 0
let lastX;

fundo.classList.add('bg0')

    btn.addEventListener('click', (event) =>{
		lastX = x; //armazenamos o último valor de X

		//Se X for igual a quantidade de itens do array, zeramos e começamos de novo (loop)
	    if (x == classes.length) x = 0
		else x++

		//Trocamos o último valor de X pelo novo.
		fundo.classList.replace(`bg${lastX}`, `bg${x}`); 
        })
