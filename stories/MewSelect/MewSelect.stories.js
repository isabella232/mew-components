import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import MewSelect from '@/components/MewSelect/MewSelect.vue';
import ethereumIcon from '@/assets/images/icons/eth-dark-navy.svg'
import bitcoinIcon from '@/assets/images/icons/footer/btc.png'
import MewSelectDoc from './MewSelect.mdx';

export default {
  title: 'MewSelect',
  parameters: {
    component: MewSelect,
    docs: {
      page: MewSelectDoc
    } 
  },
  decorators: [withKnobs]
};

const customItemsArray = [{
  text: 'Select Token',
  imgs: [bitcoinIcon, ethereumIcon, bitcoinIcon, ethereumIcon],
  total: '1500',
  divider: true,
  selectLabel: true
},
{header: 'My Wallet'},
{ hasNoEth: true, disabled: true, text: 'Your wallet is empty.', linkText: 'Buy ETH', link: 'https://ccswap.myetherwallet.com/#/'},
{ header: 'Other Tokens'},
{ name: 'ETH', subtext: 'Ethereum', symbol: 'ETH', value: 'Ethereum', img: ethereumIcon, price: '3000'}, 
{ name: 'AAVE',  subtext: 'Aave', symbol: 'AAVE', value: 'Aave', tokenBalance: '1.34',  img: null, totalBalance: '234.3430', price: '454.000'},
{ name: 'LINK', subtext: 'Chainlink', symbol: 'LINK', value: 'Link', img: ethereumIcon, price: '3000'}]

const itemsArray = [{ text: 'Select a Token', selectLabel: true, divider: true },
{ name: 'ETH', subtext: 'Ethereum', value: 'btc', img: ethereumIcon }, { name: 'DAI', value: 'Makerdao',  subtext: 'Makerdao', img: ethereumIcon }];

export const MEWSelect = () => ({
  components: { MewSelect },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    },
    label: {
      default: text('label', 'label')
    },
    items: {
      default: object('items', itemsArray)
    },
    customItems: {
      default: object('custom-items', customItemsArray)
    },
    value: {
      default: object('value', {})
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    hasFilter: {
      default: boolean('has-filter', false)
    },
    isCustom: {
      default: boolean('is-custom', false)
    },
    loading: {
      default: boolean('loading', false)
    },
    filterPlaceholder: {
      default: text('filter-placeholder', 'Search token name')
    },
    buyMoreStr: {
      default: text('buy-more-str', '')
    },
    errorMessages: {
      default: text('error-messages', '')
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-select :loading="loading" :buy-more-str="buyMoreStr"  :error-messages="errorMessages" :is-custom="isCustom" :filter-placeholder="filterPlaceholder" :has-filter="hasFilter" :label="label" :items="isCustom ? customItems : items" :disabled="disabled" :value="value"
    />
  </div>`
});
