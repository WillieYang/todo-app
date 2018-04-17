import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import enLocale from 'element-ui/lib/locale/lang/en';
import cnLocale from 'element-ui/lib/locale/lang/zh-CN';
import cnI18n from './data/cn.json';
import enI18n from './data/en.json';

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

const cn = Object.assign(cnI18n, cnLocale);

const en = Object.assign(enI18n, enLocale);

const messages = { cn, en };

const i18n = new VueI18n({
  locale,
  dateTimeFormats,
  messages,
});

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});

export default i18n;
