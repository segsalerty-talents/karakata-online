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
          border="1px solid #9E9E9E"
          borderRadius="20"
          fontWeight="400"
          :_hover="{opacity: 0.8}">
          <i style="padding-right: 6px;"><SettingIcon /></i>
          Segments
        </c-button>
        <c-button
          bg="#E27253"
          color="#FFF"
          :_hover="{opacity: 0.8}"
          borderRadius="8">
          All Segments
        </c-button>
      </c-button-group>
    </c-box>
    <c-flex :direction="{base: 'column', md: 'row'}">
      <c-box width="100%">
        <c-box
          mt="5"
          border="1px solid #9E9E9E"
          p="5"
          borderRadius="5"
          height="500px"
          overflow="auto">
          <c-checkbox-group variant-color="blue" :default-value="['naruto', 'kakashi']">
            <c-checkbox
              :is-checked="allChecked"
              :is-indeterminate="isIndeterminate"
              @change="(val, $e) => { checkedItems = [$e.target.checked, $e.target.checked] }"
            ><c-heading as="h3" size="sm">Select all</c-heading></c-checkbox>
              <c-checkbox
                v-for="(d,i) in 40"
                :key="i"
                :is-checked="checkedItems[i]"
                @change="(val, $e) => { checkedItems = [$e.target.checked, checkedItems[i]] }"
              >+234 9047738232</c-checkbox>
          </c-checkbox-group>
        </c-box>
      </c-box>
      <c-box
        width="100%"
        :mt="{base: '20px', md: 0}">
      <c-box mt="5"
        :ml="{base: 0 , md: 5}"
        :width="{base: '100%', md: '50%'}"
        border="1px solid #9E9E9E"
        p="5"
        borderRadius="5">
          <c-flex :max-width="{base: '100%', md: '80%', xl: '100%'}" justify="space-between">
            <c-heading as="h4" size="sm">Input Message</c-heading>
            <c-link>view template</c-link>
          </c-flex>
          <c-box :max-width="{base: '100%', md: '80%', xl: '100%'}" mt="5px">
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
      </c-box>
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
