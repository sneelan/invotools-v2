import React from 'react';
const InvoiceHindi = () => {
  

  return (
    <>
    <link rel="stylesheet" type="text/css" href="/root-css/arabic-font.css" />
<div className="container-xl shadow p-0 bg-white rounded invoice-wrap overflow-hidden" style={{ opacity:'0'}}>
        <header className="px-2 px-lg-2 hover">
            <div className="xd-sm-flex xalign-items-center xjustify-content-between row m-0 p-0">
                <div id="header-left" className="text-center col-sm-6 col-md-4 col-lg-4 d-flex align-items-center justify-content-center p-0 ps-md-3">
                    <a className="logo m-auto " href="https://ayatacommerce.com" target="_blank" style={{backgroundPosition: 'center right'}}>AyataCommerce</a></div>
                <div className="xalign-self-stretch d-none d-md-block d-md-flex align-items-end justify-content-center col-md-4 ">
                    <div className="bg-theme-accent text-theme-secondary text-center p-2 p-md-3 pt-md-4 pb-md-3 px-md-5 title">
                        <span className="fs-3 fw-bold text-uppercase">فاتورة</span>
                        <span className="clear d-block p small ">(الأصل للمستلم)</span>
                    </div>
                </div>
                <div id="header-right" className="p-1 pe-lg-2 py-lg-2 col-sm-6 col-md-4 col-lg-4 d-md-flex align-items-center justify-content-end">
                    <div>
                        <h4 className="text-center text-sm-end pt-1 pt-sm-0">AyataCommerce الجندي. المحدودة</h4>                    
                        <p className="text-center text-sm-end pb-1 pb-sm-0">7-11 طريق باركينج، إيست هام، <br/>
                            لندن، المملكة المتحدة، الرمز البريدي: nE61PWt<br/>
                            <a className="hover-underline" href="tel:919995473245" target="_blank">+91 9995473245</a>, 
                            <a className="hover-underline" href="mailto:info@ayatacommerce.com" target="_blank"> info@ayatacommerce.com</a><br/>
                            <span className='tax'><span>29AAICB4842N1Z4 <b> : GST</b> </span>
                            <span>,AAICB4842N</span><b> : PAN</b></span></p>                            
                    </div>
                </div>
            </div>
        </header>
        <div className="header-outer bg-theme-accent text-theme-secondary text-center p-2 title d-md-none mt-2">
            <span className="fs-3 fw-bold text-uppercase">فاتورة</span>
            <span className="clear d-block p small ">(الأصل للمستلم)</span>
        </div>
        <section className="border-4 border-top border-theme-accent" id="order-info">
            <div className="row m-0 py-2 p-lg-2 text-center text-sm-start border-2 border-white border-bottom order-info-row1">
                <div className="col-sm-4 ps-lg-4 text-end">
                    <span className="d-block "><h4 className="text-uppercase d-inline-block ">رقم الفاتورة : </h4>
                    <p className="d-inline-block pe-2 pe-sm-1">#FADZZ</p>
                    </span>
                    <h4 className="clear text-uppercase d-inline-block ">تاريخ : </h4>
                    <p className="d-inline-block pe-2 pe-sm-1">الجمعة 9 أغسطس2023</p>
                </div>
                <div className="col-sm-4 d-sm-flex align-items-center justify-content-center xpy-2 pt-sm-0">
                    <img src="/invoice-css/assets/images/bar-code.png" className="img-fluid" alt="bar code"/>
                </div>
                <div className="col-sm-4 ">
                <span className="d-block "><h4 className="text-uppercase d-inline-block ">رقم الأمر : </h4>
                    <p className="d-inline-block pe-2 pe-sm-1">OD56522</p></span>                      
                    <h4 className="clear text-uppercase d-inline-block  ">تاريخ  : </h4>
                    <p className="d-inline-block  pe-2 pe-sm-1">الجمعة 9 أغسطس2023</p>
                </div>
            </div>
            <div className="row m-0 p-sm-2 p-lg-3 text-center text-sm-start order-info-row2 ">
                <div className="col-sm-4 my-3 my-sm-0 d-flex align-items-center justify-content-center ">
                    <div>
                        <a className="qrcode d-block rounded" title="Use QR code Scanner for the live PDF link" href="https://invotools.io?invoice-directlink=TEST" target="_blank"><img src="/invoice-css/assets/images/being-qr.svg" width="150" alt="QR code"/>                    
                        </a>
                        <span className="small clear text-center d-block pt-1">invotools.io/az50</span>
                    </div>
                </div>
                <div className="col-sm-4 mb-4 mb-sm-0">
                    <h4>تفاصيل الشحن</h4>
                    <p>
                        أوليفيا ويلسون <br/>
                        123 الشارع الذهبي<br/>
                        مدينة الذهب الجديدة, ST 12345<br/>
                        <b>الهاتف  :</b> 0987329382<br/>
                        <b>البريد الإلكتروني :</b> olivia@gmail.com<br/>
                        <b>ضريبة السلع والخدمات للعملاء :</b> #######123###
                    </p>
                   

                </div>
                <div className="col-sm-4 mb-4 mb-sm-0">
                    <h4>تفاصيل الفاتورة</h4>
                    <p>توماس ويلسون<br/>
                        123 الشارع الذهبي<br/>
                        مدينة الذهب الجديدة, ST 12345<br/>
                        <b>الهاتف  :</b> 09327329382<br/>
                        <b>البريد الإلكتروني :</b> thomas@gmail.com<br/></p>

                </div>
            </div>
        </section>
        <main className="px-2">
            <div className="product">
                <table className="w-100">
                    <tbody>
                        <tr className="w-100">
                            <th>منتج</th>
                            <th className="productname">اسم</th>
                            <th>رمز التخزين التعريفي</th>
                            <th>سعر الوحدة</th>
                            <th>الكمية</th>
                            <th>ضريبة</th>
                            <th>تخفيض</th>
                            <th>مجموع الاشياء </th>
                            </tr>
                        <tr>
                            <td><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank"><img src="/invoice-css/assets/images/pro1.png" alt="product" /></a></td>
                            <td className="text-start"><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank"> أزياء قمصان تناسب ضئيلة طويلة الأكمام البحرية</a></td>
                            <td>PRSKNU0A1</td>
                            <td>1149</td>
                            <td>1</td>
                            <td>10%</td>
                            <td>20%</td>
                            <td>1010.22</td>
                        </tr>
                        <tr>
                            <td><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank"><img src="/invoice-css/assets/images/pro2.png" alt="product" /></a></td>
                            <td className="text-start"><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank">تي شيرت نسائي ذو رقبة دائرية مناسب للاسترخاء</a></td>
                            <td>PRSKNU0A2</td>
                            <td>594</td>
                            <td>2</td>
                            <td>10%</td>
                            <td>20%</td>
                            <td>1282.48</td>
                        </tr>
                        <tr>
                            <td><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank"><img src="/invoice-css/assets/images/pro3.png" alt="product" /></a></td>
                            <td className="text-start"><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank">أزياء العادية صالح بولو الرقبة قصيرة سلف تي شيرت الصدأ</a>
                            </td>
                            <td>PRSKNU0A3</td>
                            <td>749</td>
                            <td>3</td>
                            <td>10%</td>
                            <td>20%</td>
                            <td>2156.80</td>
                        </tr>
                    </tbody>
                </table>             
            </div>
            
            <div className="mob-products">                
                <div className="mob-product-row">
                    <div><a className="title h6" href="https://www.ayatacommerce.com/" target="_blank"> أزياء قمصان تناسب ضئيلة طويلة الأكمام البحرية</a></div>
                    <div className="d-flex align-items-center justify-content-center gap-3 p-2">                    
                            <div><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank"><img src="/invoice-css/assets/images/pro1.png" alt="product" /></a></div>
                            <div className="flex-grow-1">                            
                                    <div className="mob-pro-right">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>رمز التخزين التعريفي :</td>
                                                    <td>PRSKNU0A1</td>
                                                </tr>
                                                <tr>
                                                    <td>سعر الوحدة : </td>
                                                    <td>1149</td>
                                                </tr>
                                                <tr>
                                                    <td>الكمية : </td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>ضريبة : </td>
                                                    <td>10%</td>
                                                </tr>
                                                <tr>
                                                    <td>تخفيض : </td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>مجموع الاشياء : </td>
                                                    <td>1010.22 روبية هندية</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                        </div>
                </div> 
                <div className="mob-product-row">
                    <div><a className="title h6" href="https://www.ayatacommerce.com/" target="_blank"> Fashion Regular Fit Polo Neck Short Slv T-Shirts Rust</a></div>
                    <div className="d-flex align-items-center justify-content-center gap-3 p-2">                    
                            <div><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank"><img src="/invoice-css/assets/images/pro2.png" alt="product" /></a></div>
                            <div className="flex-grow-1">                            
                                    <div className="mob-pro-right">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>رمز التخزين التعريفي :</td>
                                                    <td>PRSKNU0A2</td>
                                                </tr>
                                                <tr>
                                                    <td>سعر الوحدة : </td>
                                                    <td>594</td>
                                                </tr>
                                                <tr>
                                                    <td>الكمية : </td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>ضريبة : </td>
                                                    <td>10%</td>
                                                </tr>
                                                <tr>
                                                    <td>تخفيض : </td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>مجموع الاشياء : </td>
                                                    <td>1282.48 روبية هندية</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                        </div>
                </div> 
                <div className="mob-product-row">
                    <div><a className="title h6" href="https://www.ayatacommerce.com/" target="_blank">	Fashion Relax Fit Womens Crew Neck T-Shirts</a></div>
                    <div className="d-flex align-items-center justify-content-center gap-3 p-2">                    
                            <div><a className="hover-underline" href="https://www.ayatacommerce.com/" target="_blank"><img src="/invoice-css/assets/images/pro3.png" alt="product" /></a></div>
                            <div className="flex-grow-1">                            
                                    <div className="mob-pro-right">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>رمز التخزين التعريفي :</td>
                                                    <td>PRSKNU0A3</td>
                                                </tr>
                                                <tr>
                                                    <td>سعر الوحدة : </td>
                                                    <td>749</td>
                                                </tr>
                                                <tr>
                                                    <td>الكمية : </td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>ضريبة : </td>
                                                    <td>10%</td>
                                                </tr>
                                                <tr>
                                                    <td>تخفيض : </td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>مجموع الاشياء : </td>
                                                    <td>2156.80 روبية هندية</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                        </div>
                </div>

            </div> 




            <div className="d-sm-flex flex-sm-row-reverse align-items-start justify-content-between" id="sec-notes">                    
                <div className="w-100">
                    <table className="w-100 product-total mt-2 mt-sm-0">
                        <tbody>
                            <tr>
                                <td>صافي المجموع</td>
                                <td>روبية هندية 4449.50</td>
                            </tr>
                            <tr>
                                <td>إجمالي الخصم</td>
                                <td>روبية هندية 100.00</td>
                            </tr>
                            <tr>
                                <td>مجموع الضريبة</td>
                                <td>روبية هندية 12.00</td>
                            </tr>
                            <tr>
                                <td>شحن</td>
                                <td>روبية هندية 0.00</td>
                            </tr>
                            <tr>
                                <td>المدفوعة مقدما</td>
                                <td>روبية هندية 500.50</td>
                            </tr>
                            <tr className="bg-theme-accent fs-6 fw-bold">
                                <td>المجموع الإجمالي</td>
                                <td>روبية هندية 3861.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="align-self-stretch pt-lg-2 ps-lg-3">
                    <div className="d-flex flex-column-reverse flex-sm-column w-100 h-100 text-start text-sm-start my-notes">
                        <div className="align-self-stretch flex-grow-1">
                            <p><b>ملاحظة الطلب: في </b> Ayatacommerce، نهدف إلى توصيل المنتجات بشكل مثالي في كل مرة. في حالة الإرجاع، يرجى التأكد من حصولك على صندوق العلامة التجارية الأصلي، وبطاقة السعر، والتعبئة، والفاتورة، حيث إنها ضرورية لمعالجة طلبك. هو موضع تقدير كبير تعاونكم.</p>
                        </div>
                        <div className="w-100 pb-lg-0 pe-1 pb-sm-0 pt-2 pt-sm-0">
                            <p><strong> المبلغ بالكلمات:</strong> ثلاثة آلاف وثمانمائة وواحد وستون روبية</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <section id="sec-sign">
            <div className="d-sm-flex align-items-center justify-content-between px-2 py-lg-2 mt-1 mt-sm-0">
                <div className="py-2 py-lg-2 sec-sign-left">
                    <div className="">
                        <div className="ps-lg-3">
                            <h4>بيانات الدفع</h4>
                        <p className=""> بطاقة الائتمان 
                            معرف معاملة : <b>310b174b17ba3</b><br/>
                            حالة الدفع: <b> نجاح</b><br/>
                            تاريخ الدفع: <b>06-09-2023</b><br/>
                            المبلغ المدفوع: <b> 505.50 روبية هندية </b></p>
                        </div>
                    </div>
                    <div className="my-3 my-sm-2">                        
                        <table className="track-ship w-100">
                            <tbody>
                                <tr>
                                    <td className="text-center text-sm-start px-3 bg-theme-primary1 fw-bold border "><h4 className="text-uppercase text-center text-sm-start">                                        
                                        <span className="d-none d-md-inline-block primary-svg">
                                            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.45833 0.138306C1.80634 0.138306 1.18106 0.397308 0.720029 0.858335C0.259002 1.31936 0 1.94465 0 2.59664V16.1175H2.45833C2.45833 17.0955 2.84684 18.0334 3.53838 18.7249C4.22992 19.4165 5.16785 19.805 6.14583 19.805C7.12382 19.805 8.06175 19.4165 8.75329 18.7249C9.44483 18.0334 9.83333 17.0955 9.83333 16.1175H17.2083C17.2083 17.0955 17.5968 18.0334 18.2884 18.7249C18.9799 19.4165 19.9178 19.805 20.8958 19.805C21.8738 19.805 22.8118 19.4165 23.5033 18.7249C24.1948 18.0334 24.5833 17.0955 24.5833 16.1175H27.0417V9.97164L23.3542 5.05497H19.6667V0.138306M11.0625 2.59664L15.9792 7.51331L11.0625 12.43V8.74247H3.6875V6.28414H11.0625M19.6667 6.89872H22.7396L25.161 9.97164H19.6667M6.14583 14.2737C6.63483 14.2737 7.10379 14.468 7.44956 14.8137C7.79533 15.1595 7.98958 15.6285 7.98958 16.1175C7.98958 16.6065 7.79533 17.0754 7.44956 17.4212C7.10379 17.767 6.63483 17.9612 6.14583 17.9612C5.65684 17.9612 5.18788 17.767 4.84211 17.4212C4.49634 17.0754 4.30208 16.6065 4.30208 16.1175C4.30208 15.6285 4.49634 15.1595 4.84211 14.8137C5.18788 14.468 5.65684 14.2737 6.14583 14.2737ZM20.8958 14.2737C21.3848 14.2737 21.8538 14.468 22.1996 14.8137C22.5453 15.1595 22.7396 15.6285 22.7396 16.1175C22.7396 16.6065 22.5453 17.0754 22.1996 17.4212C21.8538 17.767 21.3848 17.9612 20.8958 17.9612C20.4068 17.9612 19.9379 17.767 19.5921 17.4212C19.2463 17.0754 19.0521 16.6065 19.0521 16.1175C19.0521 15.6285 19.2463 15.1595 19.5921 14.8137C19.9379 14.468 20.4068 14.2737 20.8958 14.2737Z" />
                                            </svg>                                                
                                        </span>
                                        شحنة المسار </h4></td>                                    
                                    <td className="text-center px-3 border"><a href="https://www.dtdc.in/tracking.asp?id=194978a68" target="_blank"><img src="/invoice-css/assets/images/dtdc.png" /></a></td>
                                    <td className="text-center  px-3 border hover-bg-accent"><a href="https://www.dtdc.in/tracking.asp?id=194978a68" target="_blank" title="Track Link">194978a68<img className="ms-1 opacity-75 " width="13" src="/invoice-css/assets/images/pop.svg"/></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="text-center text-sm-end py-sm-3 sec-sign-right">
                    <h4>AyataCommerce الجندي. المحدودة</h4>
                    <span id="sign" style={{backgroundPosition:'center left'}}></span>
                    <p className='text-start'><small>المفوض بالتوقيع</small></p>
                </div>
            </div>
        </section>
        <footer>
            <div className="d-sm-flex align-items-center justify-content-center mt-4 mt-sm-0">
            <div className="align-self-stretch col-sm-5 col-lg-3 bg-theme-secondary footer-left d-flex align-items-center justify-content-center">
                <div className="ps-2 py-3 py-sm-0">
                    <a href="tel:+919995473245">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3075 9.6786C12.3507 9.6786 11.4321 9.52551 10.5748 9.24229C10.3069 9.15809 10.0084 9.21933 9.79409 9.426L8.11011 11.11C5.9439 10.0077 4.16807 8.23955 3.06583 6.06567L4.74981 4.37403C4.96413 4.17501 5.02537 3.87649 4.94117 3.60858C4.65796 2.75128 4.50487 1.83274 4.50487 0.875924C4.50487 0.454926 4.16042 0.110474 3.73942 0.110474H1.06037C0.639372 0.110474 0.294922 0.454926 0.294922 0.875924C0.294922 8.0635 6.11996 13.8886 13.3075 13.8886C13.7285 13.8886 14.0729 13.5441 14.0729 13.1231V10.444C14.0729 10.0231 13.7285 9.6786 13.3075 9.6786ZM12.542 6.99952H14.0729C14.0729 3.19524 10.9882 0.110474 7.18392 0.110474V1.64137C10.1462 1.64137 12.542 4.03723 12.542 6.99952ZM9.48026 6.99952H11.0111C11.0111 4.88688 9.29655 3.17227 7.18392 3.17227V4.70317C8.45456 4.70317 9.48026 5.72888 9.48026 6.99952Z" />
                            </svg>                            
                        <span className="pe-2">+91 9995473245</span></a>
                   <a href="mailto:info@ayatacommerce.com" target="_blank">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3073 0.877075H2.06019C1.2182 0.877075 0.536951 1.56598 0.536951 2.40798L0.529297 11.5934C0.529297 12.4354 1.2182 13.1243 2.06019 13.1243H14.3073C15.1493 13.1243 15.8382 12.4354 15.8382 11.5934V2.40798C15.8382 1.56598 15.1493 0.877075 14.3073 0.877075ZM14.3073 3.93888L8.18374 7.76613L2.06019 3.93888V2.40798L8.18374 6.23523L14.3073 2.40798V3.93888Z" />
                        </svg>
                        
                    <span className="pe-2"> info@ayatacommerce.com</span>
                </a> 
                   <a href="https://ayatacommerce.com" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5211 9.53025C11.5823 9.02505 11.6282 8.51985 11.6282 7.99935C11.6282 7.47884 11.5823 6.97365 11.5211 6.46845H14.1083C14.2308 6.95834 14.3073 7.47119 14.3073 7.99935C14.3073 8.52751 14.2308 9.04036 14.1083 9.53025M10.1662 13.7861C10.6255 12.9365 10.9776 12.018 11.2226 11.0611H13.4806C12.7458 12.3241 11.5747 13.3039 10.1662 13.7861ZM9.97488 9.53025H6.3926C6.31606 9.02505 6.27013 8.51985 6.27013 7.99935C6.27013 7.47884 6.31606 6.96599 6.3926 6.46845H9.97488C10.0438 6.96599 10.0974 7.47884 10.0974 7.99935C10.0974 8.51985 10.0438 9.02505 9.97488 9.53025ZM8.18374 14.0923C7.54843 13.1738 7.03558 12.1557 6.72175 11.0611H9.64574C9.33191 12.1557 8.81906 13.1738 8.18374 14.0923ZM5.12197 4.93755H2.88687C3.61404 3.6669 4.79282 2.68713 6.19359 2.21255C5.73432 3.0622 5.38987 3.98074 5.12197 4.93755ZM2.88687 11.0611H5.12197C5.38987 12.018 5.73432 12.9365 6.19359 13.7861C4.79282 13.3039 3.61404 12.3241 2.88687 11.0611ZM2.2592 9.53025C2.13673 9.04036 2.06019 8.52751 2.06019 7.99935C2.06019 7.47119 2.13673 6.95834 2.2592 6.46845H4.84641C4.78517 6.97365 4.73924 7.47884 4.73924 7.99935C4.73924 8.51985 4.78517 9.02505 4.84641 9.53025M8.18374 1.89871C8.81906 2.81725 9.33191 3.84296 9.64574 4.93755H6.72175C7.03558 3.84296 7.54843 2.81725 8.18374 1.89871ZM13.4806 4.93755H11.2226C10.9776 3.98074 10.6255 3.0622 10.1662 2.21255C11.5747 2.69478 12.7458 3.6669 13.4806 4.93755ZM8.18374 0.344849C3.95083 0.344849 0.529297 3.78937 0.529297 7.99935C0.529297 10.0294 1.33575 11.9764 2.77123 13.4119C3.48201 14.1227 4.32583 14.6865 5.25451 15.0712C6.18319 15.4559 7.17855 15.6538 8.18374 15.6538C10.2138 15.6538 12.1608 14.8474 13.5963 13.4119C15.0317 11.9764 15.8382 10.0294 15.8382 7.99935C15.8382 6.99415 15.6402 5.99878 15.2555 5.0701C14.8709 4.14141 14.307 3.29759 13.5963 2.5868C12.8855 1.87601 12.0417 1.31219 11.113 0.927513C10.1843 0.542838 9.18894 0.344849 8.18374 0.344849Z"/>
                        </svg>
                        
                    <span className="pe-2">www.ayatacommerce.com</span></a> 
                </div>
            </div>
            <div className="col-sm-7 col-lg-9 align-self-stretch footer-right pb-lg-1">
                <div className="d-flex align-items-center justify-content-center justify-content-sm-between px-3">
                    <h4 className='opacity-75 text-center w-100 d-none d-sm-block'>شكرا</h4>
                    <h4 className="opacity-75 text-center w-100 d-none d-sm-block">تابعنا</h4>
                </div>
                <div className="d-flex align-items-center justify-content-evenly ">
                    <div className="w-100 p-2 pt-3 pt-lg-2 pb-2 pb-sm-2 d-flex align-items-center justify-content-evenly">
                        <a className="acol-3 flex-fill" href="https://wa.me/919995473245" target="_blank"><span className="img d-flex s-wa">
                            <svg width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>whatsapp</title><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" /></svg>
                        </span> <span className="d-none d-md-inline-block">+91 9995473245</span></a>
                        <a className="acol-3 flex-fill" href="https://www.facebook.com/ayatacommerce/" target="_blank"><span className="img d-flex s-fb">
                            <svg width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                        </span> <span className="d-none d-md-inline-block">فيس بوك</span></a>
                        <a className="acol-3 flex-fill" href="https://twitter.com/ayatacommerce" target="_blank"><span className="img d-flex s-x">
                            <svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        </span> <span className="d-none d-md-inline-block">التغريد</span></a>
                        <a className="acol-3 flex-fill" href="https://www.youtube.com/" target="_blank"><span className="img d-flex s-yt">
                            <svg width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>    
                            </span> <span className="d-none d-md-inline-block">يوتيوب</span></a>
                        <a className="acol-3 flex-fill" href="https://www.instagram.com/ayatacommerce9/" target="_blank"><span className="img d-flex s-ig">
                            <svg width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                        </span> <span className="d-none d-md-inline-block">انستغرام</span></a>
                        <a className="acol-3 flex-fill" href="https://www.linkedin.com/company/ayatacommerce" target="_blank"><span className="img d-flex s-li">
                            <svg width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
                        </span> <span className="d-none d-md-inline-block">لينكد إن</span></a>
                    </div>
                </div>
            </div>
            </div>
            <div className="text-center small py-2 bg-black text-theme-primary-light"> 
                <a href="https://www.ayatacommerce.com" target="_blank" className="text-theme-primary-light anchor-dark opacity-75 opacity-hover-100 d-block w-100">                
                    حقوق النشر © 2025 AyataCommerce. | www.ayatacommerce.com</a></div>
        </footer>
    </div>    
    </>
  );
};

export default InvoiceHindi;