// let baseURL = "http://192.168.0.103:5001/api";
let baseURL = "https://api.weemax.in/platform/api";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: true,
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt-alt/http",
    "@element-plus/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore",
        ],
      },
    ],
  ],
  http: {
    baseURL,
    credentials: "omit",
    browserBaseURL: baseURL,
  },
  build: {
    transpile: ["vue-toastification"],
  },
  app: {
    head: {
      title: "Weemax",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Welcome to WEEMAX - Your Ultimate Destination for Stylish & Classy Fashion Products! Explore the latest collection of trendy shirts, t-shirts, and kurtis at WEEMAX, India's best ecommerce platform for fashion enthusiasts. Enjoy unbeatable offers of up to 50% off on our bestsellers, handpicked just for you. Shop with confidence as WEEMAX brings you a diverse range of fashion products that blend quality, style, and affordability. From chic everyday wear to elegant party outfits, we have something for every occasion and taste. Discover the ease of online shopping with WEEMAX and experience unmatched customer service. Our user-friendly interface ensures a seamless browsing experience, making it a breeze to find the perfect outfit for any event. Join thousands of satisfied customers who have made WEEMAX their go-to destination for fashion. Stay ahead of the fashion curve and make a statement with our exclusive collection. Shop now and revamp your wardrobe with the latest trends at WEEMAX - Where Fashion Meets Convenience!",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "Fashion, Online Shopping, Trendy Clothing, Stylish Accessories, Fashionable Footwear, Affordable Fashion, Latest Trends, Exclusive Designs,Shirts, Fashion Forward, Curated Collections, Women's Fashion, Men's Fashion, Kids' Fashion, Clothing Store, Designer Labels, Fashion Sale, Fashion Deals, Fashion Shopping, Fashion Boutique, Shop Online, Fashionable Lifestyle, Fashion Essentials, Fashion Inspiration, Fashion Lookbook, Fashion Blog, Fashion Influencers, Fashionable Outfits, Express Your Style,Best Shirts, Quality, Loyalty Program, Referral Program, Fashionable Accessories, New Arrivals, Fashion Trends, Fashion Discounts, Fashion Must-Haves, Fashion Store Online, Fashion Wardrobe, Stylish Outfits, Designer Fashion, Seasonal Fashion, Fashionable Dresses, Fashion Accessories Sale, Online Fashion Store, Fashion for All, Top Fashion Brands, Affordable Luxury, Fashion for Him and Her, Best Fashion Deals, Trending Fashion, Fashion Inspo, Fashion Influencer Picks, Latest Fashion Styles, Shop the Look, Fashion Trends Revealed, Fashionista's Paradise, Explore Fashion, Iconic Fashion, Timeless Elegance, Casual Fashion, Streetwear Fashion, Classic Styles, Sustainable Fashion, Eco-Friendly Fashion, High Fashion, Boho Chic, Vintage Fashion, Bohemian Style, Chic and Comfy, Athleisure Wear, Fashion for Every Occasion, Trendsetters' Hub, Runway-Inspired Fashion, Red Carpet Looks, Fashion on a Budget, Fashionable Jewelry, Designer Handbags, Stylish Sunglasses, Fashionable Hats, Trendy Watches, Statement Pieces, Fashionable Scarves, Complementing Footwear, Fashionable Outerwear, Casual Tees, Fashionable Denim, Office Fashion, Formal Wear, Evening Glamour, Beachwear Fashion, Fashionable Swimwear, Activewear Fashion, Ethical Fashion, Fashionable Plus Size, Petite Fashion, Fashion for Tall People, Maternity Fashion, Fashionable Workwear, Wedding Fashion, Bridal Gowns, Bridesmaid Dresses, Fashion for Special Occasions, Fashionable Partywear, Stylish Shirts, Fashionable Colors, Colorful Outfits, Shirt Collection, Vibrant Clothing, Versatile Shirts, Casual Shirt Styles, Formal Shirts, Shirt Fashion Trends, Shirt and Tie Combos, Printed Shirts, Solid Colors, Colorful Accessories, Color-Pop Footwear, Shirt and Denim Pairings, Colorful Dresses, Shirt and Skirt Combinations, Monochrome Fashion, Color Coordination Tips, Mix and Match Colors.",
        },
        {
          name: "author",
          content: "Dhanasri",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/weemax-logo.jpg" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap",
        },
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" },
      ],
    },
  },
  css: ["@/assets/style.scss"],
  runtimeConfig: {
    public: {
      baseURL,
    },
  },
};
