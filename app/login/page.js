
import Link from "next/link";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import FormularioLogin from "./FormularioLogin";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.pagina}>
      <Cabecalho />

      <section className={styles.conteudo}>
        <div className={styles.cartao}>
          <header className={styles.cabecalho}>
            <p className={styles.subtitulo}>Que bom ter você de volta</p>

            <h1 className={styles.titulo}>
              Entre na sua conta
            </h1>

            <p className={styles.descricao}>
              Acesse seu espaço criativo e continue organizando suas criações.
            </p>
          </header>

          <FormularioLogin />

          <p className={styles.rodapeFormulario}>
            Ainda não tem uma conta?{" "}
            <Link href="/cadastro" className={styles.link}>
              Criar conta
            </Link>
          </p>
        </div>
      </section>

      <Rodape />
    </main>
  );
}
