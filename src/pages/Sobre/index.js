import React from "react";

import Header from "../../components/Header";
import Topografo from "../../assets/topografo.jpg";
import "./styles.css";

export default function Sobre() {
    return (
        <>
        <Header/>
        <main className="conteudo-principal">
                <aside className="left">
                    <div className="conteudo-left">
                        <h2>Texto com título sobre topografia</h2>
                        <p>Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        </p>

                        <h2 className="segundo-bloco">Mais sobre nós</h2>
                        <p>Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        Parágrafo sobre topografia, contendo algo extremamente interessante, porém não pe o caso no momento.
                        </p>
                    </div>
                </aside>
                <aside className="right">
                    <img src={Topografo} alt="Topografo" />
                </aside>
            </main>
        </>
    );
}
