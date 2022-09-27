<template>
  <div id="" class="px-6 w-full">
    <c-flex align="left" mt="4%" direction="column">
      <!-- Main content of the page -->
      <!-- The modals at the top goes here -->
      <div class="w-full flex md:flex-row flex-col items-center">
        <!-- New customers added -->
        <div
          class="w-full flex-1 py-2 px-5 border border-solid rounded flex justify-between items-center"
        >
          <img
            :src="require('@/assets/img/homeDashboardIcons/User Plus.svg')"
          />
          <div class="text-right">
            <p class="text-2xl font-bold">{{ salesInfo.customersAdded }}</p>
            <i class="text-sm xl:text-base">New customers</i>
          </div>
        </div>
        <!-- Invoice created in a day -->
        <div
          class="w-full my-6 md:my-0 md:mx-5 flex-1 py-2 px-5 border border-solid rounded flex justify-between items-center"
        >
          <img :src="require('@/assets/img/homeDashboardIcons/Receipt.svg')" />
          <div class="text-right">
            <p class="text-2xl font-bold">N{{ salesInfo.totalInvoiceToday }}</p>
            <i class="text-sm xl:text-base">Total Invoice created today</i>
          </div>
        </div>
        <!-- Confirmed sales in a day -->
        <div
          class="w-full flex-1 py-2 px-5 border border-solid rounded flex justify-between items-center"
        >
          <img :src="require('@/assets/img/homeDashboardIcons/Line.svg')" />
          <div class="text-right">
            <p class="text-2xl font-bold">N{{ salesInfo.confirmedSalesToday }}</p>
            <i class="text-sm xl:text-base">Confirmed sales today</i>
          </div>
        </div>
      </div>
      <!-- Generate Invoice Section -->
      <div class="mt-8 xl:flex item-center justify-between">
        <div class="w-full">
          <c-text fontSize="3xl" class="bolded">Found a new lead?</c-text>
          <c-flex
            :direction="{ base: 'column', md: 'row' }"
            :align="{ base: 'flex-start', md: 'center' }"
            justify="space-between"
            class="w-full"
          >
            <!-- Number to send invoice -->
            <c-flex direction="column" align="start" justify="center" class="w-full">
            </c-flex>
          </c-flex>
          <c-flex
            :direction="{ base: 'column', md: 'row' }"
            align="flex-start"
            justify="flex-start"
          >
            <!-- Input invoice fields -->
            <div class="h-full w-full overflow-hidden md:mr-10">
              <c-text class="secondary_color" mb="3"
                >Paste Customer Whatsapp Number</c-text
              >
              <c-flex
                direction="row"
                justify="center"
                align="center"
                class="w-full"
              >
                <vue-country-code
                  @onSelect="onSelect"
                  :enabledCountryCode="true"
                  :preferredCountries="['ng', 'us', 'gb']"
                  class="border border-solid"
                >
                </vue-country-code>
                <c-input
                  placeholder="Enter the client No"
                  size="md"
                  borderLeft="none"
                  roundedLeft="0"
                  class="-ml-3 border border-solid w-full"
                />
              </c-flex>
              <c-flex
                direction="column"
                align="start"
                justify="start"
                class="w-full"
              >
                <c-flex
                  direction="row"
                  justify="space-between"
                  align="center"
                  mb="2"
                  mt="4"
                  class="w-full"
                >
                  <c-text class="secondary_color" fontSize="lg"
                    >Paste order summary</c-text
                  >
                  <c-text
                    class="primary_color bolded"
                    fontSize="sm"
                    cursor="pointer"
                    ><a>view templates</a></c-text
                  >
                </c-flex>
                <textarea
                  placeholder="Enter your summary here"
                  class="border border-solid shadow-lg w-full h-64 p-5 rounded-lg"
                />
                <c-button
                  mt="4"
                  py="8"
                  class="primary_bg_color w-full"
                  color="white"
                  >Generate smart invoice</c-button
                >
              </c-flex>
            </div>
            <!-- Invoice Generator -->
            <div class="mt-10 md:mt-0 w-full md:mr-10">
              <c-flex direction="column" justify="center" align="center">
                <div class="w-full flex justify-between">
                  <p class="mb-4 text-lg font-semibold self-start">Invoice preview</p>
                  <p class="primary_color bolded text-sm">full screen</p>
                </div>
                <img :src="require('@/assets/img/invoiceTemplate.svg')" class="w-full" />
                <c-flex w="100%" justify="space-around">
                  <c-button w="40%" class="primary_bg_color" color="white"
                    >Send</c-button
                  >
                  <c-button
                    bg="white"
                    w="40%"
                    class="number_border_color"
                    color="black"
                    >Clear</c-button
                  >
                </c-flex>
              </c-flex>
            </div>
          </c-flex>
        </div>
        <!-- Customer Invoice -->
        <c-box
          h="450px"
          w="500px"
          overflow-x="hidden"
          overflow-y="scroll"
          class="invoice mt-10 xl:mt-0"
          borderLeft="1px"
          borderColor="gray.200"
        >
          <c-text class="bolded" fontSize="2xl" is-truncated pl="4"
            >Invoice info</c-text
          >
          <c-flex
            direction="column"
            align="flex-start"
            justify="space-between"
            class="interactions"
            pl="4"
            v-for="(sale, index) in salesinvoice.invoiceInfo"
            :key="index"
          >
            <div></div>
            <div class="flex flex-row justify-between items-center">
              <c-text class="bolded" py="4" fontSize="lg" is-truncated>{{
                sale.header
              }}</c-text>
            </div>
            <div
              id="transaction_details"
              v-for="(sub, index) in sale.sub_header"
              :key="index"
            >
              <div class="flex flex-row justify-between">
                <img :src="require('@/assets/img/OvalSM.svg')" /><c-text
                  fontSize="sm"
                  ml="3"
                  is-truncated
                  >{{ sub.title }}</c-text
                >
              </div>
            </div>
          </c-flex>
        </c-box>
      </div>
    </c-flex>
  </div>
  <!-- <div v-else><c-text fontSize="2xl" py="10" px="4">oops, this page is not available on small screens, please switch to a bigger resolution</c-text></div> -->
</template>

<script>
import salesInvoice from '@/data/sales_invoice'
import { CText, CGrid, CGridItem } from '@chakra-ui/vue'
// import ShowInteraction from '@/components/interaction_details'
export default {
  components: {},
  data () {
    return {
      salesInfo: {
        customersAdded: 13,
        totalInvoiceToday: '120,000.00',
        confirmedSalesToday: '90,000.00'
      },
      username: 'Glory',
      salesinvoice: salesInvoice,
      showInt: false,
      // I was thinking the page header should be from the URL because it won't be the same for every page
      routerlink: 'Dashboard',
      currentInt: [],
      // To get the country selected
      countryCode: Object
    }
  },
  methods: {
    onSelect ({ name, iso2, dialCode }) {
      this.countryCode = {
        name,
        iso2,
        dialCode
      }
      console.log(this.countryCode)
    }
  }
}
</script>
<style scoped>
.primary_color {
  color: #e27253;
}
.secondary_color {
  color: #999999;
}
.primary_bg_color {
  background: #e27253;
}
.bg_trans {
  font-style: Lato;
  position: absolute;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.margin-right {
  margin-right: 25px;
}
.mr-4 {
  margin-right: 1rem;
}
.invoice::-webkit-scrollbar {
  width: 3px;
}
.invoice::-webkit-scrollbar-track {
  display: none;
}
.invoice::-webkit-scrollbar-thumb {
  background-color: grey;
  outline: 1px solid grey;
  border-radius: 60px;
}
.bolded {
  font-weight: 700;
}
.transaction_details:first-child {
  color: #fffaf9;
}
/* .toggle_container {
    margin: 0px auto;
    background: #efefef;
    width: 120px;
    padding: 10px 0;
    border-radius: 30px;
    transition: all .25s;
  } */
.toggle_container.active {
  background: #e9ffef;
}
.number_border {
  height: 2.5rem;
  border-right: none;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.number_border_color {
  border: 1px solid #e27253 !important;
  background: #fffaf9 !important;
  box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.04);
}

/* @media screen and (max-width: 1400px) {
    .scale-up {
      transform: scale(0.90);
    }
  }
  @media screen and (max-width: 1240px) {
    .scale-up {
      transform: scale(0.85);
      margin-left: 2px;
    }
  }
  @media screen and (max-width: 600px) {
    #main-content {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
      margin-top: -9rem;
    }
  } */
</style>
