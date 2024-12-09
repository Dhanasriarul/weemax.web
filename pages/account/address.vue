<template>
  <div>
    <NavBar />

    <div class="pt-5 bg-white">
      <div class="px-6 mx-auto max-w-7xl lg:px-8">
        <div
          class="max-w-2xl mx-auto space-y-16 divide-gray-100 lg:mx-0 lg:max-w-none"
        >
          <nav class="flex mb-10" aria-label="Breadcrumb">
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
                    >Address</NuxtLink
                  >
                </div>
              </li>
            </ol>
          </nav>
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <div class="flex items-center gap-4">
                <NuxtLink to="/account">
                  <div
                    class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
                  >
                    <i class="fa-solid fa-chevron-left"></i>
                  </div>
                </NuxtLink>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                  Address
                </h2>
              </div>
              <p class="mt-4 leading-7 text-gray-600">
                Pick your delivery addresses.
              </p>
              <div
                @click="addAddressIsOpen = true"
                class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
              >
                Add Address
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
            >
              <div
                v-for="(address, index) in addresses"
                :key="index"
                class="p-10 border-2 border-black rounded-2xl"
              >
                <h3 class="text-base font-semibold leading-7 text-gray-900">
                  {{ address.name }}
                </h3>
                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div class="mt-1">
                    <dt class="sr-only">Phone number</dt>
                    <dd>{{ address.phone }}</dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">Address</dt>
                    <dd>{{ address.addressLineOne }}</dd>
                    <dd>{{ address.addressLineTwo }}</dd>
                    <dd>{{ address.city }}</dd>
                    <dd>{{ address.state }}</dd>
                    <dd>{{ address.zipCode }}</dd>
                  </div>
                </dl>
                <div class="flex gap-3">
                  <!-- <button
                    @click="openEditModal(index)"
                    class="flex mt-3 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm hover:scale-110 transition font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                  >
                    Edit
                  </button> -->
                  <button
                    @click="deleteAddress(index)"
                    class="flex mt-3 w-full bg-black text-white items-center justify-center rounded-md border border-gray-300 px-2.5 py-2 text-sm hover:scale-110 transition font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="editAddressIsOpen"
      class="fixed top-0 left-0 w-screen h-screen bg-black/40 z-[9999999]"
    >
      <div
        class="h-[80%] px-5 py-3 w-[90%] max-w-[600px] bg-white absolute rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="h-[60px] flex items-center justify-between">
          <h1 class="text-3xl font-bold">Edit address</h1>
          <div
            @click="
              editAddressIsOpen = false;
              editAddressData = {};
            "
            class="flex items-center justify-center w-10 h-10 transition bg-gray-300 rounded-full cursor-pointer hover:scale-110"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="pb-12 h-[calc(100%-60px)] hide-scrollbar overflow-y-auto">
          <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="editAddressData.name"
                  id="first-name"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="mobile"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Mobile</label
              >
              <div class="mt-2">
                <input
                  id="mobile"
                  v-model="editAddressData.phone"
                  type="email"
                  class="block w-full rounded-md px-3 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Address Line One</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="editAddressData.addressLineOne"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Address Line Two (Optional)</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="editAddressData.addressLineTwo"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-sm font-medium leading-6 text-gray-900"
                >City</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="editAddressData.city"
                  class="block w-full rounded-md px-3 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="region"
                class="block text-sm font-medium leading-6 text-gray-900"
                >State / Province</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="editAddressData.state"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm font-medium leading-6 text-gray-900"
                >ZIP / Postal code</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="editAddressData.zipCode"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div
            @click="editAddress()"
            class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
          >
            Edit
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="addAddressIsOpen"
      class="fixed top-0 left-0 w-screen h-screen bg-black/40 z-[9999999]"
    >
      <div
        class="h-[80%] px-5 py-3 w-[90%] max-w-[600px] bg-white absolute rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="h-[60px] flex items-center justify-between">
          <h1 class="text-3xl font-bold">Add address</h1>
          <div
            @click="
              addAddressIsOpen = false;
              addAddressData = {};
            "
            class="flex items-center justify-center w-10 h-10 transition bg-gray-300 rounded-full cursor-pointer hover:scale-110"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="pb-12 h-[calc(100%-60px)] hide-scrollbar overflow-y-auto">
          <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.name"
                  id="first-name"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="mobile"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Mobile</label
              >
              <div class="mt-2">
                <input
                  id="mobile"
                  v-model="addAddressData.phone"
                  type="email"
                  class="block w-full rounded-md px-3 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Address Line One</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.addressLineOne"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Address Line Two (Optional)</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.addressLineTwo"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-sm font-medium leading-6 text-gray-900"
                >City</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.city"
                  class="block w-full rounded-md px-3 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="region"
                class="block text-sm font-medium leading-6 text-gray-900"
                >State / Province</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.state"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm font-medium leading-6 text-gray-900"
                >ZIP / Postal code</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.zipCode"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div
            @click="addAddress()"
            class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
          >
            Add Address
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isLoading"
      class="fixed top-0 left-0 h-full bg-black/50 w-full z-[9999999999999]"
    ></div>
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
      toast: useToast(),
      addresses: [],
      editAddressIsOpen: false,
      editAddressData: {},
      addAddressData: {},
      addAddressIsOpen: false,
      isLoading: false,
    };
  },
  mounted() {
    this.getAddress();
  },
  methods: {
    getAddress() {
      this.$http
        .$get(`/user/profile/getAllAddresses`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          this.addresses = res.addresses;
        });
    },
    openEditModal(index) {
      this.editAddressIsOpen = true;
      this.editAddressData = this.addresses[index];
    },
    deleteAddress(index) {
      this.$http
        .$delete(
          `/user/profile/deleteAddress?addressId=${this.addresses[index].addressId}`,
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
          }
        )
        .then((res) => {
          if (res.success) {
            this.toast.success("Address deleted successfully");
            this.getAddress();
            return;
          }
          this.toast.error(res.message);
        });
    },
    async addAddress() {
      if (this.addAddressData.name == "") {
        return this.toast.error("Name is required");
      }
      if (this.addAddressData.phone == "") {
        return this.toast.error("Phone is required");
      }
      if (this.addAddressData.addressLineOne == "") {
        return this.toast.error("Address Line One is required");
      }
      if (this.addAddressData.city == "") {
        return this.toast.error("City is required");
      }
      if (this.addAddressData.state == "") {
        return this.toast.error("State is required");
      }
      if (this.addAddressData.zipCode == "") {
        return this.toast.error("Zip Code is required");
      }

      this.isLoading = true;

      let addObj = {
        name: this.addAddressData.name,
        phone: this.addAddressData.phone,
        addressLineOne: this.addAddressData.addressLineOne,
        addressLineTwo: this.addAddressData.addressLineTwo,
        city: this.addAddressData.city,
        state: this.addAddressData.state,
        zipCode: this.addAddressData.zipCode,
      };

      await this.$http
        .$get(`https://api.postalpincode.in/pincode/${addObj.zipCode}`)
        .then(async (res) => {
          if (res[0].Status == "Success") {
            addObj.isTn = res[0].PostOffice[0].State == "Tamil Nadu" ? 1 : 0;

            await this.$http
              .$post(`/user/profile/addAddress`, {
                headers: {
                  Authorization:
                    "Bearer " +
                    window.localStorage.getItem("weemaxAccessToken"),
                },
                body: addObj,
              })
              .then((res) => {
                if (res.success) {
                  this.toast.success("Address added successfully");
                  this.getAddress();
                  this.addAddressIsOpen = false;
                  this.addAddressData = {};
                  this.isLoading = false;
                  return;
                }
                this.isLoading = false;
                this.toast.error(res.message);
              });
          } else {
            this.toast.error("Invalid Zip Code");
          }
        });
    },
  },
};
</script>
