<template>
  <div class="container">
    <c-stack spacing="3">
      <c-heading as="h1" size="xl" color="#393939">
        Request for access
      </c-heading>
      <c-heading as="h5" size="sm" color="#666666">
        Tell us a little about your business, let us process your access on Karakata.
      </c-heading>
    </c-stack>
    <c-flex :direction="{ base: 'column', sm: 'row' }" mt="8">
      <c-box width="100%" mr="1" mb="1">
        <c-flex mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business name</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business telephone</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
        </c-flex>
        <c-flex mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business name</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business telephone</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
        </c-flex>
        <c-flex mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business name</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business telephone</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
        </c-flex>
        <c-flex mr="-7.5" ml="-7.5" :direction="{ base: 'column', sm: 'row' }">
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business name</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
          <c-form-control mr="7.5" ml="7.5" pb="5" is-required>
            <c-form-label for="fname" color="#999999">Business telephone</c-form-label>
            <c-input id="fname" border-radius="7" border-color="#E27253" box-shadow="0 0 0 0 #E27253" bg="#FFFAF9" />
          </c-form-control>
        </c-flex>
      </c-box>
      <c-box width="100%" bg="orange.50" h="2"></c-box>
    </c-flex>
  </div>
</template>
