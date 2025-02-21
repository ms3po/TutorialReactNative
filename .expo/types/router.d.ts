/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../Tutorial/app/index`; params?: Router.UnknownInputParams; } | { pathname: `/../Tutorial/app/auth/signIn`; params?: Router.UnknownInputParams; } | { pathname: `/../Tutorial/app/auth/signUp`; params?: Router.UnknownInputParams; } | { pathname: `/../Tutorial/constant/Color`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/signIn`; params?: Router.UnknownInputParams; } | { pathname: `/auth/signUp`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/../Tutorial/app/index`; params?: Router.UnknownOutputParams; } | { pathname: `/../Tutorial/app/auth/signIn`; params?: Router.UnknownOutputParams; } | { pathname: `/../Tutorial/app/auth/signUp`; params?: Router.UnknownOutputParams; } | { pathname: `/../Tutorial/constant/Color`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/signIn`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/signUp`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/../Tutorial/app/index${`?${string}` | `#${string}` | ''}` | `/../Tutorial/app/auth/signIn${`?${string}` | `#${string}` | ''}` | `/../Tutorial/app/auth/signUp${`?${string}` | `#${string}` | ''}` | `/../Tutorial/constant/Color${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/auth/signIn${`?${string}` | `#${string}` | ''}` | `/auth/signUp${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../Tutorial/app/index`; params?: Router.UnknownInputParams; } | { pathname: `/../Tutorial/app/auth/signIn`; params?: Router.UnknownInputParams; } | { pathname: `/../Tutorial/app/auth/signUp`; params?: Router.UnknownInputParams; } | { pathname: `/../Tutorial/constant/Color`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/signIn`; params?: Router.UnknownInputParams; } | { pathname: `/auth/signUp`; params?: Router.UnknownInputParams; };
    }
  }
}
