import { styled } from "../../stitches.config";

export const Tela = styled("div", {
    width: '97.5vw',
    height: '97.5vh',
    backgroundColor: '$gray800',

})

export const Container = styled('div', {
    width: '100%',
    height: '100%',
    display: 'flex',

})

export const ContainerFoto = styled("div", {
    
    height: '100%',
    
    img: {
        height: '100%',
    }
})

export const ContainerLogin = styled("div", {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
})

export const Login = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    gap: "$3",

    p: {
        color: "White"
    },

    input: {
        width: '300px',
        padding: '8px 12px',
        border: `1px solid $gray300`,
        borderRadius: '4px',
        outline: 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.2s ease-in-out',
      
        '&:focus': {
          borderColor: '$purple100',
        },
    },
})

export const Button = styled("div", {
    padding: '12px 20px',
    backgroundColor: '$purple100',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.2s ease-in-out',

    '&:hover': {
        backgroundColor: '$purple200',
    },
})

export const ButtonSemConta = styled("div", {
    padding: '12px 20px',
    backgroundColor: 'transparent',
    color: "$white",
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'color 0.2s ease-in-out',
  
    '&:hover': {
      color: '$purple100',
    },
})
