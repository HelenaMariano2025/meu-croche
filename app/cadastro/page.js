
import Link from "next/link";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import FormularioCadastro from "./FormularioCadastro";
import styles from "./cadastro.module.css";

export default function CadastroPage() {
  return (
    <main className={styles.pagina}>
      <Cabecalho />

      <section className={styles.conteudo}>
        <div className={styles.cartao}>
          <header className={styles.cabecalho}>
            <p className={styles.subtitulo}>Seu espaço criativo</p>

            <h1 className={styles.titulo}>
              Crie sua conta
            </h1>

            <p className={styles.descricao}>
              Organize seus projetos, cuide dos seus materiais e acompanhe
              cada criação.
            </p>
          </header>

          <FormularioCadastro />

          <p className={styles.rodapeFormulario}>
            Já tem uma conta?{" "}
            <Link href="/login" className={styles.link}>
              Entrar
            </Link>
          </p>
        </div>
      </section>

      <Rodape />
    </main>
  );
}
