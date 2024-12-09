<template>
  <div class="w-full min-h-screen overflow-hidden bg-white font-livvic">
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
        <h1 class="mb-2 text-2xl font-medium text-black">Password Reset</h1>
        <p class="mb-10 text-sm text-black/40">Change your password here.</p>
        <div class="w-full">
          <input
            v-model="password"
            type="text"
            class="w-full h-16 px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Password"
          />
        </div>
        <div class="w-full">
          <input
            v-model="confirmPassword"
            type="text"
            class="w-full h-16 px-5 bg-transparent border-none outline-none inner-glass-card text-black/50"
            placeholder="Confirm Password"
          />
        </div>
        <p class="text-[#1aa7ec] text-right cursor-pointer text-sm font-medium">
          <NuxtLink to="/forgot-pass">Forgot password?</NuxtLink>
        </p>
        <div
          @click="resetPass()"
          class="w-full h-16 bg-[#1aa7ec] mt-10 cursor-pointer rounded-2xl text-black flex justify-center items-center text-center font-medium text-xl"
        >
          Reset
          <i class="ml-3 text-sm fa-solid fa-right-to-bracket"></i>
        </div>
      </div>
      <p class="mt-5 font-medium relative text-black/50 z-[999999]">
        Know your account?
        <span class="text-[#1aa7ec]"
          ><NuxtLink to="/login">Log In</NuxtLink></span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      password: "",
      confirmPassword: "",
    };
  },
  mounted() {},
  methods: {
    resetPass() {
      if (!this.password || !this.confirmPassword) {
        this.toast.error("Password is required");
        return;
      }

      if (this.password != this.confirmPassword) {
        this.toast.error("Passwords don't match");
        return;
      }

      this.$http
        .$post("/auth/reset-password", {
          body: {
            token: this.$route.query.token,
            password: this.confirmPassword,
          },
        })
        .then((res) => {
          if (res.success) {
            this.toast.success(res.message);
            this.$router.push("/login");
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          this.toast.error("Can't reset password");
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
