<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Идеальные ресницы<br>для идеального взгляда</h1>
          <p class="hero-subtitle">Профессиональное наращивание ресниц<br>от опытных мастеров</p>
          <a href="https://dikidi.net/1538714" target="_blank" class="btn btn-primary">Записаться</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <h2 class="section-title">О нас</h2>
        <div class="about-content">
          <div class="about-text">
            <p>LashNK — это студия наращивания ресниц, где каждый клиент получает индивидуальный подход и результат премиум-класса.</p>
            <p>Мы используем только качественные материалы и современные техники наращивания, чтобы ваши ресницы выглядели естественно и держались долго.</p>
            <p class="location-info">Наша студия удобно расположена в центре города Рязань по адресу Соборная улица, 12. Легко добраться на любом транспорте!</p>
            <ul class="features">
              <li>✓ Опытные мастера</li>
              <li>✓ Премиум материалы</li>
              <li>✓ Индивидуальный подход</li>
              <li>✓ Долговечный результат</li>
              <li>✓ Удобное расположение в центре города</li>
            </ul>
          </div>
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

        <!-- Ламинирование ресниц -->
        <div class="service-category">
          <h3 class="category-title">Ламинирование ресниц</h3>
          <div class="services-grid">
            <div class="service-card" v-for="service in laminationServices" :key="service.name">
              <h4>{{ service.name }}</h4>
              <div class="service-info">
                <span class="service-price">{{ service.price }} ₽</span>
                <span class="service-time">{{ service.time }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Оформление бровей -->
        <div class="service-category">
          <h3 class="category-title">Оформление бровей</h3>
          <div class="services-grid">
            <div class="service-card" v-for="service in browServices" :key="service.name">
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

    <!-- Reviews Section -->
    <section class="reviews" id="reviews">
      <div class="container">
        <h2 class="section-title">Отзывы наших клиентов</h2>
        <div class="reviews-grid">
          <div class="review-card" v-for="review in reviews" :key="review.name + review.date">
            <div class="review-header">
              <h4 class="review-name">{{ review.name }}</h4>
              <span class="review-date">{{ review.date }}</span>
            </div>
            <div class="review-service">{{ review.service }}</div>
            <div class="review-rating">
              <span v-for="i in 5" :key="i" class="star" :style="{ color: i <= review.rating ? '#ffd700' : '#ddd' }">★</span>
            </div>
            <p class="review-comment">{{ review.comment }}</p>
          </div>
        </div>
        <div class="reviews-actions">
          <a class="btn btn-primary" target="_blank" href="https://dikidi.net/1538714?p=1.pi-pr&o=8">
            Читать все отзывы на DIKIDI
          </a>
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
        <div class="map-wrapper">
          <h3 class="map-title">Как нас найти</h3>
          <div class="map-container">
            <div style="position:relative;overflow:hidden;">
              <a href="https://yandex.com/maps/11/ryazan/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Рязань</a>
              <a href="https://yandex.com/maps/11/ryazan/house/sobornaya_ulitsa_12/Z0AYcQNkSUQHQFtufXpycnRkYQ==/?ll=39.744011%2C54.633875&utm_medium=mapframe&utm_source=maps&z=17.1" style="color:#eee;font-size:12px;position:absolute;top:14px;">Соборная улица, 12 — Яндекс Карты</a>
              <iframe src="https://yandex.com/map-widget/v1/?ll=39.744011%2C54.633875&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzMzNzI1MBI70KDQvtGB0YHQuNGPLCDQoNGP0LfQsNC90YwsINCh0L7QsdC-0YDQvdCw0Y8g0YPQu9C40YbQsCwgMTIiCg3e-R5CFRaJWkI%2C&z=17.1" width="100%" height="400" frameborder="0" allowfullscreen="true" style="position:relative;border-radius:15px;"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const reviews = await useReviews()

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

const laminationServices = [
  { name: 'Ламинирование верхних ресниц БЕЗ окрашивания', price: 1500, time: '60 мин' },
  { name: 'Ламинирование верхних ресниц с окрашиванием', price: 1700, time: '75 мин' },
  { name: 'Ламинирование верхних и нижних ресниц БЕЗ окрашивания', price: 1900, time: '95 мин' },
  { name: 'Ламинирование верхних и нижних ресниц с окрашиванием', price: 2200, time: '100 мин' },
  { name: 'Окрашивание ресниц БЕЗ ламинирования', price: 600, time: '30 мин' }
]

const browServices = [
  { name: 'Коррекция (воск/пинцет)', price: 600, time: '30 мин' },
  { name: 'КОРРЕКЦИЯ + ОКРАШИВАНИЕ', price: 1400, time: '50 мин' },
  { name: 'ДОЛГОВРЕМЕННАЯ УКЛАДКА + КОРРЕКЦИЯ', price: 1800, time: '60 мин' },
  { name: 'ДОЛГОВРЕМЕННАЯ УКЛАДКА + КОРРЕКЦИЯ + ОКРАШИВАНИЕ', price: 2100, time: '70 мин' },
  { name: 'Эпиляция верхней губы', price: 300, time: '20 мин' }
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
  title: 'Наращивание ресниц в Рязани | Профессиональное наращивание и ламинирование | LashNK',
  description: 'LashNK - студия наращивания ресниц в Рязани. Классическое и объемное наращивание, ламинирование ресниц, оформление бровей. Удобное расположение на Соборной улице, 12. Запись онлайн.',
  keywords: 'наращивание ресниц Рязань, ламинирование ресниц, объемное наращивание, LashNK, ресницы Рязань',
  ogTitle: 'LashNK - Наращивание ресниц в Рязани',
  ogDescription: 'Профессиональное наращивание и ламинирование ресниц в центре Рязани. Классическое и объемное наращивание, оформление бровей. Запись онлайн.',
  ogImage: 'https://lashnk.ru/og-image.jpg',
  ogUrl: 'https://lashnk.ru/',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://lashnk.ru/' }
  ]
})
</script>

