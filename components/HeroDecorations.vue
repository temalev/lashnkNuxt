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

// Цвета из палитры сайта
const colors = [
  'rgba(244, 165, 199, 1)', // --primary-color с прозрачностью
  'rgba(233, 30, 99, 1)',  // --secondary-color с прозрачностью
  'rgba(255, 182, 193, 1)', // light pink
  'rgba(255, 192, 203, 1)',  // pink
  'rgba(255, 105, 180, 1)', // hot pink
  'rgba(255, 20, 147, 1)',   // deep pink
  'rgba(255, 182, 193, 1)',   // light pink более прозрачный
  'rgba(244, 165, 199, 1)',  // primary более прозрачный
  'rgba(255, 192, 203, 1)',  // pink более прозрачный
  'rgba(233, 30, 99, 1)'      // secondary с другой прозрачностью
]

const circles = ref<Circle[]>([])

// Генерация случайных кругов
const generateCircles = () => {
  const newCircles: Circle[] = []
  
  for (let i = 0; i < 10; i++) {
    newCircles.push({
      x: Math.random() * 100, // 0-100%
      y: Math.random() * 100, // 0-100%
      size: 40 + Math.random() * 80, // от 20px до 100px
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.2 + Math.random() * 0.3, // от 0.2 до 0.5
      delay: Math.random() * 2, // задержка анимации 0-2 сек
      duration: 15 + Math.random() * 10 // длительность 15-25 сек
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

