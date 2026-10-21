import { supabase } from './supabase';
import { useAuthStore } from '../store/useAuthStore';

export const authService = {
  /**
   * Realiza login com e-mail e senha
   */
  async signInWithEmail(email: string, pass: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });

    if (error) throw error;

    if (data.user) {
      await this.fetchUserProfileAndTenant(data.user.id);
    }

    return data;
  },

  /**
   * Encerra a sessão do usuário
   */
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    useAuthStore.getState().resetAuth();
  },

  /**
   * Busca os dados da tabela profiles e tenants para carregar o contexto multi-tenant
   */
  async fetchUserProfileAndTenant(userId: string) {
    const { setProfileAndTenant, setLoading } = useAuthStore.getState();
    setLoading(true);

    try {
      // 1. Busca o perfil do usuário
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (profileError || !profile) {
        throw new Error('Perfil do usuário não encontrado.');
      }

      // 2. Busca o tenant vinculado
      const { data: tenant, error: tenantError } = await supabase
        .from('tenants')
        .select('*')
        .eq('id', profile.tenant_id)
        .single();

      if (tenantError || !tenant) {
        throw new Error('Empresa (tenant) não encontrada.');
      }

      setProfileAndTenant(profile, tenant);
    } catch (err) {
      console.error('Erro ao carregar dados do usuário:', err);
      setProfileAndTenant(null, null);
    } finally {
      setLoading(false);
    }
  },

  /**
   * Inicializa a checagem de sessão ao abrir o app
   */
  async initializeAuth() {
    const { setAuth, setLoading } = useAuthStore.getState();
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        setAuth(session.user, session);
        await this.fetchUserProfileAndTenant(session.user.id);
      } else {
        setAuth(null, null);
      }
    } catch (error) {
      console.error('Erro ao inicializar autenticação:', error);
      setAuth(null, null);
    } finally {
      setLoading(false);
    }
  },
};