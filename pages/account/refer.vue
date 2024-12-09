<template>
  <div>
    <NavBar />
    <div class="min-h-screen p-10 mx-auto max-w-7xl">
      <!-- <h1 class="mt-10 text-5xl font-bold text-center">Referrals</h1> -->
      <div
        id="refer"
        class="w-full h-auto max-w-xl p-3 mx-auto bg-yellow-400 rounded-2xl"
      >
        <h1 class="text-xl font-black text-center lg:text-3xl">
          It's More Fun Together!
        </h1>
        <p class="font-medium text-center">
          Refer a friend & earn upto ₹200 for their each purchase.
        </p>
        <img src="/emoji.png" class="w-full" alt="" />
        <div
          @click="shareBiz(`${url}/?shareId=${user.referralCode}`)"
          class="w-full py-4 font-extrabold text-center text-white bg-black rounded-full cursor-pointer md:hidden hover:scale-105"
        >
          Invite a friend <i class="fa-solid fa-share-nodes"></i>
        </div>

        <div
          @click="copyToClipboard(`${url}/?shareId=${user.referralCode}`)"
          class="w-full py-4 mt-4 font-extrabold text-center text-black border-2 border-black rounded-full cursor-pointer hover:scale-105"
        >
          Referral Code:
          <span class="px-3 border border-black border-dashed rounded-md">{{
            user.referralCode
          }}</span>
          <i class="ml-2 fa-solid fa-copy"></i>
        </div>
      </div>
      <div class="grid gap-5 mt-10 lg:grid-cols-2">
        <div
          class="w-full h-[200px] rounded-2xl lg:h-[350px] bg-white border shadow-lg flex justify-between items-center p-5"
        >
          <div>
            <h1 class="mb-3 text-6xl font-bold">{{ referrals.length }}</h1>
            <span
              class="px-3 py-1 text-lg font-bold rounded-full bg-black/20 w-max"
              >No of referrals</span
            >
          </div>
          <!-- <div>
            <i class="text-4xl text-black fa-solid fa-circle-arrow-right"></i>
          </div> -->
        </div>
      </div>
      <div class="w-full">
        <h1 class="mt-10 text-lg font-bold">Your referrals:</h1>
        <div class="mt-5">
          <ul role="list" class="grid gap-4">
            <li
              v-for="(user, index) in referrals"
              :key="index"
              class="flex items-center justify-between px-3 py-5 border gap-x-6 border-black/20 rounded-2xl"
            >
              <h1 class="text-lg font-bold">{{ user.name }}</h1>
              <div class="text-center">
                <p class="font-bold">₹{{ user.earned }}</p>
                <p class="text-xs">Earned</p>
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
      referrals: [],
      user: {},
    };
  },
  mounted() {
    this.getReferrals();
    this.getUser();
    if (window.location.hostname == "localhost") {
      this.url = "http://localhost:3000";
    } else {
      this.url = "https://www.weemax.in";
    }
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

    copyToClipboard(text) {
      // Create a temporary textarea element
      const textarea = document.createElement("textarea");
      textarea.value = text;

      // Make the textarea non-editable
      textarea.setAttribute("readonly", "");

      // Set the position to absolute to remove it from document flow
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";

      // Append the textarea to the document
      document.body.appendChild(textarea);

      // Copy the text from the textarea
      textarea.select();
      document.execCommand("copy");

      // Remove the textarea from the document
      document.body.removeChild(textarea);

      this.toast.success(`Link copied to clipboard`);
    },
    shareBiz(text) {
      if (navigator.share) {
        // Replace "Your title" with a meaningful title for your link
        // Replace "Your description" with a meaningful description for your link
        // Replace "your-link-here" with the actual URL you want to share
        navigator
          .share({
            // title: "Weemax Insider - Earn Money Online.",
            // text: "Hey buddy, I found this amazing website. Check it out!",
            url: text,
          })
          .then(() => console.log("Link shared successfully!"))
          .catch((error) => console.error("Error sharing link:", error));
      } else {
        // Create a temporary textarea element
        const textarea = document.createElement("textarea");
        textarea.value = text;

        // Make the textarea non-editable
        textarea.setAttribute("readonly", "");

        // Set the position to absolute to remove it from document flow
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";

        // Append the textarea to the document
        document.body.appendChild(textarea);

        // Copy the text from the textarea
        textarea.select();
        document.execCommand("copy");

        // Remove the textarea from the document
        document.body.removeChild(textarea);

        this.toast.success(`Link copied to clipboard`);
      }
    },
  },
};
</script>
