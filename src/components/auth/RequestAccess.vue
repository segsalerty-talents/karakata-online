<template>
  <c-box width="100%" mr="1" mb="1">
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Business name</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Business telephone</c-form-label>
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
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Business address</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Business state</c-form-label>
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
        <c-form-label for="fname" color="#999999">Business country</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999"
          >Business month of establishment</c-form-label
        >
        <c-select
          placeholder="Select Month"
          color="#999999"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        >
          <option value="grilled">01</option>
          <option value="pub-style">02</option>
          <option value="jucy-lucy">03</option>
        </c-select>
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999"
          >Business year of establishment</c-form-label
        >
        <c-select
          placeholder="Select Year"
          color="#999999"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        >
          <option value="grilled">2019</option>
          <option value="pub-style">2021</option>
          <option value="jucy-lucy">2022</option>
        </c-select>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#999999">Business kind</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#E27253"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control>
    </c-flex>
    <c-flex justify="center" mt="8">
      <c-button
        @click="$emit('next-stage')"
        right-icon="arrow-forward"
        size="md"
        color="#FFFFFF"
        border-radius="18px"
        bg="#E27253"
        border="1px"
        border-color="#E27253"
        :_hover="{bg: '#E27253'}"
        :_focus="{boxShadow: 'none'}"
        :_active="{bg: '#E27253'}"
      >
        Next
      </c-button>
    </c-flex>
  </c-box>
</template>
