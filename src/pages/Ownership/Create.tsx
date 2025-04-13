import CardComponent from "../../components/CardComponent"
import InputComponent from "../../components/InputComponents"
import LayoutComponent from "../../components/LayoutComponent"
import TextAreaComponent from "../../components/TextAreaComponent"
import MapComponent from "../../components/MapComponent";
import { useState } from "react";
import { Location }  from "../../components/LocationMarkerComponent"; 


const Create: React.FC = () => {
    const [position, setPosition] = useState<Location>({lat: -15.5989, lng: -56.0949});

    console.log(position)

    return (
        <LayoutComponent>
                <CardComponent title="Cadastrar Propriedades">
                    <div className="flex gap-4 ">
                        <div className="w-full">
                            <InputComponent placeholder="Ex: Joao" label="Nome" value="" onchangeText={(text) => console.log(text)}/>
                            <InputComponent placeholder="Ex: Joao" label="Número de registro" value="" onchangeText={(text) => console.log(text)}/>
                        </div>
                        <div className="w-full">
                            <TextAreaComponent 
                                 label="Descrição" 
                                value="" rows={5} 
                                onchangeText={(text) => console.log(text)}
                            />
                        </div>
                    </div>
                    <MapComponent position={position} setPosition={setPosition}/>
                </CardComponent>
        </LayoutComponent>
    )
}

export default Create