
"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function cadastrarUsuario(formData) {
  const nome = formData.get("nome");
  const email = formData.get("email");
  const senha = formData.get("senha");
  const confirmarSenha = formData.get("confirmarSenha");

  if (
    typeof nome !== "string" ||
    typeof email !== "string" ||
    typeof senha !== "string" ||
    typeof confirmarSenha !== "string"
  ) {
    return {
      success: false,
      message: "Dados inválidos.",
    };
  }

  const nomeLimpo = nome.trim();
  const emailLimpo = email.trim().toLowerCase();

  if (!nomeLimpo || !emailLimpo || !senha || !confirmarSenha) {
    return {
      success: false,
      message: "Preencha todos os campos.",
    };
  }

  if (nomeLimpo.length > 100) {
    return {
      success: false,
      message: "O nome deve ter no máximo 100 caracteres.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo)) {
    return {
      success: false,
      message: "Informe um e-mail válido.",
    };
  }

  if (senha.length < 8) {
    return {
      success: false,
      message: "A senha deve ter pelo menos 8 caracteres.",
    };
  }

  if (senha !== confirmarSenha) {
    return {
      success: false,
      message: "As senhas não coincidem.",
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: emailLimpo,
    password: senha,
    options: {
      data: {
        nome: nomeLimpo,
      },
    },
  });

  if (error) {
    console.error("Erro no cadastro:", error.message, error.status, error.code);

    return {
      success: false,
      message: "Não foi possível realizar o cadastro. Verifique os dados e tente novamente.",
    };
  }

  return {
    success: true,
    message: "Cadastro realizado! Verifique seu e-mail caso seja necessária a confirmação da conta.",
  };
}


export async function autenticarUsuario(formData) {
  const email = formData.get("email");
  const senha = formData.get("senha");

  if (
    typeof email !== "string" ||
    typeof senha !== "string" ||
    !email.trim() ||
    !senha
  ) {
    return {
      success: false,
      message: "Preencha o e-mail e a senha.",
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password: senha,
  });

  if (error) {
    return {
      success: false,
      message: "E-mail ou senha incorretos. Verifique seus dados e tente novamente.",
    };
  }

  redirect("/inicio");
}


export async function sairDaConta() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}

