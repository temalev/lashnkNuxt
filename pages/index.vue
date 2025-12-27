<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Маленькая, но уютная студия<br>красоты в центре Рязани</h1>
          <p class="hero-subtitle">Индивидуальный подход к каждому клиенту<br>и результат премиум-класса</p>
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
            <p>LashNK — это маленькая, но уютная студия красоты, где каждый клиент получает индивидуальный подход и результат премиум-класса.</p>
            <p>Мы создали атмосферу, в которой вы можете расслабиться и довериться профессионалам. Наша студия — это место, где внимание к деталям и забота о клиенте стоят на первом месте.</p>
            <p class="location-info">Наша студия удобно расположена в центре города Рязань по адресу Соборная улица, 12. Легко добраться на любом транспорте!</p>
            <ul class="features">
              <li>✓ Опытные мастера</li>
              <li>✓ Премиум материалы</li>
              <li>✓ Индивидуальный подход</li>
              <li>✓ Уютная атмосфера</li>
              <li>✓ Удобное расположение в центре города</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="services" id="services">
      <div class="container">
        <h2 class="section-title">Наши услуги</h2>
        
        <div class="services-preview">
          <div class="service-preview-card">
            <h3>Наращивание ресниц</h3>
            <p>Классическое и объемное наращивание ресниц для идеального взгляда</p>
            <NuxtLink to="/lash" class="btn btn-primary">Подробнее</NuxtLink>
          </div>
          
          <div class="service-preview-card">
            <h3>Ламинирование ресниц</h3>
            <p>Профессиональное ламинирование и оформление бровей</p>
            <NuxtLink to="/brows-lamination" class="btn btn-primary">Подробнее</NuxtLink>
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
              <img :src="image" :alt="`Пример работ ${index + 1}`" loading="lazy">
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
const reviews = useReviews()

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
  title: 'LashNK - Студия красоты в Рязани | Наращивание ресниц и ламинирование',
  description: 'LashNK - маленькая, но уютная студия красоты в центре Рязани. Наращивание ресниц, ламинирование, оформление бровей. Индивидуальный подход к каждому клиенту. Удобное расположение на Соборной улице, 12.',
  keywords: 'студия красоты Рязань, наращивание ресниц, ламинирование ресниц, LashNK, ресницы Рязань',
  ogTitle: 'LashNK - Студия красоты в Рязани',
  ogDescription: 'Маленькая, но уютная студия красоты в центре Рязани. Наращивание ресниц, ламинирование, оформление бровей. Индивидуальный подход.',
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

<style scoped>
.services-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-preview-card {
  background: var(--white);
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-preview-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.service-preview-card h3 {
  font-size: 1.8rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.service-preview-card p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .services-preview {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-preview-card {
    padding: 2rem 1.5rem;
  }
}
</style>
