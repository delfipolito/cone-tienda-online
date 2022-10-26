import React from "react";
import { useRouter } from "next/router";

export default function LanguageSelector() {
    const router = useRouter();
    console.log(router);

    const changeLang = (en) => {
        
        router.push(router.pathname, router.pathname, {
            locale: en.target.value,
        });
    }
    return (
        <select onChange={changeLang}>
            <option value="es">Es</option>
            <option value="en">En</option>
        </select>
    )
}