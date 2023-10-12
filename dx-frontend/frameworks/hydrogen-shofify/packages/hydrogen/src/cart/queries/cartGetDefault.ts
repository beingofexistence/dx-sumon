import type {CartQueryOptions} from './cart-types';
import type {
  Cart,
  CountryCode,
  LanguageCode,
} from '@shopify/hydrogen-react/storefront-api-types';

type CartGetProps = {
  /**
   * The cart ID.
   * @default cart.getCartId();
   */
  cartId?: string;
  /**
   * The country code.
   * @default storefront.i18n.country
   */
  country?: CountryCode;
  /**
   * The language code.
   * @default storefront.i18n.language
   */
  language?: LanguageCode;
  /**
   * The number of cart lines to be returned.
   * @default 100
   */
  numCartLines?: number;
};

export type CartGetFunction = (
  cartInput?: CartGetProps,
) => Promise<Cart | null>;

export function cartGetDefault(options: CartQueryOptions): CartGetFunction {
  return async (cartInput?: CartGetProps) => {
    const cartId = options.getCartId();

    if (!cartId) return null;

    const {cart} = await options.storefront.query<{cart: Cart}>(
      CART_QUERY(options.cartFragment),
      {
        variables: {
          cartId,
          ...cartInput,
        },
        cache: options.storefront.CacheNone(),
      },
    );

    return cart;
  };
}

//! @see https://shopify.dev/docs/api/storefront/latest/queries/cart
const CART_QUERY = (cartFragment = DEFAULT_CART_FRAGMENT) => `#graphql
  query CartQuery(
    $cartId: ID!
    $numCartLines: Int = 100
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartApiQuery
    }
  }

  ${cartFragment}
`;

export const DEFAULT_CART_FRAGMENT = `#graphql
  fragment CartApiQuery on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...CartApiMoney
              }
              price {
                ...CartApiMoney
              }
              requiresShipping
              title
              image {
                ...CartApiImage
              }
              product {
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...CartApiMoney
      }
      totalAmount {
        ...CartApiMoney
      }
      totalDutyAmount {
        ...CartApiMoney
      }
      totalTaxAmount {
        ...CartApiMoney
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      applicable
      code
    }
  }

  fragment CartApiMoney on MoneyV2 {
    currencyCode
    amount
  }

  fragment CartApiImage on Image {
    id
    url
    altText
    width
    height
  }
`;
