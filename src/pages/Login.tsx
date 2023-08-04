import { useState } from "react"
import * as S from "./Login.styles"


export default function Login() {

    const [ChangeScreen, setChangeScreen] = useState(true)

    return (
        <>
            <S.Tela>
                <S.Container>
                    <S.ContainerFoto>
                        <img src="/assets/imageLogin.svg" alt="imagem do login" /> 
                    </S.ContainerFoto>
                    <S.ContainerLogin>
                        {
                            ChangeScreen ?
                            <S.Login>
                            <p>Preencha os campos para fazer login</p>
                            <input type="text" name="" id="" placeholder="Username"/>
                            <input type="text" name="" id="" placeholder="Senha" />
                            <S.Button>Fazer login</S.Button>
                            </S.Login>
                                :
                            <S.Login>
                                <p>Preencha os campos para criar sua conta</p>
                                <input type="text" name="" id="" placeholder="Username"/>
                                <input type="text" name="" id="" placeholder="Gmail" />
                                <input type="text" name="" id="" placeholder="Senha" />
                                <input type="text" name="" id="" placeholder="Telefone" />
                                <S.Button>Criar conta</S.Button>
                            </S.Login>
                        }
                        <S.ButtonSemConta
                        onClick={() => {
                        setChangeScreen(!ChangeScreen)}}
                        >Ainda não tem uma conta? clique aqui</S.ButtonSemConta>
                    </S.ContainerLogin>
                </S.Container>
            </S.Tela>
        </>
    )
}
