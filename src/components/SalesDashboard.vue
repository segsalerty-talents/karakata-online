<template>
  <div class="w-full p-5 overflow-x-scroll">
    <c-flex align="left" direction="column">
      <div class="absolute right-8 md:right-20">
        <c-button
          justify="left"
          bg="white"
          border="1px"
          borderRadius="lg"
          borderColor="gray.200"
          class="px-20 rounded-2xl"
        >
          <img :src="require('@/assets/img/filter.svg')" class="margin-right" />
          Filters</c-button
        >
      </div>
      <!-- The transaction content and other details -->
      <Table variant="simple" color="{textColor}" class="styled-table md:w-full text-xs overflow-x-scroll md:text-sm xl:text-base w-900 mt-10">
        <Thead>
          <Tr color="gray.400" height="70px">
            <Th color="gray.400">
              <c-text>Date and Time</c-text>
            </Th>
            <Th color="gray.400"><c-text>Number</c-text></Th>
            <Th color="gray.400"><c-text>Invoice Number</c-text></Th>
            <Th color="gray.400"
              ><c-text>Amount</c-text></Th
            >
            <Th color="gray.400"
              ><c-text>Current Segment</c-text></Th
            >
            <Th><c-text>More</c-text></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr
            v-for="(sale, index) in salesdata"
            :key="index"
            :class="{ table_row: !showInt }"
            height="60px"
          >
            <Td>
              {{
                new Date(sale.dateandtime)
                  .getFullYear()
                  .toString()
                  .substring(2)
                  .toString()
                  .padStart(2, "0")
              }}-{{
                (new Date(sale.dateandtime).getMonth() + 1)
                  .toString()
                  .padStart(2, "0")
              }}-{{
                new Date(sale.dateandtime)
                  .getUTCDate()
                  .toString()
                  .padStart(2, "0")
              }}

              {{
                new Date(sale.dateandtime)
                  .getUTCHours()
                  .toString()
                  .padStart(2, "0")
              }}
              :
              {{
                new Date(sale.dateandtime)
                  .getUTCMinutes()
                  .toString()
                  .padStart(2, "0") + "pm"
              }}
            </Td>
            <Td>
              {{ sale.number.substr(0, 7).match(/.{1,4}/g).join(' ') }}***{{ sale.number.substr(10) }}
            </Td>
            <Td>
              {{ sale.invoice_number }}
            </Td>
            <Td>
              {{ sale.total_purchase }}
            </Td>
            <Td :class="`${sale.current_segment}`">
              {{ sale.current_segment }}
            </Td>
            <Td class="view-btn">
              <button @click="checkSalesDetails(sale.invoice_number)">View</button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </c-flex>
  </div>
</template>

<script>
import salesdetail from '@/data/salesdetails'
import { CText } from '@chakra-ui/vue'
export default {
  components: {
  },
  data () {
    return {
      screenWidth: window.innerWidth,
      showPage: false,
      username: 'Glory',
      salesdata: salesdetail,
      showInt: false,
      currentInt: []
    }
  },
  methods: {
    checkSalesDetails (value) {
      this.$router.push({ name: 'salesdetails', params: { invoicenumber: value } })
    },
    closeIntBox (value) {
      this.showInt = value
    }
  }
}
</script>
<style>
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
.styled-table Th,
.styled-table Td {
  padding-left: 30px;
}
.table_row {
  border: none;
}
.table_row:nth-child(even) {
  background: #fffaf9;
}
.bolded {
  font-weight: 700;
}
.margin-right {
  margin-right: 25px;
}
.Paid {
  color: #2BB826;
}
.Pending {
  color: #FA8F21;
}
.Canceled {
  color: #FF1000;
}
.view-btn {
  color: #e27253;
}
</style>
