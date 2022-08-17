<template>
  <c-box width="100%" mr="1" mb="1">
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Business sales channel</c-form-label>
        <c-select
          placeholder="Select Channels"
          color="#999999"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        >
          <option value="grilled">POS</option>
          <option value="pub-style">Bank Transfer</option>
        </c-select>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999"
          >Business avg existing customers</c-form-label
        >
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999"
          >Business avg sales per month</c-form-label
        >
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Business employee count</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Contact designation</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Contact name</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Contact telephone</c-form-label>
        <c-input-group>
          <c-input-left-addon
            border-color="#E27253"
            box-shadow="0 0 0 0 #E27253"
            bg="#FFFAF9"
            >+234</c-input-left-addon
          >
          <c-input
            type="tel"
            roundedLeft="0"
            placeholder="phone number"
            border-radius="7"
            border-color="#E27253"
            box-shadow="0 0 0 0 #E27253"
            bg="#FFFAF9"
          />
        </c-input-group>
      </c-form-control>
      <c-flex w="100%" justify="start" ml="7.5" align="center">
        <c-button
          :width="{ base: '100%', sm: 'auto' }"
          @click="$emit('prev-stage')"
          left-icon="chevron-left"
          size="md"
          color="#FFFFFF"
          border-radius="18px"
          bg="#E27253;"
          border="1px"
          border-color="#E27253"
        >
          Previous
        </c-button>
      </c-flex>
    </c-flex>
    <c-box w="100%" mt="8">
      <c-button
        w="100%"
        size="md"
        color="#FFFFFF"
        border-radius="10px"
        bg="#E27253;"
        border="1px"
        border-color="#E27253"
      >
        Set up
      </c-button>
    </c-box>
  </c-box>
</template>
