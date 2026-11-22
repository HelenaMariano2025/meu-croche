import styles from "./Rodape.module.css";

export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.marca}>
          <span className={styles.icone}>✦</span>
          <span className={styles.nome}>Meu Crochê</span>
        </div>
        <p className={styles.descricao}>
          Um espaço para organizar seus projetos, cuidar dos seus materiais e
          acompanhar cada criação com carinho.
        </p>
        <p className={styles.copyright}>
          &copy; {anoAtual} Meu Crochê. Feito com carinho.
        </p>
      </div>
    </footer>
  );
}
