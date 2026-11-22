
"use client";

import { useState } from "react";
import { cadastrarUsuario } from "@/app/actions/authActions";
import styles from "./cadastro.module.css";

export default function FormularioCadastro() {
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function handleCadastro(formData) {
    setCarregando(true);
    setMensagem("");

    try {
      const resultado = await cadastrarUsuario(formData);

      setMensagem(resultado.message);
      setSucesso(resultado.success);
    } catch {
      setMensagem("Ocorreu um erro. Tente novamente.");
      setSucesso(false);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form action={handleCadastro} className={styles.formulario}>
      <div className={styles.campo}>
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Como podemos chamar você?"
          maxLength={100}
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          autoComplete="email"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Mínimo de 8 caracteres"
          minLength={8}
          autoComplete="new-password"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="confirmarSenha">Confirmar senha</label>
        <input
          id="confirmarSenha"
          name="confirmarSenha"
          type="password"
          placeholder="Digite a senha novamente"
          minLength={8}
          autoComplete="new-password"
          required
        />
      </div>

      {mensagem && (
        <p
          className={sucesso ? styles.mensagemSucesso : styles.mensagemErro}
          role="status"
          aria-live="polite"
        >
          {mensagem}
        </p>
      )}

      <button
        type="submit"
        className={styles.botao}
        disabled={carregando}
      >
        {carregando ? "Criando conta..." : "Criar minha conta"}
      </button>
    </form>
  );
}
