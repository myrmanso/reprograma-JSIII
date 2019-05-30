//window.addEventListener('DOMContentLoaded', 
//function () {
    let arrayCards =[
        {
            url: 'https://github.com/reprograma',
            imagem: 'images/pic01.jpg',
            titulo: 'Titulo 06',
            descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.',
            preco: '1000,00',
        },
        {
            url: 'https://github.com/reprograma',
            imagem: 'images/pic02.jpg',
            titulo: 'Titulo 03',
            descricao: 'Menina andando de Skate.',
            preco: '1000,00',

        },
        {
            url: 'https://github.com/reprograma',
            imagem: 'images/pic03.jpg',
            titulo: 'Titulo 02',
            descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.',
            preco: '1000,00',

        },
        {
            url: 'https://github.com/reprograma',
            imagem: 'images/pic04.jpg',
            titulo: 'Titulo 05',
            descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.',
            preco: '1000,00',

        },
        {
            url: 'https://github.com/reprograma',
            imagem: 'images/pic05.jpg',
            titulo: 'Titulo 01',
            descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.',
            preco: '1000,00',

        },
        {
            url: 'https://youtu.be/s6zR2T9vn2c',
            imagem: 'images/pic06.jpg',
            titulo: 'Titulo 04',
            descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.',
            preco: '1000,00',

        },
    ];


    const cards = (arrayCards) => {

        //o map() vai na variavel que recebe o array pq é um método específico do array, ele percorre o array.
        return arrayCards.map((item) => {
            
            return (
                `
            <div class="box">
            <img src="${item.imagem}" alt="" class="image fit" />
                <div class="inner">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}
                    </p>
                    <p>
                        Preço : R$${item.preco}
                    </p>
                    <a href="${item.url}" class="button fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
            </div>
            `
            )
        }).join("");
    }
   
    const thumbnails = document.querySelector('.thumbnails');
    thumbnails.innerHTML += cards(arrayCards);
   


    // let search = document.querySelector('button');

    // search.addEventListener('click', function filtro() {

    //     let inputValue = document.querySelector('.input__search').value.toLowerCase();

    //     let resultados = arrayCards.filter((i) => {
    //         return i.titulo..toLowerCase().includes(inputValue) || i.descricao.toLowerCase().includes(inputValue);
    //     })
    
    //     thumbnails.innerHTML = cards(resultados)  //filter gera um outro array só com os resultados que você quer e armazena em uma variável;' 
    // });


    function limpar(val) {

        // let changeToLower = this.value.toLowerCase();
        let inputValue = document.querySelector('.input__search').value.toLowerCase();

        let resultados = arrayCards.filter((i) => {
            return i.titulo.toLowerCase().includes(inputValue) || i.descricao.toLowerCase().includes(inputValue);
        })
    
        thumbnails.innerHTML = cards(resultados)  //filter gera um outro array só com os resultados que você quer e armazena em uma variável;' 

        if(!val){
            thumbnails.innerHTML = cards(arrayCards);
        }
    }

    /* Ordenar com sort() */
    function ordenar(e) {
        let ordenar = arrayCards.sort((posicaoAnterior, posicaoAtual) => {
            return posicaoAnterior.titulo < posicaoAtual.titulo ? -1 : 0;
        })

        thumbnails.innerHTML = cards(ordenar) 
    }

//});