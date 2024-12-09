<template>
  <div class="pb-[100px]">
    <NavBar />
    <section v-if="user.age < 18" class="px-4 py-10">
      <h1 class="mb-5 text-3xl font-bold text-center">
        Sorry your not eligible for this. You must be 18 to join our franchise.
      </h1>
    </section>
    <div v-else>
      <section v-if="action == 'approved'" class="px-4 py-10 lg:px-8">
        <h1 class="mb-5 text-3xl font-bold text-center">Weemax Franchise</h1>
        <div class="w-full mx-auto max-w-7xl">
          <div class="w-full max-w-md p-4 mx-auto bg-black h-max rounded-2xl">
            <h1 class="text-5xl font-bold text-white/80">
              ₹{{ balance || 0 }}
            </h1>
            <div class="flex items-center justify-between mt-3">
              <p
                class="bg-[#0f0f0f] w-max text-white/60 px-5 py-2 rounded-full"
              >
                Available Balance
              </p>
              <div
                v-if="!withdrawIsOpen"
                @click="withdrawIsOpen = true"
                class="px-3 py-1 border rounded-lg border-white/70 text-white/70 w-max"
              >
                Withdraw
              </div>
              <div
                v-else
                @click="withdrawIsOpen = false"
                class="px-3 py-1 border rounded-lg border-white/70 text-white/70 w-max"
              >
                Cancel Withdraw
              </div>
            </div>
          </div>

          <div v-if="withdrawIsOpen" class="max-w-3xl mx-auto">
            <h1 class="mt-5 mb-3 text-xl font-bold text-black">Withdraw</h1>
            <div
              class="grid w-full h-auto grid-cols-2 gap-4 p-2 mt-3 border border-black rounded-full"
            >
              <div
                @click="changeActiveSlide('transfer')"
                class="px-2 py-1 text-center text-black rounded-full"
                :class="{
                  'font-bold bg-black/10': activeSlide == 'transfer',
                }"
              >
                Transfer
              </div>
              <div
                @click="changeActiveSlide('withdraw')"
                class="px-2 py-1 text-center text-black rounded-full"
                :class="{
                  'font-bold bg-black/10':
                    activeSlide == 'withdraw' ||
                    activeSlide == 'withdrawDetails',
                }"
              >
                Withdraw
              </div>
            </div>

            <div v-if="activeSlide == 'transfer'" class="w-full mt-5">
              <h1 class="mb-3 text-xl font-bold text-black">
                Transfer to Purchase wallet
              </h1>
              <div class="flex justify-center w-full">
                <input
                  v-model="transfer"
                  type="number"
                  class="h-16 w-[60%] bg-black text-white outline-none border-none rounded-xl text-2xl px-4 text-center"
                  placeholder="0"
                />
              </div>
              <div class="flex w-full gap-2 mt-3 h-11">
                <div
                  @click="transfer += 500"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +500
                </div>
                <div
                  @click="transfer += 1000"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +1000
                </div>
                <div
                  @click="transfer += 2500"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +2500
                </div>
                <div
                  @click="transfer += 5000"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +5000
                </div>
              </div>
              <!--  -->
              <div
                @click="transferAmount()"
                class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center text-white bg-black rounded-2xl"
              >
                Transfer
              </div>
            </div>
            <div v-else-if="activeSlide == 'withdraw'" class="w-full mt-5">
              <p v-if="isKycVerified" class="mb-2 text-black">
                <i class="fa-solid fa-circle-check"></i> KYC Verified
              </p>
              <p v-else-if="isKycCanceled" class="mb-2 text-black">
                <i class="fa-solid fa-clock"></i> KYC Canceled
              </p>
              <p v-else class="mb-2 text-black">
                <i class="fa-solid fa-clock"></i> KYC Pending
              </p>
              <h1 class="mb-3 text-xl font-bold text-black">
                Withdraw to you bank
              </h1>
              <div class="flex justify-center w-full">
                <input
                  v-model="withdraw"
                  type="number"
                  class="h-16 w-[60%] bg-black text-white outline-none border-none rounded-xl text-2xl px-4 text-center"
                  placeholder="0"
                />
              </div>
              <div class="flex w-full gap-2 mt-3 h-11">
                <div
                  @click="withdraw += 500"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +500
                </div>
                <div
                  @click="withdraw += 1000"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +1000
                </div>
                <div
                  @click="withdraw += 2500"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +2500
                </div>
                <div
                  @click="withdraw += 5000"
                  class="flex items-center justify-center w-full h-full text-center text-white bg-black rounded-2xl hover:ring-2 ring-offset-1 hover:ring-white"
                >
                  +5000
                </div>
              </div>
              <!--  -->
              <div
                @click="withdrawAmount(1)"
                class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center text-white bg-black rounded-2xl"
              >
                Withdraw
              </div>
            </div>
            <div
              v-else-if="activeSlide == 'withdrawDetails'"
              class="w-full mt-5"
            >
              <div v-if="isKycVerified">
                <h1 class="mb-3 text-xl font-bold text-black">
                  Are you sure want to withdraw?
                </h1>
                <h1 class="mb-3 text-sm text-black/70">
                  <span class="font-bold">₹{{ balance - withdraw }}</span>
                  will be your income wallet balance after withdraw.
                </h1>
                <div
                  @click="withdrawAmount(3)"
                  class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center text-white bg-black rounded-2xl"
                >
                  Withdraw
                </div>
              </div>
              <div v-else>
                <div v-if="isKycPending">
                  <h1 class="mb-3 text-xl font-bold text-black">
                    Your KYC is being Verified. Thanks for your patience.
                  </h1>

                  <h1 class="mb-3 text-sm text-black/70">
                    {{ kycDetails.message }}
                  </h1>
                </div>

                <div v-else-if="isKycCanceled">
                  <h1 class="mb-3 text-xl font-bold text-black">
                    Your KYC is Canceled. Please try again.
                  </h1>

                  <h1 class="mb-3 text-sm text-black/70">
                    {{ kycDetails.message }}
                  </h1>
                </div>

                <div v-else>
                  <h1 class="mb-3 text-xl font-bold text-black">
                    Complete KYC
                  </h1>

                  <h1 class="mb-3 text-sm text-black/70">One step ahead</h1>
                </div>

                <!-- <div class="grid w-full grid-cols-2 gap-3">
                      <div
                        @click="incomeWallet.selectedWithdrawMode = 'bank'"
                        class="w-full py-3 text-center text-white border rounded-full border-white/10"
                        :class="{
                          'border-white/40 bg-white/10':
                            incomeWallet.selectedWithdrawMode == 'bank',
                        }"
                      >
                        Bank
                      </div>
                      <div
                        @click="incomeWallet.selectedWithdrawMode = 'upi'"
                        class="w-full py-3 text-center text-white border rounded-full border-white/10"
                        :class="{
                          'border-white/40 bg-white/10':
                            incomeWallet.selectedWithdrawMode == 'upi',
                        }"
                      >
                        UPI
                      </div>
                    </div> -->

                <div class="grid grid-cols-2 gap-3">
                  <div
                    v-if="kycDetails.aadharPhotoFront"
                    class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <img
                      :src="kycDetails.aadharPhotoFront"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                    <div
                      v-if="!isKycPending"
                      @click="kycDetails.aadharPhotoFront = ''"
                      class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                    >
                      <i class="text-xl text-black fa-regular fa-trash-can"></i>
                    </div>
                  </div>
                  <input
                    v-if="!kycDetails.aadharPhotoFront"
                    @change="sendFile($event, 'aadharFront')"
                    type="file"
                    class="hidden"
                    id="aadharFront"
                  />
                  <label
                    v-if="!kycDetails.aadharPhotoFront"
                    for="aadharFront"
                    class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <i class="text-2xl fa-solid fa-plus"></i>
                    Aadhar Card Front
                  </label>
                  {{ kycDetails.aadharPhotoFront }}
                  <div
                    v-if="kycDetails.aadharPhotoBack"
                    class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <img
                      :src="kycDetails.aadharPhotoBack"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                    <div
                      v-if="!isKycPending"
                      @click="kycDetails.aadharPhotoBack = ''"
                      class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                    >
                      <i class="text-xl text-black fa-regular fa-trash-can"></i>
                    </div>
                  </div>
                  <input
                    v-if="!kycDetails.aadharPhotoBack"
                    @change="sendFile($event, 'aadharBack')"
                    type="file"
                    class="hidden"
                    id="aadharBack"
                  />
                  <label
                    v-if="!kycDetails.aadharPhotoBack"
                    for="aadharBack"
                    class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <i class="text-2xl fa-solid fa-plus"></i>
                    Aadhar Card Back
                  </label>
                </div>
                <div class="grid grid-cols-2 gap-3 mt-3">
                  <div
                    v-if="kycDetails.panPhoto"
                    class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <img
                      :src="kycDetails.panPhoto"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                    <div
                      v-if="!isKycPending"
                      @click="kycDetails.panPhoto = ''"
                      class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                    >
                      <i class="text-xl text-black fa-regular fa-trash-can"></i>
                    </div>
                  </div>
                  <input
                    v-if="!kycDetails.panPhoto"
                    @change="sendFile($event, 'panPhoto')"
                    type="file"
                    class="hidden"
                    id="panPhoto"
                  />
                  <label
                    v-if="!kycDetails.panPhoto"
                    for="panPhoto"
                    class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <i class="text-2xl fa-solid fa-plus"></i>
                    Pan Card Front
                  </label>

                  <div
                    v-if="kycDetails.passbookPhoto"
                    class="relative flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg cursor-not-allowed text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <img
                      :src="kycDetails.passbookPhoto"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                    <div
                      v-if="!isKycPending"
                      @click="kycDetails.passbookPhoto = ''"
                      class="absolute bg-red-400 rounded-full bottom-2 right-2 z-[999] h-10 w-10 flex cursor-pointer justify-center items-center"
                    >
                      <i class="text-xl text-black fa-regular fa-trash-can"></i>
                    </div>
                  </div>
                  <input
                    v-if="!kycDetails.passbookPhoto"
                    @change="sendFile($event, 'passbookPhoto')"
                    type="file"
                    class="hidden"
                    id="passbookPhoto"
                  />
                  <label
                    v-if="!kycDetails.passbookPhoto"
                    for="passbookPhoto"
                    class="flex flex-col items-center justify-center w-full h-auto gap-3 overflow-hidden text-xs text-center border border-dashed rounded-lg text-black/70 border-black/50 bg-black/10 aspect-video"
                  >
                    <i class="text-2xl fa-solid fa-plus"></i>
                    Passbook First Page<br />
                    (Name, Account Number, IFSC Code must be visble)
                  </label>
                </div>

                <h1 class="my-3 text-sm text-black/70">
                  Enter the same account details as on your passbook
                </h1>

                <div v-if="isKycPending" class="grid gap-3 mt-5">
                  <input
                    v-model="kycDetails.bankHolderName"
                    type="text"
                    disabled
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none cursor-not-allowed rounded-xl"
                    placeholder="Account Holder Name"
                  />
                  <input
                    v-model="kycDetails.bankAccNumber"
                    type="number"
                    disabled
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none cursor-not-allowed rounded-xl"
                    placeholder="Bank Account No"
                  />
                  <input
                    v-model="kycDetails.bankName"
                    type="text"
                    disabled
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none cursor-not-allowed rounded-xl"
                    placeholder="Bank Name"
                  />
                  <input
                    v-model="kycDetails.bankIfscCode"
                    type="text"
                    disabled
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none cursor-not-allowed rounded-xl"
                    placeholder="Bank IFSC Code"
                  />
                </div>
                <div v-else class="grid gap-3 mt-5">
                  <input
                    v-model="kycDetails.bankHolderName"
                    type="text"
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none rounded-xl"
                    placeholder="Account Holder Name"
                  />
                  <input
                    v-model="kycDetails.bankAccNumber"
                    type="number"
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none rounded-xl"
                    placeholder="Bank Account No"
                  />
                  <input
                    v-model="kycDetails.bankName"
                    type="text"
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none rounded-xl"
                    placeholder="Bank Name"
                  />
                  <input
                    v-model="kycDetails.bankIfscCode"
                    type="text"
                    class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none rounded-xl"
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
                        class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none rounded-xl"
                        placeholder="Your Name"
                      />
                      <input
                        v-model="incomeWallet.upiWithdrawDetails.upiId"
                        type="text"
                        class="w-full h-16 px-4 text-xl text-white bg-black border-none outline-none rounded-xl"
                        placeholder="UPI Id"
                      />
                    </div> -->
                <div
                  v-if="!isKycPending"
                  @click="withdrawAmount(2)"
                  class="flex items-center justify-center w-full py-4 mt-3 text-2xl font-bold text-center text-white bg-black rounded-2xl"
                >
                  Submit
                </div>
              </div>
            </div>
            <div v-if="reward.pendings.length > 0">
              <h1 class="mt-5 mb-3 text-xl font-bold text-black">
                Yet to be added
              </h1>
              <ul role="list" class="grid gap-4 max-h-[400px] overflow-auto">
                <li
                  v-for="(item, index) in reward.pendings"
                  :key="index"
                  class="flex justify-between px-3 py-5 border gap-x-6 border-black/20 rounded-2xl"
                >
                  <div class="flex gap-x-4">
                    <div class="flex-auto min-w-0">
                      <p class="text-sm font-semibold leading-6 text-black">
                        ₹{{ item.amount }}
                      </p>
                      <p class="mt-1 text-xs leading-5 truncate text-black/70">
                        Moving to:
                        <span
                          class="px-2 py-1 text-black bg-green-300 rounded-full"
                          >Franchise Wallet</span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col items-end">
                    <p class="text-xs leading-6 text-black">
                      Moving date: <b>{{ item.moveDate }}</b>
                    </p>
                    <p class="mt-1 text-xs leading-5 text-white/40">
                      Status:
                      <span
                        class="font-bold capitalize"
                        :class="{
                          'text-green-500': item.status == 'credited',
                          'text-red-500': item.status == 'canceled',
                          'text-yellow-500': item.status == 'pending',
                        }"
                        >{{ item.status }}</span
                      >
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="max-w-3xl mx-auto mt-5">
            <div
              class="grid w-full h-auto grid-cols-3 gap-2 p-1 mt-3 mb-5 border border-black rounded-full"
            >
              <div
                @click="changeAnalyticsActiveSlide('impression')"
                class="px-2 py-1 text-xs text-center text-black rounded-full lg:text-lg"
                :class="{
                  'font-bold bg-black/10': analyticsActiveSlide == 'impression',
                }"
              >
                Impression
              </div>
              <div
                @click="changeAnalyticsActiveSlide('purchase')"
                class="px-2 py-1 text-xs text-center text-black rounded-full lg:text-lg"
                :class="{
                  'font-bold bg-black/10': analyticsActiveSlide == 'purchase',
                }"
              >
                Purchase
              </div>
              <div
                @click="changeAnalyticsActiveSlide('profit')"
                class="px-2 py-1 text-xs text-center text-black rounded-full lg:text-lg"
                :class="{
                  'font-bold bg-black/10': analyticsActiveSlide == 'profit',
                }"
              >
                Profit
              </div>
            </div>
            <div
              v-if="analyticsActiveSlide == 'impression'"
              class="p-4 border rounded-xl"
            >
              <div class="flex items-center gap-2">
                <h1 class="mb-3 font-bold">Impressions Analytics</h1>
                <el-select
                  v-model="analytics.clicks.filterMethod"
                  class="m-2"
                  placeholder="Select"
                  @change="getClicksAnalytics()"
                >
                  <el-option label="Last 7 days" value="last-7-days" />
                  <el-option label="Last 1 month" value="last-1-month" />
                  <el-option label="Overall" value="overall" />
                  <el-option label="Custom dates" value="custom" />
                </el-select>
              </div>
              <div
                v-if="analytics.clicks.filterMethod == 'custom'"
                class="flex gap-3 my-5"
              >
                <el-date-picker
                  v-model="analytics.clicks.filters.dateFilterFrom"
                  type="date"
                  placeholder="From"
                  format="DD-MM-YYYY"
                  value-format="YYYY-MM-DD"
                  @change="getClicksAnalytics()"
                />
                <el-date-picker
                  v-model="analytics.clicks.filters.dateFilterTo"
                  type="date"
                  placeholder="To"
                  format="DD-MM-YYYY"
                  value-format="YYYY-MM-DD"
                  @change="getClicksAnalytics()"
                />
              </div>
              <div
                class="w-full max-w-md p-4 mx-auto my-10 bg-black h-max rounded-2xl"
              >
                <h1 class="text-5xl font-bold text-white/80">
                  {{ analytics.clicks.sumNumber }}
                </h1>
                <div class="flex items-center justify-between mt-3">
                  <p
                    class="bg-[#0f0f0f] w-max text-white/60 px-5 py-2 rounded-full"
                  >
                    Total No of Clicks
                  </p>
                </div>
              </div>
              <canvas
                id="clicksChart"
                class="w-full h-[200px]"
                height="300px"
              ></canvas>
            </div>

            <div
              v-if="analyticsActiveSlide == 'purchase'"
              class="p-4 mt-5 border rounded-xl"
            >
              <div class="flex items-center gap-2">
                <h1 class="mb-3 font-bold">No of purchase</h1>
                <el-select
                  v-model="analytics.purchased.filterMethod"
                  class="m-2"
                  placeholder="Select"
                  @change="getPurchasedAnalytics()"
                >
                  <el-option label="Last 7 days" value="last-7-days" />
                  <el-option label="Last 1 month" value="last-1-month" />
                  <el-option label="Overall" value="overall" />
                  <el-option label="Custom dates" value="custom" />
                </el-select>
              </div>
              <div
                v-if="analytics.purchased.filterMethod == 'custom'"
                class="flex gap-3 mb-5"
              >
                <el-date-picker
                  v-model="analytics.purchased.filters.dateFilterFrom"
                  type="date"
                  placeholder="From"
                  format="DD-MM-YYYY"
                  value-format="YYYY-MM-DD"
                  @change="getPurchasedAnalytics()"
                />
                <el-date-picker
                  v-model="analytics.purchased.filters.dateFilterTo"
                  type="date"
                  placeholder="To"
                  format="DD-MM-YYYY"
                  value-format="YYYY-MM-DD"
                  @change="getPurchasedAnalytics()"
                />
              </div>
              <div
                class="w-full max-w-md p-4 mx-auto my-10 bg-black h-max rounded-2xl"
              >
                <h1 class="text-5xl font-bold text-white/80">
                  {{ analytics.purchased.sumNumber }}
                </h1>
                <div class="flex items-center justify-between mt-3">
                  <p
                    class="bg-[#0f0f0f] w-max text-white/60 px-5 py-2 rounded-full"
                  >
                    Total No of Purchase
                  </p>
                </div>
              </div>
              <canvas
                id="purchasedChart"
                class="w-full h-[200px]"
                height="300px"
              ></canvas>
            </div>

            <div
              v-if="analyticsActiveSlide == 'profit'"
              class="p-4 mt-5 border rounded-xl"
            >
              <div class="flex items-center gap-2">
                <h1 class="mb-3 font-bold">Profit</h1>
                <el-select
                  v-model="analytics.profit.filterMethod"
                  class="m-2"
                  placeholder="Select"
                  @change="getProfitAnalytics()"
                >
                  <el-option label="Last 7 days" value="last-7-days" />
                  <el-option label="Last 1 month" value="last-1-month" />
                  <el-option label="Overall" value="overall" />
                  <el-option label="Custom dates" value="custom" />
                </el-select>
              </div>
              <div
                v-if="analytics.profit.filterMethod == 'custom'"
                class="flex gap-3 mb-5"
              >
                <el-date-picker
                  v-model="analytics.profit.filters.dateFilterFrom"
                  type="date"
                  placeholder="From"
                  format="DD-MM-YYYY"
                  value-format="YYYY-MM-DD"
                  @change="getProfitAnalytics()"
                />
                <el-date-picker
                  v-model="analytics.profit.filters.dateFilterTo"
                  type="date"
                  placeholder="To"
                  format="DD-MM-YYYY"
                  value-format="YYYY-MM-DD"
                  @change="getProfitAnalytics()"
                />
              </div>
              <div
                class="w-full max-w-md p-4 mx-auto my-10 bg-black h-max rounded-2xl"
              >
                <h1 class="text-5xl font-bold text-white/80">
                  ₹{{ analytics.profit.sumNumber }}
                </h1>
                <div class="flex items-center justify-between mt-3">
                  <p
                    class="bg-[#0f0f0f] w-max text-white/60 px-5 py-2 rounded-full"
                  >
                    Total Profit
                  </p>
                </div>
              </div>
              <canvas
                id="profitChart"
                class="w-full h-[200px]"
                height="300px"
              ></canvas>
            </div>
          </div>
        </div>
      </section>
      <section v-else class="w-full px-4 py-10 mx-auto max-w-7xl">
        <div
          @click="careerInfoIsOpen = true"
          class="flex items-center justify-center float-right w-10 h-10 bg-black rounded-full cursor-pointer"
        >
          <i class="text-xl text-white fa-solid fa-info"></i>
        </div>
        <h1 class="px-12 text-xl font-bold text-center md:text-4xl">
          Create your own online franchise store
        </h1>
        <p class="mt-3 mb-10 text-sm text-center md:text-base">
          Unlock the potential of partnership with Weemax by completing our
          online franchise form and earn up to 70% of profit.
        </p>
        <nav aria-label="Progress">
          <ol
            role="list"
            class="border border-gray-300 divide-y divide-gray-300 rounded-md md:flex md:divide-y-0"
          >
            <li class="relative md:flex md:flex-1">
              <!-- Completed Step -->
              <a href="#" class="flex items-center w-full group">
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span
                    v-if="steps.one"
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-black rounded-full group-hover:bg-black/80"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span
                    v-else
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-black rounded-full"
                  >
                    <span class="text-black">01</span>
                  </span>
                  <span class="ml-4 text-sm font-medium text-gray-900"
                    >Complete The Form</span
                  >
                </span>
              </a>
              <!-- Arrow separator for lg screens and up -->
              <div
                class="absolute top-0 right-0 hidden w-5 h-full md:block"
                aria-hidden="true"
              >
                <svg
                  class="w-full h-full text-gray-300"
                  viewBox="0 0 22 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 -2L20 40L0 82"
                    vector-effect="non-scaling-stroke"
                    stroke="currentcolor"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
            <li class="relative md:flex md:flex-1">
              <!-- Current Step -->
              <a
                href="#"
                class="flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span
                  v-if="steps.two"
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-black rounded-full group-hover:bg-black/80"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span
                  v-else
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-black rounded-full"
                >
                  <span class="text-black">02</span>
                </span>
                <span class="ml-4 text-sm font-medium text-black"
                  >Create your own website url</span
                >
              </a>
              <!-- Arrow separator for lg screens and up -->
              <div
                class="absolute top-0 right-0 hidden w-5 h-full md:block"
                aria-hidden="true"
              >
                <svg
                  class="w-full h-full text-gray-300"
                  viewBox="0 0 22 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 -2L20 40L0 82"
                    vector-effect="non-scaling-stroke"
                    stroke="currentcolor"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
            <li class="relative md:flex md:flex-1">
              <!-- Upcoming Step -->
              <a href="#" class="flex items-center group">
                <span class="flex items-center px-6 py-4 text-sm font-medium">
                  <span
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-black rounded-full group-hover:border-black"
                  >
                    <span class="text-black">03</span>
                  </span>
                  <span
                    class="ml-4 text-sm font-medium text-black group-hover:text-gray-900"
                    >Approval</span
                  >
                </span>
              </a>
            </li>
          </ol>
        </nav>

        <div v-if="step == 1" class="w-full mt-10">
          <h1 class="mb-5 text-lg font-bold text-center">
            Please Complete The Form
          </h1>
          <div class="lg:max-w-md lg:mx-auto">
            <input
              v-model="formData.address"
              type="text"
              class="h-[50px] w-full border rounded-xl shadow-lg px-4 text-black/70 font-medium mb-5 placeholder:text-black/70"
              placeholder="Enter your Full Address"
            />
            <select
              v-model="formData.category"
              class="h-[50px] w-full border rounded-xl shadow-lg px-4 text-black/70 font-medium mb-5"
            >
              <option value="" disabled selected>Choose a category</option>
              <option value="student">Student</option>
              <option value="working">Working</option>
              <option value="self-employed">Self Employed</option>
              <option value="business">Business</option>
              <option value="retired">Retired</option>
              <option value="house-wife">House Wife</option>
              <option value="others">Others</option>
            </select>
            <select
              v-model="formData.mode"
              class="h-[50px] w-full border rounded-xl shadow-lg px-4 text-black/70 font-medium mb-5"
            >
              <option value="" disabled selected>
                What's your major focus
              </option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="both">Both</option>
            </select>
            <textarea
              v-model="formData.reason"
              rows="3"
              placeholder="Reasons for seeking a franchise"
              class="w-full p-4 mb-5 font-medium border shadow-lg rounded-xl text-black/70 placeholder:text-black/70"
            ></textarea>
            <input
              v-model="formData.socialLink"
              type="text"
              class="h-[50px] w-full border rounded-xl shadow-lg px-4 text-black/70 font-medium mb-5 placeholder:text-black/70"
              placeholder="Instagram or Facebook Profile Link"
            />
            <div
              @click="navigateTo(2)"
              class="px-4 py-2 mx-auto font-bold text-white transition-all bg-black rounded-lg cursor-pointer w-max hover:scale-110"
            >
              Next
            </div>
          </div>
        </div>

        <div v-if="step == 2" class="w-full mt-10">
          <h1 class="mb-5 text-lg font-bold text-center">
            Generate your custom share link
          </h1>
          <div class="lg:max-w-md lg:mx-auto">
            <div class="flex justify-center w-full">
              <input
                v-if="codeIsAvailable"
                v-model="link"
                type="text"
                class="h-[50px] w-[100px] border text-center rounded-xl shadow-lg px-4 text-black/70 font-medium mb-5 placeholder:text-black/70"
                placeholder="XXXXXX"
                maxlength="6"
                disabled
              />
              <input
                v-else
                v-model="link"
                type="text"
                class="h-[50px] w-[100px] border text-center rounded-xl shadow-lg px-4 text-black/70 font-medium mb-5 placeholder:text-black/70"
                placeholder="XXXXXX"
                maxlength="6"
              />
            </div>

            <div v-if="link != ''">
              <h2 class="font-bold text-center">Your link will look like</h2>
              <p
                class="px-2 mx-auto my-2 text-center lowercase border border-dashed rounded-lg bg-black/5 border-black/50 w-max"
              >
                weemax.in/?fl={{ link }}
              </p>
            </div>

            <div
              v-if="codeIsAvailable"
              @click="submitRequest()"
              class="px-4 py-2 mx-auto mt-10 font-bold text-white transition-all bg-black rounded-lg cursor-pointer w-max hover:scale-110"
            >
              Submit
            </div>
            <div
              v-else
              @click="checkAvailablity()"
              class="px-4 py-2 mx-auto mt-10 font-bold text-white transition-all bg-black rounded-lg cursor-pointer w-max hover:scale-110"
            >
              Check Availablity
            </div>
          </div>
        </div>

        <div v-if="step == 3" class="w-full mt-10">
          <h1
            v-if="action == 'pending'"
            class="mb-5 text-lg font-bold text-center"
          >
            Your request has been submitted. We will get back to you soon.
          </h1>
          <h1
            v-if="action == 'rejected'"
            class="mb-5 text-lg font-bold text-center"
          >
            Your Request is rejected. Please contact support.
          </h1>
          <h1
            v-if="action == 'banned'"
            class="mb-5 text-lg font-bold text-center"
          >
            You are banned form Weemax Franchise. Please contact support.
          </h1>
          <div class="lg:max-w-md lg:mx-auto"></div>
        </div>
      </section>
    </div>
    <Footer />
    <Loader v-if="isLoading" />
    <div
      v-if="action == 'approved'"
      class="h-[100px] w-full fixed bottom-0 left-0 p-4"
    >
      <div
        @click="copyToClipboard(`${url}/?fl=${user.careerCode}`)"
        class="flex items-center justify-between w-full h-full p-4 bg-yellow-400 border border-white shadow-lg rounded-2xl"
      >
        <p class="font-bold">Copy Your Link:</p>
        <div
          class="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full"
        >
          <i class="fa-solid fa-copy"></i>
        </div>
      </div>
    </div>
    <div
      @click="careerInfoIsOpen = false"
      v-if="careerInfoIsOpen"
      class="fixed top-0 left-0 flex items-center justify-center w-full h-screen overflow-auto bg-black/50"
    >
      <img
        src="/career.png"
        class="h-auto w-[90%] mx-auto rounded-2xl shadow-lg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
});

import Chart from "chart.js/auto";
import dayjs from "dayjs";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      isLoading: true,
      toast: useToast(),
      action: "",
      step: 1,
      user: {},
      steps: {
        one: false,
        two: false,
        three: false,
      },
      careerInfoIsOpen: false,
      formData: {
        address: "",
        category: "",
        reason: "",
        mode: "",
        socialLink: "",
      },
      link: "",
      codeIsAvailable: false,
      commonData: {},
      url: "",
      activeSlide: "transfer",
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
      transfer: 0,
      withdraw: 0,
      balance: 0,
      selectedWithdrawMode: "bank",
      reward: {
        pendings: [],
      },
      analyticsActiveSlide: "impression",
      withdrawIsOpen: false,
      analytics: {
        clicks: {
          chart: null,
          data: {
            labels: [],
            datas: [],
          },
          filters: {
            dateFilterFrom: "",
            dateFilterTo: "",
          },
          filterMethod: "last-7-days",
          sumNumber: 0,
        },
        purchased: {
          chart: null,
          data: {
            labels: [],
            datas: [],
          },
          filters: {
            dateFilterFrom: "",
            dateFilterTo: "",
          },
          filterMethod: "last-7-days",
          sumNumber: 0,
        },
        profit: {
          chart: null,
          data: {
            labels: [],
            datas: [],
          },
          filters: {
            dateFilterFrom: "",
            dateFilterTo: "",
          },
          filterMethod: "last-7-days",
          sumNumber: 0,
        },
      },
    };
  },
  mounted() {
    if (window.location.hostname == "localhost") {
      this.url = "http://localhost:3000";
    } else {
      this.url = "https://www.weemax.in";
    }
    this.getCareerStatus();
    this.getUser();
  },
  methods: {
    getCareerStatus() {
      this.$http
        .$get("/career/status", {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.action = res.action;

            if (
              res.action == "approved" ||
              res.action == "pending" ||
              res.action == "rejected" ||
              res.action == "banned"
            ) {
              this.step = 3;
              this.steps.two = true;
              this.steps.one = true;
            }

            if (res.action == "approved") {
              this.getCareerOverview();
            }

            this.isLoading = false;
            return;
          }
          console.log(res.message);
          this.isLoading = false;
        });
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
            this.user.age = this.calculateAge(res.user.dob);
            return;
          }
        });
    },
    navigateTo(step) {
      if (step == 2) {
        if (
          this.formData.address == "" ||
          this.formData.category == "" ||
          this.formData.reason == "" ||
          this.formData.mode == "" ||
          this.formData.socialLink == ""
        ) {
          this.toast.error("Please fill all the fields");
          return;
        }

        this.step = 2;
        this.steps.one = true;
      }
    },
    checkAvailablity() {
      if (this.link.length == 6) {
        this.$http
          .$get(
            `/career/checkCodeAvailability?code=${this.link.toLowerCase()}`,
            {
              headers: {
                Authorization:
                  "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
              },
            }
          )
          .then((res) => {
            if (res.success) {
              this.codeIsAvailable = true;
              this.toast.success("Code is available");
            } else {
              this.toast.error(res.message);
            }
          });
      } else {
        this.toast.error("Please enter a valid link with 6 characters");
      }
    },
    submitRequest() {
      this.$http
        .$post("/career/apply", {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
          body: {
            address: this.formData.address,
            category: this.formData.category,
            reason: this.formData.reason,
            mode: this.formData.mode,
            socialLink: this.formData.socialLink,
            referralCode: this.link.toLowerCase(),
          },
        })
        .then((res) => {
          if (res.success) {
            this.toast.success(res.message);
            this.step = 3;
            this.steps.two = true;
            return;
          }
          this.toast.error(res.message);
        });
    },
    getCareerOverview() {
      this.getClicksAnalytics();
      this.getPurchasedAnalytics();
      this.getProfitAnalytics();
      this.$http
        .$get("/career/overview", {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.balance = res.commonData.careerBalance;
            this.reward.pendings = res.commonData.rewardWallet;
            return;
          }
          console.log(res.message);
        });
    },
    getClicksAnalytics() {
      if (
        this.analytics.clicks.filters.dateFilterFrom &&
        this.analytics.clicks.filters.dateFilterTo
      ) {
        if (
          this.analytics.clicks.filters.dateFilterFrom >
          this.analytics.clicks.filters.dateFilterTo
        ) {
          this.toast.error("From date cannot be greater than to date");
          this.analytics.clicks.filters.dateFilterFrom = "";
          this.analytics.clicks.filters.dateFilterTo = "";
          this.getClicksAnalytics();
          return;
        }
      }
      this.$http
        .$get(
          `/career/analytics/clicks${
            this.analytics.clicks.filterMethod == "custom"
              ? this.analytics.clicks.filters.dateFilterFrom &&
                this.analytics.clicks.filters.dateFilterTo
                ? `?dateFilterFrom=${this.analytics.clicks.filters.dateFilterFrom}&dateFilterTo=${this.analytics.clicks.filters.dateFilterTo}`
                : ""
              : this.analytics.clicks.filterMethod == "last-1-month"
              ? `?dateFilterFrom=${dayjs()
                  .subtract(1, "month")
                  .format("YYYY-MM-DD")}&dateFilterTo=${dayjs().format(
                  "YYYY-MM-DD"
                )}`
              : this.analytics.clicks.filterMethod == "overall"
              ? `?dateFilterFrom=all&dateFilterTo=all`
              : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
          }
        )
        .then((res) => {
          if (res.success) {
            this.analytics.clicks.data.labels = res.datesArray;
            this.analytics.clicks.data.datas = res.clicksChart;
            this.analytics.clicks.sumNumber = res.sumNumber;

            if (this.analytics.clicks.chart) {
              this.analytics.clicks.chart.destroy();
              this.analytics.clicks.chart = null;
            }

            let up = (ctx, value) =>
              ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
            let down = (ctx, value) =>
              ctx.p0.parsed.y >= ctx.p1.parsed.y ? value : undefined;

            this.analytics.clicks.chart = new Chart("clicksChart", {
              type: "line",
              data: {
                labels: res.datesArray,
                datasets: [
                  {
                    data: res.clicksChart,
                    borderColor: "black",
                    fill: false,
                    // backgroundColor: "#3d80eb40",
                    label: "Impressions",
                    // tension: 0.4,
                    segment: {
                      borderColor: (ctx) =>
                        up(ctx, "#40ab1a") || down(ctx, "#f53e31"),
                    },
                  },
                ],
              },
              options: {
                legend: { display: false },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            });
            return;
          }
          console.log(res.message);
        });
    },
    getPurchasedAnalytics() {
      if (
        this.analytics.purchased.filters.dateFilterFrom &&
        this.analytics.purchased.filters.dateFilterTo
      ) {
        if (
          this.analytics.purchased.filters.dateFilterFrom >
          this.analytics.purchased.filters.dateFilterTo
        ) {
          this.toast.error("From date cannot be greater than to date");
          this.analytics.purchased.filters.dateFilterFrom = "";
          this.analytics.purchased.filters.dateFilterTo = "";
          this.getPurchasedAnalytics();
          return;
        }
      }
      this.$http
        .$get(
          `/career/analytics/purchases${
            this.analytics.purchased.filterMethod == "custom"
              ? this.analytics.purchased.filters.dateFilterFrom &&
                this.analytics.purchased.filters.dateFilterTo
                ? `?dateFilterFrom=${this.analytics.purchased.filters.dateFilterFrom}&dateFilterTo=${this.analytics.purchased.filters.dateFilterTo}`
                : ""
              : this.analytics.purchased.filterMethod == "last-1-month"
              ? `?dateFilterFrom=${dayjs()
                  .subtract(1, "month")
                  .format("YYYY-MM-DD")}&dateFilterTo=${dayjs().format(
                  "YYYY-MM-DD"
                )}`
              : this.analytics.purchased.filterMethod == "overall"
              ? `?dateFilterFrom=all&dateFilterTo=all`
              : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
          }
        )
        .then((res) => {
          if (res.success) {
            this.analytics.purchased.data.labels = res.datesArray;
            this.analytics.purchased.data.datas = res.purchasedAnalytics;
            this.analytics.purchased.sumNumber = res.sumNumber;

            if (this.analytics.purchased.chart) {
              this.analytics.purchased.chart.destroy();
              this.analytics.purchased.chart = null;
            }

            let up = (ctx, value) =>
              ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
            let down = (ctx, value) =>
              ctx.p0.parsed.y >= ctx.p1.parsed.y ? value : undefined;

            this.analytics.purchased.chart = new Chart("purchasedChart", {
              type: "line",
              data: {
                labels: res.datesArray,
                datasets: [
                  {
                    data: res.purchasedAnalytics,
                    label: "Purchased",
                    borderColor: "black",
                    fill: false,
                    // backgroundColor: "#3d80eb40",
                    // tension: 0.4,
                    segment: {
                      borderColor: (ctx) =>
                        up(ctx, "#40ab1a") || down(ctx, "#f53e31"),
                    },
                  },
                ],
              },
              options: {
                legend: { display: false },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            });
            return;
          }
          console.log(res.message);
        });
    },
    getProfitAnalytics() {
      if (
        this.analytics.profit.filters.dateFilterFrom &&
        this.analytics.profit.filters.dateFilterTo
      ) {
        if (
          this.analytics.profit.filters.dateFilterFrom >
          this.analytics.profit.filters.dateFilterTo
        ) {
          this.toast.error("From date cannot be greater than to date");
          this.analytics.profit.filters.dateFilterFrom = "";
          this.analytics.profit.filters.dateFilterTo = "";
          this.getProfitAnalytics();
          return;
        }
      }
      this.$http
        .$get(
          `/career/analytics/profits${
            this.analytics.profit.filterMethod == "custom"
              ? this.analytics.profit.filters.dateFilterFrom &&
                this.analytics.profit.filters.dateFilterTo
                ? `?dateFilterFrom=${this.analytics.profit.filters.dateFilterFrom}&dateFilterTo=${this.analytics.profit.filters.dateFilterTo}`
                : ""
              : this.analytics.profit.filterMethod == "last-1-month"
              ? `?dateFilterFrom=${dayjs()
                  .subtract(1, "month")
                  .format("YYYY-MM-DD")}&dateFilterTo=${dayjs().format(
                  "YYYY-MM-DD"
                )}`
              : this.analytics.profit.filterMethod == "overall"
              ? `?dateFilterFrom=all&dateFilterTo=all`
              : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
          }
        )
        .then((res) => {
          if (res.success) {
            this.analytics.profit.data.labels = res.datesArray;
            this.analytics.profit.data.datas = res.profitAnalytics;
            this.analytics.profit.sumNumber = res.sumNumber;

            if (this.analytics.profit.chart) {
              this.analytics.profit.chart.destroy();
              this.analytics.profit.chart = null;
            }

            let up = (ctx, value) =>
              ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
            let down = (ctx, value) =>
              ctx.p0.parsed.y >= ctx.p1.parsed.y ? value : undefined;

            this.analytics.profit.chart = new Chart("profitChart", {
              type: "line",
              data: {
                labels: res.datesArray,
                datasets: [
                  {
                    data: res.profitAnalytics,
                    borderColor: "green",
                    fill: false,
                    label: "Profit",

                    // backgroundColor: "#3d80eb40",
                    // tension: 0.4,
                    segment: {
                      borderColor: (ctx) =>
                        up(ctx, "#40ab1a") || down(ctx, "#f53e31"),
                    },
                  },
                  // {
                  //   data: res.orderValueAnalytics,
                  //   borderColor: "black",
                  //   fill: false,
                  //   label: "Turnover",
                  //   segment: {
                  //     borderColor: (ctx) =>
                  //       up(ctx, "#40ab1a") || down(ctx, "#f53e31"),
                  //   },
                  // },
                ],
              },
              options: {
                legend: { display: false },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            });
            return;
          }
        });
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
    changeActiveSlide(slide) {
      if (slide == "withdraw") {
        this.getKycStatus();
      }

      this.activeSlide = slide;
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
            this.isKycPending = true;
            this.kycDetails = res.details;
          }
          if (res.status == "canceled") {
            this.kycDetails.message = res.details.message;
            this.isKycCanceled = true;
          }
          if (res.kyc.status == "approved") {
            this.getCareerOverview();
            this.kycDetails = res.kyc;
            this.isKycVerified = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    transferAmount() {
      if (this.transfer == 0) {
        this.toast.error("Please enter amount");
        return;
      }

      this.getCareerOverview();

      if (this.balance < this.transfer) {
        this.toast.error(
          `You have only ${this.balance} in your income wallet.`
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
              amount: this.transfer,
              source: "career",
              method: "deposit",
            },
            minus: {
              wallet: "career",
              amount: this.transfer,
              source: "transfer",
              method: "withdraw",
            },
          },
        })
        .then((res) => {
          if (res.success) {
            this.getCareerOverview();
            this.transfer = 0;
            this.toast.success(res.message);
            this.withdrawIsOpen = false;
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    withdrawAmount(step) {
      if (this.withdraw == 0) {
        this.toast.error("Please enter amount");
        return;
      }

      if (this.balance < this.withdraw) {
        this.toast.error(
          `You have only ${this.balance} in your income wallet.`
        );
        return;
      }

      if (step == 1) {
        this.activeSlide = "withdrawDetails";
      }

      if (step == 2) {
        if (!this.kycDetails.aadharPhotoFront) {
          this.toast.error("Please upload aadhar card front");
          return;
        }
        if (!this.kycDetails.aadharPhotoBack) {
          this.toast.error("Please upload aadhar card back");
          return;
        }
        if (!this.kycDetails.panPhoto) {
          this.toast.error("Please upload pan card");
          return;
        }
        if (!this.kycDetails.passbookPhoto) {
          this.toast.error("Please upload passbook");
          return;
        }
        if (!this.kycDetails.bankHolderName) {
          this.toast.error("Please enter account holder name");
          return;
        }
        if (!this.kycDetails.bankAccNumber) {
          this.toast.error("Please enter account number");
          return;
        }
        if (!this.kycDetails.bankName) {
          this.toast.error("Please enter bank name");
          return;
        }
        if (!this.kycDetails.bankIfscCode) {
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
              ...this.kycDetails,
            },
          })
          .then((res) => {
            if (res.success) {
              this.getKycStatus();
              this.activeSlide = "transfer";
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
        console.log(this.kycDetails);
        if (this.selectedWithdrawMode == "bank") {
          this.$http
            .$post(`/user/profile/addTransaction?type=withdraw`, {
              headers: {
                Authorization:
                  "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
              },
              body: {
                minus: {
                  wallet: "career",
                  amount: this.withdraw,
                  source: "withdraw",
                  method: "withdraw",
                },
                details: {
                  bankHolderName: this.kycDetails.bankHolderName,
                  bankAccNum: this.kycDetails.bankAccNumber,
                  bankName: this.kycDetails.bankName,
                  bankIfsc: this.kycDetails.bankIfscCode,
                },
              },
            })
            .then((res) => {
              if (res.success) {
                this.withdraw = 0;
                this.activeSlide = "withdraw";
                this.toast.success(res.message);
                this.withdrawIsOpen = false;
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
          //       this.getIncomeWallet();
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
    sendFile(event, index) {
      this.isLoading = true;
      let selectedFile = event.target.files[0];
      this.fileUpload(selectedFile, index);
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
                this.kycDetails.aadharPhotoFront = result.srcUrl;
              } else if (index == "aadharBack") {
                this.kycDetails.aadharPhotoBack = result.srcUrl;
              } else if (index == "panPhoto") {
                this.kycDetails.panPhoto = result.srcUrl;
              } else if (index == "passbookPhoto") {
                this.kycDetails.passbookPhoto = result.srcUrl;
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
    calculateAge(dob) {
      // Convert the input date of birth string to a Date object
      const dobDate = new Date(dob);

      // Get the current date
      const currentDate = new Date();

      // Calculate the difference in milliseconds between the two dates
      const ageInMilliseconds = currentDate - dobDate;

      // Calculate the age in years by dividing the age in milliseconds by the number of milliseconds in a year
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

      // Round down the age to the nearest whole number
      const age = Math.floor(ageInYears);

      return age;
    },
    changeAnalyticsActiveSlide(slide) {
      if (slide == "impression") {
        this.getClicksAnalytics();
      }
      if (slide == "purchase") {
        this.getPurchasedAnalytics();
      }
      if (slide == "profit") {
        this.getProfitAnalytics();
      }
      this.analyticsActiveSlide = slide;
    },
  },
};
</script>
