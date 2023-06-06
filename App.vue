<script>
import InputPick from './components/InputPick.vue';

export default {
  data() {
    return {
      bgDesktop: 'bg-[url("@/assets/images/bg-intro-desktop.png")]',
      bgMobile: 'bg-[url("@/assets/images/bg-intro-mobile.png")]',
    }
  },
  components: {
    InputPick,
  }
}
</script>
<template>
  <body class=" h-screen bg-neo-red bg-opacity-75 font-poppins">
    <div class=" absolute h-full w-full" :class="`${bgMobile}`"></div>
    <main class=" relative px-6 text-white">
      <div>
        <h1 class=" text-[28px] leading-9 tracking-[-.29px] font-bold">Learn to code by watching others</h1>
        <p class=" text-[16px] leading-[26px] font-medium">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </div>

      <div class=" flex flex-col gap-6">
        <button
          class=" relative h-[88px] px-[45px] bg-neo-blue text-[15px] leading-[26px] tracking-[.27px] rounded-[10px]">
          <div class=" absolute left-0 -bottom-2 h-full w-full bg-gray-400 rounded-[10px] -z-50"></div>
          <span class=" font-bold">
            Try it free 7 days</span> then $20/mo. thereafter
        </button>
        <!-- Form -->
        <div class=" relative flex flex-col gap-4 w-[327px] h-[442px] p-6 bg-white rounded-[10px]">
          <!-- Shadow -->
          <div class=" absolute left-0 -bottom-2 h-full w-full bg-gray-400 rounded-[10px] -z-50"></div>
          <InputPick phText="First Name" />
          <InputPick phText="Last Name" />
          <InputPick phText="Email Address" typeText="email" />
          <InputPick phText="Password" typeText="password" />
          <div class=" flex flex-col gap-2">
            <button
              class=" relative h-14 bg-neo-green text-[15px] leading-[26px] tracking-[1px] font-semibold uppercase rounded-[5px]">
              <div class=" absolute left-0 -bottom-2 w-full h-full bg-gray-400 rounded-[5px] -z-50"></div>Claim your
              free trial
            </button>
            <h6 class=" text-neo-grayish-blue text-[11px] leading-[21px]">
              By clicking the button, you are agreeing to our <a class=" text-neo-red" href="#" target="_blank">Terms and
                Services</a>
            </h6>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>
