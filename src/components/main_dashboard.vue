<template>
  <div id="main" class="scale-up relative">
     <c-flex align="left" mt="4%" ml="5%" direction="column">
          <!-- Main content of the page -->
          <c-flex ml="-13%" :direction="{base: 'column', md: 'row'}" justify="center" align="center" mt="1%">
            <div id="main-content">
              <!-- <c-flex :direction="{base: 'column', md: 'row'}" justify="center" align="center"> -->
                <c-box>
                  <c-button px="9%" py="10%" justify="left" bg="white" border="1px" borderRadius="lg" borderColor="gray.200" mt="1%"><c-text fontSize="4xl" mr="4%" class="primary_color">{{ salesinvoice.newCustomers }}</c-text> new customers added</c-button>
                </c-box>
                <br v-if="!showPage" />
                <c-box>
                  <c-button px="9%" py="10%" justify="left" bg="white" border="1px" borderRadius="lg" borderColor="gray.200" mt="1%"><c-text fontSize="4xl" mr="4%" class="primary_color">{{ salesinvoice.confirmedSales }}</c-text> confirmed sales today</c-button>
                </c-box>
                <br v-if="!showPage" />
                <c-box>
                  <c-button px="9%" py="10%" justify="left" bg="white" border="1px" borderRadius="lg" borderColor="gray.200" mt="1%"><c-text fontSize="4xl" mr="4%" class="primary_color">{{ salesinvoice.followupSales }}</c-text> followed up sales today</c-button>
                </c-box>
              <!-- </c-flex> -->
        <!-- Generate Invoice Section -->
              <c-box class="invoice-gen">
              <c-text
                fontSize="3xl"
                class="bolded"
              >Found a new lead?</c-text>
                <c-flex
                  :direction="{base: 'column', md: 'row'}"
                  :align="{base: 'flex-start', md: 'center'}"
                  justify="space-between"
                >
              <!-- Number to send invoice -->
                <c-flex direction="column" align="start" justify="center">
                  <c-text class="secondary_color" mb="3">Paste Customer Whatsapp Number</c-text>
                  <c-flex direction="row" justify="center" align="center" w="290px">
                  <vue-country-code
                    @onSelect= "onSelect"
                    :enabledCountryCode= 'true'
                    :preferredCountries= "['ng', 'us', 'gb']"
                    class= "number_border number_border_color"
                    >
                  </vue-country-code>
                  <c-input placeholder="Enter the client No" size="md" borderLeft="none" roundedLeft="0" ml="-1" class="number_border_color" />
                  </c-flex>
                </c-flex>
                  <c-box
                    w="370px"
                  >
                    <c-flex
                      direction="row"
                      align="center"
                      justify="space-around"
                      mt="10"
                    >
                      <c-flex direction="row">
                        <img :src="require('@/assets/img/social-icons/instagram-logo.svg')" class="mr-4" />
                        <div :class="{'active': instagram}" class="toggle_container" @click="triggerEvent('instagram')">
                          <Toggle id="event_handle" />
                        </div>
                      </c-flex>
                      <c-flex direction="row">
                        <img :src="require('@/assets/img/social-icons/facebook-logo.svg')" class="mr-4" />
                        <div :class="{'active': facebook}" class="toggle_container" @click="triggerEvent('facebook')">
                          <Toggle id="event_handle" />
                        </div>
                      </c-flex>
                      <c-flex direction="row">
                        <img :src="require('@/assets/img/social-icons/whatsapp.svg')" class="mr-4" />
                        <div :class="{'active': whatsapp}" class="toggle_container" @click="triggerEvent('whatsapp')" >
                          <Toggle id="event_handle" />
                        </div>
                      </c-flex>
                    </c-flex>
                  </c-box>
                </c-flex>
                <c-flex
                  :direction="{base: 'column', md: 'row'}"
                  align="flex-start"
                  justify="flex-start"
                >
            <!-- Input invoice fields -->
                  <c-box h="450px" w="360px" overflow="hidden">
                    <c-flex direction="column" align="start" justify="start">
                      <c-flex direction="row" justify="space-between" align="center" w="290px" mb="2" mt="4">
                        <c-text class="secondary_color" fontSize="lg">Paste order summary</c-text>
                        <c-text class="primary_color bolded" fontSize="sm" cursor="pointer"><a>view templates</a></c-text>
                      </c-flex>
                      <textarea placeholder="Enter your summary here" class="number_border_color textarea" />
                      <c-button w="290px" mt="4" py="8" class="primary_bg_color" color="white">Generate smart invoice</c-button>
                    </c-flex>
                  </c-box>
            <!-- Invoice Generator -->
                  <c-box h="450px" mt="6" overflow="hidden">
                    <c-flex direction="column" justify="center" align="center">
                      <img :src="require('@/assets/img/invoiceTemplate.svg')" />
                      <c-flex w="100%" justify="space-around">
                        <c-button w="40%" class="primary_bg_color" color="white">Ok</c-button>
                        <c-button bg="white" w="40%" class="number_border_color" color="black">Clear</c-button>
                      </c-flex>
                    </c-flex>
                  </c-box>
                </c-flex>
              </c-box>
        <!-- Customer Invoice -->
              <c-box
               h="450px"
               overflow-x="hidden"
               overflow-y="scroll"
               class="invoice"
               borderLeft="1px"
               borderColor="gray.200"
               >

                <c-text
                  class="bolded"
                  fontSize="2xl"
                  is-truncated
                  pl="4"
                >Invoice info</c-text>
                <c-flex
                  direction="column"
                  align="flex-start"
                  justify="space-between"
                  class="interactions"
                  pl="4"
                  v-for="(sale, index) in salesinvoice.invoiceInfo"
                  :key="index"
                >
                  <div>
                  </div>
                  <div class="flex flex-row justify-between items-center">
                    <c-text
                      class="bolded"
                      py="4"
                      fontSize="lg"
                      is-truncated
                      >{{ sale.header }}</c-text
                    >
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
    </c-flex>
  </div>
  <!-- <div v-else><c-text fontSize="2xl" py="10" px="4">oops, this page is not available on small screens, please switch to a bigger resolution</c-text></div> -->
</template>

<script>
import salesInvoice from '@/data/sales_invoice'
import { CText, CGrid, CGridItem } from '@chakra-ui/vue'
import Toggle from '@/components/toggle'
// import ShowInteraction from '@/components/interaction_details'
export default {
  components: {
    Toggle
  },
  data () {
    return {
      screenWidth: window.innerWidth,
      showPage: false,
      username: 'Glory',
      salesinvoice: salesInvoice,
      showInt: false,
      // I was thinking the page header should be from the URL because it won't be the same for every page
      routerlink: 'Dashboard',
      currentInt: [],
      // To get the country selected
      countryCode: Object,
      // Active social media
      instagram: false,
      facebook: false,
      whatsapp: true
    }
  },
  methods: {
    triggerEvent (newValue) {
      if (newValue === 'whatsapp') {
        this.whatsapp = true
        this.facebook = false
        this.instagram = false
      } else if (newValue === 'facebook') {
        this.whatsapp = false
        this.facebook = true
        this.instagram = false
      } else if (newValue === 'instagram') {
        this.whatsapp = false
        this.facebook = false
        this.instagram = true
      }
    },
    onSelect ({ name, iso2, dialCode }) {
      this.countryCode = {
        name,
        iso2,
        dialCode
      }
      console.log(this.countryCode)
    }
  },
  created () {
    if (window.innerWidth > 798) {
      this.showPage = true
    } else {
      this.showPage = false
    }
  }
}
</script>
<style scoped>
  .primary_color {
    color: #E27253;
  }
  .secondary_color {
    color: #999999;
  }
  .primary_bg_color {
    background: #E27253;
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
  #main-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
  .invoice-gen {
    grid-column: 1 / span 2;
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
    color: #FFFAF9;
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
  .textarea {
    height: 260px;
    width: 290px;
    padding: 7px 12px;
    border-radius: 7px;
    outline-color: #E27253;
  }
  .number_border {
    height: 2.5rem;
    border-right: none;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .number_border_color{
    border: 1px solid #E27253 !important;
    background: #FFFAF9 !important;
    box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.04);
  }

  @media screen and (max-width: 1400px) {
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
  }
</style>
