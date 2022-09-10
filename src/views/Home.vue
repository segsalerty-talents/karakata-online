<template>
  <c-box class="w-full h-full">
    <!-- first viewport -->
    <div class="first">
      <c-box class="w-full bg"></c-box>
      <c-flex class="justify-between mx-auto" w="80%" pt="47px">
        <c-flex class="cursor-pointer">
          <c-image
            :src="logo"
            :w="['69px', '118px']"
            class="cursor-pointer"
            cursor="pointer"
          />
        </c-flex>
        <c-flex class="columnGap">
          <c-text
            class="cursor-pointer text-secondary-300"
            :fontSize="['13px', '26px']"
            fontWeight="600"
            :pt="['10px', '0px']"
            >Log In</c-text
          >
          <c-button
            class="btn"
            :w="['104', '204px']"
            :fontSize="['10px', '20px']"
            py="20px" @click="$router.push({name: 'Register'})"
            >Set Up</c-button
          >
        </c-flex>
      </c-flex>
      <c-text
        class="text-center text-primary mx-auto mobile-text sub-font"
        fontWeight="700"
        :mt="['55px', '200px']"
        :fontSize="['36px', '48px']"
        lineHeight="66px"
        :w="['353px', '778px']"
        >Creating <br class="brnodisplay" />Customer <br class="brnodisplay" />Engagement
        <br class="brnobreak" />and<br class="brnodisplay" />
        Sales Automation</c-text
      >
      <c-text
        class="font-bold text-center text-seconadry-300 mx-auto mobile-text"
        mt="50px"
        :fontSize="['14px', '22px']"
        :w="['336px', '786px']"
        lineHeight="29px"
        >Karakata provides AI-powered business tools to manage and engage customers and
        provide seamless business intelligence & leads.</c-text
      >
      <c-button
        class="justify-center mx-auto btn"
        py="40px"
        :mt="['30px', '100px']"
        :w="['205px', '300px']"
        :fontSize="['19px', '26px']" @click="$router.push({name: 'Register'})"
        >Set Up Now</c-button
      >
    </div>

    <!-- second viewport -->
    <c-box class="" :mt="['245px', '200px']">
      <c-text
        class="second text-center text-secondary-100 mx-auto mobile-text"
        :w="['330px', '696px']"
        fontWeight="800"
        :fontSize="['20px', '30px']"
        :lineHeight="['24px', '45px']"
        mb="100px"
        >Karakata proffers seamless solution for your business through:</c-text
      >
      <c-box class="mx-auto" :w="['90%', '90%', '80%', '70%']">
        <c-flex class="flex-col rowGap" mt="30px">
          <c-simple-grid :columns="[1, 2]" spacing="40px" class="columnGap">
            <c-image class="mx-auto" :src="embedded" :w="['291px', '415px']" />
            <c-flex class="flex-col box mx-auto">
              <c-text
                class="text-secondary-300"
                :fontSize="['20px', '36px']"
                ::fontWeight="['700', '500']"
                :lineHeight="['24px', '54px']"
                >Embedded Invoice & Receipt Sender</c-text
              >
              <c-text class="text-secondary-200" :fontSize="['11px', '20px']" mt="10px"
                >Karakata enables you to generate smart invoices and receipts with just a
                simple order summary for your customers. It Promotes a flow of
                communication to customers and credibility for your business.</c-text
              >
            </c-flex>
          </c-simple-grid>
          <c-simple-grid :columns="[1, 2]" spacing="40px" class="columnGap">
            <c-flex class="flex-col box mx-auto" :order="['2', '1']">
              <c-text
                class="text-secondary-300"
                :fontSize="['20px', '36px']"
                ::fontWeight="['700', '500']"
                :lineHeight="['24px', '54px']"
                >Custom communication through segmentation</c-text
              >
              <c-text class="text-secondary-200" :fontSize="['11px', '20px']" mt="10px"
                >Expand your reach and service ability by sending out customized template
                messages to customers. Karakata helps you section your customers with the
                filter features specifically tailored for your business need.
              </c-text>
            </c-flex>
            <c-flex class="" :order="['1', '2']">
              <c-image class="mx-auto" :src="custom" :w="['291px', '415px']" />
            </c-flex>
          </c-simple-grid>
          <c-simple-grid :columns="[1, 2]" spacing="40px" class="columnGap">
            <c-image class="mx-auto" :src="comprehensive" :w="['291px', '415px']" />
            <c-flex class="flex-col box mx-auto">
              <c-text
                class="text-secondary-300"
                :fontSize="['20px', '36px']"
                ::fontWeight="['700', '500']"
                :lineHeight="['24px', '54px']"
                >Comprehensive Analytics
              </c-text>
              <c-text class="text-secondary-200" :fontSize="['11px', '20px']" mt="10px"
                >Enhance your experience and usability by having a well detailed customer
                analysis to help your business make the right decision with available
                data. Manage Product delivery, carefully compile customer order, track the
                order and initiate Automated messaging template conveniently</c-text
              >
            </c-flex>
          </c-simple-grid>
        </c-flex>
      </c-box>
    </c-box>

    <!-- get started -->
    <c-box class="bgbox" mt="100px" :mb="['50px', '100px']">
      <c-simple-grid
        :columns="[1, 2]"
        spacing="40px"
        class="mx-auto"
        py="100px"
        :w="['90%', '90%', '80%', '70%']"
      >
        <c-image class="mx-auto" :src="getStarted" :w="['291px', '415px']" />
        <c-flex class="flex-col">
          <c-text
            class="second custom-text flex text-left text-secondary-300 mx-auto"
            :display="['flex', 'none']"
            :mt="['100px', '0px']"
            :fontSize="['13px', '30px']"
            fontWeight="500"
            :w="['283px', '350px', '656px']"
            >People who use karakata are Subject to<br />
            experience growth, bumper sales and <br />consistency in Business.</c-text
          >
          <c-text
            class="flex text-left lg:text-right text-secondary-300 mx-auto"
            :display="['none', 'flex']"
            :mt="['100px', '0px']"
            :fontSize="['13px', '30px']"
            fontWeight="500"
            :w="['283px', '350px', '656px']"
            >People who use karakata are Subject to experience growth, bumper sales and
            <br />high customer retention.</c-text
          >
          <c-flex
            class="sm:items-start sm:justify-start lg:items-end lg:justify-end"
            :ml="['44px', '0px']"
          >
            <c-button class="btn" mt="30px" :ml="['44px', '0px']" :w="['167px', '276px']" @click="$router.push({name: 'Register'})">
              <c-text mr="6px" color="black" :fontSize="['14px', '24px']"
                >Get Started</c-text
              >
              <svg
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7072 8.15381L2 8.15381"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.1762 8.6665L16.0763 15.3332"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.1762 8.66666L16.0763 2"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </c-button>
          </c-flex>
        </c-flex>
      </c-simple-grid>
    </c-box>

    <!-- how to get started -->
    <c-box>
      <c-flex class="flex-col mx-auto" w="80%">
        <c-flex
          class="basicColGap mobile-text sub-font-small"
          :fontSize="['19px', '36px']"
          :w="['333px', '602px']"
          fontWeight="700"
          lineHeight="54px"
        >
          <c-text class="">How to get started with</c-text>
          <span class="text-primary">Karakata</span>
        </c-flex>
        <c-flex class="mx-auto">
          <c-flex :display="['none', 'flex']">
            <c-image :src="started" />
          </c-flex>
          <c-flex :display="['flex', 'none']">
            <c-image :src="startedMobile" />
          </c-flex>
        </c-flex>
      </c-flex>
    </c-box>

    <!-- footer -->
    <c-box class="w-full" bg="#E27253" color="white">
      <c-box class="mx-auto" w="80%" py="30px">
        <c-flex class="flex-col">
          <c-flex class="items-center justify-center basicColGap">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.8824 0C7.55972 0 0 7.8037 0 17.4303C0 25.1317 4.83732 31.6652 11.5453 33.9701C12.389 34.1314 12.6988 33.5919 12.6988 33.1315C12.6988 32.7159 12.683 31.3428 12.6759 29.8863C7.97905 30.9407 6.98799 27.8298 6.98799 27.8298C6.22003 25.815 5.11352 25.2794 5.11352 25.2794C3.58185 24.1976 5.22898 24.2197 5.22898 24.2197C6.9243 24.3427 7.81698 26.016 7.81698 26.016C9.3227 28.6807 11.7664 27.9103 12.7298 27.465C12.8812 26.3383 13.3188 25.5695 13.8016 25.1343C10.0519 24.6934 6.10987 23.1988 6.10987 16.52C6.10987 14.6171 6.76939 13.0621 7.84942 11.8415C7.67412 11.4024 7.0963 9.62965 8.01294 7.22873C8.01294 7.22873 9.43061 6.76025 12.6568 9.01544C14.0034 8.62912 15.4477 8.43554 16.8824 8.42898C18.3172 8.43554 19.7625 8.62912 21.1117 9.01544C24.3341 6.76025 25.7498 7.22873 25.7498 7.22873C26.6687 9.62965 26.0906 11.4024 25.9153 11.8415C26.9977 13.0621 27.6527 14.617 27.6527 16.52C27.6527 23.2147 23.7033 24.6889 19.944 25.1203C20.5495 25.6612 21.0891 26.7221 21.0891 28.3481C21.0891 30.6803 21.0695 32.5574 21.0695 33.1315C21.0695 33.5954 21.3734 34.1389 22.2292 33.9677C28.9335 31.6603 33.7647 25.1291 33.7647 17.4303C33.7647 7.8037 26.2061 0 16.8824 0Z"
                fill="white"
              />
              <path
                d="M6.33124 24.8251C6.29444 24.9119 6.16325 24.938 6.04402 24.8784C5.92242 24.8214 5.85407 24.7029 5.8935 24.6157C5.92965 24.5263 6.06084 24.5013 6.18218 24.5614C6.30403 24.6183 6.37344 24.7379 6.33124 24.8251ZM7.15572 25.5926C7.07579 25.6699 6.9195 25.634 6.81341 25.5118C6.70378 25.3899 6.68327 25.2269 6.76438 25.1484C6.8468 25.0711 6.99837 25.1072 7.10826 25.2293C7.21789 25.3526 7.23919 25.5145 7.15559 25.5927L7.15572 25.5926ZM7.72136 26.5746C7.61856 26.649 7.45057 26.5792 7.34685 26.4237C7.24418 26.2683 7.24418 26.0818 7.34908 26.007C7.4532 25.9323 7.61856 25.9995 7.72373 26.1538C7.82626 26.3119 7.82626 26.4984 7.72123 26.5747L7.72136 26.5746ZM8.67781 27.7119C8.58593 27.8175 8.39032 27.7893 8.24704 27.645C8.1006 27.504 8.05972 27.3039 8.15187 27.1982C8.24481 27.0923 8.44159 27.1221 8.58593 27.2651C8.73144 27.4058 8.77588 27.6074 8.67794 27.7119H8.67781ZM9.914 28.096C9.87364 28.2328 9.68514 28.2951 9.49532 28.2369C9.30576 28.177 9.18167 28.0165 9.21993 27.8782C9.25936 27.7403 9.44865 27.6755 9.63992 27.7377C9.82921 27.7974 9.95356 27.9566 9.91413 28.096H9.914ZM11.3211 28.2587C11.3258 28.403 11.1648 28.5226 10.9655 28.5252C10.765 28.5298 10.6029 28.413 10.6008 28.2712C10.6008 28.1256 10.7582 28.0071 10.9585 28.0037C11.1578 27.9995 11.3211 28.1154 11.3211 28.2587ZM12.7032 28.2035C12.7271 28.3442 12.5885 28.4887 12.3907 28.5271C12.1962 28.5642 12.0161 28.4774 11.9912 28.3379C11.967 28.1936 12.1082 28.0492 12.3024 28.0117C12.5006 27.9758 12.6779 28.0604 12.7032 28.2035Z"
                fill="white"
              />
            </svg>
            <a
              href="https://www.github.com/segsalerty2013/karakata-online"
              target="_blank"
              :fontSize="['8px', '12px']"
              >link to public repository</a
            >
          </c-flex>
          <c-flex class="columnGap" :mt="['20px', '10px']">
            <c-text
              class="absolute small-text"
              :left="['30px', '50px']"
              :fontSize="['6px', '10px', '16px']"
              >Built by amazing people from Segsalerty talent resources network</c-text
            >
            <c-text
              class="absolute small-text"
              :right="['30px', '70px']"
              :fontSize="['6px', '10px', '14px']"
              >Copyright 2021 © Karakata. All Rights Reserved</c-text
            >
          </c-flex>
        </c-flex>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  data () {
    return {
      logo: require('@/assets/svg/logo.svg'),
      background: require('@/assets/img/landing.png'),
      custom: require('@/assets/img/custom.png'),
      comprehensive: require('@/assets/img/comprehensive.png'),
      embedded: require('@/assets/img/embedded.png'),
      getStarted: require('@/assets/img/get_started.png'),
      started: require('@/assets/img/started.png'),
      startedMobile: require('@/assets/img/started_mobile.png')
    }
  }
}
</script>

<style scoped>
.bg {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  background-image: url('../assets/img/landing.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff8f5;
  height: 850px;
  width: 98vw;
}
.rowGap {
  row-gap: 80px;
}
.columnGap {
  column-gap: 32px;
}
.basicColGap {
  column-gap: 12px;
}
.basicRowGap {
  row-gap: 50px;
}
.box {
  background: #fff8f6;
  border-radius: 0px 50px;
  width: 518px;
  padding: 40px;
}
.bgbox {
  background: #fff8f6;
}
.first {
  position: relative;
  z-index: 1;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease-in;
  background: #e27253;
  border-radius: 10px;
  color: white;
}
@media screen and (max-width: 500px) {
  .box {
    width: 288px;
  }
}
@media screen and (max-width: 767px) and (min-width: 501px) {
  .box {
    width: 388px;
  }
  .second {
    width: 450px;
  }
  .custom-text {
    font-size: 20px;
  }
}
@media screen and (max-width: 991px) and (min-width: 768px) {
  .box {
    width: 458px;
  }
}
@media only screen and (min-width: 768px) {
  .brnodisplay {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .brnobreak {
    display: none;
  }
}
@media only screen and (max-width: 368px) {
  .small-text {
    font-size: 4px;
  }
}
@media only screen and (max-width: 390px) {
  .small-text {
    font-size: 5px;
  }
}
@media only screen and (max-width: 367.5px) {
  .mobile-text {
    width: 300px;
  }
  .sub-font {
    font-size: 33px;
  }
  .sub-font-small {
    font-size: 14px;
  }
}
@media only screen and (max-width: 320px) {
  .mobile-text {
    width: 285px;
  }
}
</style>
