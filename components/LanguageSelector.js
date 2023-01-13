import React from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import useTranslation from 'next-translate/useTranslation';

export default function LanguageSelector() {
    const router = useRouter();
    const {lang} = useTranslation();

    const changeLang = (en) => {

        router.push(router.pathname, router.pathname, {
            locale: en.target.value,
        });
    }
    return (
        <Form.Select aria-label="language selector" value={lang} onChange={changeLang}>
            <option value="en">En</option>
            <option value="es">Es</option>
        </Form.Select>
    )
}