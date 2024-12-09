<template>
  <div>
    <NavBar />
    <div class="min-h-screen p-10 mx-auto max-w-7xl lg:flex lg:gap-5">
      <div class="w-full">
        <h1 class="mt-10 text-5xl font-bold text-center">Cashback Reward</h1>
        <div class="mt-10">
          <div
            class="w-full h-[200px] rounded-2xl lg:h-[350px] bg-white border shadow-lg flex justify-between items-center p-5"
          >
            <div>
              <h1 class="mb-3 text-6xl font-bold">
                ₹{{ cashbackWalletBalance }}
              </h1>
              <p
                class="px-3 py-1 text-lg font-bold rounded-full bg-black/20 w-max"
              >
                Total earned: ₹{{ cashbackWalletTotalDeposit }}
              </p>
              <p
                class="px-3 py-1 mt-2 text-lg font-bold rounded-full bg-black/20 w-max"
              >
                Total used: ₹{{ cashbackWalletTotalWithdraw }}
              </p>
            </div>
            <!-- <div>
            <i class="text-4xl text-black fa-solid fa-circle-arrow-right"></i>
          </div> -->
          </div>
        </div>
      </div>

      <div class="w-full">
        <h1 class="mt-10 text-lg font-bold">Yet to be added:</h1>
        <div class="mt-5">
          <ul role="list" class="grid gap-4">
            <li
              v-for="(cashback, index) in pendingDeposits"
              :key="index"
              class="px-3 py-5 border gap-x-6 border-black/20 rounded-2xl"
            >
              <div class="flex items-center justify-between w-full">
                <p class="text-sm font-semibold leading-6">
                  ₹{{ cashback.amount }}
                </p>
                <p class="text-xs leading-6 text-black">
                  Moving date: <b>{{ cashback.moveDate }}</b>
                </p>
              </div>
              <div class="flex items-center justify-between w-full">
                <!-- <p class="mt-1 text-xs leading-5 truncate text-black/40">
                  Moving to:
                  <span class="px-2 py-1 text-black bg-green-300 rounded-full"
                    >Purchase wallet</span
                  >
                </p> -->
                <p></p>
                <p class="mt-1 text-xs leading-5 text-black/40">
                  Status:
                  <span
                    :class="{
                      'text-green-500': cashback.status == 'credited',
                      'text-red-500': cashback.status == 'canceled',
                      'text-yellow-500': cashback.status == 'pending',
                    }"
                    class="font-bold capitalize"
                    >{{ cashback.status }}</span
                  >
                </p>
              </div>
            </li>
          </ul>
        </div>
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
      cashbackWalletBalance: 0,
      pendingDeposits: [],
      pendingDepositAmount: 0,
      cashbackWalletTotalDeposit: 0,
      cashbackWalletTotalWithdraw: 0,
    };
  },
  mounted() {
    this.getCashbackWallet();
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
            this.cashbackWalletBalance = res.cashbackWallet.balance;
            this.cashbackWalletTotalDeposit = res.cashbackWallet.totalDeposit;
            this.cashbackWalletTotalWithdraw = res.cashbackWallet.totalWithdraw;
            this.pendingDeposits = res.pendingDeposits;
            this.pendingDepositAmount = res.pendingDepositAmont;
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
