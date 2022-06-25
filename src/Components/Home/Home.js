import React, {useState} from 'react'
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/header';
import Logos from '../../assets/logos.svg';
import Machine from '../../assets/machine.svg';
import Mouse from '../../assets/mouse_ico.svg';
import Play from '../../assets/play.png';
import User from "../../assets/user.png";
import Calendar from "../../assets/calendar.png";
import { StepOne } from '../Steps/Step-1';
import { StepTwo } from '../Steps/Step-2';
import { StepThree } from '../Steps/Step-3';
import { StepFour } from '../Steps/Step-4';

export const Home = () => {
    const [isChangeStep, setIsChangeStep] = useState(1);
    return (
        <>
            <Header />
            <section className="bg-image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <h1>Przeprowadź testy z <span className="heading_after">prawdziwymi</span> użytkownikami.</h1>
                            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a tristique lorem, non
                                ornare est. Cras feugiat ante id orci gravida, eget consequat leo sagittis.</p>
                            <button className="btn-blue mt-3"> <img src={Mouse} alt="" /> Wykonaj test UX</button>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="film-button text-center">
                                <p>Zobacz przykładowy test</p>
                                <button className="btn-white"> <img src={Play} alt="" /> Odtwórz (2 min)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="logos">
                <div className="container">
                    <div className="text-center">
                        <img src={Logos} className="w-75" alt="" />
                    </div>
                </div>
            </section>

            <section className="machine-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h2>Co zyskujesz?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-md-5">
                            <img src={Machine} className="w-100" alt="" />
                        </div>
                        <div className="col-md-7">
                            <div id="accordion" className="accordion">
                                <div className="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                    <div className="card-title">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.0405 15.0977L15.9701 11.0306C15.767 10.8274 15.767 10.4952 15.9701 10.292L16.5894 9.67274C17.0055 9.25668 17.1538 8.65355 16.9764 8.09235C16.8023 7.53438 16.3346 7.12154 15.7573 7.01833L7.92629 5.60566C7.41992 5.51535 6.90064 5.67661 6.53619 6.04107C6.17173 6.40553 6.01046 6.9248 6.10077 7.42794L7.51345 15.2589C7.61666 15.8363 8.02949 16.3039 8.58747 16.4781C9.14544 16.6523 9.7518 16.5039 10.1679 16.0911L10.7871 15.4718C10.9903 15.2686 11.3225 15.2686 11.5257 15.4718L15.5928 19.5421C15.8992 19.8485 16.2991 20.0001 16.7023 20.0001C17.1055 20.0001 17.5054 19.8485 17.8118 19.5421L20.0308 17.3231C20.65 16.7071 20.65 15.7105 20.0405 15.0977ZM19.2986 16.5781L17.0796 18.7971C16.8765 19.0003 16.5443 19.0003 16.3411 18.7971L12.2707 14.73C11.9643 14.4236 11.5644 14.272 11.1612 14.272C10.7581 14.272 10.3582 14.4236 10.0517 14.73L9.43249 15.3492C9.29058 15.4912 9.09384 15.5363 8.90677 15.4783C8.71648 15.4202 8.58424 15.2686 8.54877 15.0719L7.13609 7.24088C7.10384 7.06994 7.15867 6.90222 7.28123 6.77966C7.40379 6.6571 7.5715 6.60227 7.74567 6.63452L15.5767 8.0472C15.7734 8.08268 15.925 8.21491 15.9831 8.40521C16.0411 8.5955 15.9927 8.79224 15.854 8.93093L15.2348 9.55018C14.622 10.163 14.622 11.1564 15.2348 11.7692L19.3051 15.8363C19.5051 16.0427 19.5051 16.3749 19.2986 16.5781Z"
                                                fill="#FAF1E2" />
                                            <path
                                                d="M2.82458 1.58355C2.62139 1.38035 2.28918 1.38035 2.08599 1.58355C1.8828 1.78674 1.8828 2.11894 2.08599 2.32214L3.19549 3.43164C3.2987 3.53485 3.43093 3.58645 3.5664 3.58645C3.70186 3.58645 3.83409 3.53485 3.9373 3.43164C4.1405 3.22844 4.1405 2.89624 3.9373 2.69305L2.82458 1.58355Z"
                                                fill="#FAF1E2" />
                                            <path
                                                d="M3.11766 5.40531C3.11766 5.11503 2.88221 4.88281 2.59516 4.88281H1.02445C0.734174 4.88281 0.501953 5.11826 0.501953 5.40531C0.501953 5.69236 0.737399 5.92781 1.02445 5.92781H2.59516C2.88544 5.92781 3.11766 5.69559 3.11766 5.40531Z"
                                                fill="#FAF1E2" />
                                            <path
                                                d="M3.19549 7.37945L2.08599 8.48894C1.8828 8.69214 1.8828 9.02434 2.08599 9.22754C2.1892 9.33074 2.32143 9.38235 2.4569 9.38235C2.59236 9.38235 2.7246 9.33074 2.8278 9.22754L3.9373 8.11804C4.1405 7.91484 4.1405 7.58264 3.9373 7.37945C3.73088 7.17625 3.40191 7.17625 3.19549 7.37945Z"
                                                fill="#FAF1E2" />
                                            <path
                                                d="M8.2525 3.58645C8.38796 3.58645 8.5202 3.53485 8.62341 3.43164L9.73291 2.32214C9.9361 2.11894 9.9361 1.78674 9.73291 1.58355C9.52971 1.38035 9.19751 1.38035 8.99432 1.58355L7.88482 2.69305C7.68162 2.89624 7.68162 3.22844 7.88482 3.43164C7.9848 3.53485 8.11704 3.58645 8.2525 3.58645Z"
                                                fill="#FAF1E2" />
                                            <path
                                                d="M6.42976 2.09321V0.522496C6.42976 0.232221 6.19431 0 5.90726 0C5.62021 0 5.38477 0.235446 5.38477 0.522496V2.09321C5.38477 2.38349 5.62021 2.61571 5.90726 2.61571C6.19431 2.61571 6.42976 2.38349 6.42976 2.09321Z"
                                                fill="#FAF1E2" />
                                        </svg>
                                        Interaktywny prototyp
                                    </div>
                                    <div id="collapseOne" className="card-body pb-0 collapse" data-parent="#accordion">
                                        <p className="pera">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et
                                            imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla
                                            semper ultrices. Pulvinar mi leo donec ipsum.
                                        </p>
                                    </div>
                                </div>

                                <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion"
                                    href="#collapseTwo">
                                    <div className="card-title">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.0907 12.967C15.0939 11.9792 15.638 10.6707 15.6073 9.32011C15.5766 7.96933 14.9735 6.68295 13.9263 5.7346C12.879 4.78609 11.4702 4.25061 9.99966 4.2417H9.9279C8.47104 4.28555 7.08697 4.83683 6.05616 5.78381C5.02552 6.73063 4.42542 8.00214 4.37753 9.34052C4.35667 10.6861 4.90568 11.9863 5.90864 12.967C6.62186 13.6605 7.0087 14.5845 6.98533 15.5384C6.76255 15.5711 6.59968 15.7487 6.60252 15.956V18.1977H6.65041C6.75087 18.7022 7.04024 19.1586 7.46843 19.4877C7.89662 19.8169 8.43648 19.9981 8.99484 19.9999H11.0044C11.5628 19.9981 12.1026 19.8169 12.5308 19.4877C12.959 19.1586 13.2484 18.7022 13.3488 18.1977H13.3967V15.956C13.3994 15.7368 13.226 15.5493 12.99 15.5163C12.9577 14.5634 13.356 13.6406 14.0906 12.967L14.0907 12.967ZM6.60259 12.3516C5.76218 11.542 5.30609 10.4588 5.33463 9.34048C5.38186 8.2353 5.88099 7.18699 6.73241 6.40481C7.58367 5.62263 8.72479 5.16411 9.92797 5.1207H9.99973C11.2391 5.12653 12.4258 5.58291 13.2999 6.39009C14.1742 7.19739 14.6648 8.2897 14.6648 9.42847C14.667 10.5228 14.2134 11.5764 13.3968 12.3735C12.4924 13.205 11.9994 14.3412 12.0333 15.5163H10.4782V12.7252C10.7941 12.626 11.0692 12.4399 11.266 12.1921C11.4629 11.9445 11.572 11.6471 11.5787 11.3405C11.5787 10.8223 11.2777 10.3434 10.7892 10.0843C10.3006 9.82523 9.69886 9.82523 9.21022 10.0843C8.72175 10.3434 8.42074 10.8223 8.42074 11.3405C8.42742 11.6471 8.53655 11.9446 8.73347 12.1921C8.93022 12.4399 9.20541 12.626 9.52128 12.7252V15.5163H7.94228C7.95964 14.3416 7.47919 13.2068 6.6026 12.3515L6.60259 12.3516ZM9.99975 11.9121V11.9119C9.8347 11.9119 9.6765 11.8518 9.55985 11.7447C9.4432 11.6375 9.37779 11.4922 9.37779 11.3405C9.37779 11.1363 9.49627 10.9478 9.68868 10.8457C9.88125 10.7436 10.1182 10.7436 10.3108 10.8457C10.5032 10.9478 10.6217 11.1363 10.6217 11.3405C10.6217 11.4922 10.5563 11.6375 10.4396 11.7447C10.323 11.8518 10.1648 11.9119 9.99971 11.9119L9.99975 11.9121ZM11.0045 19.1209L8.99499 19.1207C8.69044 19.1196 8.39425 19.0296 8.14908 18.8638C7.90393 18.6977 7.7227 18.4645 7.63126 18.1976H12.3681C12.2767 18.4645 12.0955 18.6977 11.8503 18.8638C11.6052 19.0296 11.309 19.1196 11.0044 19.1207L11.0045 19.1209ZM7.55949 17.3186V16.3955H12.4399V17.3186H7.55949Z"
                                                fill="#0A3180" />
                                            <path
                                                d="M10.4783 2.41762V0.439521C10.4783 0.196837 10.2642 0 9.99991 0C9.73559 0 9.52148 0.196844 9.52148 0.439521V2.41762C9.52148 2.66031 9.73559 2.85714 9.99991 2.85714C10.2642 2.85714 10.4783 2.6603 10.4783 2.41762Z"
                                                fill="#0A3180" />
                                            <path
                                                d="M19.5221 7.95605H17.3691C17.1047 7.95605 16.8906 8.15275 16.8906 8.39557C16.8906 8.63826 17.1047 8.83509 17.3691 8.83509H19.5221C19.7864 8.83509 20.0005 8.63825 20.0005 8.39557C20.0005 8.15274 19.7864 7.95605 19.5221 7.95605Z"
                                                fill="#0A3180" />
                                            <path
                                                d="M2.63147 8.8351C2.89581 8.8351 3.1099 8.63825 3.1099 8.39558C3.1099 8.15274 2.8958 7.95605 2.63147 7.95605H0.47843C0.214095 7.95605 0 8.15275 0 8.39558C0 8.63826 0.214104 8.8351 0.47843 8.8351H2.63147Z"
                                                fill="#0A3180" />
                                            <path
                                                d="M3.11131 3.07688L4.61854 4.48347C4.71466 4.55169 4.83198 4.59017 4.95346 4.59324C5.08296 4.59324 5.20879 4.55476 5.31225 4.48347C5.47646 4.29766 5.47646 4.03166 5.31225 3.84603L3.78113 2.46153C3.59073 2.33015 3.32424 2.34763 3.15583 2.50231C2.98745 2.657 2.96843 2.90184 3.11127 3.07692L3.11131 3.07688Z"
                                                fill="#0A3180" />
                                            <path
                                                d="M16.8905 2.46154C16.8044 2.37523 16.6829 2.32617 16.5556 2.32617C16.4283 2.32617 16.3066 2.37523 16.2207 2.46154L14.6896 3.84604C14.5254 4.03169 14.5254 4.29769 14.6896 4.48348C14.793 4.55477 14.9189 4.59325 15.0484 4.59325C15.1698 4.59018 15.2872 4.5517 15.3833 4.48348L16.8905 3.07689C16.9843 2.99778 17.0377 2.88617 17.0377 2.7692C17.0377 2.65207 16.9843 2.54047 16.8905 2.46152L16.8905 2.46154Z"
                                                fill="#0A3180" />
                                        </svg> Audyt ekspercki
                                    </div>
                                    <div id="collapseTwo" className="card-body pb-0 collapse" data-parent="#accordion">
                                        <p className="pera">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et
                                            imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla
                                            semper ultrices. Pulvinar mi leo donec ipsum.
                                        </p>
                                    </div>
                                </div>

                                <div className="card-header" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                    <div className="card-title">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.9232 -0.000244141H2.30773C1.03523 -0.000244141 0 1.03498 0 2.30749V6.92295C0 8.19546 1.03523 9.23069 2.30773 9.23069H6.9232C8.1957 9.23069 9.23093 8.19546 9.23093 6.92295V2.30749C9.23093 1.03498 8.1957 -0.000244141 6.9232 -0.000244141ZM7.69244 6.92295C7.69244 7.34741 7.34765 7.6922 6.9232 7.6922H2.30773C1.88328 7.6922 1.53849 7.34741 1.53849 6.92295V2.30749C1.53849 1.88303 1.88328 1.53824 2.30773 1.53824H6.9232C7.34765 1.53824 7.69244 1.88303 7.69244 2.30749V6.92295Z"
                                                fill="#F39E41" />
                                            <path
                                                d="M17.6927 10.7693H13.0773C11.8048 10.7693 10.7695 11.8045 10.7695 13.077V17.6925C10.7695 18.965 11.8048 20.0002 13.0773 20.0002H17.6927C18.9652 20.0002 20.0005 18.965 20.0005 17.6925V13.077C20.0005 11.8045 18.9652 10.7693 17.6927 10.7693ZM18.462 17.6925C18.462 18.1169 18.1172 18.4617 17.6927 18.4617H13.0773C12.6528 18.4617 12.308 18.1169 12.308 17.6925V13.077C12.308 12.6526 12.6528 12.3078 13.0773 12.3078H17.6927C18.1172 12.3078 18.462 12.6526 18.462 13.077V17.6925Z"
                                                fill="#F39E41" />
                                            <path
                                                d="M13.7998 7.19424C13.95 7.34432 14.1935 7.34432 14.3437 7.19424L14.8875 6.65046C15.0378 6.50021 15.0378 6.25673 14.8875 6.10649L13.3959 4.61521H16.154C16.5788 4.61521 16.9232 4.95965 16.9232 5.38446V8.84605C16.9232 9.05845 17.0955 9.23068 17.3079 9.23068H18.0771C18.2895 9.23068 18.4617 9.05845 18.4617 8.84605V5.38446C18.4617 4.10988 17.4286 3.07672 16.154 3.07672H13.3954L14.8868 1.58478C15.0369 1.43454 15.0369 1.19106 14.8868 1.04099L14.343 0.497205C14.1928 0.34696 13.9493 0.34696 13.7991 0.497205L10.9947 3.30218C10.6944 3.60249 10.6944 4.08944 10.9949 4.38976L13.7998 7.19424Z"
                                                fill="#F39E41" />
                                            <path
                                                d="M6.20103 12.8057C6.05079 12.6555 5.80731 12.6556 5.65707 12.8057L5.11328 13.3495C4.96303 13.4998 4.96303 13.7432 5.11328 13.8935L6.60491 15.3848H3.84679C3.42199 15.3848 3.07755 15.0403 3.07755 14.6155V11.1539C3.07755 10.9415 2.90533 10.7693 2.69293 10.7693H1.92368C1.71129 10.7693 1.53906 10.9415 1.53906 11.1539V14.6155C1.53906 15.8901 2.57222 16.9232 3.84679 16.9232H6.60544L5.11398 18.4152C4.96391 18.5654 4.96391 18.8089 5.11398 18.9591L5.65777 19.5029C5.80802 19.6532 6.05149 19.6532 6.20174 19.5029L9.00605 16.698C9.30636 16.3976 9.30636 15.9107 9.00588 15.6104L6.20103 12.8057Z"
                                                fill="#F39E41" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M17.4119 14.6254L15.1225 17.0066C14.995 17.1392 14.791 17.1392 14.6636 17.0066L13.5214 15.8083C13.3939 15.6758 13.3939 15.4616 13.5214 15.329C13.6489 15.1965 13.8528 15.1965 13.9803 15.329L14.8981 16.2876L16.9581 14.1461C17.0856 14.0135 17.2895 14.0135 17.417 14.1461C17.5394 14.2786 17.5394 14.4928 17.4119 14.6254H17.4119Z"
                                                fill="#F39E41" />
                                            <rect x="3.00977" y="2.50537" width="5.24477" height="0.716689" rx="0.358344"
                                                transform="rotate(45 3.00977 2.50537)" fill="#F39E41" />
                                            <rect x="6.71875" y="3.01221" width="5.24477" height="0.716689" rx="0.358344"
                                                transform="rotate(135 6.71875 3.01221)" fill="#F39E41" />
                                        </svg>
                                        Rekomendacje zmian
                                    </div>
                                    <div id="collapseThree" className="card-body pb-0 collapse show" data-parent="#accordion">
                                        <p className="pera">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet augue nibh ultrices et
                                            imperdiet molestie turpis sapien elit. Tincidunt tempor pretium facilisis nulla
                                            semper ultrices. Pulvinar mi leo donec ipsum.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="price">
            {isChangeStep === 1 && <StepOne setIsChangeStep={setIsChangeStep} />}
            {isChangeStep === 2 && <StepTwo setIsChangeStep={setIsChangeStep} />}
            {isChangeStep === 3 && <StepThree setIsChangeStep={setIsChangeStep} />}
            {isChangeStep === 4 && <StepFour setIsChangeStep={setIsChangeStep} />}
            </section>

            <section className="setting">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Dlaczego testy
                                z prawdziwymi użytkownikami?</h2>
                        </div>
                        <div className="col-lg-9 mx-auto">
                            <div className="boxes">
                                <h3>Wczesne wykrywanie błędów <span className="heading_after font-600">przed wdrożeniem.</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper massa pulvinar non cursus odio viverra non, sapien, sed. </p>
                            </div>
                            <div className="boxes">
                                <h3>Wczesne wykrywanie błędów <span className="heading_after font-600">przed wdrożeniem.</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper massa pulvinar non cursus odio viverra non, sapien, sed. </p>
                            </div>
                            <div className="boxes">
                                <h3>Wczesne wykrywanie błędów <span className="heading_after font-600">przed wdrożeniem.</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper massa pulvinar non cursus odio viverra non, sapien, sed. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-5 text-center washing_machine position-relative" id="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-3 pb-5">
                            <h6 className="heading-10">Skorzystaj z wiedzy i doświadczenia
                                specjalistów i uniknij błędów przy wdrożeniu.</h6>
                            <button className="btn-blue mt-4"> <img src={Mouse} alt="" /> Wykonaj test UX</button>
                        </div>
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-12 bg-beige">
                        <h2>Masz pytania?</h2>
                        <p>Umów się na 30 minutową sesję z UX testerem.</p>
                        <div className="d-flex align-items-center justify-content-center mt-5">
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
            </section>
            <Footer />
        </>
    )
}