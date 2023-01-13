import React from 'react';
import styles from '../styles/Privacy.module.scss';
import useTranslation from 'next-translate/useTranslation';
import {URLS} from '../components/constants/urls';
import {KOIBANX_EMAILS} from '../components/constants/emails';

const PrivacyLayout = () => {
    const { t } = useTranslation();
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>{t("policies:title")}</h1>
                <h1>{t("policies:subtitle")}</h1>
            </div>
            <p>
                {t("policies:explanation.first")}
                <a href={URLS.HOME} target={"_blank"} rel="noreferrer">
                    {URLS.HOME}
                </a>
                {" "}{t("policies:explanation.second")}
            </p>
            <p>
                {t("policies:agree.description.first")}
                <i>
                    <b>{t("policies:agree.description.second")}</b>
                </i>
            </p>
            <p>{t("policies:doNotApply")}</p>
            <h2>
                <i> {t("policies:subtitles.whatCollect")}</i>
            </h2>
            <p>{t("policies:subtitles.weObtainInfo")}</p>
            <p>{t("policies:subtitles.infoProvideUs")}</p>
            <ul>
                <li>{t("policies:firstListBullets.first")}</li>
                <li>{t("policies:firstListBullets.second")}</li>
                <li>{t("policies:firstListBullets.third")}</li>
                <li>{t("policies:firstListBullets.fourth")}</li>
            </ul>
            <p>{t("policies:infoCollectedAutomatically")}</p>
            <p>{t("policies:weMayUseCookies.first")}</p>
            <p>
                {t("policies:weMayUseCookies.second")}
                <a
                    href={URLS.GOOGLE_TERMS}
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    {URLS.GOOGLE_TERMS}.
                </a>
            </p>
            <h2>
                <i>{t("policies:subtitles.usePersonalInfo.title")}</i>
            </h2>
            <p>{t("policies:subtitles.usePersonalInfo.description")}</p>
            <ul>
                <li>{t("policies:secondListBullets.first")}</li>
                <li>{t("policies:secondListBullets.second")}</li>
                <li>{t("policies:secondListBullets.third")}</li>
                <li>{t("policies:secondListBullets.fourth")}</li>
                <li>{t("policies:secondListBullets.fifth")}</li>
                <li>{t("policies:secondListBullets.sixth")}</li>
                <li>{t("policies:secondListBullets.seventh")}</li>
            </ul>
            <h2>
                <i>{t("policies:subtitles.sharePersonalInfo.title")}</i>
            </h2>
            <p>{t("policies:subtitles.sharePersonalInfo.description")}</p>
            <ul>
                <li>{t("policies:thirdListBullets.first")}</li>
                <li>{t("policies:thirdListBullets.second")}</li>
                <li>{t("policies:thirdListBullets.third.title")}</li>
                <ul className={styles.subElements}>
                    <li> - {t("policies:thirdListBullets.third.subElements.first")}</li>
                    <li> - {t("policies:thirdListBullets.third.subElements.second")}</li>
                    <li> - {t("policies:thirdListBullets.third.subElements.third")}</li>
                    <li> - {t("policies:thirdListBullets.third.subElements.fourth")}</li>
                </ul>
                <li>{t("policies:thirdListBullets.fourth")}</li>
                <li>{t("policies:thirdListBullets.fifth")}</li>
            </ul>
            <p>{t("policies:subtitles.sharePersonalInfo.otherUses")}</p>
            <h2>
                <i> {t("policies:subtitles.internationalTransfer.title")}</i>
            </h2>
            <p>{t("policies:subtitles.internationalTransfer.description.first")}</p>
            <p>{t("policies:subtitles.internationalTransfer.description.second")}</p>
            <p>{t("policies:subtitles.internationalTransfer.description.third")}</p>
            <h2>
                <i> {t("policies:subtitles.howWeProtectInfo.title")}</i>
            </h2>
            <p>{t("policies:subtitles.howWeProtectInfo.description.first")}</p>
            <p>{t("policies:subtitles.howWeProtectInfo.description.second")}</p>
            <p>{t("policies:subtitles.howWeProtectInfo.description.third")}</p>
            <h2>
                <i> {t("policies:subtitles.infoOptionAndChanges.title.first")}</i>
            </h2>
            <h2>
                <i>{t("policies:subtitles.infoOptionAndChanges.title.second")}</i>
            </h2>
            <p>
                {t("policies:subtitles.infoOptionAndChanges.description.first")}
                <a href={`mailto:${KOIBANX_EMAILS.DATA_PRIVACY}`}>{KOIBANX_EMAILS.DATA_PRIVACY}.</a>
                {t("policies:subtitles.infoOptionAndChanges.description.second")}
            </p>
            <h2>
                <i>{t("policies:subtitles.trackingTech.title")}</i>
            </h2>
            <p>{t("policies:subtitles.trackingTech.description.first")}</p>
            <p>{t("policies:subtitles.trackingTech.description.second")}</p>
            <h2>
                <i> {t("policies:subtitles.eligibilityCriteria.title")}</i>
            </h2>
            <p>{t("policies:subtitles.eligibilityCriteria.description")}</p>
            <h2>
                <i> {t("policies:subtitles.sensitiveInfo.title")}</i>
            </h2>
            <p>{t("policies:subtitles.sensitiveInfo.description")}</p>
            <h2>
                <i>{t("policies:subtitles.legalBases.title")}</i>
            </h2>
            <p>
                {t("policies:subtitles.legalBases.description")}
                <a href={`mailto:${KOIBANX_EMAILS.DATA_PRIVACY}`}>{KOIBANX_EMAILS.DATA_PRIVACY}.</a>
            </p>
            <table>
                <thead>
                <tr>
                    <th>
                        <i>{t("policies:subtitles.legalBases.table.header.purpose")}</i>
                    </th>
                    <th>
                        <i>{t("policies:subtitles.legalBases.table.header.legalBase")}</i>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {" "}
                        {t("policies:subtitles.legalBases.table.rows.first.purpose")}
                    </td>
                    <td>
                        {t("policies:subtitles.legalBases.table.rows.first.legalBase")}
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>
                                {" "}
                                {t(
                                    "policies:subtitles.legalBases.table.rows.second.purpose.first"
                                )}
                            </li>
                            <li>
                                {" "}
                                {t(
                                    "policies:subtitles.legalBases.table.rows.second.purpose.second"
                                )}
                            </li>
                            <li>
                                {t(
                                    "policies:subtitles.legalBases.table.rows.second.purpose.third"
                                )}
                            </li>
                            <li>
                                {" "}
                                {t(
                                    "policies:subtitles.legalBases.table.rows.second.purpose.fourth"
                                )}
                            </li>
                        </ul>
                    </td>

                    <td>
                        {t("policies:subtitles.legalBases.table.rows.second.legalBase")}
                    </td>
                </tr>
                <tr>
                    <td>
                        {" "}
                        {t("policies:subtitles.legalBases.table.rows.third.purpose")}
                    </td>
                    <td>
                        {t("policies:subtitles.legalBases.table.rows.third.legalBase")}
                    </td>
                </tr>
                <tr>
                    <td>
                        {" "}
                        {t("policies:subtitles.legalBases.table.rows.fourth.purpose")}
                    </td>
                    <td>
                        {t("policies:subtitles.legalBases.table.rows.fourth.legalBase")}
                        <a href={`mailto:${KOIBANX_EMAILS.DATA_PRIVACY}`}>
                            {KOIBANX_EMAILS.DATA_PRIVACY}.
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <h2> {t("policies:subtitles.newPurposes.title")}</h2>
            <p>{t("policies:subtitles.newPurposes.description")}</p>
            <h2>{t("policies:subtitles.rights.title")}</h2>
            <p>{t("policies:subtitles.rights.description.first")}</p>
            <ul className={styles.ulWithLetters}>
                <li>{t("policies:subtitles.rights.bulletList.a")}</li>
                <li>{t("policies:subtitles.rights.bulletList.b")}</li>
                <li>{t("policies:subtitles.rights.bulletList.c")}</li>
                <li>{t("policies:subtitles.rights.bulletList.d")}</li>
            </ul>
            <p>
                {t("policies:subtitles.rights.description.second")}
                <a href={`mailto:${KOIBANX_EMAILS.DATA_PRIVACY}`}>{KOIBANX_EMAILS.DATA_PRIVACY}.</a>
                {t("policies:subtitles.rights.description.third")}
                <a href={`mailto:${KOIBANX_EMAILS.DATA_PRIVACY}`}>
                    {KOIBANX_EMAILS.DATA_PRIVACY}
                </a>{" "}
                {t("policies:subtitles.rights.description.fourth")}
            </p>
            <p>
                {t("policies:modificationsPolicies")}
            </p>
            <p>
                {t("policies:contactInformation")}
                <a href={`mailto:${KOIBANX_EMAILS.DATA_PRIVACY}`}>{KOIBANX_EMAILS.DATA_PRIVACY}.</a>
            </p>
        </main>
    );
}

export default PrivacyLayout;