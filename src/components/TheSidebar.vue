<template>
  <c-box
    position="fixed"
    :top="{ base: 'inherit', lg: 0 }"
    :bottom="{ base: 0, lg: 'inherit' }"
    bg="#E27253"
    :h="{ base: '60px', lg: '100vh' }"
    :w="{ base: '100%', lg: '288px' }"
    zIndex="10"
  >
    <c-flex :display="{ base: 'none', lg: 'flex' }" mt="30px" w="100%" justify="center">
      <c-image :src="require('@/assets/img/Logo2.svg')" w="120px" />
    </c-flex>
    <c-box
      :pr="{ base: '0px' }"
      :pl="{ base: '0px', lg: '15px' }"
      :mt="{ base: '0px', lg: '80px' }"
      :w="{ base: '100%' }"
      :h="{ base: '100%', lg: 'auto' }"
    >
    <c-list
      styleType="none" :display="{ base: 'flex', lg: 'block' }" w="100%" h="100%">
      <SidebarNav
        url="/admin/dashboard"
        label="Dashboard"
      >
        <template>
          <DashboardIcon/>
        </template>
      </SidebarNav>
      <SidebarNav
        url="/admin/sales"
        label="Sales">
        <template>
          <UsersIcon/>
        </template>
      </SidebarNav>
      <SidebarNav
        url="/admin/automatic-configuration"
        label="Automation Configuration">
        <template>
          <NoteIcon/>
        </template>
      </SidebarNav>
      <SidebarNav
        url="/admin/segmentation"
        label="Segmentation">
        <template>
          <NoteIcon/>
        </template>
      </SidebarNav>
        <c-list-item
          :display="{ base: 'flex', lg: 'none' }"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <c-link @click="showMenu = !showMenu">
            <c-image :src="require('@/assets/img/dots-icon.svg')" />
          </c-link>
        </c-list-item>
      </c-list>
    </c-box>
    <c-box :display="{ base: 'none', lg: 'block' }" mt="50px" pr="15px" pl="15px">
      <c-image :src="require('@/assets/img/line.svg')" />
    </c-box>
    <c-box
      :display="{ base: showMenu === true ? 'block' : 'none', lg: 'block' }"
      :position="{ base: 'absolute', lg: 'relative' }"
      right="0"
      :bottom="{ base: '60px', lg: 'auto' }"
      bg="#E27253"
      :pr="{ base: '0px' }"
      :pl="{ base: '0px', lg: '15px' }"
      :mt="{ base: '0px', lg: '50px' }"
      :w="{ base: '60px', lg: '100%' }"
      :h="{ base: '100px', lg: 'auto' }"
    >
      <c-list
        styleType="none"
        :display="{ base: 'flex', lg: 'block' }"
        justifyContent="space-around"
        flexDirection="column"
        w="100%"
        h="100%"
      >
        <SidebarNav2 url="/admin/settings" label="Settings">
          <template>
            <SettingsIcon />
          </template>
        </SidebarNav2>
        <SidebarNav2 url="/admin/support" label="Support">
          <template>
            <HelpIcon />
          </template>
        </SidebarNav2>
      </c-list>
    </c-box>
  </c-box>
</template>

<script>
import UsersIcon from '@/components/svg/Users'
import NoteIcon from '@/components/svg/NoteIcon'
import SettingsIcon from '@/components/svg/SettingsIcon'
import HelpIcon from '@/components/svg/HelpIcon'
import DashboardIcon from '@/components/svg/DashboardIcon'
import SidebarNav from '@/components/SidebarNav'
import SidebarNav2 from '@/components/SidebarNav2'
export default {
  name: 'sidebar',
  components: {
    UsersIcon,
    NoteIcon,
    SettingsIcon,
    HelpIcon,
    DashboardIcon,
    SidebarNav,
    SidebarNav2
  },
  data () {
    return {
      color: '#FFF',
      topLink: [
        {
          url: '/admin/dashboard',
          name: 'Dashboard',
          icon: require('@/assets/img/dashboard-icon.svg')
        },
        {
          url: '/admin/sales',
          name: 'Sales',
          icon: require('@/assets/img/users.svg')
        },
        {
          url: '/admin/automatic-configuration',
          name: 'Automation configuration',
          icon: require('@/assets/img/note-icon.svg')
        },
        {
          url: '/admin/segmentation',
          name: 'Segmentation',
          icon: require('@/assets/img/note-icon.svg')
        }
      ],
      bottomLink: [
        {
          url: '/admin/settings',
          name: 'Settings',
          icon: require('@/assets/img/settings-icon.svg')
        },
        {
          url: '/admin/support',
          name: 'Support',
          icon: require('@/assets/img/help-icon.svg')
        }
      ],
      showMenu: false
    }
  },
  created () {
    // this.color = this.route.path =
  },
  methods: {
    switchColor () {
      this.color = '#C16951'
    }
  }
}
</script>
