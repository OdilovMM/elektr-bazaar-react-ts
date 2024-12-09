import { nanoid } from 'nanoid';
import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa';

const sublinks = [
  {
    pageId: nanoid(),
    page: 'Fashion',
    url: 'fashion',
    links: [
      {
        id: nanoid(),
        label: 'men',
        icon: <FaAccusoft />,
        url: '/fashion/men',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'women',
        icon: <Fa500Px />,
        url: '/about/resume',
        element: <h1>element</h1>,
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'electronics',
    url: 'services',
    links: [
      {
        id: nanoid(),
        label: 'mobiles',
        icon: <FaAvianex />,
        url: '/services/landing-page',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'laptops',
        icon: <FaBitcoin />,
        url: '/services/e-commerce',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'smart watches',
        icon: <FaBtc />,
        url: '/services/crm-pos',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'cameras',
        icon: <FaCodiepie />,
        url: '/services/corporate',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'gadgets',
        icon: <FaCodiepie />,
        url: '/services/blogs',
        element: <h1>element</h1>,
      },
    ],
  },
  {
    page: 'Footwear',
    pageId: nanoid(),
    url: 'fashion',
    links: [
      {
        id: nanoid(),
        label: 'men',
        icon: <FaDocker />,
        url: '/contact/customer-review',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'women',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'kids',
        icon: <FaGithubSquare />,
        url: '/contact/email-',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'girls',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
    ],
  },
  {
    page: 'groceries',
    pageId: nanoid(),
    url: 'contact',
    links: [
      {
        id: nanoid(),
        label: 'fruits',
        icon: <FaDocker />,
        url: '/contact/customer-review',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'vegetables',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
    ],
  },
  {
    page: 'beauty',
    pageId: nanoid(),
    url: 'contact',
    links: [
      {
        id: nanoid(),
        label: 'face care',
        icon: <FaDocker />,
        url: '/contact/customer-review',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'skin care',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'hair',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
    ],
  },
  {
    page: 'sports',
    pageId: nanoid(),
    url: 'contact',
    links: [
      {
        id: nanoid(),
        label: 'indoors',
        icon: <FaDocker />,
        url: '/contact/customer-review',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'outdoors',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'running',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
      {
        id: nanoid(),
        label: 'diet',
        icon: <FaGithubSquare />,
        url: '/contact/email-inquiry',
        element: <h1>element</h1>,
      },
    ],
  },
];

export default sublinks;
