import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, Lock, User, Eye, EyeOff, Sparkles } from "lucide-react";

interface LoginScreenProps {
  onLoginSuccess: (nickname: string) => void;
}

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nickname.trim()) {
      setError("Por favor, digite nosso apelido de casal.");
      return;
    }

    if (nickname.trim().length < 2) {
      setError("O apelido precisa ter pelo menos 2 caracteres.");
      return;
    }

    // Normalize input to prevent password mismatch due to simple spaces or punctuation
    const normalizedPassword = password.trim().replace(/\s+/g, "");
    const expectedPasswords = ["10/10/2024", "10102024", "10-10-2024", "10/10/24"];

    if (!normalizedPassword) {
      setError("Por favor, digite a senha.");
      return;
    }

    if (expectedPasswords.includes(normalizedPassword)) {
      setIsUnlocking(true);
      // Beautiful delay to feel like a real chest or vault is unlocking
      setTimeout(() => {
        onLoginSuccess(nickname.trim());
      }, 1200);
    } else {
      setError("Senha incorreta. Atente-se à dica!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige px-4 py-12 relative overflow-hidden select-none">
      {/* Absolute decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-brand-rose/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-taupe/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sparkles & Hearts */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] text-brand-rose/20 hidden md:block"
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[15%] text-brand-rose/30 hidden md:block"
      >
        <Heart size={28} className="fill-current" />
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md bg-white p-8 md:p-10 rounded-3xl border border-brand-sand/40 shadow-xl shadow-stone-200/50 flex flex-col z-10"
      >
        {/* Inner Border Accent */}
        <div className="absolute inset-0 border border-brand-rose/10 rounded-3xl m-3 pointer-events-none" />

        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={isUnlocking ? { scale: [1, 1.2, 0.9, 1.1, 1], rotate: [0, 360] } : { scale: [1, 1.05, 1] }}
            transition={{ duration: isUnlocking ? 1.2 : 3, repeat: isUnlocking ? 0 : Infinity, ease: "easeInOut" }}
            className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
              isUnlocking
                ? "bg-brand-rose text-white border-transparent"
                : "bg-brand-rose/5 text-brand-rose border-brand-rose/15"
            }`}
          >
            {isUnlocking ? <Heart size={22} className="fill-current animate-pulse" /> : <Lock size={20} />}
          </motion.div>
        </div>

        {/* Titles */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl text-brand-charcoal tracking-tight font-normal">
            Nosso Baú de Memórias
          </h1>
          <p className="font-serif italic text-xs text-brand-taupe">
            Uma fechadura de sentimento e cumplicidade
          </p>
        </div>

        {/* Informative Phrase Match */}
        <div className="bg-brand-darkbeige/30 border border-brand-sand/30 p-4 rounded-2xl mb-6 text-center">
          <p className="text-brand-taupe text-xs leading-relaxed font-sans font-light">
            Para logar, digite nosso <span className="font-semibold text-brand-charcoal">apelido de casal</span> e a <span className="font-semibold text-brand-charcoal">senha</span> <span className="text-[11px] block mt-1 italic text-[#B76E79] font-medium">(dica: a senha é o dia que eu te mandei mensagem a primeira vez, sendo este dia: 10/10/2024)</span>
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative">
          {/* Nickname Input */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="nickname" className="text-[10px] uppercase tracking-widest font-mono text-brand-taupe font-bold block ml-1">
              Apelido de Casal
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-taupe">
                <User size={15} />
              </span>
              <input
                id="nickname"
                type="text"
                placeholder="Como nos chamamos docemente..."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                disabled={isUnlocking}
                className="w-full pl-10 pr-4 py-3 bg-brand-beige/20 border border-brand-sand/60 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose rounded-xl text-brand-charcoal placeholder-brand-taupe/40 font-sans text-xs transition-all outline-none"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="password" className="text-[10px] uppercase tracking-widest font-mono text-brand-taupe font-bold block ml-1">
              Senha Especial
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-taupe">
                <Lock size={15} />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="DD/MM/AAAA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isUnlocking}
                className="w-full pl-10 pr-10 py-3 bg-brand-beige/20 border border-brand-sand/60 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose rounded-xl text-brand-charcoal placeholder-brand-taupe/40 font-sans text-xs transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isUnlocking}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-taupe hover:text-brand-rose transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] text-[#C04000] bg-[#C04000]/5 border border-[#C04000]/15 px-3 py-2 rounded-xl text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Unlock Button */}
          <button
            type="submit"
            id="btn-login-submit"
            disabled={isUnlocking}
            className={`w-full py-3.5 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer ${
              isUnlocking
                ? "bg-brand-rose/85 text-white cursor-wait"
                : "bg-brand-charcoal text-white hover:bg-brand-charcoal/90"
            }`}
          >
            {isUnlocking ? (
              <>
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  <Heart size={14} className="fill-current" />
                </motion.span>
                Desbloqueando memórias...
              </>
            ) : (
              <>
                Abrir Nosso Baú
                <Heart size={13} className="fill-current" />
              </>
            )}
          </button>
        </form>

        {/* Dating stamp footer */}
        <div className="mt-8 pt-6 border-t border-brand-sand/30 text-center">
          <p className="font-mono text-[9px] text-brand-taupe/60 tracking-wider uppercase">
            Criado eternamente para nós dois
          </p>
        </div>
      </motion.div>
    </div>
  );
}
