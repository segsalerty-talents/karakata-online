<template>
  <c-box width="100%" mr="1" mb="1">
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939"
          >Business kind</c-form-label
        >
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Business sales channel</c-form-label>
        <c-select
          placeholder="Select Channels"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        >
          <option value="grilled">POS</option>
          <option value="pub-style">Bank Transfer</option>
        </c-select>
      </c-form-control>
      </c-flex>
      <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939"
          >Business avg existing customers</c-form-label
        >
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939"
          >Business avg sales per month</c-form-label
        >
        <c-select
          placeholder="Select range"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        >
          <option>10,000 - 20,000</option>
          <option>20,000 - 30,000</option>
          <option>30,000 - 40,000</option>
          <option>40,000 - 50,000</option>
          <option>50,000 - 60,000</option>
          <option>60,000 - 70,000</option>
          <option>70,000 - 80,000</option>
          <option>80,000 - 90,000</option>
          <option>90,000 - 100,000</option>
        </c-select>
      </c-form-control>
      </c-flex>
      <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Business employee count</c-form-label>
        <c-select
          placeholder="Select range"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        >
          <option>5 - 10</option>
          <option>10 - 15</option>
          <option>15 - 20</option>
          <option>20 - 25</option>
          <option>25 - 30</option>
          <option>30 - 40</option>
          <option>40 - 50</option>
        </c-select>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Contact designation</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      </c-flex>
      <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Contact name</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Contact telephone</c-form-label>
        <c-input-group>
          <c-input-left-addon
            border-color="#999999"
            box-shadow="0 0 0 0 #E27253"
            bg="#FFFAF9"
            >+234</c-input-left-addon
          >
          <c-input
            type="tel"
            roundedLeft="0"
            placeholder="phone number"
            border-radius="7"
            border-color="#999999"
            box-shadow="0 0 0 0 #E27253"
            bg="#FFFAF9"
          />
        </c-input-group>
      </c-form-control>
    </c-flex>
    <c-text as="p" color="#393939">
      By setting up, you agree to our <c-box as="span" fontWeight="bold">Terms Use</c-box> and <c-box as="span" fontWeight="bold">Privacy Policy</c-box>
    </c-text>
    <c-box w="100%" mt="8">
      <c-button
        w="100%"
        size="lg"
        color="#FFFFFF"
        border-radius="8px"
        bg="#E27253;"
        border="1px"
        :_hover="{bg: '#E27253'}"
        :_focus="{boxShadow: 'none'}"
        :_active="{bg: '#E27253'}"
        border-color="#E27253" @click="$router.push({name: 'sign-in'})"
      >
        Set up
      </c-button>
    </c-box>
  </c-box>
</template>
