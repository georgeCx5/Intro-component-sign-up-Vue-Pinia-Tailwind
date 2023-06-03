<script>
export default {
  data() {
    return {
      bgDesktop: 'bg-[url("@/assets/images/bg-intro-desktop.png")]',
      bgMobile: 'bg-[url("@/assets/images/bg-intro-mobile.png")]',
    }
  }
}
</script>
<template>
  <body class=" h-screen bg-neo-red bg-opacity-75 font-poppins">
    <div class=" absolute h-full w-full" :class="`${bgMobile}`"></div>
    <main class=" relative px-6 text-white">
      <div>
        <h1 class=" text-2xl dsk:text-4xl font-bold">Learn to code by watching others</h1>
        <p class=" font-medium">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </div>

      <button class=" h-[88px] px-[45px] bg-neo-blue leading-7 rounded-xl">
        <span class=" font-bold">
          Try it free 7 days</span> then $20/mo. thereafter</button>
      <!-- Form -->
      <div class=" w-[328px] h-[444px] p-6 bg-white rounded-xl">
        <input class=" h-14 px-5 outline outline-1 outline-neo-grayish-blue rounded-md" type="text"
          placeholder="First Name">
        Last Name
        Email Address
        Password
        <button class=" bg-neo-green">Claim your free trial</button>
        <h6 class=" text-neo-grayish-blue">
          By clicking the button, you are agreeing to our <a class=" text-neo-red" href="#" target="_blank">Terms and
            Services</a>
        </h6>
      </div>
    </main>
  </body>
</template>