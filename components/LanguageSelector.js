import React from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";

export default function LanguageSelector() {
    const router = useRouter();

    const changeLang = (en) => {

        router.push(router.pathname, router.pathname, {
            locale: en.target.value,
        });
    }
    return (
        <Form.Select aria-label="language selector" onChange={changeLang}>
            <option value="en">En</option>
            <option value="es">Es</option>
        </Form.Select>
    )
}