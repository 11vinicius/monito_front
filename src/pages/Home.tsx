import CardComponent from "../components/CardComponent"
import LayoutComponent from "../components/LayoutComponent"

const Home: React.FC = () =>{
  return (
    <LayoutComponent>
        <CardComponent title="Olá">
            <p>Seja bem vindo ao sistema de gerenciamento de propriedades!</p>
        </CardComponent>
    </LayoutComponent>
  )
}

export default Home
