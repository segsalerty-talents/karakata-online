<template>
  <div v-if="showPage" :class="{bg_trans: showInt}" class="body-width relative">
    <ShowInteraction @close="closeIntBox" v-if="showInt" :SalesInt='currentInt' />
     <c-flex align="left" mt="4%" ml="5%" direction="column">
            <c-flex w="80%" ml="4%" align="center" direction="row" justify="space-between">
              <c-text fontSize="4xl" class="bolded" >{{ routerlink }}</c-text>
              <c-input variant="outline" placeholder="Search.." w="35%" size="lg" />
              <c-flex align="center" justify="space-around"  w="20%"  direction="row">
                <c-image
                  rounded="full"
                  h="50px"
                  w="50px"
                  src="https://bit.ly/chakra-jonathan-bakebwa"
                  alt="Jonathan Bakebwa"
                  />
                  <c-text>Hi {{ username }}</c-text>
                  <c-icon name="triangle-down" />
              </c-flex>
            </c-flex>
          <div>
          <c-button justify="left" bg="white" border="1px" borderRadius="lg" borderColor="gray.200" ml="4%" mt="1%" py="2%" px="3%">
            <img :src="require('@/assets/img/filter.svg')" class="margin-right" />
            Filters</c-button>
          </div>
        <!-- The transaction content and other details -->
          <Table variant="simple" color={textColor} class="styled-table">
            <Thead>
              <Tr size="lg" font-size="23px" color="gray.400" height="70px">
                <Th color="gray.400" fontSize="4xl">
                  <c-text fontSize="lg">Date and Time Lead were created</c-text>
                </Th>
                <Th color="gray.400"><c-text fontSize="lg">Number</c-text></Th>
                <Th color="gray.400"><c-text fontSize="lg">Total Purchase</c-text></Th>
                <Th color="gray.400"><c-text fontSize="lg">Current Segment</c-text></Th>
                <Th><c-text fontSize="lg">Interactions</c-text></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr v-for='(sale, index) in salesdata' :key= 'index' :class='{table_row: !showInt}' height="60px">
                <Td>
                  {{ (new Date(sale.dateandtime).getFullYear().toString().substring(2)).toString().padStart(2, '0')}}
                  -{{ (new Date(sale.dateandtime).getMonth() + 1).toString().padStart(2, '0') }}
                  -{{ new Date(sale.dateandtime).getUTCDate().toString().padStart(2, '0')}}

                  {{ new Date(sale.dateandtime).getUTCHours().toString().padStart(2, '0')}} :
                  {{ new Date(sale.dateandtime).getUTCMinutes().toString().padStart(2, '0') + 'pm'}}
                </Td>
                <Td>
                  {{ sale.number.replace(/\d{7} (\d{7})/, ' *******$1 ') }}
                </Td>
                <Td>
                  {{ sale.total_purchase }}
                </Td>
                <Td :class='`${sale.current_segment}`'>
                  {{ sale.current_segment }}
                </Td>
                <Td class="view-btn">
                  <button @click="checkSalesDetails(sale.id)"> View </button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
    </c-flex>
  </div>
  <div v-else><c-text fontSize="2xl" py="10" px="4">oops, this page is not available on small screens, please switch to a bigger resolution</c-text></div>
</template>

<script>
import salesdetail from '@/data/salesdetails'
import { CText } from '@chakra-ui/vue'
import ShowInteraction from '@/components/interaction_details'
export default {
  components: {
    ShowInteraction
  },
  data () {
    return {
      screenWidth: window.innerWidth,
      showPage: false,
      username: 'Glory',
      salesdata: salesdetail,
      showInt: false,
      // I was thinking the page header should be from the URL because it won't be the same for every page
      routerlink: 'Customers and Leads',
      currentInt: []
    }
  },
  methods: {
    checkSalesDetails (value) {
      this.showInt = true
      this.currentInt = this.salesdata.find(element => element.id === value)
    },
    closeIntBox (value) {
      this.showInt = value
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
<style>
  .bg_trans {
    position: absolute;
    max-width: 1400px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  table {
    font-style: Lato;
    width: 85%;
    height: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1.15em;
    font-family: sans-serif;
    min-width: 400px;
  }
  .styled-table Th {
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }
  .styled-table Th, .styled-table Td {
    padding-left: 30px;
  }
  .table_row {
    border: none;
  }
  .table_row:nth-child(even) {
    background: #FFFAF9;
  }
  .bolded {
    font-weight: 700;
  }
  .margin-right {
    margin-right: 25px;
  }
  .Paid {
    color: #14E71D;
  }
  .Pending {
    color: #F3DF2D;
  }
  .Canceled {
    color: #FA1D1D;
  }
  .view-btn {
    color: #E27253;
  }
</style>
