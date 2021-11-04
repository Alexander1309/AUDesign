import { createGlobalStyle } from 'styled-components'

const StylesGlobals = createGlobalStyle`

    :root {
        --color-primary: #2A2F73;
        --color-secondary: #25A795;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: #ddd;
    }
`

export default StylesGlobals