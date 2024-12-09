<template>
  <div>
    <NavBar />
    <div class="min-h-screen p-10 mx-auto max-w-7xl">
      <h1 class="mt-10 text-5xl font-bold text-center">Rewards</h1>
      <div class="grid gap-5 mt-10">
        <NuxtLink to="/account/reward/cashback">
          <div
            class="w-full h-[200px] rounded-2xl lg:h-[350px] bg-white border shadow-lg flex justify-between items-center p-5"
          >
            <div>
              <h1 class="mb-3 text-6xl font-bold">₹{{ cashbackWallet }}</h1>
              <span
                class="px-3 py-1 text-lg font-bold rounded-full bg-black/20 w-max"
                >Cashback Reward</span
              >
            </div>
            <div>
              <i class="text-4xl text-black fa-solid fa-circle-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
        <!-- <NuxtLink to="/account/reward/referral">
          <div
            class="w-full h-[200px] rounded-2xl lg:h-[350px] bg-white border shadow-lg flex justify-between items-center p-5"
          >
            <div>
              <h1 class="mb-3 text-6xl font-bold">₹{{ referralWallet }}</h1>
              <span
                class="px-3 py-1 text-lg font-bold rounded-full bg-black/20 w-max"
                >Referral Reward</span
              >
            </div>
            <div>
              <i class="text-4xl text-black fa-solid fa-circle-arrow-right"></i>
            </div>
          </div>
        </NuxtLink> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      cashbackWallet: 0,
      referralWallet: 0,
    };
  },
  mounted() {
    this.getCashbackWallet();
    this.getReferralWallet();
  },
  methods: {
    getCashbackWallet() {
      this.$http
        .$get(`/user/profile/getCashbackWallet`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.cashbackWallet = res.cashbackWallet.balance;
            return;
          }
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReferralWallet() {
      this.$http
        .$get(`/user/profile/getReferralWallet`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.referralWallet = res.referralWallet.balance;
            return;
          }
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
