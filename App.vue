<script>
import { useDataStore } from '@/stores/DataStore';
import { mapStores } from 'pinia';

import InputPick from './components/InputPick.vue';

export default {
  data() {
    return {
      bgMobile: 'bg-[url("@/assets/images/bg-intro-mobile.png")]',
      bgDesktop: 'dsk:bg-[url("@/assets/images/bg-intro-desktop.png")]',
    }
  },
  components: {
    InputPick,
  },
  computed: {
    ...mapStores(useDataStore),
  }
}
</script>
<template>
  <body class=" flex flex-col dsk:justify-center items-center dsk:h-screen bg-neo-red font-poppins">
    <div class=" absolute h-full w-full" :class="`${bgMobile} ${bgDesktop}`"></div>
    <main class=" relative flex flex-col dsk:flex-row dsk:items-center gap-16 dsk:gap-[45px] pt-[88px] pb-[68px] px-6 text-white">
      <div class=" flex flex-col gap-6 w-[327px] dsk:w-[525px] text-center dsk:text-left">
        <h1 class=" text-[28px] dsk:text-[50px] leading-9 dsk:leading-[55px] tracking-[-.29px] dsk:tracking-[-.52px] font-bold">Learn to code by watching others</h1>
        <p class=" text-[16px] leading-[26px] font-medium">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </div>
      <div class=" relative flex flex-col gap-6">
        <!-- Shadows -->
        <div class=" absolute left-0 top-[7px] w-full h-[88px] dsk:h-[60px] bg-neutral-700 bg-opacity-25 rounded-[10px]"></div>
        <div class=" absolute left-0 -bottom-[8px] w-full h-[442px] bg-neutral-700 bg-opacity-25 rounded-[10px]">
        </div>
        <!-- - -->
        <div
          class=" relative flex flex-col dsk:flex-row dsk:gap-1 justify-center items-center w-[327px] dsk:w-[540px] h-[88px] dsk:h-[60px] bg-neo-blue text-[15px] leading-[26px] tracking-[.27px] rounded-[10px]">
          <h3>
            <span class=" font-bold">
              Try it free 7 days
            </span>
            then
          </h3>
          <h3>
            $20/mo. thereafter
          </h3>
        </div>
        <!-- Form -->
        <div class=" relative flex flex-col gap-4 dsk:gap-5 w-[327px] dsk:w-[540px] p-6 dsk:p-10 bg-white rounded-[10px]">
          <InputPick phText="First Name" :sIndex="0" />
          <InputPick phText="Last Name" :sIndex="1" />
          <InputPick phText="Email Address" typeText="email" :sIndex="2" />
          <InputPick phText="Password" typeText="password" :sIndex="3" />
          <div class=" relative flex flex-col gap-3">
            <!-- Shadow -->
            <div class=" absolute left-0 top-[4px] w-full h-[52px] bg-green-600 bg-opacity-90 rounded-[5px]"></div>
            <!-- - -->
            <button @click="dataStore.checkForm()" type="submit"
              class=" relative h-[52px] bg-neo-green hover:brightness-[1.075] text-[15px] leading-[26px] tracking-[1px] font-semibold uppercase rounded-[5px]">
              Claim your free trial
            </button>
            <h6 class=" px-4 text-neo-grayish-blue text-center text-[11px] leading-[21px] dsk:leading-[26px] font-medium">
              By clicking the button, you are agreeing to our <a class=" text-neo-red font-bold" href="#"
                target="_blank">Terms and
                Services</a>
            </h6>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>
