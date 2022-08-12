<template>
  <c-box w="full" px="4">
    <c-box
      :display="{ md: 'flex' }"
      :align="{ lg: 'start' }"
      justify="space-between"
      my="8"
    >
      <c-box flexBasis="50%" mb="8">
        <c-box pb="4" border-bottom="1px solid rgba(130, 134, 154, 0.51)">
          <c-heading as="h3" size="md">Categories</c-heading>
        </c-box>
        <c-box
          mt="8"
          border="1px solid rgba(130, 134, 154, 0.51)"
          :mr="{ md: '8' }"
        >
          <c-list styleType="none">
            <c-list-item
              p="3"
              color="#373737"
              fontWeight="bold"
              v-for="(list, index) in lists"
              :key="index"
              @click="selectedIndex(index)"
              :class="active === index ? '#373737' : ''"
              :bg="active === index ? '#E27253' : ''"
              >{{ list }}</c-list-item
            >
          </c-list>
        </c-box>
      </c-box>
      <c-box flexBasis="50%">
        <c-box pb="4" border-bottom="1px solid rgba(130, 134, 154, 0.51)">
          <c-heading as="h3" size="md">Configuration</c-heading>
        </c-box>
        <c-box mt="8">
          <c-text color="#999999" fontSize="18" fontWeight="bold" mb="6"
            >Timing</c-text
          >
          <c-button
            w="full"
            bg="#ffffff"
            color="#999999"
            :font-size="['14px', '16px']"
            border-radius="10"
            border="1px"
            border-color="#E27253"
            :_hover="{
              bg: '#E27253',
              borderColor: '#ffffff',
              color: '#ffffff'
            }"
            :_focus="{
              bg: '#E27253',
              borderColor: '#ffffff',
              color: '#ffffff'
            }"
            variant-color="#E27253"
            size="md"
            p="6"
          >
            After Order
          </c-button>
          <c-box mt="8">
            <c-flex justify="space-between" align="center">
              <c-text color="#999999" fontSize="18" fontWeight="bold"
                >Message</c-text
              >
              <c-text textTransform="capitalize" color="#E27253"
                >view template</c-text
              >
            </c-flex>
            <c-form-control>
              <c-textarea
                h="200px"
                box-shadow="md"
                background-color="#FFFAF9"
                focus-border-color="#E27253"
                border-color="#E27253"
                border-radius="10"
                mt="4"
                p="3"
                :_hover="{ boxShadow: 'sm' }"
                :_focus="{ background: '#ffffff' }"
              />
            </c-form-control>
            <c-button
              bg="#E27253"
              color="#ffffff"
              fontSize="18px"
              mt="4"
              w="full"
              :font-size="['14px', '18px']"
              box-shadow="xl"
              border-radius="10"
              border="1px"
              border-color="#E27253"
              :_hover="{
                bg: '#ffffff',
                borderColor: '#E27253',
                color: '#E27253'
              }"
              :_focus="{
                bg: '#ffffff',
                borderColor: '#E27253',
                color: '#E27253'
              }"
              variant-color="#E27253"
              size="md"
              p="8"
            >
              Set
            </c-button>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
    <c-box my="10">
      <c-box pb="4" border-bottom="1px solid rgba(130, 134, 154, 0.51)" mb="10">
        <c-heading as="h3" size="md">Payment method</c-heading>
      </c-box>
      <c-box :display="{ md: 'flex' }" flex-direction="row">
        <c-box>
          <c-button
            @click="addPayment"
            bg="#ffffff"
            color="gray.500"
            :font-size="['14px', '16px']"
            :w="['full', 'auto']"
            border-radius="10"
            border="1px"
            border-color="#E27253"
            :_hover="{
              bg: '#E27253',
              borderColor: '#ffffff',
              color: '#ffffff'
            }"
            :_focus="{
              bg: '#E27253',
              borderColor: '#ffffff',
              color: '#ffffff'
            }"
            variant-color="#E27253"
            size="md"
            :py="['8', '6']"
            px="6"
            :mb="['4', '2']"
          >
            <c-text pr="4">Choose Payment Method</c-text>
            <c-icon name="chevron-down" size="24px"></c-icon>
          </c-button>
          <transition name="fade">
            <c-box color="#E27253" p="4" v-if="modal">
              <c-text pb="2">PayPal</c-text>
              <c-text>Credit Card Or Debit</c-text>
            </c-box>
          </transition>
        </c-box>
        <c-box :ml="['0', '8']" align="center">
          <c-button
            mb="4"
            :w="['full', 'auto']"
            bg="#E27253"
            color="#ffffff"
            fontSize="18px"
            box-shadow="xl"
            border-radius="10"
            border="1px"
            border-color="#E27253"
            :_hover="{
              bg: '#ffffff',
              borderColor: '#E27253',
              color: '#E27253'
            }"
            :_focus="{
              bg: '#ffffff',
              borderColor: '#E27253',
              color: '#E27253'
            }"
            variant-color="#E27253"
            :py="['8', '6']"
            px="8"
          >
            <c-icon name="add" size="30px"></c-icon>
          </c-button>
          <c-text color="gray.500" fontSize="16px">Add Other Payment</c-text>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      lists: [
        'Payment reminder',
        'Thank you after purchase',
        'Found a new lead?',
        'New Products Notification',
        'Thank you after purchase',
        'Found a new lead?',
        'New Products Notification',
        'Thank you after purchase',
        'Found a new lead?',
        'New Products Notification'
      ],
      modal: false
    }
  },
  methods: {
    selectedIndex (index) {
      console.log(index)
      this.active = index
    },
    addPayment () {
      this.modal = !this.modal
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
