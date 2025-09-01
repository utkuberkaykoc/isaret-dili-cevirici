# 🤟 İşaret Dili Çevirici

Türkçe metinleri TDK işaret dili görselleri ile görsel olarak temsil eden modern web uygulaması. Gerçek zamanlı çeviri, responsive tasarım ve dark mode desteği ile erişilebilir bir deneyim sunar.

> **Staj Projesi**: Bu proje, 2024-2025 yaz stajı kapsamında geliştirilmiştir.

> **Demo Websitesi**: Projeyi incelemek için [isaretdilicevirici.berkaykoc.net](https://isaretdilicevirici.berkaykoc.net) adresini ziyaret edebilirsiniz.

## 🤟 Proje Hakkında

İşaret Dili Çevirici, Türkçe metinleri TDK'nin resmi işaret dili görselleri ile görsel olarak temsil eden interaktif bir web uygulamasıdır. 29 Türkçe harf için özel işaret dili görselleri içeren bu proje, işitme engelli bireylerin iletişimini kolaylaştırmayı ve işaret dilini öğrenmeyi hedeflemektedir.

## ✨ Özellikler

### 🔤 Çeviri Özellikleri
- **29 Türkçe Harf Desteği**: A-Z, Ç, Ğ, İ, Ö, Ş, Ü harfleri için işaret dili görselleri
- **Gerçek Zamanlı Çeviri**: Metin girişi yapıldıkça sonuçlar anında güncellenir
- **Türkçe Karakter Desteği**: Ç, Ğ, İ, Ö, Ş, Ü gibi Türkçe harfler desteklenir
- **Boşluk Desteği**: Boşluk karakterleri için özel kartlar
- **Hata Yönetimi**: Bulunamayan görseller için fallback gösterimi

### 🎨 Kullanıcı Deneyimi
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarda uyumlu çalışır
- **Dark Mode Desteği**: Karanlık tema desteği
- **Modern UI/UX**: Temiz ve kullanıcı dostu arayüz
- **Animasyonlar**: Smooth geçişler ve hover efektleri
- **Erişilebilirlik**: Screen reader desteği ve klavye navigasyonu

### 🛠️ Teknik Özellikler
- **Next.js 15.4.6**: Modern React framework
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **Tailwind CSS 4**: Modern CSS framework
- **App Router**: Modern routing sistemi
- **Turbopack**: Hızlı geliştirme deneyimi

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adım Adım Kurulum

1. **Projeyi klonlayın**
```bash
git clone https://github.com/utkuberkaykoc/isaret-dili-cevirici.git
cd isaret-dili-cevirici
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
isaret-dili-cevirici/
├── src/
│   └── app/                  # Next.js App Router
│       ├── globals.css      # Global stiller
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Ana sayfa
├── public/
│   └── images/
│       └── isaret/          # İşaret dili görselleri
│           ├── a.gif        # A harfi işareti
│           ├── b.gif        # B harfi işareti
│           ├── ç.gif        # Ç harfi işareti
│           ├── ğ.gif        # Ğ harfi işareti
│           ├── ı.gif        # I harfi işareti
│           ├── ö.gif        # Ö harfi işareti
│           ├── ş.gif        # Ş harfi işareti
│           ├── ü.gif        # Ü harfi işareti
│           └── ...          # Diğer harfler
├── package.json             # Proje bağımlılıkları
├── next.config.ts           # Next.js yapılandırması
└── tsconfig.json           # TypeScript yapılandırması
```

## 📝 Kullanım

### Metin Çevirme
- **Metin Girişi**: Üst kısımdaki metin alanına istediğiniz metni yazın
- **Gerçek Zamanlı**: Her harf için TDK'nin işaret dili görseli otomatik olarak gösterilir
- **Türkçe Harfler**: Sadece Türkçe harfler görsel olarak temsil edilir
- **Boşluklar**: Boşluklar özel kartlarla gösterilir
- **Filtreleme**: Diğer özel karakterler otomatik olarak filtrelenir

### Görsel Özellikler
- **Harf Kartları**: Her harf için ayrı kart tasarımı
- **Responsive Layout**: Ekran boyutuna göre uyarlanır
- **Dark Mode**: Karanlık tema desteği
- **Animasyonlar**: Smooth geçişler ve hover efektleri

### Erişilebilirlik
- **Klavye Navigasyonu**: Tab ile gezinme
- **Screen Reader**: ARIA etiketleri
- **Yüksek Kontrast**: Erişilebilir renk paleti

## 🛠️ Teknolojiler

### Frontend
- **Next.js 15.4.6**: Modern React framework
- **React 19.1.0**: Kullanıcı arayüzü kütüphanesi
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **Tailwind CSS 4**: Modern CSS framework
- **App Router**: Modern routing sistemi

### Özellikler
- **Responsive Design**: Mobil uyumlu
- **Dark Mode**: Tema desteği
- **Real-time Processing**: Gerçek zamanlı işleme
- **Accessibility**: Erişilebilirlik standartları
- **Performance**: Optimize edilmiş performans

### Geliştirme Araçları
- **ESLint**: Kod kalitesi kontrolü
- **Prettier**: Kod formatı
- **TypeScript**: Strict mode
- **Turbopack**: Hızlı geliştirme

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: #3b82f6 (Mavi)
- **Secondary**: #f59e0b (Turuncu)
- **Background**: #ffffff (Beyaz)
- **Dark Background**: #1f2937 (Koyu gri)
- **Text**: #1f2937 (Koyu gri)
- **Dark Text**: #f9fafb (Açık gri)

### Tipografi
- **Font**: Inter (Google Fonts)
- **Responsive**: clamp() fonksiyonu ile
- **Hierarchy**: Başlık, alt başlık, metin

### Animasyonlar
- **Fade In**: Giriş animasyonları
- **Hover**: Kart hover efektleri
- **Transition**: Smooth geçişler

## 🚀 Production Build

### Build Alma
```bash
npm run build
```

### Production Sunucusu
```bash
npm start
```

## 🚀 Deployment

### Platform Seçenekleri
- **Vercel**: Next.js için optimize edilmiş platform
- **Netlify**: Statik site hosting
- **GitHub Pages**: Ücretsiz hosting
- **AWS Amplify**: AWS tabanlı hosting

### Deployment Adımları
```bash
# Build alın
npm run build

# Production sunucusunu başlatın
npm start
```

## 📊 Performans

### Optimizasyonlar
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Otomatik chunk bölme
- **Lazy Loading**: Görsel yükleme optimizasyonu
- **Bundle Analysis**: Webpack bundle analyzer

### Lighthouse Skorları
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 📱 Responsive Tasarım

### Ekran Boyutları
- **Desktop**: 4 sütunlu grid layout
- **Tablet**: 3 sütunlu layout
- **Mobile**: 2 sütunlu layout

### Özellikler
- **Sticky Header**: Üst kısım sabit kalır
- **Fixed Controls**: Alt butonlar sabit
- **Adaptive Grid**: Ekran boyutuna göre uyarlanır

## 🔧 Geliştirme

### Yeni Harf Ekleme
1. `public/images/isaret/` klasörüne görsel ekleyin
2. `src/app/page.tsx` dosyasında `harfGorselleri` objesine ekleyin
3. TypeScript tiplerini güncelleyin

### Örnek Kod Yapısı
```typescript
// src/app/page.tsx
const harfGorselleri: Record<string, string> = {
  'a': '/images/isaret/a.gif',
  'b': '/images/isaret/b.gif',
  'ç': '/images/isaret/ç.gif',
  // ... diğer harfler
};
```

### Stil Özelleştirme
- Ana stiller: `src/app/globals.css`
- Tailwind CSS: `tailwind.config.js`
- Responsive tasarım: Media query'ler

## 🤝 Katkıda Bulunma

### Geliştirme Süreci
1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Commit yapın (`git commit -m 'Yeni özellik eklendi'`)
4. Push yapın (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

### Kod Standartları
- **TypeScript**: Strict mode
- **ESLint**: Kod kalitesi kontrolü
- **Prettier**: Kod formatı
- **Conventional Commits**: Commit mesajları

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **Proje Sahibi**: Berkay Koç
- **Email**: iletisim@berkaykoc.net
- **GitHub**: github.com/utkuberkaykoc

## 🙏 Teşekkürler

İşitme engelli bireylerin iletişimini kolaylaştırmak ve işaret dilini öğrenmeyi desteklemek için bu projeyi geliştirdik. Tüm katkıda bulunanlara teşekkürler!

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
