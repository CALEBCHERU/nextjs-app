import React from 'react'
import Form from "next/form";

export default function FormDb() {

    const SubmitFunc =() => {

    }
    return (
        <div>
            FormDb
            <Form {/*action={'/'}*/} onSubmit={SubmitFunc}>
                <label>
                    Full name:
                    <input type={"text"}/>
                </label>
                <label>
                    Age:
                    <input type={'number'}/>
                </label>
                <input type={'submit'}/>

            </Form>
        </div>
    )
}
