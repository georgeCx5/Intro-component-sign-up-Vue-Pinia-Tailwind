<script>
import PlatformManager from './components/PlatformManager.vue';
import dashboardImg from '@/assets/images/illustration-dashboard.png'

export default {
  data() {
    return {
      rgxEmail: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
      emailText: '',
      dashboardImg,
      logoImg: 'bg-[url("@/assets/images/logo.svg")]',
      errorState: 'default',
    }
  },
  components: {
    PlatformManager,
  },
  methods: {
    checkEmail() {
      if (this.emailText.length <= 0) {
        this.errorState = 'empty';
        return;
      }
      if (this.rgxEmail.test(this.emailText)) {
        this.errorState = 'default';
        this.emailText = '';
      } else {
        this.errorState = 'error';
      }
    }
  },
  computed: {
    getState() {
      let inputBorder, inputGap, imageGap;
      if (this.errorState == 'default') {
        inputBorder = 'outline-neo-pale-blue';
        inputGap = 'gap-[10px]';
        imageGap = 'gap-[72px] dsk:gap-[82px]';
      } else {
        inputBorder = 'outline-neo-light-red';
        inputGap = 'gap-[18px]';
        imageGap = 'gap-[40px] dsk:gap-[64px]';
      }
      return { inputBorder, inputGap, imageGap };
    }
  }
}
</script>
<template>
  <body class=" flex flex-col items-center gap-[120px] dsk:gap-[72px] font-franklin">
    <main :class="` flex flex-col items-center ${getState.imageGap} mt-[85px] dsk:mt-[86px]`">
      <div class=" flex flex-col items-center gap-[34px] dsk:gap-[42px]">
        <div :class="` w-[56px] dsk:w-[90px] h-[17px] dsk:h-[28px] ${logoImg} bg-contain`"></div>
        <div class=" flex flex-col items-center gap-[16px] dsk:gap-[18px]">
          <h1 class=" text-[22px] dsk:text-[48px] leading-[32px] dsk:leading-[60px] text-neo-gray font-light">We are
            launching
            <span class=" text-neo-dark font-bold">soon!</span>
          </h1>
          <p class=" text-neo-dark text-[12px] dsk:text-[20px] leading-[15px] dsk:leading-[24px] font-light">Subscribe and
            get notified</p>
        </div>
        <!-- Form -->
        <div :class="` flex flex-col dsk:flex-row ${getState.inputGap} dsk:gap-4 w-[282px] dsk:w-full`">
          <div class=" flex flex-col gap-[2px] dsk:gap-[6px]">
            <input @keypress="errorState = 'default'"
              :class="`w-full dsk:w-[421px] h-[40px] dsk:h-[56px] px-[32px] dsk:px-[30px] ${getState.inputBorder} text-neo-dark placeholder:text-neo-pale-blue text-[12px] dsk:text-[16px] leading-[20px] outline outline-1 rounded-[28px]`"
              type="email" placeholder="Your email address..." v-model="emailText" maxlength="32">
            <div
              class=" dsk:px-[30px] text-neo-light-red text-center dsk:text-left text-[10px] dsk:text-[12px] leading-[20px] tracking-[.13px] italic">
              <h5 v-show="errorState == 'empty'">Whoops! It looks like you forgot to add your email</h5>
              <h5 v-show="errorState == 'error'">Please provide a valid email address</h5>
            </div>
          </div>
          <button @click="checkEmail()"
            class=" w-full dsk:w-[200px] h-[40px] dsk:h-[56px] bg-neo-blue text-white text-[12px] dsk:text-[16px] leading-[16px] dsk:leading-[19px] font-semibold rounded-[28px]"
            type="submit">Notify Me</button>
        </div>
        <!-- - -->
      </div>
      <img class=" w-[320px] dsk:w-[640px]" :src="dashboardImg" alt="dashboardImg">
    </main>
    <footer class=" flex flex-col items-center gap-[27px] dsk:gap-[25px] mb-9 dsk:mb-12">
      <div class=" flex gap-3">
        <PlatformManager platform="facebook" />
        <PlatformManager platform="twitter" />
        <PlatformManager platform="instagram" />
      </div>
      <h3 class=" text-neo-gray text-[10px] dsk:text-[12px] leading-[12px] dsk:leading-[15px]">&copy; Copyright Ping. All
        rights reserved.</h3>
    </footer>
  </body>
</template>