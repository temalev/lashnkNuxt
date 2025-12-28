<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <HeroDecorations />
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Ламинирование ресниц<br>и оформление бровей</h1>
          <p class="hero-subtitle">Профессиональный уход за ресницами и бровями<br>от опытных мастеров</p>
          <a href="https://dikidi.net/1538714" target="_blank" class="btn btn-primary">Записаться</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <h2 class="section-title">О нас</h2>
        <div class="about-content">
          <div class="about-text">
            <p>LashNK — это студия красоты, где каждый клиент получает индивидуальный подход и результат премиум-класса.</p>
            <p>Мы специализируемся на ламинировании ресниц и профессиональном оформлении бровей. Используем только качественные материалы и современные техники, чтобы ваши ресницы и брови выглядели идеально и держались долго.</p>
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
    <section class="services">
      <div class="container">
        <h2 class="section-title">Наши услуги</h2>
        
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

    <!-- Contact Section -->
    <section class="contact">
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

useSeoMeta({
  title: 'Ламинирование ресниц и оформление бровей в Рязани | LashNK',
  description: 'LashNK - ламинирование ресниц и профессиональное оформление бровей в Рязани. Долговременная укладка бровей, коррекция, окрашивание. Удобное расположение на Соборной улице, 12. Запись онлайн.',
  keywords: 'ламинирование ресниц Рязань, оформление бровей Рязань, долговременная укладка бровей, коррекция бровей, LashNK',
  ogTitle: 'Ламинирование ресниц и оформление бровей в Рязани | LashNK',
  ogDescription: 'Профессиональное ламинирование ресниц и оформление бровей в центре Рязани. Долговременная укладка, коррекция, окрашивание. Запись онлайн.',
  ogImage: 'https://lashnk.ru/og-image.jpg',
  ogUrl: 'https://lashnk.ru/brows-lamination/',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://lashnk.ru/brows-lamination/' }
  ]
})
</script>

