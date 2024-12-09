<template>
  <div>
    <NavBar />
    <div class="max-w-[1024px] mx-auto pt-10 px-4">
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
                >Profile</NuxtLink
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="relative w-full h-auto my-14">
        <NuxtLink to="/account">
          <div
            class="absolute left-0 flex items-center justify-center w-10 h-10 text-white -translate-y-1/2 bg-black rounded-full top-1/2"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        </NuxtLink>
        <h1 class="text-5xl font-bold text-center">Profile</h1>
      </div>
      <div class="p-5 bg-gray-100">
        <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div class="pr-4 sm:pr-0">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              See about yourself
            </p>
          </div>

          <div
            class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
          >
            <div class="px-4 py-6 sm:p-8">
              <div
                class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-12">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Name</label
                  >
                  <div class="mt-2">
                    <input
                      v-model="user.userName"
                      type="text"
                      id="first-name"
                      class="block w-full rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-12">
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Email address</label
                  >
                  <div class="mt-2">
                    <input
                      v-model="user.userEmail"
                      id="email"
                      type="email"
                      class="block w-full rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-12">
                  <label
                    for="mobile"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Phone number</label
                  >
                  <div class="mt-2">
                    <input
                      v-model="user.mobile"
                      id="mobile"
                      type="number"
                      class="block w-full px-2 rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
            >
              <button
                @click="updateUser()"
                class="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-black/70 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      user: {},
      toast: useToast(),
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
            return;
          }
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateUser() {
      this.$http
        .$put(`/user/profile`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
          body: {
            userName: this.user.userName,
            userEmail: this.user.userEmail,
            mobile: this.user.mobile,
          },
        })
        .then((res) => {
          if (res.success) {
            this.getUser();
            this.toast.success("User Details updated successfully");
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
