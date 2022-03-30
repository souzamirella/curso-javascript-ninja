/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [1 ,'Mirella,' , true , false , 2];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
  var arr = ['Santos', 10 , 'Pelé'];
 function rtrn(){
     return arr;
 }


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
rtrn()[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recive(){
    var arr1 = [521,523,525,527,529];
    var arr2 = [0];
        return arr1[arr2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var dfrn = ['curso', 5 , true, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(livro){
    var inside = {
        name1:{quantidadePaginas1: 100, autor1: 'Rômulo' ,editora1:'Franca'},
        name2:{quantidadePaginas1: 110, autor1: 'Rosangela' ,editora1:'FrancaSP'},
        name3:{quantidadePaginas1: 120, autor1: 'Debora' ,editora1:'SPFranca'}
    }
    if(!!inside[livro]){
        return inside[livro];
    } 
        return inside;
    
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('name5')

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book(name2).quantidadePaginas1

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myarray = [10,'Daciuk', null, {a:1}, function() {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myfuncton(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myfuncton(myarray)[2])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myfuncton2 (arr, index){
    return arr [index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myarray2 = ['ninja', 52.4, true, [ 1, 2, 'daciuk' ], { b : 2 } ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log( myfuncton2(myarray2, 0) );
console.log( myfuncton2(myarray2, 1) );
console.log( myfuncton2(myarray2, 2) );
console.log( myfuncton2(myarray2, 3) );
console.log( myfuncton2(myarray2, 4) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( bookname ){
    var allbooks = {
        'Segredos do ninja Javascript': {
            quantidadePaginas: 488,
            autor:'John Resig & bear',
            editora:'Novatec'
        },
        'Introdução ao HTML5': {
            quantidadePaginas:220,
            autor:'bruce & Reny',
            editora:''
        },
        'Smashing Css': {
            quantidadePaginas:283,
            autor:'Erick Mayer',
            editora:'bookman'
        },
    };
    return !bookname ? allbooks : allbooks[bookname];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book () );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomelivro = 'Introdução ao HTML5'         //****PARA PODER MUDAR O NOME DO LIVRO FACILMENTE****
console.log('O livro ' + nomelivro + ' tem '+ book( nomelivro ).quantidadePaginas +' páginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro ' + nomelivro +' é ' + book( nomelivro ).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro ' + nomelivro + ' foi publicado pela editora ' + book( nomelivro ).editora + '.');


