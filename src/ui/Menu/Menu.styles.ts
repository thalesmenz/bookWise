import { styled } from "../../../stitches.config";

export const Container = styled('div', {
    position: 'fixed',
    height: '95%',
    width: '232px',
    background: 'linear-gradient(to bottom, #8381D9, #2A2879)',

    padding: '$7 0px',
    margin: '10px',
    borderRadius: '10px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

})

export const ContainerNav = styled('div', {
    display: "flex",
    flex: 1,
    gap: "$16",
    flexDirection: "column",

    span: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "$1",
    },
    
    p: {
        fontSize: '20px',
    },

    ul: {
        display: "flex",
        flexDirection: "column",
        gap: "$4",
    },

    li: {
        display: "flex",
        alignItems: "center",
        gap: '$3'
    },

    a: {
        color: "White",
        fontSize: '18px'
    }

})

export const ContainerLogin = styled('div', {
    display: 'flex',
    flex: 1,
    alignItems: "end",

    button: {
        background: 'none',
        border: "none",
        display: "flex",
        alignItems: "center",
        gap: '$2',
        fontSize: '16px',
        color: "$white",

        svg: {
            color: "#50B2C0",
        }
    }
})