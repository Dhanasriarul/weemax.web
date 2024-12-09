<template>
  <div class="w-full min-h-screen pb-20 overflow-hidden bg-white font-livvic">
    <div class="flex items-center justify-center h-14">
      <!-- <h1 class="text-2xl font-bold text-center text-black">Weemax</h1> -->
      <img src="/full-logo.png" class="h-12" alt="" />
    </div>
    <div class="relative w-full max-w-md px-4 mx-auto mt-4 h-max">
      <!-- <svg
        width="500"
        height="500"
        class="absolute top-[-20%] left-[-20%] animate-pulse z-0"
        viewBox="0 0 819 1196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.5"
          cx="221"
          cy="598"
          r="598"
          fill="url(#paint0_radial_1631_1271)"
          fill-opacity="0.5"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1631_1271"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(221 598) rotate(90) scale(484)"
          >
            <stop stop-color="#6274E7" />
            <stop offset="0.0001" stop-color="#6274E7" />
            <stop offset="1" stop-color="#6274E7" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <svg
        width="500"
        height="500"
        class="absolute bottom-[-40%] right-[-50%] animate-pulse z-0"
        viewBox="0 0 819 1196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.5"
          cx="221"
          cy="598"
          r="598"
          fill="url(#paint0_radial_1631_1271)"
          fill-opacity="0.5"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1631_1271"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(221 598) rotate(90) scale(484)"
          >
            <stop stop-color="#6274E7" />
            <stop offset="0.0001" stop-color="#6274E7" />
            <stop offset="1" stop-color="#6274E7" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg> -->

      <div class="w-full h-auto p-4 glass-card z-[999999] flex flex-col gap-3">
        <h1 class="mb-2 text-2xl font-medium text-black">Get start</h1>
        <p class="text-sm text-black/40">
          Register here to unlock all benefits of Weemax.
        </p>
        <p class="font-medium relative text-black/50 z-[999] mb-10">
          Already a user?
          <span class="text-[#1aa7ec]"
            ><NuxtLink to="/login">Log In</NuxtLink></span
          >
        </p>
        <div class="w-full">
          <input
            v-model="user.name"
            type="text"
            class="w-full h-16 px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Name"
          />
        </div>
        <div class="w-full">
          <input
            v-model="user.mobile"
            type="number"
            class="w-full h-16 px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Phone"
          />
        </div>
        <div class="w-full">
          <input
            v-model="user.email"
            type="email"
            class="w-full h-16 px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Email"
          />
        </div>
        <div class="w-full">
          <input
            v-model="user.password"
            class="w-full h-16 px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Set Password"
            type="password"
          />
        </div>
        <div class="w-full">
          <!-- <input
            v-model="user.dob"
            class="px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Date of birth"
            type="date"
          /> -->
          <el-date-picker
            v-model="user.dob"
            type="date"
            format="DD-MM-YYYY"
            value-format="YYYY-MM-DD"
            placeholder="Date of birth"
            class="dob_picker inner-glass-card"
          />
        </div>
        <div v-if="!isRefered" class="w-full">
          <input
            v-model="user.referralCode"
            class="w-full h-16 px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Referral Code (Optional)"
            type="text"
          />
        </div>
        <div class="w-full">
          <p
            class="mt-5 font-medium relative text-black/50 z-[999999] flex items-center"
          >
            <input v-model="isAgree" type="checkbox" />&nbsp;&nbsp; Agree to our
            &nbsp;
            <span class="text-[#1aa7ec]"
              ><NuxtLink to="/terms-conditions">
                Terms & Conditions</NuxtLink
              ></span
            >
          </p>
        </div>
        <div
          @click="signUp()"
          class="w-full h-16 bg-[#1aa7ec] mt-10 rounded-2xl text-black flex justify-center items-center text-center font-medium text-xl"
        >
          Sign Up
          <i class="ml-3 text-sm fa-solid fa-right-to-bracket"></i>
        </div>
      </div>
      <p class="mt-5 font-medium relative text-black/50 z-[999]">
        Already a user?
        <span class="text-[#1aa7ec]"
          ><NuxtLink to="/login">Log In</NuxtLink></span
        >
      </p>
    </div>
    <div
      v-if="isLoading"
      class="fixed top-0 left-0 h-full bg-black/50 w-full z-[9999999999999]"
    ></div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      user: {
        name: "",
        email: "",
        mobile: "",
        dob: "",
        referralCode: "",
      },
      isRefered: false,
      isLoggedIn: false,
      isAgree: false,
      isLoading: false,
    };
  },
  mounted() {
    let referCode = window.localStorage.getItem("weemaxReferCode");

    if (referCode) {
      console.log(referCode);
      this.isRefered = true;
      this.user.referralCode = referCode;
    }

    if (this.$route.query.shareId) {
      this.isRefered = true;
      this.user.referralCode = this.$route.query.shareId;
    }
  },
  methods: {
    signUp() {
      if (!this.user.name) {
        this.toast.error("Name is required");
        return;
      }
      if (!this.user.email) {
        this.toast.error("Email is required");
        return;
      }
      if (!this.user.password) {
        this.toast.error("Password is required");
        return;
      }
      if (!this.user.mobile) {
        this.toast.error("Phone is required");
        return;
      }
      if (!this.user.dob) {
        this.toast.error("Date of Birth is required");
        return;
      }
      if (!this.isAgree) {
        this.toast.error("Please agree to our terms and conditions");
        return;
      }
      this.isLoading = true;

      this.$http
        .$post("/auth/register", {
          body: {
            ...this.user,
          },
        })
        .then((res) => {
          if (res.success) {
            window.location.href = `/otp?email=${this.user.email}`;
            return;
          }
          if (res.message == "Invalid Referral code") {
            this.isRefered = false;
            this.isLoading = false;
            window.localStorage.removeItem("weemaxReferCode");
            this.toast.error(res.message);
          }
          this.toast.error(res.message);
          this.isLoading = false;
        })
        .catch((err) => {
          this.toast.error("Can't Sign up");
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.glass-card {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.inner-glass-card {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.bg-ball {
  background: -moz-radial-gradient(
    circle,
    rgba(9, 241, 227, 1) 0%,
    rgba(5, 227, 240, 1) 39%,
    rgba(0, 212, 255, 0) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(9, 241, 227, 1) 0%,
    rgba(5, 227, 240, 1) 39%,
    rgba(0, 212, 255, 0) 100%
  );
  background: radial-gradient(
    circle,
    rgba(9, 241, 227, 1) 0%,
    rgba(5, 227, 240, 1) 39%,
    rgba(0, 212, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#09f1e3",endColorstr="#00d4ff",GradientType=1);
}
</style>
