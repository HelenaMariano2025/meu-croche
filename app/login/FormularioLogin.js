
"use client";

import { useState } from "react";
import { autenticarUsuario } from "@/app/actions/authActions";
import styles from "./login.module.css";

export default function FormularioLogin() {
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleLogin(formData) {
    setCarregando(true);
    setMensagem("");

    try {
      const resultado = await autenticarUsuario(formData);

      if (resultado && !resultado.success) {
        setMensagem(resultado.message);
      }
    } catch {
      setMensagem("Ocorreu um erro ao entrar. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form action={handleLogin} className={styles.formulario}>
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
          placeholder="Digite sua senha"
          autoComplete="current-password"
          required
        />
      </div>

      {mensagem && (
        <p
          className={styles.mensagemErro}
          role="alert"
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
        {carregando ? "Entrando..." : "Entrar na minha conta"}
      </button>
    </form>
  );
}
