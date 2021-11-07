import React, {FC, Fragment, PropsWithChildren} from "react";
import {IntlProvider} from "react-intl";
import {LOCALES} from "./locales";
import messages from "./messages";

export type Locales = 'en-US' | 'ru-RU';
export interface Provider extends PropsWithChildren<any> {
    locale: Locales
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Provider: FC<Provider> = props => {
    const {children, locale = LOCALES.ENGLISH} = props
    return (
        <IntlProvider
            locale={locale}
            textComponent={Fragment}
            messages={messages[locale]}
        >
            {children}
        </IntlProvider>
    )
};

export default Provider;
