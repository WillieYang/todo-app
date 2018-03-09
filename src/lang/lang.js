import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cn from './data/cn.json';
import en from './data/en.json';

Vue.use(VueI18n);

const locale = 'en';

const dateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
  'ja-JP': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    },
  },
};

const messages = { cn, en };

const i18n = new VueI18n({
  locale,
  dateTimeFormats,
  messages,
});

export default i18n;
