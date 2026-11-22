
import Image from "next/image";
import Link from "next/link";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import styles from "./page.module.css";

/* =========================================================
   Dados dos cartões de funcionalidade
   ========================================================= */

const funcionalidades = [
  {
    id: "projetos",
    imagem: "/card-projetos.jpg",
    alt: "Bolsa de crochê, amigurumi e peças artesanais",
    titulo: "Meus Projetos",
    descricao:
      "Cadastre, organize e acompanhe cada trabalho do início ao fim. Registre o ponto, a linha e o progresso.",
  },
  {
    id: "materiais",
    imagem: "/card-materiais.jpg",
    alt: "Novelos de fios, agulhas e botões",
    titulo: "Meus Materiais",
    descricao:
      "Controle fios, novelos, agulhas e acessórios. Saiba o que você tem e o que precisa comprar.",
  },
  {
    id: "calculadoras",
    imagem: "/card-calculadora.jpeg",
    alt: "Calculadora, fita métrica e materiais de crochê",
    titulo: "Calculadoras",
    descricao:
      "Estime custos, quantidades de fio e tamanhos de peças com facilidade, sem precisar de papel.",
  },
  {
    id: "biblioteca",
    imagem: "/card-bibliotecas.jpeg",
    alt: "Caderno artesanal com anotações e amostras de pontos de crochê",
    titulo: "Biblioteca",
    descricao:
      "Guarde pontos favoritos, tutoriais e inspirações em um só lugar, sempre à mão quando precisar.",
  },
];

/* =========================================================
   Página inicial pública
   ========================================================= */

export default function PaginaInicial() {
  return (
    <div className={styles.pagina}>
      <Cabecalho />

      {/* SEÇÃO B — Banner principal */}
      <section className={styles.banner} aria-label="Apresentação">
        <div className={styles.bannerImagem}>
          <Image
            src="/banner-atelie.jpg"
            alt="Ateliê artesanal vintage com novelos coloridos em prateleiras de madeira e luz quente"
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <div className={styles.bannerOverlay} />

        <div className={styles.bannerConteudo}>
          <p className={styles.bannerPreTitulo}>
            BEM-VINDA AO MEU CROCHÊ
          </p>

          <h1 className={styles.bannerTitulo}>
            Seu cantinho para criar,&nbsp;organizar e se&nbsp;inspirar.
          </h1>

          <p className={styles.bannerDescricao}>
            Organize seus projetos, cuide dos seus materiais e acompanhe cada
            criação com carinho.
          </p>

          <div className={styles.bannerBotoes}>
            <Link href="/login" className={styles.botaoPrimario}>
              ENTRAR NO MEU ATELIÊ
            </Link>

            <a
              href="#funcionalidades"
              className={styles.botaoSecundario}
            >
              CONHECER O SISTEMA
            </a>
          </div>
        </div>

        <div
          className={styles.bannerDecorLinha}
          aria-hidden="true"
        />
      </section>

      {/* SEÇÃO C — Apresentação do sistema */}
      <section
        className={styles.apresentacao}
        id="sobre"
        aria-label="Sobre o Meu Crochê"
      >
        <div className={styles.containerCentrado}>
          <span className={styles.sectionTag}>
            ✦ sobre o sistema
          </span>

          <h2 className={styles.sectionTitulo}>
            Muito mais que organizar, um espaço para suas criações.
          </h2>

          <p className={styles.sectionTexto}>
            O Meu Crochê nasceu para ser o seu ateliê digital. Um lugar onde
            cada projeto tem a sua história, cada fio tem o seu lugar e cada
            inspiração fica guardada com cuidado. Pensado para quem ama criar
            com as mãos e quer ter tudo organizado do seu jeito.
          </p>
        </div>
      </section>

      {/* Divisória decorativa */}
      <div
        className={styles.divisoria}
        aria-hidden="true"
      >
        <span className={styles.divisoriaOrnamento}>✦</span>
      </div>

      {/* SEÇÃO D — Funcionalidades */}
      <section
        className={styles.funcionalidades}
        id="funcionalidades"
        aria-label="Funcionalidades"
      >
        <div className={styles.containerCentrado}>
          <span className={styles.sectionTag}>
            ✦ o que você encontra aqui
          </span>

          <h2 className={styles.sectionTitulo}>
            Tudo o que você precisa, em um só lugar.
          </h2>
        </div>

        <div className={styles.cartoes}>
          {funcionalidades.map((item) => (
            <article
              key={item.id}
              className={styles.cartao}
            >
              {/* Fotografia do cartão */}
              <div className={styles.cartaoFoto}>
                <Image
                  src={item.imagem}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>

              {/* Conteúdo textual */}
              <div className={styles.cartaoCorpo}>
                <h3 className={styles.cartaoTitulo}>
                  {item.titulo}
                </h3>

                <p className={styles.cartaoDescricao}>
                  {item.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEÇÃO E — Destaque */}
      <section
        className={styles.destaque}
        aria-label="Destaque"
      >
        <div className={styles.containerCentrado}>
          <div
            className={styles.destaqueOrnamento}
            aria-hidden="true"
          >
            ✦ ✦ ✦
          </div>

          <blockquote className={styles.destaqueFrase}>
            "Cada ponto é uma história. Cada projeto, uma conquista.
            <br />
            Agora você tem um espaço só seu para guardar tudo isso."
          </blockquote>

          <p className={styles.destaqueSubtexto}>
            Linhas simples podem construir sonhos enormes.
          </p>
        </div>
      </section>

      {/* SEÇÃO F — Chamada para cadastro */}
      <section
        className={styles.chamadaCadastro}
        id="comecar"
        aria-label="Criar conta"
      >
        <div className={styles.containerCentrado}>
          <span className={styles.sectionTagClaro}>
            ✦ comece agora
          </span>

          <h2 className={styles.chamadaTitulo}>
            Seu próximo projeto começa aqui.
          </h2>

          <p className={styles.chamadaTexto}>
            Crie sua conta gratuitamente e organize todos os seus projetos de
            crochê em um espaço elegante e pensado para você.
          </p>

          <div className={styles.chamadaBotoes}>
            <Link
              href="/cadastro"
              className={styles.botaoPrimarioEscuro}
            >
              CRIAR MINHA CONTA
            </Link>

            <Link
              href="/login"
              className={styles.botaoSecundarioEscuro}
            >
              Já tenho conta — Entrar
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO G — Rodapé */}
      <Rodape />
    </div>
  );
}
