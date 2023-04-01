import React from "react";

import styles from "./Rodape.module.scss";

import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import instagramIcon from "./instagram.svg";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="http://" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Icone Facebook" />
        </a>
        <a href="http://" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Icone Facebook" />
        </a>
        <a href="http://" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Icone Facebook" />
        </a>
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  );
}

export default Rodape;
