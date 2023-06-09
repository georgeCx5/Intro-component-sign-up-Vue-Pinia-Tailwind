<script>
export default {
   props: {
      platform: String,
      isHover: false,
   },
   computed: {
      getShape() {
         return this.platform == 'twitter' ? 'p-[8px]' : 'p-[6px]';
      },
      getHover() {
         return this.isHover ? '#ffffff' : '#4c7bf3';
      }
   }
}
</script>
<template>
   <button @mouseover="isHover = true" @mouseleave="isHover = false"
      :class="` w-8 h-8 ${getShape} hover:bg-neo-blue border-neo-pale-blue hover:border-neo-blue border-[1px] rounded-full`">
      <svg v-show="platform == 'facebook'" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
         enable-background="new 0 0 512 512">
         <path
            d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"
            :fill="getHover" class="fill-000000"></path>
      </svg>
      <svg v-show="platform == 'instagram'" data-name="Layer 1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
         <path
            d="M83 23a22 22 0 0 1 22 22v38a22 22 0 0 1-22 22H45a22 22 0 0 1-22-22V45a22 22 0 0 1 22-22h38m0-8H45a30.09 30.09 0 0 0-30 30v38a30.09 30.09 0 0 0 30 30h38a30.09 30.09 0 0 0 30-30V45a30.09 30.09 0 0 0-30-30Z"
            :fill="getHover" class="fill-062b31"></path>
         <path
            d="M90.14 32a5.73 5.73 0 1 0 5.73 5.73A5.73 5.73 0 0 0 90.14 32ZM64.27 46.47A17.68 17.68 0 1 1 46.6 64.14a17.7 17.7 0 0 1 17.67-17.67m0-8A25.68 25.68 0 1 0 90 64.14a25.68 25.68 0 0 0-25.73-25.67Z"
            :fill="getHover" class="fill-062b31"></path>
      </svg>
      <svg v-show="platform == 'twitter'" version="1.0" viewBox="0 0 32 32" xml:space="preserve"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M31.993 6.077a13.027 13.027 0 0 1-3.77 1.033 6.588 6.588 0 0 0 2.887-3.63 13.144 13.144 0 0 1-4.168 1.592A6.56 6.56 0 0 0 22.149 3a6.562 6.562 0 0 0-6.562 6.563c0 .514.057 1.016.169 1.496-5.455-.274-10.291-2.887-13.529-6.858a6.544 6.544 0 0 0-.888 3.3 6.564 6.564 0 0 0 2.919 5.464 6.544 6.544 0 0 1-2.972-.821l-.001.082a6.568 6.568 0 0 0 5.265 6.437 6.606 6.606 0 0 1-2.963.113 6.572 6.572 0 0 0 6.13 4.558 13.166 13.166 0 0 1-8.15 2.811c-.53 0-1.053-.031-1.566-.092A18.592 18.592 0 0 0 10.062 29c12.072 0 18.675-10.001 18.675-18.675 0-.284-.008-.568-.02-.85a13.315 13.315 0 0 0 3.276-3.398z"
            :fill="getHover" class="fill-55acee"></path>
      </svg>
   </button>
</template>