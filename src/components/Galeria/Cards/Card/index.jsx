import React from "react";
import open from "./open.png";
import like from "./favorito.png";

export default function Card({ item, styles }) {
  return (
    <li className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={like} alt="ícone coração de curtir" />
          <img src={open} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  );
}
