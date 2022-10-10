<template>
  <c-box
    w="100%"
    pl="4"
    pr="4">
    <c-stack>
      <c-text fontSize="4xl">Segmentation</c-text>
    </c-stack>
    <c-box mt="8">
      <c-button-group spacing="4">
        <c-button
          color="#393939"
          bg="transparent"
          border=" 1px solid #9E9E9E"
          borderRadius="20"
          fontWeight="400">
          <i style="padding-right: 6px;"><SettingIcon /></i>
          Segments
        </c-button>
        <c-button variant-color="blue" variant="outline">
          Button
        </c-button>
      </c-button-group>
    </c-box>
    <c-flex :direction="{base: 'column', md: 'row'}">
      <!-- <c-box width="100%">
        <c-box
          pb="4"
          border-bottom="1px solid rgba(130, 134, 154, 0.51)">
          <c-heading as="h3" size="md">Phone Number</c-heading>
        </c-box>
        <c-box mt="5">
          <c-checkbox-group variant-color="blue" :default-value="['naruto', 'kakashi']">
            <c-checkbox
              :is-checked="allChecked"
              :is-indeterminate="isIndeterminate"
              @change="(val, $e) => { checkedItems = [$e.target.checked, $e.target.checked] }"
            ><c-heading as="h3" size="sm">Select all</c-heading></c-checkbox>
              <c-checkbox
                v-for="(d,i) in 4"
                :key="i"
                :is-checked="checkedItems[i]"
                @change="(val, $e) => { checkedItems = [$e.target.checked, checkedItems[i]] }"
              >+234 9047738232</c-checkbox>
          </c-checkbox-group>
        </c-box>
      </c-box> -->
      <!-- <c-box width="100%" :mt="{base: '20px', md: 0}">
      <c-box
        pb="4"
        border-bottom="1px solid rgba(130, 134, 154, 0.51)">
        <c-heading
          as="h3"
          size="md"
          text-align="left"
        >
        Message
        </c-heading>
      </c-box>
      <c-box mt="5">
          <c-flex :max-width="{base: '100%', md: '80%', xl: '50%'}" justify="space-between">
            <c-heading as="h4" size="sm">Input Message</c-heading>
            <c-link>view template</c-link>
          </c-flex>
          <c-box :max-width="{base: '100%', md: '80%', xl: '50%'}" mt="5px">
           <c-textarea is-invalid placeholder="Here is a sample placeholder" />
           <c-button
              size="lg"
              color="#FFFFFF"
              border-radius="16px"
              bg="#E27253;"
              border="1px"
              border-color="#E27253"
              mt="4"
              width="100%"
              :hover="{bg: '#E27253', opacity: .8}"
            >
            Send message
          </c-button>
          </c-box>
        </c-box>
      </c-box> -->
    </c-flex>
  </c-box>
</template>

<script>
import SettingIcon from '@/components/svg/SettingIcon'
export default {
  components: {
    SettingIcon
  },
  data () {
    return {
      checkedItems: [false, false]
    }
  },
  computed: {
    allChecked () {
      return this.checkedItems.every(Boolean)
    },
    isIndeterminate () {
      return this.checkedItems.some(Boolean) && !this.allChecked
    }
  }
}
</script>
