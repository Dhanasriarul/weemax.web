<template>
  <div>
    <div
      id="sidebarContainer"
      class="w-screen h-full overflow-hidden bg-black/70 z-[999999999] fixed top-0 -left-[150%] transition-[0.5s] flex"
    >
      <div
        class="h-full p-3 w-[calc(100%-60px)] bg-black z-[999999999] lg:w-[481px] flex flex-col justify-between"
      >
        <div class="flex flex-col gap-2">
          <span
            v-for="item in sideBarItems"
            :key="item"
            class="text-lg font-bold text-white transition-all hover:ml-2"
          >
            <NuxtLink
              :to="item.route"
              @click="sidebarAction('close')"
              class="text-white"
              >{{ item.name }}</NuxtLink
            >
          </span>
          <span
            class="px-4 text-lg font-bold text-black transition-all bg-white rounded-lg w-max hover:ml-2"
          >
            <NuxtLink
              to="/account/reward"
              @click="sidebarAction('close')"
              class="text-black"
              >Rewards
              <i class="text-yellow-500 fa-solid fa-crown animate-pulse"></i
            ></NuxtLink>
          </span>
        </div>
        <div class="flex w-full mx-auto flex-col gap-3 max-w-[400px]">
          <!-- <a href="/account/careers">
            <div
              class="w-full bg-[#1aa7ec] rounded-[20px] text-xl font-bold text-center flex justify-center items-center py-3 transition-all hover:scale-110"
            >
              Weemax Careers
            </div>
          </a> -->
          <div
            class="w-full bg-white rounded-[20px] p-3 flex justify-between items-center"
          >
            <div class="flex items-center gap-2">
              <div
                class="flex items-center justify-center w-10 h-10 bg-black rounded-full"
              >
                <i class="text-white fa-regular fa-user"></i>
              </div>
              <div v-if="isLoggedIn">
                <h1 class="font-bold capitalize">
                  <NuxtLink to="/account">{{ name }}</NuxtLink>
                </h1>
                <p class="text-xs text-black/50">
                  <NuxtLink to="/account">View Profile</NuxtLink>
                </p>
              </div>
              <div v-else>
                <h1 class="font-bold">
                  <NuxtLink to="/signup">Log In / Sign Up</NuxtLink>
                </h1>
              </div>
            </div>
            <div class="flex gap-2 lg:gap-4">
              <!-- <NuxtLink to="/explore">
                <div class="transition-all hover:scale-125">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </NuxtLink> -->
              <NuxtLink to="/account/wishlist">
                <div class="transition-all hover:scale-125">
                  <i class="fa-solid fa-heart"></i>
                </div>
              </NuxtLink>
              <NuxtLink to="/account/bag">
                <div class="relative transition-all hover:scale-125">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <!-- <div
                    class="absolute -top-2 -right-2.5 text-white bg-black text-[8px] h-4 w-4 rounded-full flex justify-center items-center"
                  >
                    {{ basketItemCount }}
                  </div> -->
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-[60px] w-[60px] bg-black flex justify-center items-center lg:h-20 lg:w-20"
        @click="sidebarAction('close')"
      >
        <i class="text-xl text-white fa-solid fa-xmark"></i>
      </div>
    </div>
    <div class="h-[60px] w-full flex justify-between lg:h-[80px]">
      <div class="flex items-center h-full w-max">
        <div
          class="h-[60px] w-[60px] bg-black flex justify-center items-center lg:h-20 lg:w-20"
          @click="sidebarAction('open')"
        >
          <i class="text-xl text-white fa-solid fa-bars"></i>
        </div>
        <NuxtLink to="/">
          <img src="/full-logo.png" class="ml-2 h-7" alt="" />
        </NuxtLink>
        <!-- <h1 class="text-xl font-bold lg:text-2xl">
          <NuxtLink to="/">WeeMax</NuxtLink>
        </h1> -->
      </div>
      <div
        class="flex items-center h-full gap-3 pr-3 w-max sm:gap-5 lg:gap-6 md:pr-[60px] lg:pr-[80px]"
      >
        <div class="flex gap-3 lg:gap-4">
          <!-- <NuxtLink to="/explore">
            <div class="transition-all hover:scale-125">
              <i class="text-xl fa-solid fa-magnifying-glass"></i>
            </div>
          </NuxtLink> -->
          <NuxtLink to="/account/reward/cashback">
            <div class="relative transition-all hover:scale-125">
              <i class="md:text-xl fa-solid fa-sack-dollar"></i>
              <div
                class="absolute bottom-[93%] left-1/2 -translate-x-1/2 text-white bg-black text-[8px] h-4 w-fit px-1 rounded-full flex justify-center items-center"
              >
                ₹{{ user.totalBalance || 0 }}
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/account/wishlist">
            <div class="transition-all hover:scale-125">
              <i class="md:text-xl fa-solid fa-heart"></i>
            </div>
          </NuxtLink>
          <NuxtLink to="/account/bag">
            <div class="relative transition-all hover:scale-125">
              <i class="md:text-xl fa-solid fa-bag-shopping"></i>
              <!-- <div
                class="absolute -top-2 -right-2.5 text-white bg-black text-[8px] h-4 w-4 rounded-full flex justify-center items-center"
              >
                {{ basketItemCount }}
              </div> -->
            </div>
          </NuxtLink>
        </div>
        <NuxtLink v-if="isLoggedIn" to="/account" class="hidden sm:block">
          <div
            class="px-6 py-2 font-bold text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
          >
            Profile <i class="ml-2 text-sm fa-solid fa-user"></i>
          </div>
        </NuxtLink>
        <NuxtLink v-else to="/signup">
          <div
            class="px-4 py-2 font-bold text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
          >
            Sign up
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      isSidebarOpen: false,
      basketItemCount: 0,
      sideBarItems: [
        {
          name: "Home",
          route: "/",
        },
        {
          name: "Product List",
          route: "/p",
        },
        // {
        //   name: "Wishlist",
        //   route: "/account/wishlist",
        // },
        // {
        //   name: "Checkout",
        //   route: "/checkout",
        // },
        {
          name: "My account",
          route: "/account/",
        },
        // {
        //   name: "Profile",
        //   route: "/account/profile",
        // },
        {
          name: "My Orders",
          route: "/account/orders",
        },
        {
          name: "About Us",
          route: "/about",
        },
        // {
        //   name: "Basket",
        //   route: "/account/bag",
        // },
        // {
        //   name: "Your Addresses",
        //   route: "/account/address",
        // },
        {
          name: "Help",
          route: "/account/help",
        },
        {
          name: "Weemax Franchise",
          route: "/account/careers",
        },
        // {
        //   name: "Refer a friend",
        //   route: "/account/refer",
        // },
      ],
      isLoggedIn: false,
      name: "",
      user: {},
    };
  },
  mounted() {
    this.authCheck();
    let modal = document.getElementById("sidebarContainer");
    window.onclick = function (event) {
      if (event.target == modal) {
        this.sidebarAction("close");
      }
    };
  },
  methods: {
    sidebarAction(action) {
      let modal = document.getElementById("sidebarContainer");
      if (action == "open") {
        modal.style.left = "0";
      } else {
        modal.style.left = "-150%";
      }
    },
    authCheck() {
      const token = window.localStorage.getItem("weemaxAccessToken");
      let expTime = window.localStorage.getItem("weemaxAccessTokenExp");

      expTime = Math.floor(new Date(expTime).getTime() / 1000);
      let currentTime = Math.floor(Date.now() / 1000);

      if (token) {
        if (expTime > currentTime) {
          this.isLoggedIn = true;

          this.getUser();
          return;
        }
        window.location.href = "/login";
      }
    },
    getUser() {
      this.$http
        .$get("/user/profile", {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.user = res.user;
            this.name = res.user.userName;
            return;
          }
        });
    },
  },
};
</script>
