import Link from "next/link";
import CabecalhoPainel from "@/components/CabecalhoPainel";
import styles from "./page.module.css";

/* =========================================================
   Ícones SVG inline — atalhos de navegação
   ========================================================= */
function IconeMateriais() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={styles.atalhoIconeSvg} aria-hidden="true">
      <circle cx="10" cy="22" r="6" />
      <circle cx="22" cy="10" r="6" />
      <line x1="10" y1="16" x2="10" y2="6" />
      <line x1="22" y1="26" x2="22" y2="16" />
    </svg>
  );
}

function IconeCalculadoras() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={styles.atalhoIconeSvg} aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="2" />
      <rect x="9" y="7" width="14" height="5" rx="1" fill="currentColor" fillOpacity="0.08" stroke="none" />
      <line x1="9" y1="17" x2="13" y2="17" />
      <line x1="15" y1="17" x2="19" y2="17" />
      <line x1="21" y1="17" x2="23" y2="17" />
      <line x1="9" y1="21" x2="13" y2="21" />
      <line x1="15" y1="21" x2="19" y2="21" />
      <line x1="21" y1="21" x2="23" y2="21" />
      <line x1="9" y1="25" x2="13" y2="25" />
      <line x1="15" y1="25" x2="23" y2="25" />
    </svg>
  );
}

function IconeBiblioteca() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={styles.atalhoIconeSvg} aria-hidden="true">
      <path d="M4 7 C4 7, 4 25, 4 26 Q4 27 5.5 27 L15.5 27 L15.5 7 Q15.5 6 14 6 L5.5 6 Q4 6 4 7 Z"
        fill="currentColor" fillOpacity="0.05" />
      <path d="M28 7 C28 7, 28 25, 28 26 Q28 27 26.5 27 L16.5 27 L16.5 7 Q16.5 6 18 6 L26.5 6 Q28 6 28 7 Z"
        fill="currentColor" fillOpacity="0.05" />
      <line x1="16" y1="6" x2="16" y2="27" />
      <line x1="7" y1="11" x2="13" y2="11" />
      <line x1="7" y1="14" x2="13" y2="14" />
      <line x1="7" y1="17" x2="11" y2="17" />
      <line x1="19" y1="11" x2="25" y2="11" />
      <line x1="19" y1="14" x2="25" y2="14" />
      <line x1="23" y1="6" x2="23" y2="14" stroke="var(--cor-terracota)" strokeWidth="1.5" />
      <polyline points="21,14 23,17 25,14" stroke="var(--cor-terracota)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* =========================================================
   Dados dos cartões de resumo (zerados — sem dados reais ainda)
   ========================================================= */
const resumo = [
  { rotulo: "Total de projetos", valor: 0, destaque: false },
  { rotulo: "Em andamento", valor: 0, destaque: true },
  { rotulo: "Concluídos", valor: 0, destaque: false },
];

/* =========================================================
   Dados dos atalhos de navegação
   ========================================================= */
const atalhos = [
  {
    id: "materiais",
    href: "/inicio/materiais",
    Icone: IconeMateriais,
    titulo: "Meus Materiais",
    descricao: "Fios, novelos, agulhas e acessórios organizados.",
  },
  {
    id: "calculadoras",
    href: "/inicio/calculadoras",
    Icone: IconeCalculadoras,
    titulo: "Calculadoras",
    descricao: "Estime custos e quantidades com facilidade.",
  },
  {
    id: "biblioteca",
    href: "/inicio/biblioteca",
    Icone: IconeBiblioteca,
    titulo: "Biblioteca",
    descricao: "Pontos, tutoriais e inspirações guardadas.",
  },
];

/* =========================================================
   Página /inicio — Painel principal do usuário
   ========================================================= */
export default function PaginaInicio() {
  return (
    <div className={styles.pagina}>
      <CabecalhoPainel />

      <main className={styles.conteudo}>

        {/* =================================================
            SAUDAÇÃO
        ================================================= */}
        <section className={styles.saudacao} aria-label="Boas-vindas">
          <div className={styles.saudacaoTexto}>
            <p className={styles.saudacaoPreTitulo}>✦ área privada</p>
            <h1 className={styles.saudacaoTitulo}>
              Olá, seja bem-vinda ao seu ateliê!
            </h1>
            <p className={styles.saudacaoSubtitulo}>
              Aqui você encontra tudo o que precisa para organizar suas criações com carinho.
            </p>
          </div>
          <div className={styles.saudacaoOrnamento} aria-hidden="true">
            <div className={styles.saudacaoLinha} />
            <span className={styles.saudacaoSimbolo}>✦</span>
            <div className={styles.saudacaoLinha} />
          </div>
        </section>

        {/* =================================================
            CARTÕES DE RESUMO
        ================================================= */}
        <section className={styles.resumo} aria-label="Resumo dos projetos">
          <div className={styles.resumoGrid}>
            {resumo.map((item) => (
              <div
                key={item.rotulo}
                className={`${styles.resumoCartao} ${item.destaque ? styles.resumoCartaoDestaque : ""}`}
              >
                <span className={styles.resumoValor}>{item.valor}</span>
                <span className={styles.resumoRotulo}>{item.rotulo}</span>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            SEÇÃO MEUS PROJETOS
        ================================================= */}
        <section className={styles.projetos} aria-label="Meus projetos">
          <div className={styles.projetosHeader}>
            <div>
              <h2 className={styles.secaoTitulo}>Meus Projetos</h2>
              <p className={styles.secaoSubtitulo}>
                Acompanhe cada trabalho do primeiro ao último ponto.
              </p>
            </div>
            <button
              className={styles.botaoNovoProjeto}
              type="button"
              disabled
              title="Em breve disponível"
              aria-label="Novo projeto (em breve)"
            >
              + Novo projeto
            </button>
          </div>

          {/* Estado vazio */}
          <div className={styles.estadoVazio} aria-label="Nenhum projeto cadastrado">
            <div className={styles.estadoVazioIcone} aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                {/* Novelo de fio estilizado */}
                <circle cx="32" cy="32" r="20" />
                <ellipse cx="32" cy="32" rx="8" ry="20" />
                <ellipse cx="32" cy="32" rx="20" ry="8" />
                <path d="M15 20 Q32 28 49 20" />
                <path d="M15 44 Q32 36 49 44" />
              </svg>
            </div>
            <p className={styles.estadoVazioTitulo}>Nenhum projeto ainda</p>
            <p className={styles.estadoVazioTexto}>
              Quando você adicionar projetos, eles aparecerão aqui. Comece
              criando o seu primeiro!
            </p>
            <button
              className={styles.botaoIniciarProjeto}
              type="button"
              disabled
              title="Em breve disponível"
            >
              Criar primeiro projeto
            </button>
          </div>
        </section>

        {/* =================================================
            ATALHOS DE NAVEGAÇÃO
        ================================================= */}
        <section className={styles.atalhos} aria-label="Atalhos de navegação">
          <h2 className={styles.secaoTitulo}>Explorar</h2>
          <div className={styles.atalhoGrid}>
            {atalhos.map((item) => (
              <Link key={item.id} href={item.href} className={styles.atalhoCartao}>
                <div className={styles.atalhoIcone}>
                  <item.Icone />
                </div>
                <div className={styles.atalhoTexto}>
                  <h3 className={styles.atalhoTitulo}>{item.titulo}</h3>
                  <p className={styles.atalhoDescricao}>{item.descricao}</p>
                </div>
                <span className={styles.atalhoSeta} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* Rodapé simples da área privada */}
      <footer className={styles.rodape}>
        <span>✦ Meu Crochê</span>
      </footer>
    </div>
  );
}
