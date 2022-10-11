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
          :_hover="{opacity: 0.8}"
          @click="open"
        >
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
      <c-box :width="{base: '100%', md: '40%'}">
        <c-box
          mt="5"
          border="1px solid #9E9E9E"
          p="5"
          borderRadius="5"
          height="500px"
          overflow="auto"
          :width="{base: '100%', md: '50%'}">
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
        :width="{base: '100%', md: '50%'}"
        :mt="{base: '20px', md: 0}">
      <c-box mt="5"
        :ml="{base: 0 , md: 5}"
        :width="{base: '100%', md: '70%'}"
        border="1px solid #9E9E9E"
        p="5"
        borderRadius="5">
          <c-flex :max-width="{base: '100%', md: '80%', xl: '100%'}" justify="space-between">
            <c-heading as="h4" size="sm" fontWeight="400">Message</c-heading>
          </c-flex>
          <c-box :max-width="{base: '100%', md: '80%', xl: '100%'}" mt="5px">
           <c-textarea placeholder="Enter message" />
           <c-flex>
            <c-button
                size="md"
                color="#FFFFFF"
                border-radius="16px"
                bg="#E27253;"
                border="1px"
                border-color="#E27253"
                mt="4"
                width="80%"
                :_hover="{bg: '#E27253', opacity: .8}"
                mr="2"
              >
                Send
              </c-button>
              <c-button
                size="md"
                color="#FFFFFF"
                border-radius="16px"
                bg="#E27253;"
                border="1px"
                border-color="#E27253"
                mt="4"
                width="20%"
                :_hover="{bg: '#E27253', opacity: .8}"
              >
                <c-icon name="close" size="12px" />
              </c-button>
            </c-flex>
          </c-box>
        </c-box>
      </c-box>
    </c-flex>
    <!-- Modal -->
    <c-modal
      :is-open="isOpen"
      :on-close="close"
      size="xs"
    >
      <c-modal-content ref="content">
        <c-modal-header>Date</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <c-flex justify="space-between">
            <c-button
              bg="transparent"
              borderRadius="15"
              border="1px solid #9E9E9E"
              size="md"
              fontWeight="400"
              fontSize="14px"
              width="40%"
              :_hover="{bg: 'transparent'}"
            >
              <i><CalenderIcon /></i>
              From
            </c-button>
            <c-button
              bg="transparent"
              borderRadius="15"
              border="1px solid #9E9E9E"
              size="md"
              fontWeight="400"
              fontSize="14px"
              width="40%"
              :_hover="{bg: 'transparent'}"
            >
               <i><CalenderIcon /></i>
              To
            </c-button>
          </c-flex>
          <c-box mt="4">
            <c-text fontSize="md" fontWeight="bold">Amount</c-text>
            <c-flex justify="space-between" mt="4">
              <c-box>
                <c-form-control pr="2">
                  <c-form-label fontSize="sm">Minimum Amount</c-form-label>
                  <c-input type="email" id="email" fontSize="sm" placeholder="Input minimum" borderRadius="15" />
                </c-form-control>
              </c-box>
              <c-box>
                <c-form-control pl="2">
                  <c-form-label fontSize="sm">Maxmum Amount</c-form-label>
                  <c-input type="email" id="email" fontSize="sm" placeholder="Imput maximum" borderRadius="15" />
                </c-form-control>
              </c-box>
            </c-flex>
          </c-box>
          <c-flex pt="5" pb="8">
            <c-button
                size="md"
                color="#FFFFFF"
                border-radius="16px"
                bg="#E27253;"
                border="1px"
                border-color="#E27253"
                mt="4"
                width="80%"
                :_hover="{bg: '#E27253', opacity: .8}"
                mr="2"
              >
                Segment
              </c-button>
              <c-button
                size="md"
                color="#FFFFFF"
                border-radius="16px"
                bg="#E27253;"
                border="1px"
                border-color="#E27253"
                mt="4"
                width="20%"
                :_hover="{bg: '#E27253', opacity: .8}"
              >
                <c-icon name="close" size="12px" />
              </c-button>
          </c-flex>
        </c-modal-body>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </c-box>
</template>

<script>
import SettingIcon from '@/components/svg/SettingIcon'
import CalenderIcon from '@/components/svg/CalenderIcon'
export default {
  components: {
    SettingIcon,
    CalenderIcon
  },
  data () {
    return {
      checkedItems: [false, false],
      isOpen: false
    }
  },
  computed: {
    allChecked () {
      return this.checkedItems.every(Boolean)
    },
    isIndeterminate () {
      return this.checkedItems.some(Boolean) && !this.allChecked
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>
