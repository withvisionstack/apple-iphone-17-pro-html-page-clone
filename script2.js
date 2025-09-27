  // Mapeamento de imagens por cor (cada cor com múltiplas imagens)
    const imagensPorCor = {
        "Prateado": [
            "/images/iphone-prateado.webp",
            "/images/iphone-prateado2.webp",
            "/images/iphone-prateado3.webp"
        ],
        "Laranja-cósmico": [
            "/images/iphone-laranja-cosmico.jpg",
            "/images/iphone-laranja-cosmico2.webp",
            "/images/iphone-laranja-cosmico3.jpg",
            "/images/iphone-laranja-cosmico4.jpg"
        ],
        "Azul-intenso": [
            "/images/iphone-azul-intenso.webp",
            "/images/iphone-azul-intenso2.webp",
            "/images/iphone-azul-intenso3.webp"
        ]
    };

    let imagens = []; // vai ser preenchido com base na cor
    let indiceAtual = 0;

    let configuracao = {
        modelo: 'pro',
        cor: 'Prateado',
        armazenamento: '256GB',
        preco: 11499
    };

    // Função para mudar imagem do carrossel manualmente (setas)
    function mudarImagem(direcao) {
        const img = document.getElementById("iphone-image");

        if (!imagens.length) return;

        img.classList.remove("opacity-100");
        img.classList.add("opacity-0");

        setTimeout(() => {
            indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
            img.src = imagens[indiceAtual];
            img.classList.remove("opacity-0");
            img.classList.add("opacity-100");
        }, 300);
    }

    // Carregar imagens iniciais ao iniciar a página
    document.addEventListener("DOMContentLoaded", () => {
        const img = document.getElementById("iphone-image");
        const imagensIniciais = imagensPorCor[configuracao.cor];

        if (img && imagensIniciais && imagensIniciais.length > 0) {
            imagens = imagensIniciais;
            indiceAtual = 0;
            img.src = imagens[indiceAtual];
            img.classList.add("opacity-100");
        } else {
            console.error("Imagens iniciais não encontradas para a cor:", configuracao.cor);
        }
    });

    // Selecionar modelo
    function selecionarModelo(modelo, event) {
        document.querySelectorAll('[onclick*="selecionarModelo"]').forEach(el => {
            el.classList.remove('border-blue-500', 'bg-blue-50');
            el.classList.add('border-gray-200');
            el.querySelector('.w-4').classList.remove('bg-blue-500');
            el.querySelector('.w-4').classList.add('border-2', 'border-gray-300');
        });

        event.target.closest('div').classList.add('border-blue-500', 'bg-blue-50');
        event.target.closest('div').classList.remove('border-gray-200');
        event.target.closest('div').querySelector('.w-4').classList.add('bg-blue-500');
        event.target.closest('div').querySelector('.w-4').classList.remove('border-2', 'border-gray-300');

        configuracao.modelo = modelo;
        atualizarResumo();
    }

    // Selecionar cor
    function selecionarCor(nomeCor, hexCor, event) {
        document.querySelectorAll('.color-option .w-12').forEach(el => {
            el.classList.remove('border-blue-500');
            el.classList.add('border-transparent');
        });

        event.target.closest('.color-option').querySelector('.w-12').classList.add('border-blue-500');
        event.target.closest('.color-option').querySelector('.w-12').classList.remove('border-transparent');

        document.getElementById('cor-selecionada').textContent = nomeCor;
        configuracao.cor = nomeCor;
        atualizarResumo();

        // Debug: verificar se a cor existe no mapeamento
        console.log('Cor selecionada:', nomeCor);
        console.log('Imagens disponíveis:', imagensPorCor[nomeCor]);

        const novasImagens = imagensPorCor[nomeCor];

        if (novasImagens && novasImagens.length > 0) {
            imagens = novasImagens;
            indiceAtual = 0;

            const img = document.getElementById("iphone-image");
            img.classList.remove("opacity-100");
            img.classList.add("opacity-0");

            setTimeout(() => {
                img.src = imagens[indiceAtual];
                img.classList.remove("opacity-0");
                img.classList.add("opacity-100");
                console.log('Imagem carregada:', imagens[indiceAtual]);
            }, 300);
        } else {
            console.error("Imagens não encontradas para a cor:", nomeCor);
            console.log("Cores disponíveis:", Object.keys(imagensPorCor));
        }
    }

    // Selecionar armazenamento
    function selecionarArmazenamento(capacidade, preco, event) {
        document.querySelectorAll('.storage-option').forEach(el => {
            el.classList.remove('border-blue-500', 'bg-blue-50');
            el.classList.add('border-gray-200');
        });

        event.target.closest('.storage-option').classList.add('border-blue-500', 'bg-blue-50');
        event.target.closest('.storage-option').classList.remove('border-gray-200');

        configuracao.armazenamento = capacidade;
        configuracao.preco = preco;
        atualizarResumo();
    }

    // Atualizar resumo
    function atualizarResumo() {
        const modeloTexto = configuracao.modelo === 'pro' ? 'iPhone 17 Pro' : 'iPhone 17 Pro Max';
        document.getElementById('resumo-modelo').textContent = modeloTexto;
        document.getElementById('resumo-cor').textContent = configuracao.cor;
        document.getElementById('resumo-armazenamento').textContent = configuracao.armazenamento;
        document.getElementById('preco-total').textContent = `R$ ${configuracao.preco.toLocaleString('pt-BR')},00`;
    };


    document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const menuMobile = document.getElementById('menu-mobile');

  menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('hidden');
  });
});