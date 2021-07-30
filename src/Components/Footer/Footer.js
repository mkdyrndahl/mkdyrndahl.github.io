import React from 'react'

export default function Footer()    {
    return(
        <footer class="footer text-center">
            <div class="container px-4 px-lg-5">
                <ul class="list-inline mb-5">
                    {/*<li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="#!"><i class="icon-social-instagram"></i></a>
                    </li>*/}
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white" href="https://github.com/mkdyrndahl"><i class="icon-social-github"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/matthew-dyrndahl-944539218/"><i class="icon-social-linkedin"></i></a>
                    </li>
                </ul>
                <p class="text-muted small mb-0">Copyright &copy; mkdyrndahl.web.dev 2021</p>
            </div>
        </footer>
    )
}