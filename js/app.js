$(document).ready(function() {
    
});

calculandoResposta = false;

var candidatos = {
    "Boulos": [
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0
    ],
    "Lula": [
        0,
        0,
        0,
        1,
        1,
        0.5,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0.5,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0
    ],
    "Ciro": [
        0,
        0.5,
        0,
        1,
        1,
        0.5,
        0,
        0,
        0,
        0,
        1,
        0,
        0.5,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        0
    ],
    "Marina": [
        0,
        0.5,
        0,
        0.5,
        0.5,
        0.5,
        1,
        0,
        0,
        0.5,
        0.5,
        0,
        1,
        0,
        0.5,
        1,
        1,
        0,
        0.5,
        0,
        1,
        1,
        0
    ],
    "Alvaro": [
        0.5,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        0.5,
        0.5,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        0,
        0.5,
        0,
        1,
        1
    ],
    "Meirelles": [
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0.5,
        1
    ],
    "Alckmin": [
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0.5,
        1,
        0.5,
        0.5,
        0,
        0.5,
        1,
        1,
        0,
        0.5,
        0,
        0.5,
        1
    ],
    "Amoedo": [
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0.5,
        1,
        0,
        1,
        0,
        0.5,
        0,
        0,
        1,
        1,
        0.5,
        0,
        0,
        0,
        0.5
    ],
    "Bolsonaro": [
        1,
        1,
        1,
        0,
        0.5,
        1,
        1,
        1,
        1,
        1,
        0.5,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1
    ]
}

var afinidade = {
    'Boulos'    : 0,
    'Lula'      : 0,
    'Ciro'      : 0,
    'Marina'    : 0,
    'Alvaro'    : 0,
    'Meirelles' : 0,
    'Alckmin'   : 0,
    'Amoedo'    : 0,
    'Bolsonaro' : 0,
};

var perguntaAtual = -1;

function calcularResposta(pergunta, resposta) {
    if(calculandoResposta)
        return true;

    calculandoResposta = true;
    for (const index in candidatos) {
        let candidato = candidatos[index];
        if(resposta === 0.5 || candidato[pergunta] === 0.5) {
            afinidade[index] = afinidade[index] + 0.5;
        } else if(resposta === candidato[pergunta]) {
            afinidade[index] = afinidade[index] + 1;
        }
    }

    if(perguntaAtual < 22) {
        mostrarProximaPergunta();
    } else {
        mostrarFinal();
    }
}

function mostrarFinal() {
    $(".texto").fadeOut();
    $(".escolhas").fadeOut();
    $(".loading").fadeOut();
    $("h2").fadeOut();
    $(".js-comecar").fadeOut();
    $("body").removeClass();
    keysSorted = Object.keys(afinidade).sort(function(a,b){return afinidade[b]-afinidade[a]})

    for (const index in keysSorted) {
        var candidato = keysSorted[index];
        var layout = $(".item-default").clone();
        layout.removeClass('item-default').addClass('item');
        layout.find('.nome').html(candidato);
        layout.find('.foto').attr('src', 'img/' + candidato.toLowerCase() + '.png');
        layout.find('.candidato-barra').css('width', Math.round(((afinidade[candidato]) * 100) / 23) + '%');
        layout.find('.porcentagem').html(Math.round(((afinidade[candidato]) * 100) / 23) + '%');
        $(".chart").append(layout);
    }


}

var perguntas = [
    {
        texto: 'Você é a favor das alterações realizadas na CLT e da terceirização (Reforma Trabalhista)?',
        caegoria: 'Economia',
        categoriaClasse : 'economia'
    },
    {
        texto: 'Os trabalhadores devem contribuir mais tempo para se aposentar (Reforma da Previdência)?',
        caegoria: 'Economia',
        categoriaClasse : 'economia'
    },
    {
        texto: 'Você é a favor do congelamento dos gastos com serviços públicos por 20 anos (PEC do Teto)?',
        caegoria: 'Economia',
        categoriaClasse : 'economia'
    },
    {
        texto: 'A tributação deve ser progressiva, com taxação de dividendos e de grandes heranças?',
        caegoria: 'Economia',
        categoriaClasse : 'economia'
    },
    {
        texto: 'O Estado deve investir na economia (desenvolvimentismo)?',
        caegoria: 'Economia',
        categoriaClasse : 'economia'
    },
    {
        texto: 'O ajuste fiscal deve ser a prioridade do governo?',
        caegoria: 'Economia',
        categoriaClasse : 'economia'
    },
    {
        texto: 'Os preços dos combustíveis devem flutuar segundo o mercado internacional?	',
        caegoria: 'Energia',
        categoriaClasse : 'energia'
    },
    {
        texto: 'Você é a favor do fim da política que priorizava a Petrobrás na exploração do Pré-sal (regime de partilha)?	',
        caegoria: 'Energia',
        categoriaClasse : 'energia'
    },
    {
        texto: 'As petroleiras estrangeiras devem receber isenção fiscal (MP do Trilhão)?	',
        caegoria: 'Energia',
        categoriaClasse : 'energia'
    },
    {
        texto: 'As distribuidoras de energia da Eletrobras devem ser privatizadas?	',
        caegoria: 'Energia',
        categoriaClasse : 'energia'
    },
    {
        texto: 'Deve ser feito maior investimento na saúde pública, com o SUS público e gratuito?	',
        caegoria: 'Proteção Social',
        categoriaClasse : 'protecao-social'
    },
    {
        texto: 'O uso de agrotóxicos deve ser mais flexível (com menor controle do Estado)?	',
        caegoria: 'Proteção Social',
        categoriaClasse : 'protecao-social'
    },
    {
        texto: 'Você defende a Reforma Agrária e dá prioridade à agricultura familiar?	',
        caegoria: 'Proteção Social',
        categoriaClasse : 'protecao-social'
    },
    {
        texto: 'Você concorda com o Estatuto da Família, que não reconhece a união civil de famílias LGBT?	',
        caegoria: 'Proteção Social',
        categoriaClasse : 'protecao-social'
    },
    {
        texto: 'O aborto deve deixar de ser considerado um crime?',
        caegoria: 'Proteção Social',
        categoriaClasse : 'protecao-social'
    },
    {
        texto: 'O acesso a armas de fogo deve ser controlado pelo Estado (Estatuto do Desarmamento)?	',
        caegoria: 'Segurança',
        categoriaClasse : 'seguranca'
    },
    {
        texto: 'Você concorda com a intervenção militar no Rio, em que o exército chefia a segurança pública?	',
        caegoria: 'Segurança',
        categoriaClasse : 'seguranca'
    },
    {
        texto: 'A maioridade penal deve ser reduzida para 16 anos?	',
        caegoria: 'Segurança',
        categoriaClasse : 'seguranca'
    },
    {
        texto: 'O consumo de maconha deve deixar de ser considerado um crime?	',
        caegoria: 'Segurança',
        categoriaClasse : 'seguranca'
    },
    {
        texto: 'Os professores devem ser proibidos de emitir suas opiniões e valores em sala de aula (Escola sem Partido)?',
        caegoria: 'Educação',
        categoriaClasse : 'educacao'
    },
    {
        texto: 'Deve ser feito maior investimento na educação pública (escolas e universidades)?	',
        caegoria: 'Educação',
        categoriaClasse : 'educacao'
    },
    {
        texto: 'Você concorda com a política de cotas nas universidades públicas?	',
        caegoria: 'Educação',
        categoriaClasse : 'educacao'
    },
    {
        texto: 'O currículo obrigatório do Ensino Médio deve ser reduzido?	',
        caegoria: 'Educação',
        categoriaClasse : 'educacao'
    }
];

function mostrarProximaPergunta() {
    perguntaAtual = perguntaAtual + 1;
    $("body").removeClass().addClass(perguntas[perguntaAtual].categoriaClasse);
    $(".texto").fadeOut(function() {
        $(".texto").html(perguntas[perguntaAtual].texto);
        $(".texto").fadeIn();
    });

    $(".escolhas").fadeOut(function() {
        $(".escolhas").fadeIn(function(){
            calculandoResposta = false;
        });
    });

    $("h2").fadeOut(function() {
        $("h2").html(perguntas[perguntaAtual].caegoria);
        $("h2").fadeIn();
    });
    atualizarLoading();
}

$(".js-comecar").click(function() {
    mostrarProximaPergunta();
    $(this).fadeOut();
});

$(".js-sim").click(function() {
    calcularResposta(perguntaAtual,1);
});

$(".js-depende").click(function() {
    calcularResposta(perguntaAtual,0.5);
});

$(".js-nao").click(function() {
    calcularResposta(perguntaAtual,0);
});

function atualizarLoading() {
    var n = ((perguntaAtual + 1) * 100) / 23;
    $(".loading .numero").html((perguntaAtual + 1 )+ '/23');
    $(".loading .barra").css("width", n + "%");
}