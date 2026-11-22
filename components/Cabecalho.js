import Link from "next/link";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        {/* Logotipo textual */}
        <Link href="/" className={styles.logotipo}>
          <span className={styles.logotipoIcone}>✦</span>
          Meu Crochê
        </Link>

        {/* Navegação interna */}
        <nav className={styles.navegacao} aria-label="Navegação principal">
          <Link href="#funcionalidades" className={styles.linkNav}>
            Funcionalidades
          </Link>
          <Link href="#sobre" className={styles.linkNav}>
            Sobre
          </Link>
          <Link href="#comecar" className={styles.linkNav}>
            Começar
          </Link>
        </nav>

        {/* Botões de acesso */}
        <div className={styles.acoes}>
          <Link href="/login" className={styles.botaoEntrar}>
            Entrar
          </Link>
          <Link href="/cadastro" className={styles.botaoCadastro}>
            Criar conta
          </Link>
        </div>

        {/* Menu mobile (ícone hambúrguer acessível via CSS) */}
        <input
          type="checkbox"
          id="menuMobile"
          className={styles.menuCheckbox}
          aria-hidden="true"
        />
        <label htmlFor="menuMobile" className={styles.menuIcone} aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={styles.menuMobile}>
          <Link href="#funcionalidades" className={styles.linkNav}>
            Funcionalidades
          </Link>
          <Link href="#sobre" className={styles.linkNav}>
            Sobre
          </Link>
          <Link href="#comecar" className={styles.linkNav}>
            Começar
          </Link>
          <Link href="/login" className={styles.botaoEntrar}>
            Entrar
          </Link>
          <Link href="/cadastro" className={styles.botaoCadastroMobile}>
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
