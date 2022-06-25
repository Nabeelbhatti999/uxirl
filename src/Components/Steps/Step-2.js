import React, { useState } from 'react'
import RangeSlider from '../RangeSlider/RangeSlider';
import Mouse from '../../assets/mouse_ico.svg';
export const StepTwo = (props) => {
    const { setIsChangeStep } = props
    const [isToggle, setIsToggle] = useState(false);

    function handleToggle(e) {
        e.preventDefault();
        setIsToggle(!isToggle)
    }
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
                                <div className="active">
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
                        <form action="" className="rangeSlider">
                            <div className="row mt-5 justify-content-center">
                                <div className="col-lg-9 mx-auto px-lg-3 px-0 mt-4 pt-3">
                                    <div className="text-center">
                                        <button type="button" className="btn btn-lg btn-toggle" onClick={handleToggle} data-toggle="button" aria-pressed="false" autoComplete="off">
                                            <div className="handle"></div>
                                        </button>
                                    </div>
                                    {isToggle === true ?
                                        <>
                                            <div className="row mx-0 mt-5 align-items-center">
                                                <div className="col-8 m-auto">
                                                    <input type="url" className="form-control mt-0" placeholder="https://..." />
                                                </div>
                                            </div>
                                            <div className="text-center mt-4 w-100">
                                                <button className="btn-white mx-3" onClick={() => setIsChangeStep(1)}> Cofnij</button>
                                                <button className="btn-blue mx-3" onClick={() => setIsChangeStep(3)}> <img src={Mouse} alt="" /> Następny krok</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="row mx-0 mt-5 align-items-center">
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control mt-0" placeholder="Nazwa pliku..." />
                                                </div>
                                                <div className="col-sm-4 pl-0 text-center mt-sm-0 mt-3">
                                                    <button className="btn-white">Wybierz plik</button>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="pera-1 text-center mt-4 pt-2" style={{ maxWidth: "100%" }}>Akceptujemy projekty interaktywne w Figma, Axure, Sketch, Adobe XD.
                                                    Nie masz interaktywnego projektu? Zaznacz “Stwórz projekt interaktywny do testów” i wgraj statyczne makiety. </p>
                                            </div>
                                            <div className="mt-4 w-100 checkbox d-flex align-items-center justify-content-center">
                                                <input type="checkbox" id="cb1" />
                                                <label for="cb1"></label> <span className="text-blue ml-2"> Stwórzcie prototyp interaktywny do testów.</span>
                                            </div>
                                            <div className="text-center mt-4 w-100">
                                                <button className="btn-white mx-3" onClick={() => setIsChangeStep(1)}> Cofnij</button>
                                                <button className="btn-blue mx-3" onClick={() => setIsChangeStep(3)}> <img src={Mouse} alt="" /> Wyślij</button>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}