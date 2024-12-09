<template>
  <div>
    <NavBar />
    <div class="min-h-screen p-10 mx-auto max-w-7xl lg:flex lg:gap-5">
      <div class="w-full">
        <h1 class="mt-10 text-5xl font-bold text-center">Referral Reward</h1>
        <div class="mt-10">
          <div
            class="w-full h-[200px] rounded-2xl lg:h-[350px] bg-black text-white border shadow-lg flex justify-between items-center p-5"
          >
            <div>
              <h1 class="mb-3 text-6xl font-bold">
                ₹{{ incomeWallet.balance }}
              </h1>
              <span
                class="px-3 py-1 text-lg font-bold rounded-full bg-black/20 w-max"
                >Total Earned: ₹{{ incomeWallet.totalDeposit }}</span
              ><br />
              <span
                class="px-3 py-1 text-lg font-bold rounded-full bg-black/20 w-max"
                >Total Used: ₹{{ incomeWallet.totalWithdraw }}</span
              >
            </div>
            <!-- <div>
            <i class="text-4xl text-black fa-solid fa-circle-arrow-right"></i>
          </div> -->
          </div>
        </div>
        <div
          class="grid w-full h-auto grid-cols-2 gap-4 p-2 mt-3 border rounded-full border-black/50"
        >
          <div
            @click="changeActiveSlide('transfer')"
            class="px-2 py-1 text-center rounded-full"
            :class="{
              'font-bold bg-black/10': incomeWallet.activeSlide == 'transfer',
            }"
          >
            Transfer
          </div>
          <div
            @click="changeActiveSlide('withdraw')"
            class="px-2 py-1 text-center rounded-full"
            :class="{
              'font-bold bg-black/10':
                incomeWallet.activeSlide == 'withdraw' ||
                incomeWallet.activeSlide == 'withdrawDetails',
            }"
          >
            Withdraw
          </div>
        </div>

        <div v-if="incomeWallet.activeSlide == 'transfer'" class="w-full mt-5">
          <h1 class="mb-3 text-xl font-bold">Transfer to Cashback reward</h1>
          <div class="flex justify-center w-full">
            <input
              v-model="incomeWallet.transfer"
              type="number"
              class="h-16 w-[60%] bg-black text-white outline-none border-none rounded-xl text-2xl px-4 text-center"
              placeholder="0"
            />
          </div>
          <div class="flex w-full gap-2 mt-3 h-11">
            <div
              @click="incomeWallet.transfer += 500"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +500
            </div>
            <div
              @click="incomeWallet.transfer += 1000"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +1000
            </div>
            <div
              @click="incomeWallet.transfer += 2500"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +2500
            </div>
            <div
              @click="incomeWallet.transfer += 5000"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +5000
            </div>
          </div>
          <!--  -->
          <div
            @click="transfer()"
            class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center text-white bg-black /60 rounded-2xl"
          >
            Transfer
          </div>
        </div>
        <div
          v-else-if="incomeWallet.activeSlide == 'withdraw'"
          class="w-full mt-5"
        >
          <p v-if="incomeWallet.isKycVerified" class="mb-2">
            <i class="fa-solid fa-circle-check"></i> KYC Verified
          </p>
          <p v-else-if="incomeWallet.isKycCanceled" class="mb-2">
            <i class="fa-solid fa-clock"></i> KYC Canceled
          </p>
          <p v-else class="mb-2">
            <i class="fa-solid fa-clock"></i> KYC Pending
          </p>
          <h1 class="mb-3 text-xl font-bold">Withdraw to you bank</h1>
          <div class="flex justify-center w-full">
            <input
              v-model="incomeWallet.withdraw"
              type="number"
              class="h-16 w-[60%] bg-black text-white outline-none border-none rounded-xl text-2xl px-4 text-center"
              placeholder="0"
            />
          </div>
          <div class="flex w-full gap-2 mt-3 h-11">
            <div
              @click="incomeWallet.withdraw += 500"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +500
            </div>
            <div
              @click="incomeWallet.withdraw += 1000"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +1000
            </div>
            <div
              @click="incomeWallet.withdraw += 2500"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +2500
            </div>
            <div
              @click="incomeWallet.withdraw += 5000"
              class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-black"
            >
              +5000
            </div>
          </div>
          <!--  -->
          <div
            @click="withdraw(1)"
            class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center text-white bg-black /60 rounded-2xl"
          >
            Withdraw
          </div>
        </div>
        <div
          v-else-if="incomeWallet.activeSlide == 'withdrawDetails'"
          class="w-full mt-5"
        >
          <div v-if="incomeWallet.isKycVerified">
            <h1 class="mb-3 text-xl font-bold">
              Are you sure want to withdraw?
            </h1>
            <h1 class="mb-3 text-sm /70">
              <span class="font-bold"
                >₹{{ incomeWallet.balance - incomeWallet.withdraw }}</span
              >
              will be your referral rewards balance after withdraw.
            </h1>
            <div
              @click="withdraw(3)"
              class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center /60 bg-black/20 rounded-2xl"
            >
              Withdraw
            </div>
          </div>
          <div v-else>
            <div v-if="incomeWallet.isKycPending">
              <h1 class="mb-3 text-xl font-bold">
                Your KYC is being Verified. Thanks for your patience.
              </h1>

              <h1 class="mb-3 text-sm /70">
                {{ incomeWallet.kycDetails.message }}
              </h1>
            </div>

            <div v-else-if="incomeWallet.isKycCanceled">
              <h1 class="mb-3 text-xl font-bold">
                Your KYC is Canceled. Please try again.
              </h1>

              <h1 class="mb-3 text-sm /70">
                {{ incomeWallet.kycDetails.message }}
              </h1>
            </div>

            <div v-else>
              <h1 class="mb-3 text-xl font-bold">Complete KYC</h1>

              <h1 class="mb-3 text-sm /70">One step ahead</h1>
            </div>

            <!-- <div class="grid w-full grid-cols-2 gap-3">
                      <div
                        @click="incomeWallet.selectedWithdrawMode = 'bank'"
                        class="w-full py-3 text-center border rounded-full border-black/10"
                        :class="{
                          'border-black/40 bg-black/10':
                            incomeWallet.selectedWithdrawMode == 'bank',
                        }"
                      >
                        Bank
                      </div>
                      <div
                        @click="incomeWallet.selectedWithdrawMode = 'upi'"
                        class="w-full py-3 text-center border rounded-full border-black/10"
                        :class="{
                          'border-black/40 bg-black/10':
                            incomeWallet.selectedWithdrawMode == 'upi',
                        }"
                      >
                        UPI
                      </div>
                    </div> -->

            <div class="grid grid-cols-2 gap-3">
              <div
                v-if="incomeWallet.kycDetails.aadharPhotoFront"
                class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed /70 border-black/50 bg-black/10 aspect-video"
              >
                <img
                  :src="incomeWallet.kycDetails.aadharPhotoFront"
                  class="object-cover w-full h-full"
                  alt=""
                />
                <div
                  v-if="!incomeWallet.isKycPending"
                  @click="incomeWallet.kycDetails.aadharPhotoFront = ''"
                  class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                >
                  <i class="text-xl fa-regular fa-trash-can"></i>
                </div>
              </div>
              <input
                v-if="!incomeWallet.kycDetails.aadharPhotoFront"
                @change="sendFile($event, 'aadharFront')"
                type="file"
                class="hidden"
                id="aadharFront"
              />
              <label
                v-if="!incomeWallet.kycDetails.aadharPhotoFront"
                for="aadharFront"
                class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg /70 border-black/50 bg-black/10 aspect-video"
              >
                <i class="text-2xl fa-solid fa-plus"></i>
                Aadhar Card Front
              </label>

              <div
                v-if="incomeWallet.kycDetails.aadharPhotoBack"
                class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed /70 border-black/50 bg-black/10 aspect-video"
              >
                <img
                  :src="incomeWallet.kycDetails.aadharPhotoBack"
                  class="object-cover w-full h-full"
                  alt=""
                />
                <div
                  v-if="!incomeWallet.isKycPending"
                  @click="incomeWallet.kycDetails.aadharPhotoBack = ''"
                  class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                >
                  <i class="text-xl fa-regular fa-trash-can"></i>
                </div>
              </div>
              <input
                v-if="!incomeWallet.kycDetails.aadharPhotoBack"
                @change="sendFile($event, 'aadharBack')"
                type="file"
                class="hidden"
                id="aadharBack"
              />
              <label
                v-if="!incomeWallet.kycDetails.aadharPhotoBack"
                for="aadharBack"
                class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg /70 border-black/50 bg-black/10 aspect-video"
              >
                <i class="text-2xl fa-solid fa-plus"></i>
                Aadhar Card Back
              </label>
            </div>
            <div class="grid grid-cols-2 gap-3 mt-3">
              <div
                v-if="incomeWallet.kycDetails.panPhoto"
                class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed /70 border-black/50 bg-black/10 aspect-video"
              >
                <img
                  :src="incomeWallet.kycDetails.panPhoto"
                  class="object-cover w-full h-full"
                  alt=""
                />
                <div
                  v-if="!incomeWallet.isKycPending"
                  @click="incomeWallet.kycDetails.panPhoto = ''"
                  class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                >
                  <i class="text-xl fa-regular fa-trash-can"></i>
                </div>
              </div>
              <input
                v-if="!incomeWallet.kycDetails.panPhoto"
                @change="sendFile($event, 'panPhoto')"
                type="file"
                class="hidden"
                id="panPhoto"
              />
              <label
                v-if="!incomeWallet.kycDetails.panPhoto"
                for="panPhoto"
                class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg /70 border-black/50 bg-black/10 aspect-video"
              >
                <i class="text-2xl fa-solid fa-plus"></i>
                Pan Card Front
              </label>

              <div
                v-if="incomeWallet.kycDetails.passbookPhoto"
                class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed /70 border-black/50 bg-black/10 aspect-video"
              >
                <img
                  :src="incomeWallet.kycDetails.passbookPhoto"
                  class="object-cover w-full h-full"
                  alt=""
                />
                <div
                  v-if="!incomeWallet.isKycPending"
                  @click="incomeWallet.kycDetails.passbookPhoto = ''"
                  class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                >
                  <i class="text-xl fa-regular fa-trash-can"></i>
                </div>
              </div>
              <input
                v-if="!incomeWallet.kycDetails.passbookPhoto"
                @change="sendFile($event, 'passbookPhoto')"
                type="file"
                class="hidden"
                id="passbookPhoto"
              />
              <label
                v-if="!incomeWallet.kycDetails.passbookPhoto"
                for="passbookPhoto"
                class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg /70 border-black/50 bg-black/10 aspect-video"
              >
                <i class="text-2xl fa-solid fa-plus"></i>
                Passbook First Page<br />
                (Name, Account Number, IFSC Code must be visble)
              </label>
            </div>

            <h1 class="my-3 text-sm /70">
              Enter the same account details as on your passbook
            </h1>

            <div v-if="incomeWallet.isKycPending" class="grid gap-3 mt-5">
              <input
                v-model="incomeWallet.kycDetails.bankHolderName"
                type="text"
                disabled
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none cursor-not-allowed rounded-xl"
                placeholder="Account Holder Name"
              />
              <input
                v-model="incomeWallet.kycDetails.bankAccNumber"
                type="number"
                disabled
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none cursor-not-allowed rounded-xl"
                placeholder="Bank Account No"
              />
              <input
                v-model="incomeWallet.kycDetails.bankName"
                type="text"
                disabled
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none cursor-not-allowed rounded-xl"
                placeholder="Bank Name"
              />
              <input
                v-model="incomeWallet.kycDetails.bankIfscCode"
                type="text"
                disabled
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none cursor-not-allowed rounded-xl"
                placeholder="Bank IFSC Code"
              />
            </div>
            <div v-else class="grid gap-3 mt-5">
              <input
                v-model="incomeWallet.kycDetails.bankHolderName"
                type="text"
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none rounded-xl"
                placeholder="Account Holder Name"
              />
              <input
                v-model="incomeWallet.kycDetails.bankAccNumber"
                type="number"
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none rounded-xl"
                placeholder="Bank Account No"
              />
              <input
                v-model="incomeWallet.kycDetails.bankName"
                type="text"
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none rounded-xl"
                placeholder="Bank Name"
              />
              <input
                v-model="incomeWallet.kycDetails.bankIfscCode"
                type="text"
                class="w-full h-16 px-4 text-xl bg-black border-none outline-none rounded-xl"
                placeholder="Bank IFSC Code"
              />
            </div>

            <!-- <div
                      v-if="incomeWallet.selectedWithdrawMode == 'upi'"
                      class="grid gap-3 mt-5"
                    >
                      <input
                        v-model="incomeWallet.upiWithdrawDetails.name"
                        type="text"
                        class="w-full h-16 px-4 text-xl bg-black border-none outline-none rounded-xl"
                        placeholder="Your Name"
                      />
                      <input
                        v-model="incomeWallet.upiWithdrawDetails.upiId"
                        type="text"
                        class="w-full h-16 px-4 text-xl bg-black border-none outline-none rounded-xl"
                        placeholder="UPI Id"
                      />
                    </div> -->
            <div
              v-if="!incomeWallet.isKycPending"
              @click="withdraw(2)"
              class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center text-white bg-black rounded-2xl"
            >
              Submit
            </div>
          </div>
        </div>

        <div
          id="refer"
          class="w-full h-auto p-3 mt-5 bg-yellow-400 rounded-2xl"
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
      </div>

      <div class="w-full">
        <h1 class="mt-10 text-lg font-bold">Yet to be added:</h1>
        <div class="mt-5">
          <ul role="list" class="grid gap-4">
            <li
              v-for="(referral, index) in pendingDeposits"
              :key="index"
              class="px-3 py-5 border gap-x-6 border-black/20 rounded-2xl"
            >
              <div class="flex items-center justify-between w-full">
                <p class="text-sm font-semibold leading-6">
                  ₹{{ referral.amount }}
                </p>
                <p class="text-xs leading-6 text-black">
                  Moving date: <b>{{ referral.moveDate }}</b>
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
                      'text-green-500': referral.status == 'credited',
                      'text-red-500': referral.status == 'canceled',
                      'text-yellow-500': referral.status == 'pending',
                    }"
                    class="font-bold capitalize"
                    >{{ referral.status }}</span
                  >
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="isLoading"
      class="fixed top-0 left-0 h-full bg-black/50 w-full z-[9999999999999]"
    ></div>
    <Footer />
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
      isLoading: false,
      incomeWallet: {
        balance: 0,
        transfer: 0,
        activeSlide: "transfer",
        withdraw: 0,
        selectedWithdrawMode: "bank",
        upiWithdrawDetails: {
          upiId: "",
          name: "",
        },
        isKycVerified: false,
        isKycPending: false,
        isKycCanceled: false,
        kycDetails: {
          bankHolderName: "",
          bankName: "",
          bankIfscCode: "",
          bankAccNumber: "",
          aadharPhotoFront: "",
          aadharPhotoBack: "",
          panPhoto: "",
          passbookPhoto: "",
          message: "",
        },
        totalDeposit: 0,
        totalWithdraw: 0,
      },
      pendingDeposits: [],
      pendingDepositAmount: 0,
      user: {},
      url: "",
    };
  },
  mounted() {
    this.getReferralWallet();
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
            this.incomeWallet.balance = res.referralWallet.balance;
            this.incomeWallet.totalDeposit = res.referralWallet.totalDeposit;
            this.incomeWallet.totalWithdraw = res.referralWallet.totalWithdraw;
            this.pendingDeposits = res.pendingDeposits;
            this.pendingDepositAmount = res.pendingDepositAmount;
            return;
          }
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    changeActiveSlide(slide) {
      if (slide == "withdraw") {
        this.getKycStatus();
      }

      this.incomeWallet.activeSlide = slide;
    },
    getKycStatus() {
      this.$http
        .$get(`/user/profile/getKycStatus`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.status == "pending") {
            this.incomeWallet.isKycPending = true;
            this.incomeWallet.kycDetails = res.details;
          }
          if (res.status == "canceled") {
            this.incomeWallet.kycDetails.message = res.details.message;
            this.incomeWallet.isKycCanceled = true;
          }
          if (res.kyc.status == "approved") {
            this.incomeWallet.isKycVerified = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    withdraw(step) {
      if (this.incomeWallet.withdraw == 0) {
        this.toast.error("Please enter amount");
        return;
      }
      this.getReferralWallet();

      if (this.incomeWallet.balance < this.incomeWallet.withdraw) {
        this.toast.error(
          `You have only ${this.incomeWallet.balance} in your referral rewards.`
        );
        return;
      }

      if (step == 1) {
        this.incomeWallet.activeSlide = "withdrawDetails";
      }

      if (step == 2) {
        if (!this.incomeWallet.kycDetails.aadharPhotoFront) {
          this.toast.error("Please upload aadhar card front");
          return;
        }
        if (!this.incomeWallet.kycDetails.aadharPhotoBack) {
          this.toast.error("Please upload aadhar card back");
          return;
        }
        if (!this.incomeWallet.kycDetails.panPhoto) {
          this.toast.error("Please upload pan card");
          return;
        }
        if (!this.incomeWallet.kycDetails.passbookPhoto) {
          this.toast.error("Please upload passbook");
          return;
        }
        if (!this.incomeWallet.kycDetails.bankHolderName) {
          this.toast.error("Please enter account holder name");
          return;
        }
        if (!this.incomeWallet.kycDetails.bankAccNumber) {
          this.toast.error("Please enter account number");
          return;
        }
        if (!this.incomeWallet.kycDetails.bankName) {
          this.toast.error("Please enter bank name");
          return;
        }
        if (!this.incomeWallet.kycDetails.bankIfscCode) {
          this.toast.error("Please enter bank ifsc code");
          return;
        }

        this.$http
          .$post(`/user/profile/applyKyc`, {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
            body: {
              ...this.incomeWallet.kycDetails,
            },
          })
          .then((res) => {
            if (res.success) {
              this.getReferralWallet();
              this.getKycStatus();
              this.incomeWallet.activeSlide = "transfer";
              this.toast.success(res.message);
              return;
            }
            this.toast.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (step == 3) {
        if (this.incomeWallet.selectedWithdrawMode == "bank") {
          this.$http
            .$post(`/user/profile/addTransaction?type=withdraw`, {
              headers: {
                Authorization:
                  "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
              },
              body: {
                minus: {
                  wallet: "income",
                  amount: this.incomeWallet.withdraw,
                  source: "withdraw",
                  method: "withdraw",
                },
                details: {
                  bankHolderName: this.incomeWallet.kycDetails.bankHolderName,
                  bankAccNum: this.incomeWallet.kycDetails.bankAccNumber,
                  bankName: this.incomeWallet.kycDetails.bankName,
                  bankIfsc: this.incomeWallet.kycDetails.bankIfscCode,
                },
              },
            })
            .then((res) => {
              if (res.success) {
                this.getReferralWallet();
                this.incomeWallet.withdraw = 0;
                this.incomeWallet.activeSlide = "withdraw";
                this.toast.success(res.message);
                return;
              }
              this.toast.error(res.message);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          // this.$http
          //   .$post(`/user/profile/addTransaction?type=withdraw`, {
          //     headers: {
          //       Authorization:
          //         "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          //     },
          //     body: {
          //       minus: {
          //         wallet: "income",
          //         amount: this.incomeWallet.withdraw,
          //         source: "withdraw",
          //         method: "withdraw",
          //       },
          //       details: {
          //         ...this.incomeWallet.upiWithdrawDetails,
          //       },
          //     },
          //   })
          //   .then((res) => {
          //     if (res.success) {
          //       this.getReferralWallet();
          //       this.incomeWallet.withdraw = 0;
          //       this.toast.success(res.message);
          //       this.incomeWallet.selectedWithdrawMode = "";
          //       this.incomeWallet.bankWithdrawDetails = {
          //         holderName: "",
          //         bankAccNum: "",
          //         bankName: "",
          //         bankIfsc: "",
          //       };
          //       this.incomeWallet.activeSlide = "withdraw";
          //       return;
          //     }
          //     this.toast.error(res.message);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        }
      }
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
    transfer() {
      if (this.incomeWallet.transfer == 0) {
        this.toast.error("Please enter amount");
        return;
      }
      this.getReferralWallet();

      if (this.incomeWallet.balance < this.incomeWallet.transfer) {
        this.toast.error(
          `You have only ${this.incomeWallet.balance} in your referral rewards.`
        );
        return;
      }

      this.$http
        .$post(`/user/profile/addTransaction?type=transfer`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
          body: {
            add: {
              wallet: "cashback",
              amount: this.incomeWallet.transfer,
              source: "referralWallet",
              method: "deposit",
            },
            minus: {
              wallet: "referral",
              amount: this.incomeWallet.transfer,
              source: "transfer",
              method: "withdraw",
            },
          },
        })
        .then((res) => {
          if (res.success) {
            this.getReferralWallet();
            this.incomeWallet.transfer = 0;
            this.toast.success(res.message);
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendFile(event, index) {
      this.isLoading = true;
      let selectedFile = event.target.files[0];
      this.fileUpload(selectedFile, index);
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
    async fileUpload(selectedFile, index) {
      let reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const response = await fetch(
            `https://api.weemax.in/platform/api/page/upload`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                image: reader.result,
                fileName: selectedFile.name,
              }),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            // const result = (await response.json()) / console.log(result);
            const result = await response.json();
            if (result.success) {
              if (index == "aadharFront") {
                this.incomeWallet.kycDetails.aadharPhotoFront = result.srcUrl;
              } else if (index == "aadharBack") {
                this.incomeWallet.kycDetails.aadharPhotoBack = result.srcUrl;
              } else if (index == "panPhoto") {
                this.incomeWallet.kycDetails.panPhoto = result.srcUrl;
              } else if (index == "passbookPhoto") {
                this.incomeWallet.kycDetails.passbookPhoto = result.srcUrl;
              }

              this.isLoading = false;
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      reader.readAsDataURL(selectedFile);
    },
  },
};
</script>
