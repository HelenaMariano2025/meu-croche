
-- ============================================
-- 1. TABELA DE PERFIS
-- ============================================

CREATE TABLE public.perfis (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  tipo_usuario TEXT NOT NULL DEFAULT 'comum'
    CHECK (tipo_usuario IN ('comum', 'admin')),
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.perfis ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuário pode visualizar o próprio perfil"
ON public.perfis
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- ============================================
-- 2. CRIAÇÃO AUTOMÁTICA DE PERFIS
-- ============================================

CREATE OR REPLACE FUNCTION public.criar_perfil_usuario()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.perfis (id, nome)
  VALUES (
    NEW.id,
    COALESCE(
      NULLIF(TRIM(NEW.raw_user_meta_data ->> 'nome'), ''),
      'Usuário'
    )
  );

  RETURN NEW;
END;
$$;

CREATE TRIGGER ao_criar_usuario
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.criar_perfil_usuario();

-- Cria perfis para usuários que já existiam.
INSERT INTO public.perfis (id, nome)
SELECT
  id,
  COALESCE(
    NULLIF(TRIM(raw_user_meta_data ->> 'nome'), ''),
    'Usuário'
  )
FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- 3. TABELA DE PROJETOS
-- ============================================

CREATE TABLE public.projetos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES public.perfis(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'nao_iniciado'
    CHECK (status IN ('nao_iniciado', 'em_andamento', 'concluido')),
  data_inicio DATE,
  observacoes TEXT,
  foto_url TEXT,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.projetos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuário pode visualizar seus projetos"
ON public.projetos
FOR SELECT
TO authenticated
USING (auth.uid() = usuario_id);

CREATE POLICY "Usuário pode cadastrar seus projetos"
ON public.projetos
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Usuário pode atualizar seus projetos"
ON public.projetos
FOR UPDATE
TO authenticated
USING (auth.uid() = usuario_id)
WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Usuário pode excluir seus projetos"
ON public.projetos
FOR DELETE
TO authenticated
USING (auth.uid() = usuario_id);

-- ============================================
-- 4. TABELA DE MATERIAIS
-- ============================================

CREATE TABLE public.materiais (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES public.perfis(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  quantidade NUMERIC(10, 2) NOT NULL DEFAULT 0
    CHECK (quantidade >= 0),
  unidade TEXT NOT NULL,
  quantidade_minima NUMERIC(10, 2) NOT NULL DEFAULT 1
    CHECK (quantidade_minima >= 0),
  observacoes TEXT,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.materiais ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuário pode visualizar seus materiais"
ON public.materiais
FOR SELECT
TO authenticated
USING (auth.uid() = usuario_id);

CREATE POLICY "Usuário pode cadastrar seus materiais"
ON public.materiais
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Usuário pode atualizar seus materiais"
ON public.materiais
FOR UPDATE
TO authenticated
USING (auth.uid() = usuario_id)
WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Usuário pode excluir seus materiais"
ON public.materiais
FOR DELETE
TO authenticated
USING (auth.uid() = usuario_id);
