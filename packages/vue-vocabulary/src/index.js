/**
 * Fragile magic. Do not touch.
 *
 * Just kidding, this file is autogenerated and changes will be overwritten on
 * the next build. To make changes, edit [library/build.js].
 */

import SlotRenderer from './utils/SlotRenderer/SlotRenderer'

import Tabs from './layouts/Tabs/Tabs'
import Tab from './layouts/Tabs/Tab'
import Table from './layouts/Table/Table'
import TableCell from './layouts/Table/TableCell'

import VButton from './elements/VButton/VButton'
import DonateButton from './elements/DonateButton/DonateButton'
import VRadio from './elements/VRadio/VRadio'
import VCheckbox from './elements/VCheckbox/VCheckbox'

import Footer from './patterns/Footer/Footer'
import Header from './patterns/Header/Header'
import Locale from './patterns/Locale/Locale'
import AppModal from './patterns/AppModal/AppModal'

// Export individual components
export {
  SlotRenderer,

  Tabs,
  Tab,
  Table,
  TableCell,

  VButton,
  DonateButton,
  VRadio,
  VCheckbox,

  Footer,
  Header,
  Locale,
  AppModal
}

// Export as plugin
export default {
  install: function (Vue) {
    Vue.component('SlotRenderer', SlotRenderer)

    Vue.component('Tabs', Tabs)
    Vue.component('Tab', Tab)
    Vue.component('Table', Table)
    Vue.component('TableCell', TableCell)

    Vue.component('VButton', VButton)
    Vue.component('DonateButton', DonateButton)
    Vue.component('VRadio', VRadio)
    Vue.component('VCheckbox', VCheckbox)

    Vue.component('Footer', Footer)
    Vue.component('Header', Header)
    Vue.component('Locale', Locale)
    Vue.component('AppModal', AppModal)
  }
}
