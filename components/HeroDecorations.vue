<template>
  <div class="hero-decorations">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="ring ring-1"></div>
    <div class="ring ring-2"></div>
    <div class="ring ring-3"></div>
    <div class="shimmer-line shimmer-1"></div>
    <div class="shimmer-line shimmer-2"></div>
  </div>
</template>

<style scoped>
.hero-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
}

.blob-1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle at 40% 40%, rgba(196, 168, 130, 0.38) 0%, rgba(196, 168, 130, 0.1) 50%, transparent 70%);
  top: -200px;
  right: -150px;
  animation: blobFloat1 22s ease-in-out infinite;
  filter: blur(40px);
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle at 60% 60%, rgba(139, 111, 78, 0.25) 0%, rgba(139, 111, 78, 0.08) 50%, transparent 70%);
  bottom: -120px;
  left: -80px;
  animation: blobFloat2 28s ease-in-out infinite;
  filter: blur(50px);
}

.blob-3 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle at 50% 50%, rgba(224, 210, 190, 0.45) 0%, rgba(210, 190, 163, 0.15) 50%, transparent 70%);
  top: 25%;
  left: 15%;
  animation: blobFloat3 18s ease-in-out infinite;
  filter: blur(35px);
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(196, 168, 130, 0.25);
}

.ring-1 {
  width: 550px;
  height: 550px;
  top: -140px;
  right: -100px;
  animation: ringRotate 40s linear infinite;
  border-color: rgba(196, 168, 130, 0.2);
}

.ring-2 {
  width: 400px;
  height: 400px;
  bottom: -100px;
  left: 3%;
  animation: ringRotate 50s linear infinite reverse;
  border-color: rgba(139, 111, 78, 0.15);
}

.ring-3 {
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(196, 168, 130, 0.12);
  animation: ringPulse 8s ease-in-out infinite;
}

.shimmer-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(196, 168, 130, 0.4) 50%, transparent 100%);
}

.shimmer-1 {
  width: 60%;
  bottom: 35%;
  left: -10%;
  animation: shimmerSlide 12s ease-in-out infinite;
}

.shimmer-2 {
  width: 40%;
  top: 30%;
  right: -5%;
  animation: shimmerSlide 16s ease-in-out infinite reverse;
}

@keyframes blobFloat1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-25px, 18px) scale(1.04); }
  66% { transform: translate(18px, -28px) scale(0.96); }
}

@keyframes blobFloat2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(35px, -18px) scale(1.08); }
  70% { transform: translate(-18px, 28px) scale(0.92); }
}

@keyframes blobFloat3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(25px, -35px) scale(1.06); }
}

@keyframes ringRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes ringPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
}

@keyframes shimmerSlide {
  0%, 100% { opacity: 0; transform: translateX(0); }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; transform: translateX(40px); }
}
</style>
