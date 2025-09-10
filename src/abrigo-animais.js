const animais = {
    Rex: { tipo: "cão", favoritos: ["RATO", "BOLA"] },
    Mimi: { tipo: "gato", favoritos: ["BOLA", "LASER"] },
    Fofo: { tipo: "gato", favoritos: ["BOLA", "RATO", "LASER"] },
    Zero: { tipo: "gato", favoritos: ["RATO", "BOLA"] },
    Bola: { tipo: "cão", favoritos: ["CAIXA", "NOVELO"] },
    Bebe: { tipo: "cão", favoritos: ["LASER", "RATO", "BOLA"] },
    Loco: { tipo: "jabuti", favoritos: ["SKATE", "RATO"] },
};

function validarEntradas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const nomesValidos = Object.keys(animais);

    const listaAnimais = ordemAnimais.split(",").map((a) => a.trim());
    const duplicados = new Set();

    for (let nome of listaAnimais) {
        if (!nomesValidos.includes(nome)) return { erro: "Animal inválido" };
        if (duplicados.has(nome))
            return { erro: "Animal selecionado mais de uma vez" };
        duplicados.add(nome);
    }

    const todosBrinquedos = new Set(
        Object.values(animais).flatMap((a) =>
            a.favoritos.map((b) => b.trim().toUpperCase())
        )
    );

    const validarLista = (lista) => {
        const vistos = new Set();
        for (let b of lista.map((a) => a.trim().toUpperCase())) {
            if (!todosBrinquedos.has(b)) {
                return { erro: "Brinquedo inválido" };
            }
            if (vistos.has(b)) {
                return { erro: "Brinquedo selecionado mais de uma vez" };
            }
            vistos.add(b);
        }
        return null;
    };

    const listaBrinquedos1 = brinquedosPessoa1
        .split(",")
        .map((a) => a.trim().toUpperCase())
        .filter((b) => b.length > 0);
    const listaBrinquedos2 = brinquedosPessoa2
        .split(",")
        .map((a) => a.trim().toUpperCase())
        .filter((b) => b.length > 0);

    let check1 = validarLista(listaBrinquedos1);
    let check2 = validarLista(listaBrinquedos2);
    if (check1) return check1;
    if (check2) return check2;

    return null;
}

function podeAdotar(possuiBrinquedos, animal, adotadosDaPessoa) {
    const favs = animais[animal].favoritos.map((f) => f.trim().toUpperCase());
    const lista = possuiBrinquedos
        .split(",")
        .map((b) => b.trim().toUpperCase())
        .filter((b) => b.length > 0);

    if (animal === "Loco") {
        return (
            favs.some((f) => lista.includes(f)) && adotadosDaPessoa.length > 0
        );
    }

    let indiceFavorito = 0;

    for (let brinquedo of lista) {
        if (
            indiceFavorito < favs.length &&
            brinquedo === favs[indiceFavorito]
        ) {
            indiceFavorito++;
        }
    }

    return indiceFavorito === favs.length;
}

class AbrigoAnimais {
    encontraPessoas(brinquedos1, brinquedos2, ordem) {
        const erro = validarEntradas(brinquedos1, brinquedos2, ordem);
        if (erro) return erro; 

        const listaAnimais = ordem.split(",").map((a) => a.trim());
        const adotadosP1 = [];
        const adotadosP2 = [];
        const resultado = [];

        for (let animal of listaAnimais) {
            let dono = "abrigo";
            const tipo = animais[animal].tipo;

            const p1PodeAdotar =
                adotadosP1.length < 3 &&
                podeAdotar(brinquedos1, animal, adotadosP1);
            const p2PodeAdotar =
                adotadosP2.length < 3 &&
                podeAdotar(brinquedos2, animal, adotadosP2);

            if (tipo === "gato") {
                if (p1PodeAdotar && p2PodeAdotar) {
                    dono = "abrigo";
                } else if (p1PodeAdotar) {
                    dono = "pessoa 1";
                    adotadosP1.push(animal);
                } else if (p2PodeAdotar) {
                    dono = "pessoa 2";
                    adotadosP2.push(animal);
                }
            } else {
                if (p1PodeAdotar) {
                    dono = "pessoa 1";
                    adotadosP1.push(animal);
                } else if (p2PodeAdotar) {
                    dono = "pessoa 2";
                    adotadosP2.push(animal);
                }
            }

            resultado.push(`${animal} - ${dono}`);
        }

        return {
            lista: resultado,
            erro: false,
        };
    }
}

export { AbrigoAnimais as AbrigoAnimais };
