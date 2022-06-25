import React from 'react'
import RangeSlider from '../RangeSlider/RangeSlider';
import Mouse from '../../assets/mouse_ico.svg';
export const StepOne = (props) => {
    const  { setIsChangeStep } = props
    return (
        <section className="steps">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 bg-white m-auto p-lg-5 py-5">
                        <div className="">
                            <h2>Wykonaj test UX
                                w <span className="heading_after"> 3 krokach</span></h2>
                        </div>
                        <div className="row text-center mt-5">
                            <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                <div className="active">
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
                                <div>
                                    <div className="counter">
                                        4
                                    </div>
                                    <h3>Sprawdzimy poprawność testu.</h3>
                                    <a href="#" className="text-blue d-block mt-4">Rozwiń...</a>
                                </div>
                            </div>
                            <div className="col-md col-6 mt-md-0 mx-auto mt-3">
                                <div>
                                    <div className="counter">
                                        5
                                    </div>
                                    <h3>Wyślij test UX do badaczy.</h3>
                                    <a href="#" className="text-blue d-block mt-4">Rozwiń...</a>
                                </div>
                            </div>
                        </div>
                        <form action="" className="rangeSlider mb-5 pb-lg-5">
                            <div className="row mt-5">
                                <div className="col-md-8 m-auto">
                                    <h4><span>Krok 1.</span> Wybierz ilość badaczy UX.</h4>
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between px-4 mt-4">
                                            <span>0</span>
                                            <span>10</span>
                                        </div>
                                        <div className="my-5">
                                            <RangeSlider />
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Koszt badania:</h5>
                                        <h6>500zł</h6>
                                        <div className="text-center mt-4">
                                            <button className="btn-blue" onClick={() => setIsChangeStep(2)}> <img src={Mouse} alt="" /> Następny krok</button>
                                        </div>
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