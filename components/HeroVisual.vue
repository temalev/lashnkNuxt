<template>
  <div class="hv">
    <div class="hv-glow"></div>
    <div class="hv-ring hv-r1"></div>
    <div class="hv-ring hv-r2"></div>
    <div class="hv-ring hv-r3"></div>
    <div class="hv-orb"></div>
    <div class="hv-dot hv-d1"></div>
    <div class="hv-dot hv-d2"></div>
    <div class="hv-dot hv-d3"></div>
    <div class="hv-dot hv-d4"></div>
    <div class="hv-line hv-lh"></div>
    <div class="hv-line hv-lv"></div>
  </div>
</template>

<style scoped>
.hv {
  position: relative;
  width: 440px;
  height: 440px;
  max-width: 100%;
  flex-shrink: 0;
}

.hv > * {
  position: absolute;
  top: 50%;
  left: 50%;
}

.hv-glow {
  width: 230px;
  height: 230px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(196, 168, 130, 0.5) 0%, transparent 70%);
  filter: blur(30px);
  animation: hvPulse 4s ease-in-out infinite;
}

.hv-ring {
  border-radius: 50%;
  border: 1px solid rgba(196, 168, 130, 0.22);
}

.hv-r1 {
  width: 420px;
  height: 420px;
  border-style: dashed;
  border-color: rgba(196, 168, 130, 0.15);
  animation: hvRot 90s linear infinite;
}

.hv-r2 {
  width: 300px;
  height: 300px;
  border-color: rgba(139, 111, 78, 0.3);
  animation: hvRot 50s linear infinite reverse;
}

.hv-r3 {
  width: 170px;
  height: 170px;
  border-color: rgba(196, 168, 130, 0.42);
  border-width: 1.5px;
  animation: hvRot 28s linear infinite;
}

.hv-orb {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C4A882 0%, #8B6F4E 100%);
  box-shadow: 0 0 28px rgba(196, 168, 130, 0.5), 0 0 60px rgba(196, 168, 130, 0.2);
  animation: hvPulse 4s ease-in-out infinite;
}

/* Dots sit on ring-2 (radius 150px) */
.hv-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #C4A882;
  box-shadow: 0 0 8px rgba(196, 168, 130, 0.6);
}

.hv-d1 { transform: translate(-50%, calc(-50% - 150px)); }
.hv-d2 { transform: translate(-50%, calc(-50% + 150px)); }
.hv-d3 { transform: translate(calc(-50% + 150px), -50%); }
.hv-d4 { transform: translate(calc(-50% - 150px), -50%); }

.hv-line {
  background: rgba(196, 168, 130, 0.16);
}

.hv-lh {
  width: 170px;
  height: 1px;
  transform: translate(-50%, -50%);
}

.hv-lv {
  width: 1px;
  height: 170px;
  transform: translate(-50%, -50%);
}

@keyframes hvRot {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes hvPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: 0.85; }
  50%       { transform: translate(-50%, -50%) scale(1.07); opacity: 1; }
}
</style>
