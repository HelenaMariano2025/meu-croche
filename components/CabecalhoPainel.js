import Link from "next/link";
import styles from "./CabecalhoPainel.module.css";

export default function CabecalhoPainel() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        {/* Logotipo — leva de volta ao início do painel */}
        <Link href="/inicio" className={styles.logotipo}>
          <span className={styles.logotipoIcone}>✦</span>
          Meu Crochê
        </Link>

        {/* Navegação da área privada */}
        <nav className={styles.navegacao} aria-label="Navegação do painel">
          <Link href="/inicio" className={styles.linkNav}>
            Início
          </Link>
          <Link href="/inicio/projetos" className={styles.linkNav}>
            Projetos
          </Link>
          <Link href="/inicio/materiais" className={styles.linkNav}>
            Materiais
          </Link>
          <Link href="/inicio/calculadoras" className={styles.linkNav}>
            Calculadoras
          </Link>
          <Link href="/inicio/biblioteca" className={styles.linkNav}>
            Biblioteca
          </Link>
        </nav>

        {/* Área de perfil e saída */}
        <div className={styles.acoes}>
          {/* Ícone de perfil (placeholder visual — sem funcionalidade ainda) */}
          <div className={styles.perfil} aria-label="Perfil do usuário" role="img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.perfilIcone}
              aria-hidden="true"
            >
              <circle cx="16" cy="11" r="5" />
              <path d="M4 28c0-6.627 5.373-10 12-10s12 3.373 12 10" />
            </svg>
            <span className={styles.perfilNome}>Minha conta</span>
          </div>

          {/* Botão Sair (visual — sem funcionalidade de autenticação ainda) */}
          <Link href="/" className={styles.botaoSair}>
            Sair
          </Link>
        </div>

        {/* Menu mobile */}
        <input
          type="checkbox"
          id="menuPainel"
          className={styles.menuCheckbox}
          aria-hidden="true"
        />
        <label htmlFor="menuPainel" className={styles.menuIcone} aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={styles.menuMobile}>
          <Link href="/inicio" className={styles.linkNav}>Início</Link>
          <Link href="/inicio/projetos" className={styles.linkNav}>Projetos</Link>
          <Link href="/inicio/materiais" className={styles.linkNav}>Materiais</Link>
          <Link href="/inicio/calculadoras" className={styles.linkNav}>Calculadoras</Link>
          <Link href="/inicio/biblioteca" className={styles.linkNav}>Biblioteca</Link>
          <div className={styles.menuMobileDivisor} />
          <Link href="/" className={styles.botaoSairMobile}>Sair</Link>
        </div>
      </div>
    </header>
  );
}
