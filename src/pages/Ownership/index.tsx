import { Icon } from "@iconify/react/dist/iconify.js"
import CardComponent from "../../components/CardComponent"
import LayoutComponent from "../../components/LayoutComponent"
import TableComponent from "../../components/TableComponent"
import IconButtonComponent from "../../components/IconButton"
import { useOwnershipStore } from "../../stores/useOwnershipStore"
import { useEffect } from "react"
import ButtonComponent from "../../components/ButtonComponent"
import { useNavigate } from "react-router-dom"

const Ownership: React.FC = () => {

    const router = useNavigate();
    const { findAll, ownership, prevPage, lastPage, loading, erro } = useOwnershipStore(); 

    useEffect(() => {
        findAll();
    },[])

    function onCreate(){
        router('/propriedades/criar')
    }

    return (
        <LayoutComponent>
                <CardComponent title="Propriedades">
                    <div className="flex justify-end my-4">
                        <div className="w-36">
                            <ButtonComponent 
                                title="Adicionar"
                                icon={<Icon icon="material-symbols:add" width="24" height="24" />}
                                onClick={() => onCreate()} 
                            />
                        </div>
                    </div>

                    <TableComponent columns={['Nome', 'Cidade', 'lat e long', 'Acoes']}>
                        {ownership.map((ownership) => (
                              <tr key={ownership.id}>
                                <td className="px-4">{ownership.name}</td>
                                <td className="px-4">{}</td>
                                <td className="px-4">{ownership.long}/{ownership.lat}</td>
                                <td className="px-4 flex">
                                    <IconButtonComponent bgColor="green" icon={<Icon icon="tabler:edit" width="24" height="24" />} onclick={() => {}} />
                                    <IconButtonComponent bgColor="red" icon={<Icon icon="humbleicons:trash" width="24" height="24" />} onclick={() => {}} />
                                </td>
                            </tr>
                        ))}
                                                
                    </TableComponent>
                    <div className="flex justify-end gap-4 my-4 px-4">
                        <button className="cursor-pointer bg-gray-200 text-gray-700 shadow-lg rounded-md ">
                            <Icon icon="uil:previous" width="40" height="40" />
                        </button>
                        <button className="cursor-pointer bg-gray-200 text-gray-700 shadow-lg rounded-md">
                            <Icon icon="material-symbols:last-page-rounded" width="40" height="40" />
                        </button>
                    </div>
                </CardComponent>
        </LayoutComponent>
    )
} 

export default Ownership