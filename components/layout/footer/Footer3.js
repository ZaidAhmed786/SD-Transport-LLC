import Link from "next/link"

export default function Footer3() {
    return (
        <>

            <footer className="footer-version-three bg1-clr">
                <div className="container">
                    <div className="footer-topversion-one pb-20">
                        <div className="footer-v3-titlewrap d-flex align-items-center gap-xxl-15 gap-xl-10 gap-md-8 gap-sm-5 gap-3 pb-xxl-15 pb-xl-10 pb-8">
                         
                        </div>
                        <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        About Us
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_43041" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                    At  SD Transport LLC we specialize in delivering tailored freight solutions for businesses and supply chain companies. 
                                    </p>
                                    <ul className="common-social d-flex align-items-center gap-2">
                                        <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <Link href="/#" className="d-center">
                                                <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                        <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6308_28">
                                                            <rect width={10} height={16} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                            <Link href="/#" className="d-center">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1800}>
                                            <Link href="/#" className="d-center">
                                                <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8">
                                                        <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                            <Link href="/#" className="d-center">
                                                <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Quick Links
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4304" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href="/" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Contact Us
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Help links
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4305)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4305" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>       
                                        <li>
                                            <Link href="/privacy" className="pra-clr">
                                               Privacy Policy
                                             </Link>
                                        </li>
                                         <li>
                                            <Link href="/refund" className="pra-clr">
                                            Refund Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/termscondition" className="pra-clr">
                                            Terms &amp; Conditions
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Get In Touch
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4306)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4306" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>  
                                    </h5>
                                  
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                       <strong>Address :</strong> 8930 Antioch Rd, Baton Rouge, LA 70817-6420
                                    </p>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                       <strong>Call us at:</strong> <a href="tel:+18883529206">+1 (888) 352-9206</a>
                                    </p>
                                      <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                       <strong>Write us at:</strong> <a href="mailto:sales@sdtransportservice.com">sales@sdtransportservice.com</a> 
                                    </p>
                                    <img src="./assets/img/footer/caed.jpeg" className="img-fluid w-50" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-version-two bg2-clr py-xxl-10 py-xl-8 py-lg-7 py-6">
                    <div className="container">
                         <div className="text-sm-start text-center d-md-flex gap-sm-5 gap-2 d-grid align-items-center  justify-content-sm-between justify-content-center">
                            <p className="pra-clr">
                                © 2020-2025 {new Date().getFullYear()}SD Transport, LLC.<Link href="/" className="theme-clr">  </Link> Baton Rouge, LA 70817-6420, USA. All Rights Reserved.
                            </p>
                            <p className="gap-4 d-flex">

                            <Link href="/privacy" className="pra-clr">
                                Privacy Policy
                            </Link>
                              <Link href="/termscondition" className="pra-clr">
                                Terms &amp; Conditions
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
