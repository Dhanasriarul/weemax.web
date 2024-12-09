<template>
  <div>
    <CustomNavBar />
    <div class="max-w-[1024px] mx-auto py-10 px-4">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">
                <svg
                  class="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Home</span>
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
              <NuxtLink
                to="/account"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Account</NuxtLink
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
              <NuxtLink
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current="page"
                >Biz</NuxtLink
              >
            </div>
          </li>
        </ol>
      </nav>
      <h1 class="text-5xl font-bold text-center my-14">
        Manage your Biz account here
      </h1>
      <div class="flex flex-col w-full gap-5 lg:flex-row">
        <div>
          <div
            class="w-full min-w-[320px] bg-white border border-gray-200 rounded-lg shadow lg:max-w-sm p-10"
          >
            <div class="flex flex-col items-center">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 capitalize">
                {{ user.userName }}
              </h5>
              <!-- <span class="text-sm text-gray-500">
                {{ user.userEmail }}
              </span> -->
              <div class="flex mt-4 space-x-3 md:mt-6">
                <NuxtLink
                  to="/account/profile"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white transition bg-black rounded-lg hover:scale-110"
                  >Manage Profile</NuxtLink
                >
                <!-- <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                  >Message</a
                > -->
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div v-if="currentSection == 'referals'">
            <div
              @click="currentSection = null"
              class="px-4 py-1 font-bold text-white bg-black rounded-full cursor-pointer w-max"
            >
              Go Back
            </div>
            <div class="mt-3">
              <h1 class="text-xl font-bold">Choose The Level</h1>
              <div>
                <select
                  v-model="level"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-black focus:ring-2 focus:ring-black sm:text-sm sm:leading-6"
                >
                  <option value="null" disabled selected>
                    Choose the level
                  </option>
                  <option v-for="n in 11" :key="n" :value="`level${n}`">
                    Level {{ n }}
                  </option>
                </select>
              </div>
              <div v-if="level" class="grid w-full grid-cols-2 gap-5 mt-4">
                <div
                  v-for="(referal, index) in referrals[level]"
                  :key="index"
                  class="w-full p-3 transition border-2 border-black/60 rounded-xl hover:scale-110 hover:bg-black/5"
                >
                  <div
                    class="w-full h-auto overflow-hidden bg-red-100 rounded-full aspect-square"
                  >
                    <img
                      class="object-cover w-full h-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <h1 class="mt-2 text-lg font-bold text-center">
                    {{ referal.name }}
                  </h1>
                  <p class="text-center">Earned: ₹{{ referal.earned }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="currentSection == 'reward'">
            <div
              @click="currentSection = null"
              class="px-4 py-1 font-bold text-white bg-black rounded-full cursor-pointer w-max"
            >
              Go Back
            </div>
            <p class="my-3 text-orange-300">
              Note: All the data shown here are not available balance. The
              amount shown below will be added to the respective wallets after
              the waiting period complete.
            </p>
            <div>
              <div>
                <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div
                    class="px-4 py-3 overflow-hidden bg-white rounded-lg shadow sm:p-6"
                  >
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Reward Wallet Balance
                    </dt>
                    <dd
                      class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
                    >
                      ₹71,897
                    </dd>
                  </div>
                  <div
                    class="px-4 py-3 overflow-hidden bg-white rounded-lg shadow sm:p-6"
                  >
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Personal Wallet
                    </dt>
                    <dd
                      class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
                    >
                      ₹58.16%
                    </dd>
                  </div>
                  <div
                    class="px-4 py-3 overflow-hidden bg-white rounded-lg shadow sm:p-6"
                  >
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Income Wallet
                    </dt>
                    <dd
                      class="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
                    >
                      ₹24.57%
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <h1 class="mt-10 text-3xl font-bold">Pending</h1>
            <ul role="list" class="divide-y divide-gray-100">
              <li class="flex justify-between py-5 gap-x-6">
                <div class="flex gap-x-4">
                  <div class="flex-auto min-w-0">
                    <p class="text-sm font-semibold leading-6 text-gray-900">
                      ₹67676
                    </p>
                    <p class="mt-1 text-xs leading-5 text-gray-500 truncate">
                      Moving to:
                      <span
                        class="px-2 py-1 text-black bg-green-300 rounded-full"
                        >Income wallet</span
                      >
                    </p>
                  </div>
                </div>
                <div class="hidden sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900">
                    Moving date: <b>10/10/2000</b>
                  </p>
                  <p class="mt-1 text-xs leading-5 text-gray-500">
                    Status: <span class="font-bold capitalize">Pending</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-else class="grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
            <div
              class="flex items-center justify-center h-20 text-xl font-bold text-center text-white transition bg-black cursor-pointer hover:scale-105 sm:col-span-3 rounded-xl"
            >
              Total Earnings
            </div>
            <div
              @click="currentSection = 'reward'"
              class="flex items-center justify-center h-20 text-xl font-bold text-center text-white transition bg-black cursor-pointer hover:scale-105 rounded-xl"
            >
              Reward Wallet
            </div>
            <div
              class="flex items-center justify-center h-20 text-xl font-bold text-center text-white transition bg-black cursor-pointer hover:scale-105 rounded-xl"
            >
              Personal Wallet
            </div>
            <div
              class="flex items-center justify-center h-20 text-xl font-bold text-center text-white transition bg-black cursor-pointer hover:scale-105 rounded-xl"
            >
              Income Wallet
            </div>

            <div
              @click="currentSection = 'referals'"
              class="flex items-center justify-center h-20 text-xl font-bold text-center text-white transition bg-black cursor-pointer hover:scale-105 sm:col-span-3 rounded-xl"
            >
              Referals
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      user: {},
      currentSection: null,
      level: null,
      referrals: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$http
        .$get(`/user/profile`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.user = res.user;
            this.getReferrals();
            return;
          }
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReferrals() {
      this.$http
        .$get(`/user/profile/getReferals`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.referrals = res.referrals;
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
