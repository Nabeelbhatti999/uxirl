import React from 'react'
import RangeSlider from '../RangeSlider/RangeSlider';
import Mouse from '../../assets/mouse_ico.svg';
export const StepFour = (props) => {
    const { setIsChangeStep } = props
    return (
        <section className="steps">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 bg-white m-auto p-lg-5 py-5">
                        <div className="row text-center mt-md-5">
                            <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                <div>
                                    <div className="counter">
                                        1
                                    </div>
                                    <h3>Wybierz ilość
                                        badaczy UX.</h3>
                                    <a href="" className="text-blue d-block mt-4">Rozwiń...</a>
                                </div>
                            </div>
                            <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                <div>
                                    <div className="counter">
                                        2
                                    </div>
                                    <h3>Wgraj projekt lub podaj adres URL.</h3>
                                    <a href="" className="text-blue d-block mt-4">Rozwiń...</a>
                                </div>
                            </div>
                            <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                <div>
                                    <div className="counter">
                                        3
                                    </div>
                                    <h3>Opisz czego
                                        dotyczy zadanie.</h3>
                                    <a href="" className="text-blue d-block mt-4">Rozwiń...</a>
                                </div>
                            </div>
                            <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                <div className="active">
                                    <div className="counter">
                                        4
                                    </div>
                                    <h3>Sprawdzimy poprawność testu.</h3>
                                    <a href="#" className="text-blue d-block mt-4">Rozwiń...</a>
                                </div>
                            </div>
                        </div>
                        <form action="" className="rangeSlider mb-5 pb-lg-5">
                            <div className="row mt-5">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h4><span className="d-block"> Dziękujemy!</span> Twoje badanie zostało przyjęte do realizacji.</h4>
                                        <p className="pera-1 pt-3">Poniżej znajdziesz podsumowanie. Uzupełnij dane kontaktowe,
                                            nasz specjalista wyśle do Ciebie potwierdzenie poprawności testu.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-9 m-auto">
                                    <div>
                                        <input type="text" className="form-control" placeholder="Imię i Nazwisko*..." />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Adres e-mail*..." />
                                    </div>
                                    <div>
                                        <input type="number" className="form-control" placeholder="Numer telefonu..." />
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="btn-white mx-3" onClick={() => setIsChangeStep(3)}> Cofnij</button>
                                        <button className="btn-blue mx-3"> <img src={Mouse} alt="" /> Wyślij</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}