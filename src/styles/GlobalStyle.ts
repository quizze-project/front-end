import { createGlobalStyle } from 'styled-components';
import header_bg from '../assets/header_bg.svg';

export default createGlobalStyle`
    :root {
        --green: #0BF06A;
        --purple: #6A0BF9;
        --light-purple: #8638FA;
        --red: #FA3838;
        --black: #414141;
        --gray: #F5F5F5;
    }

    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body, #root {
        margin: 0;
        padding: 0;

        width: 100%;
        min-height: 100vh;
    }

    body {
        background-color: var(--gray);
        color: var(--black);
        font-size: 0.8rem;
    }

    #root:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: url(${header_bg}) no-repeat;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    #root {
        padding: 2rem 10%;
    }

    input, button {
        outline: none;
        border: 0;
        margin: 0;
    }
    
    h1, h2, h3, h4, h5 {
        color: var(--black);
        font-weight: 600;
        margin: 10px 0;
    }

    h1 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
    }

    .white {
        color: white;
    }

    .bg-green {
        background-color: var(--green);
    }

    .bg-purple {
        background-color: var(--purple);
    }

    .bg-light-purple {
        background-color: var(--light-purple);
    }

    .bg-red {
        background-color: var(--red);
    }

    .bg-black {
        background-color: var(--black);
    }

    .bg-gray {
        background-color: var(--gray);
    }

    .w600 {
        font-weight: 600;
    }
    
    .btn, .custominput {
        padding: 10px 16px;
        font-size: 0.85rem;
        border-radius: 4px;
        max-width: 100%;
    }

    a.btn {
        padding: 11px 16px;
    }

    .large {
        padding: 16px;
    }

    .largefont {
        font-size: 0.9rem;
    }

    .block {
        display: block;
        width: 100%;
    }

    .btn {
        cursor: pointer;
        text-align: center;
        color: white;
        font-weight: 600;
        text-decoration: none;
    }

    .custominput {
        background-color: var(--gray);
        color: rgba(0, 0, 0, 0.5);
    }

    .center-align {
        display: flex;
        align-items: center;
    }

    .right-align {
        display: flex;
        justify-content: flex-end;
    }

    .justify-between {
        display: flex;
        justify-content: space-between;
    }

    .form-group {
        margin-bottom: 10px;
    }

    .form-group label {
        font-weight: 600;
    }

    [tooltip-text] {
        position: relative;
    }

    [tooltip-text]::after {
        content: attr(tooltip-text);
        position: absolute;
        text-align: center;
        font-size: 0.8rem;
        font-weight: 400;
        word-wrap: break-word;
        color: white;
        top: -10%;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background-color: rgba(23, 8, 23, 0.7);
        padding: 4px 16px;
        border-radius: 4px;
        max-width: 150px;
        width: max-content;
        opacity: 0;
        visibility: hidden;
        transition: all .5s ease;
        pointer-events: none;
    }

    [tooltip-text]:hover::after {
        opacity: 1;
        visibility: visible;
    }
`;