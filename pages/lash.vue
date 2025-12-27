<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Наращивание ресниц<br>для идеального взгляда</h1>
          <p class="hero-subtitle">Профессиональное наращивание ресниц<br>от опытных мастеров</p>
          <a href="https://dikidi.net/1538714" target="_blank" class="btn btn-primary">Записаться</a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <h2 class="section-title">Услуги</h2>
        
        <!-- Наращивание ресниц -->
        <div class="service-category">
          <h3 class="category-title">Наращивание ресниц</h3>
          <div class="services-grid">
            <div class="service-card" v-for="service in lashServices" :key="service.name">
              <h4>{{ service.name }}</h4>
              <div class="service-info">
                <span class="service-price">{{ service.price }} ₽</span>
                <span class="service-time">{{ service.time }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Комплексы -->
        <div class="service-category">
          <h3 class="category-title">Комплексы</h3>
          <div class="services-grid">
            <div class="service-card" v-for="service in complexServices" :key="service.name">
              <h4>{{ service.name }}</h4>
              <div class="service-info">
                <span class="service-price">{{ service.price }} ₽</span>
                <span class="service-time">{{ service.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery" id="gallery">
      <div class="container">
        <h2 class="section-title">Примеры наших работ</h2>
        <div class="gallery-grid">
          <div class="gallery-item" v-for="(image, index) in galleryImages" :key="index">
            <div class="gallery-image">
              <img :src="image" :alt="`Наращивание ресниц пример ${index + 1}`" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="section-title">Записаться на процедуру</h2>
        <div class="contact-content">
          <div class="booking-link-wrapper">
            <p class="booking-text">Запишитесь онлайн через систему бронирования</p>
            <a href="https://dikidi.net/1538714" target="_blank" class="btn btn-primary btn-large">Записаться онлайн</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const lashServices = [
  { name: 'Классическое наращивание 1D', price: 2000, time: '90 мин' },
  { name: 'Объёмное наращивание 1,5D', price: 2100, time: '120 мин' },
  { name: 'Объёмное наращивание 2D', price: 2200, time: '120 мин' },
  { name: 'Объёмное наращивание 2,5D', price: 2300, time: '120 мин' },
  { name: 'Объёмное наращивание 3D', price: 2400, time: '120 мин' },
  { name: 'Объёмное наращивание 3,5D', price: 2500, time: '120 мин' },
  { name: 'Мокрый эффект', price: 2200, time: '120 мин' },
  { name: 'Полумокрый эффект', price: 2100, time: '120 мин' },
  { name: 'Разреженный эффект', price: 2500, time: '120 мин' },
  { name: 'Наращивание нижних ресниц', price: 1000, time: '30 мин' },
  { name: 'Уголки', price: 1600, time: '60 мин' },
  { name: 'Снятие без перенаращивания', price: 400, time: '15 мин' }
]

const complexServices = [
  { name: 'Комплекс MINI', price: 1600, time: '110 мин' },
  { name: 'Комплекс STANDART', price: 2700, time: '130 мин' },
  { name: 'Комплекс MAXI', price: 3100, time: '165 мин' },
  { name: 'Комплекс PREMIUM', price: 3600, time: '190 мин' }
]

const galleryImages = [
  '/example-images/21au9pqv7j.webp',
  '/example-images/316cr98us7.webp',
  '/example-images/31pqegsmaa.webp',
  '/example-images/32epla95du.webp',
  '/example-images/4ll273f6p6.webp',
  '/example-images/4scvfdevkn.webp',
  '/example-images/5jnvc6qeda.webp',
  '/example-images/5k4usb8nhc.webp',
  '/example-images/rqk313ate3.webp'
]

useSeoMeta({
  title: 'Наращивание ресниц в Рязани | Профессиональное наращивание | LashNK',
  description: 'LashNK - профессиональное наращивание ресниц в Рязани. Классическое и объемное наращивание, комплексы. Удобное расположение на Соборной улице, 12. Запись онлайн.',
  keywords: 'наращивание ресниц Рязань, объемное наращивание, классическое наращивание, LashNK, ресницы Рязань',
  ogTitle: 'LashNK - Наращивание ресниц в Рязани',
  ogDescription: 'Профессиональное наращивание ресниц в центре Рязани. Классическое и объемное наращивание, комплексы. Запись онлайн.',
  ogImage: 'https://lashnk.ru/og-image.jpg',
  ogUrl: 'https://lashnk.ru/lash/',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://lashnk.ru/lash/' }
  ]
})
</script>

