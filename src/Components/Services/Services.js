import React from 'react'

export default function Services()  {
    return (
        <section class="content-section bg-primary text-white text-center" id="services">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading">
                    <h3 class="text-secondary mb-0">Services</h3>
                    <h2 class="mb-5">What I Offer</h2>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-screen-smartphone"></i></span>
                        <h4><strong>Interactive</strong></h4>
                        <p class="text-faded mb-0">Guaranteed interactive web design.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-pencil"></i></span>
                        <h4><strong>Dedicated</strong></h4>
                        <p class="text-faded mb-0">To ensuring you're satisfied with the result.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-like"></i></span>
                        <h4><strong>Ease of Use</strong></h4>
                        <p class="text-faded mb-0">
                            Simply put, simplicity makes things easy.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-mustache"></i></span>
                        <h4><strong>Polished</strong></h4>
                        <p class="text-faded mb-0">
                            Your website will be stylish and functional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}