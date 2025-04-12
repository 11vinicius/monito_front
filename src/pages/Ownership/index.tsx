import { Icon } from "@iconify/react/dist/iconify.js"
import CardComponent from "../../components/CardComponent"
import LayoutComponent from "../../components/LayoutComponent"
import TableComponent from "../../components/TableComponent"
import IconButtonComponent from "../../components/IconButton"
import { useOwnershipStore } from "../../stores/useOwnershipStore"
import { useEffect } from "react"

const Ownership: React.FC = () => {

    const { findAll, ownership, prevPage, lastPage, loading, erro } = useOwnershipStore(); 

    useEffect(() => {
        findAll();
    },[])

    return (
        <LayoutComponent>
                <CardComponent title="Propriedades">
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
                </CardComponent>
        </LayoutComponent>
    )
} 

export default Ownership