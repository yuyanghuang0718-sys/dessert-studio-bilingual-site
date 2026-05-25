import gardenCake from '../assets/product-garden-cake.svg';
import caramelTart from '../assets/product-caramel-tart.svg';
import berryBox from '../assets/product-berry-box.svg';
import petitFours from '../assets/product-petit-fours.svg';

export const products = [
  {
    id: 'garden-cream-cake',
    image: gardenCake,
    price: 'NT$1,280',
    name: {
      zh: '花園鮮奶油蛋糕',
      en: 'Garden Cream Cake',
    },
    description: {
      zh: '柔和霧粉花飾、季節水果與輕盈鮮奶油，適合生日與小型慶祝。',
      en: 'Soft blush floral details, seasonal fruit, and airy cream for birthdays and intimate celebrations.',
    },
  },
  {
    id: 'caramel-vanilla-custard-tart',
    image: caramelTart,
    price: 'NT$880',
    name: {
      zh: '焦糖香草布丁塔',
      en: 'Caramel Vanilla Custard Tart',
    },
    description: {
      zh: '酥脆塔皮搭配香草布丁餡與焦糖光澤，口感細緻不過甜。',
      en: 'Crisp tart shell with vanilla custard and a polished caramel finish, delicate and lightly sweet.',
    },
  },
  {
    id: 'seasonal-berry-gift-box',
    image: berryBox,
    price: 'NT$1,080',
    name: {
      zh: '季節莓果禮盒',
      en: 'Seasonal Berry Gift Box',
    },
    description: {
      zh: '以莓果酸香、奶油香氣與小份量甜點組合，適合送禮與下午茶。',
      en: 'A gift-ready selection of berry notes, cream aromas, and petite desserts for tea time.',
    },
  },
  {
    id: 'handmade-french-petit-fours',
    image: petitFours,
    price: 'NT$720',
    name: {
      zh: '手工法式小點',
      en: 'Handmade French Petit Fours',
    },
    description: {
      zh: '迷你瑪德蓮、達克瓦茲與奶油小塔，以低彩度色系呈現精緻口感。',
      en: 'Mini madeleines, dacquoise, and cream tartlets in a muted palette with refined textures.',
    },
  },
];
