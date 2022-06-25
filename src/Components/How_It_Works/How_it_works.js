import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from '../Header/header';
import { Helmet } from 'react-helmet'
import RangeSlider from '../RangeSlider/RangeSlider';
import Mouse from '../../assets/mouse_ico.svg';
import User from "../../assets/user.png";
import Calendar from "../../assets/calendar.png";
import card1 from "../../assets/pencil.svg";
import card2 from "../../assets/cart.svg";
import card3 from "../../assets/brackits.svg";
import card4 from "../../assets/setting.svg";


import './how_it_works.css'
export const HowItWorks = () => {
    const [isToggle, setIsToggle] = useState(false);

    function handleToggle(e) {
        e.preventDefault();
        setIsToggle(!isToggle)
    }
    return (
        <>
            <Header />
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            </Helmet>

            <section className="machine-section bg-light-beige">
                <div className="setting">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="mb-0">Jak to działa</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-beige py-120" id="price">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 m-auto">
                                <div id="accordion" className="accordion how_It_works">
                                    <div className="card-header">
                                        <div className="card-title" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span className="font-600">Krok 1</span>. Wybierz ilość badaczy UX.
                                        </div>
                                        <div id="collapseOne" className="pb-0 collapse show" data-parent="#accordion">
                                            <div className="row mx-0">
                                                <div className="col-lg-4 pl-0 mt-2">
                                                    <p className="pera">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum.
                                                    </p>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="row">
                                                        <div className="col-lg-10 ml-auto">
                                                            <form action="" className="rangeSlider">
                                                                <h4 className="mt-lg-0 mt-4"><span className="font-600">Krok 1.</span> Wybierz ilość badaczy UX.</h4>
                                                                <div>
                                                                    <div className="d-flex align-items-center justify-content-between px-4 mt-3">
                                                                        <span>0</span>
                                                                        <span>10</span>
                                                                    </div>
                                                                    <div className="mt-1 mb-5">
                                                                        <RangeSlider />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h5>Koszt badania:</h5>
                                                                    <h6>500zł</h6>
                                                                    <div className="text-center mt-4">
                                                                        <button className="btn-blue"> <img src={Mouse} alt="" /> Następny krok</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-header">
                                        <div className="card-title collapsed" data-toggle="collapse" href="#collapseTwo">
                                            <span className="font-600">Krok 2</span>. Wybierz ilość badaczy UX.
                                        </div>
                                        <div id="collapseTwo" className="pb-0 collapse" data-parent="#accordion">
                                            <div className="row mx-0">
                                                <div className="col-lg-4 pl-0 mt-2">
                                                    <p className="pera">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum.
                                                    </p>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <form action="" className="rangeSlider">
                                                                <div className="row justify-content-center">
                                                                    <div className="mt-5">
                                                                        <div className="text-center">
                                                                            <button type="button" className="btn btn-lg btn-toggle" onClick={handleToggle} data-toggle="button" aria-pressed="false" autoComplete="off">
                                                                                <div className="handle"></div>
                                                                            </button>
                                                                        </div>
                                                                        {isToggle === true ?
                                                                            <>
                                                                                <div className="row mx-0 mt-4 align-items-center">
                                                                                    <div className="col-12 m-auto">
                                                                                        <input type="url" className="form-control mt-0" placeholder="https://..." />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="text-center mt-4 w-100">
                                                                                    <button className="btn-white mx-3 mt-lg-0 mt-2"> Cofnij</button>
                                                                                    <button className="btn-blue mx-3 mt-lg-0 mt-2"> <img src={Mouse} alt="" /> Następny krok</button>
                                                                                </div>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <div className="row mx-0 mt-4 align-items-center">
                                                                                    <div className="col-lg-11 col-12 m-auto px-lg-3 px-0">
                                                                                        <div className="row">
                                                                                            <div className="col-8">
                                                                                                <input type="text" className="form-control mt-0" placeholder="Nazwa pliku..." />
                                                                                            </div>
                                                                                            <div className="col-4 px-0">
                                                                                                <button className="btn-white">Wybierz plik</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="pera-1 text-center mt-4 pt-2">Akceptujemy projekty interaktywne w Figma, Axure, Sketch, Adobe XD.
                                                                                        Nie masz interaktywnego projektu? Zaznacz “Stwórz projekt interaktywny do testów” i wgraj statyczne makiety. </p>
                                                                                </div>
                                                                                <div className="mt-4 w-100 checkbox d-flex align-items-center justify-content-center">
                                                                                    <input type="checkbox" id="cb1" id="cb1" />
                                                                                    <label for="cb1"></label> <span className="text-blue ml-2" style={{ fontSize: "8px" }}> Stwórzcie prototyp interaktywny do testów.</span>
                                                                                </div>
                                                                                <div className="text-center mt-4 w-100">
                                                                                    <button className="btn-white mx-3 mt-lg-0 mt-2"> Cofnij</button>
                                                                                    <button className="btn-blue mx-3 mt-lg-0 mt-2"> <img src={Mouse} alt="" /> Wyślij</button>
                                                                                </div>
                                                                            </>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-header">
                                        <div className="card-title collapsed" data-toggle="collapse" href="#collapseThree">
                                            <span className="font-600">Krok 3</span>. Wybierz ilość badaczy UX.
                                        </div>
                                        <div id="collapseThree" className="pb-0 collapse" data-parent="#accordion">
                                            <div className="row mx-0">
                                                <div className="col-lg-4 pl-0 mt-2 pr-lg-0">
                                                    <p className="pera">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum.
                                                    </p>
                                                </div>
                                                <div className="col-lg-8">
                                                    <form action="" className="rangeSlider">
                                                        <div className="row">
                                                            <div className="col-lg-9 m-auto">
                                                                <div>
                                                                    <textarea rows={7} placeholder="Opis zadania..." className="textarea"></textarea>
                                                                </div>
                                                                <div className="text-center mt-4">
                                                                    <button className="btn-white mx-3 mt-lg-0 mt-2"> Cofnij</button>
                                                                    <button className="btn-blue mx-3 mt-lg-0 mt-2"> <img src={Mouse} alt="" /> Wyślij</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-header">
                                        <div className="card-title collapsed" data-toggle="collapse" href="#collapseFour">
                                            <span className="font-600">Krok 4</span>. Wybierz ilość badaczy UX.
                                        </div>
                                        <div id="collapseFour" className="pb-0 collapse" data-parent="#accordion">
                                            <div className="row mx-0">
                                                <div className="col-lg-4 pl-0 mt-2">
                                                    <p className="pera">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum.
                                                    </p>
                                                </div>
                                                <div className="col-lg-8">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-header">
                                        <div className="card-title collapsed" data-toggle="collapse" href="#collapseFive">
                                            <span className="font-600">Krok 5</span>. Wybierz ilość badaczy UX.
                                        </div>
                                        <div id="collapseFive" className="pb-0 collapse" data-parent="#accordion">
                                            <div className="row mx-0">
                                                <div className="col-lg-4 pl-0 mt-2">
                                                    <p className="pera">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla semper ultrices. Pulvinar mi leo donec ipsum.
                                                    </p>
                                                </div>
                                                <div className="col-lg-8">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-11 bg-white m-auto p-md-5 py-5">
                                    <div className="text-center">
                                        <h2>Czy to dla mnie?</h2>
                                        <p className="pera">Sprawdź jak testy mogą pomóc Tobie w pracy.</p>
                                    </div>
                                    <div className="row text-center mt-5 checkbox_list1 ">
                                        <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                            <div>
                                                <div className="mb-3">
                                                    <img src={card2} />
                                                </div>
                                                <div className="position-relative checkbox">
                                                    <input type="checkbox" id="cb6" />
                                                    <div className="item">
                                                        <h3>Prowadzę sklep internetowy</h3>
                                                        <div className="label-hh">
                                                            <label for="cb6"></label>
                                                            <p>Wybierz</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                            <div>
                                                <div className="mb-3">
                                                    <img src={card1} />
                                                </div>
                                                <div className="position-relative checkbox">
                                                    <input type="checkbox" id="cb7" />
                                                    <div className="item">
                                                        <h3>Jesteśmy startupem</h3>
                                                        <div className="label-hh">
                                                            <label for="cb7"></label>
                                                            <p className="pl-3">Wybierz</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                            <div>
                                                <div className="mb-3">
                                                    <img src={card3} />
                                                </div>
                                                <div className="position-relative checkbox">
                                                    <input type="checkbox" id="cb8" />
                                                    <div className="item">
                                                        <h3>Jesteśmy softwarehouse</h3>
                                                        <div className="label-hh">
                                                            <label for="cb8"></label>
                                                            <p>Wybierz</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                            <div>
                                                <div className="mb-3">
                                                    <img src={card1} />
                                                </div>
                                                <div className="position-relative checkbox">
                                                    <input type="checkbox" id="cb9" />
                                                    <div className="item">
                                                        <h3>Jestem projektantem UI/UX</h3>
                                                        <div className="label-hh">
                                                            <label for="cb9"></label>
                                                            <p>Wybierz</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                            <div>
                                                <div className="mb-3">
                                                    <img src={card4} />
                                                </div>
                                                <div className="position-relative checkbox">
                                                    <input type="checkbox" id="cb10" />
                                                    <div className="item">
                                                        <h3>Wyślij test UX do badaczy.</h3>
                                                        <div className="label-hh">
                                                            <label for="cb10"></label>
                                                            <p>Wybierz</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-lg-5">
                                        <p className="heading-15">Zebraliśmy 10 najpopularniejszych problemów dla Ciebie, które możesz zbadać i poprawić.</p>
                                    </div>
                                    <div className="col-lg-10 m-auto">
                                        <div className="checkbox_list mt-4">
                                            <div className="position-relative checkbox">
                                                <input type="checkbox" id="cb2" />
                                                <div className="item">
                                                    <label for="cb2"></label>
                                                    <p>Moi klienci wychodzą z koszyka bez dokonywania transakcji.</p>
                                                </div>
                                            </div>
                                            <div className="position-relative checkbox">
                                                <input type="checkbox" id="cb3" />
                                                <div className="item">
                                                    <label for="cb3"></label>
                                                    <p>Moi klienci nie mogą znaleźć interesującego produktu.</p>
                                                </div>
                                            </div>
                                            <div className="position-relative checkbox">
                                                <input type="checkbox" id="cb4" />
                                                <div className="item">
                                                    <label for="cb4"></label>
                                                    <p>Moi klienci nie mogą znaleźć interesującego produktu.</p>
                                                </div>
                                            </div>
                                            <div className="position-relative checkbox">
                                                <input type="checkbox" id="cb5" />
                                                <div className="item">
                                                    <label for="cb5"></label>
                                                    <p>Chce przetestować inny problem.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="text-center washing_machine how-it-works-machine position-relative" id="profile">
                        <div className="row mx-0">
                            <div className="col-12 bg-beige py-0">
                                <h2>Masz pytania?</h2>
                                <p>Umów się na 30 minutową sesję z UX testerem.</p>
                                <div className="d-flex align-items-center justify-content-md-center mt-5">
                                    <div>
                                        <img src={User} className="w-75" alt="" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="mb-1">Imię Nazwisko</h4>
                                        <p className="mb-0">Senior UX tester</p>
                                        <p>pomoc@uxirl.pl</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn-white mt-5"> <img src={Calendar} className="mr-2" alt="" /> Zarezerwuj spotkanie w Calendly</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}