import * as React from "react"
import Layout from "../components/Layout/Layout";
import {Helmet} from "react-helmet";

// markup
export default function ContactPage() {
    return (
        <Layout>
            <Helmet title={'Contact - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Contact</h1>
                <div className={'flex'}>
                    <span><a href={'mailto:dleuthold@student.ethz.ch'}>dleuthold@student.ethz.ch</a></span>
                </div>
            </section>
        </Layout>
    )
}