import React from 'react'

export default function CallToAction()  {
    return(
        <section class="content-section bg-primary text-white text-center" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading">
                    <h3 class="text-secondary mb-0">Contact</h3>
                    <h2 class="mb-5">Message Me!</h2>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <p>You can email me today at: <a class="text-light" href="mailto: mkdyrndahl@gmail.com">mkdyrndahl@gmail.com</a>, or give me a call on my business line at: <a class="text-white" href="tel:778-789-6904">778-789-6904</a>.</p>
                </div>
            </div>
        </section>
    )
}