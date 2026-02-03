// Shared template styles - Optimized and extracted
export const sharedTemplateStyles = `
  .template-inner {
    width: 400px;
    height: 600px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    font-family: var(--font-body);
    background: white;
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
  }

  .template-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 320px;
  }

  .template-title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .template-greeting {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--color-foreground);
  }

  .template-message {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: var(--color-muted-foreground);
  }

  .signature {
    font-family: var(--font-handwriting);
    font-size: 1.1rem;
    color: var(--color-primary);
    margin-top: 1rem;
  }

  /* Template-specific styles */
  .template-floral {
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border: 2px solid #86efac;
  }

  .template-royal {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 3px solid #d97706;
  }

  .template-balloons {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border: 2px solid #3b82f6;
  }

  .template-minimal {
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
    border: 1px solid #d1d5db;
  }

  .template-sunset {
    background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
    border: 2px solid #fb923c;
  }

  .template-galaxy {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
    color: white;
    border: 2px solid #6366f1;
  }

  .template-galaxy .template-title,
  .template-galaxy .template-greeting,
  .template-galaxy .template-message {
    color: white;
  }

  .template-sakura {
    background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
    border: 2px solid #f9a8d4;
  }

  .template-vintage {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 3px solid #92400e;
  }

  .template-ocean {
    background: linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%);
    border: 2px solid #06b6d4;
  }

  .template-festive {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border: 2px solid #ef4444;
  }

  .template-botanical {
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    border: 2px solid #22c55e;
  }

  .template-neon {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    color: white;
    border: 2px solid #06b6d4;
  }

  .template-neon .template-title,
  .template-neon .template-greeting,
  .template-neon .template-message {
    color: white;
  }

  .template-pastel {
    background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
    border: 2px solid #a855f7;
  }

  .template-rustic {
    background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
    border: 2px solid #92400e;
  }

  .template-party {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #f59e0b;
  }

  /* Decorative elements */
  .corner-decor {
    position: absolute;
    font-size: 2rem;
    opacity: 0.6;
  }

  .top-left { top: 1rem; left: 1rem; }
  .top-right { top: 1rem; right: 1rem; }
  .bottom-left { bottom: 1rem; left: 1rem; }
  .bottom-right { bottom: 1rem; right: 1rem; }

  .elegant-divider {
    font-size: 1.2rem;
    color: var(--color-muted-foreground);
    margin: 1rem 0;
  }

  .gold-line {
    height: 2px;
    background: linear-gradient(90deg, transparent, #d97706, transparent);
    margin: 1rem 0;
  }

  .crown-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .balloon-cluster {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .balloon {
    font-size: 1.5rem;
    animation: float 3s ease-in-out infinite;
  }

  .balloon.b2 { animation-delay: 0.5s; }
  .balloon.b3 { animation-delay: 1s; }
  .balloon.b4 { animation-delay: 1.5s; }
  .balloon.b5 { animation-delay: 2s; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .gold-frame {
    position: absolute;
    inset: 0;
    border: 2px solid #d97706;
    pointer-events: none;
  }

  .frame-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #d97706;
  }

  .frame-corner.tl { top: 10px; left: 10px; border-right: none; border-bottom: none; }
  .frame-corner.tr { top: 10px; right: 10px; border-left: none; border-bottom: none; }
  .frame-corner.bl { bottom: 10px; left: 10px; border-right: none; border-top: none; }
  .frame-corner.br { bottom: 10px; right: 10px; border-left: none; border-top: none; }

  .thin-divider {
    height: 1px;
    background: var(--color-border);
    margin: 1rem 0;
  }

  .heart-icon {
    font-size: 1.5rem;
    color: var(--color-primary);
  }

  .sun-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 1;
  }

  .rays {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .wave-decor {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .stars-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .star {
    position: absolute;
    font-size: 1rem;
    animation: twinkle 2s ease-in-out infinite;
  }

  .star.s1 { top: 20%; left: 20%; animation-delay: 0s; }
  .star.s2 { top: 30%; right: 30%; animation-delay: 0.5s; }
  .star.s3 { bottom: 30%; left: 40%; animation-delay: 1s; }
  .star.s4 { top: 60%; right: 20%; animation-delay: 1.5s; }
  .star.s5 { bottom: 20%; right: 40%; animation-delay: 2s; }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  .moon-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .sparkle-row {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .blossom-decor {
    position: absolute;
    font-size: 2rem;
    opacity: 0.7;
  }

  .blossom-decor.top { top: 1rem; left: 50%; transform: translateX(-50%); }
  .blossom-decor.bottom { bottom: 1rem; left: 50%; transform: translateX(-50%); }

  .branch-left {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100px;
    height: 2px;
    background: #92400e;
    transform: translateY(-50%);
  }

  .jp-divider {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .petals {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .vintage-border {
    position: absolute;
    inset: 10px;
    border: 2px solid #92400e;
    pointer-events: none;
  }

  .vintage-ornament {
    font-size: 1.5rem;
    color: #92400e;
  }

  .vintage-ornament.top { margin-bottom: 1rem; }
  .vintage-ornament.bottom { margin-top: 1rem; }

  .vintage-line {
    height: 1px;
    background: #92400e;
    margin: 1rem 0;
  }

  .wave {
    position: absolute;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(90deg, #06b6d4, #0891b2, #06b6d4);
    opacity: 0.3;
  }

  .wave.wave1 { top: 20%; animation: wave 3s ease-in-out infinite; }
  .wave.wave2 { bottom: 20%; animation: wave 3s ease-in-out infinite reverse; }

  @keyframes wave {
    0%, 100% { transform: translateY(0) scaleY(1); }
    50% { transform: translateY(-10px) scaleY(0.8); }
  }

  .shell-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .wave-icons {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .sparkle-corner {
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.6;
  }

  .sparkle-corner.tl { top: 1rem; left: 1rem; }
  .sparkle-corner.tr { top: 1rem; right: 1rem; }
  .sparkle-corner.bl { bottom: 1rem; left: 1rem; }
  .sparkle-corner.br { bottom: 1rem; right: 1rem; }

  .ribbon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .festive-divider {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  .gift-icon {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .leaf-decor {
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.7;
  }

  .leaf-decor.top-left { top: 1rem; left: 1rem; }
  .leaf-decor.top-right { top: 1rem; right: 1rem; }
  .leaf-decor.bottom-left { bottom: 1rem; left: 1rem; }
  .leaf-decor.bottom-right { bottom: 1rem; right: 1rem; }

  .flower-crown {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .botanical-line {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  .flower-row {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .glow-orb {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 1;
  }

  .neon-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #06b6d4;
    text-shadow: 0 0 20px #06b6d4;
  }

  .neon-line {
    height: 2px;
    background: linear-gradient(90deg, transparent, #06b6d4, transparent);
    margin: 1rem 0;
    box-shadow: 0 0 10px #06b6d4;
  }

  .neon-sparkles {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #06b6d4;
  }

  .cloud-decor {
    position: absolute;
    font-size: 2rem;
    opacity: 0.6;
  }

  .cloud-decor.c1 { top: 20%; left: 20%; }
  .cloud-decor.c2 { top: 30%; right: 30%; }

  .rainbow-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .candy-row {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .twine-border {
    position: absolute;
    inset: 15px;
    border: 2px dashed #92400e;
    pointer-events: none;
  }

  .leaf-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .rustic-divider {
    height: 1px;
    background: #92400e;
    margin: 1rem 0;
  }

  .nature-row {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .confetti-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .conf {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: confetti-fall 3s ease-in-out infinite;
  }

  .conf.c1 { top: 10%; left: 20%; background: #ef4444; animation-delay: 0s; }
  .conf.c2 { top: 20%; right: 30%; background: #3b82f6; animation-delay: 0.5s; }
  .conf.c3 { top: 30%; left: 40%; background: #22c55e; animation-delay: 1s; }
  .conf.c4 { top: 40%; right: 20%; background: #f59e0b; animation-delay: 1.5s; }
  .conf.c5 { top: 50%; left: 30%; background: #a855f7; animation-delay: 2s; }
  .conf.c6 { top: 60%; right: 40%; background: #ec4899; animation-delay: 2.5s; }

  @keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
  }

  .party-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .party-row {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
