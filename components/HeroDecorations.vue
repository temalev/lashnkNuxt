<template>
  <div class="hero-decorations">
    <div
      v-for="(circle, index) in circles"
      :key="index"
      class="decoration-circle"
      :style="{
        left: circle.x + '%',
        top: circle.y + '%',
        width: circle.size + 'px',
        height: circle.size + 'px',
        backgroundColor: circle.color,
        opacity: circle.opacity,
        animationDelay: circle.delay + 's',
        animationDuration: circle.duration + 's'
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Circle {
  x: number
  y: number
  size: number
  color: string
  opacity: number
  delay: number
  duration: number
}

const colors = [
  'rgba(196, 168, 130, 1)',
  'rgba(139, 111, 78, 1)',
  'rgba(210, 190, 163, 1)',
  'rgba(196, 168, 130, 1)',
  'rgba(224, 210, 190, 1)',
  'rgba(180, 155, 120, 1)',
  'rgba(215, 198, 175, 1)',
  'rgba(196, 168, 130, 1)',
  'rgba(230, 218, 200, 1)',
  'rgba(139, 111, 78, 1)',
]

const circles = ref<Circle[]>([])

// Генерация случайных кругов
const generateCircles = () => {
  const newCircles: Circle[] = []
  
  for (let i = 0; i < 10; i++) {
    newCircles.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 60 + Math.random() * 120,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.06 + Math.random() * 0.1,
      delay: Math.random() * 3,
      duration: 20 + Math.random() * 15
    })
  }
  
  circles.value = newCircles
}

onMounted(() => {
  generateCircles()
})
</script>

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

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
  animation: float infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-15px, 20px) scale(0.9);
  }
  75% {
    transform: translate(30px, 15px) scale(1.05);
  }
}
</style>

