import * as React from 'react';
import MUIDataTable, {MUIDataTableColumn} from "mui-datatables";
import {useEffect, useState} from "react";
import {Chip} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import format from "date-fns/format";
import parseISO from "date-fns/parseISO"
import categoryHttp from "../../utils/http/category-http";

const columnsDefinitions: MUIDataTableColumn[] = [
    {
        name: "id",
        label: "ID"
    },
    {
        name: "name",
        label: "Nome"
    },
    {
        name: "description",
        label: "Descrição"
    },
    {
        name: "is_active",
        label: "Ativo?",
        options: {
            customBodyRender(value, tableMeta, updateValue) {
                console.log(value, tableMeta, updateValue)
                return value ? <Chip label="sim"/> : <Chip label="não"/>
            }
        }
    },
    {
        name: "create_at",
        label: "Criado em",
        options: {
            customBodyRender(value, tableMeta, updateValue) {
                return <span>{format(parseISO(value), "dd/MM/yyyy")}</span>
            }
        }
    },
    {
        name: "picture",
        label: "Picture",
        options: {
            customBodyRender(value, tableMeta, updateValue) {
                return value ?
                    <Chip avatar={<Avatar src={value} />} label="OK" color="primary"/>
                    :
                    <Chip icon={<FaceIcon />} label="Empty"/>
            }
        }
    }
]

const data = [
    { name: "teste", is_active: true, create_at: "2019-12-12", description: "teste desc"},
    { name: "teste1", is_active: true, create_at: "2019-12-12", description: "teste desc"},
    { name: "teste2", is_active: true, create_at: "2019-12-12", description: "teste desc"},
    { name: "teste3", is_active: true, create_at: "2019-12-12", description: "teste desc"},
]

interface Category {
    id: string;
    name: string;
    is_active: boolean;
    create_at: dateFns;
    picture: string;
    description: string;
}

export const Table = () => {

    const [data, setData] = useState<Category[]>([]);

    // recebe dois parametros, o que eu vou fazer e o segundo
    // é as dependencias.
    // equivale ao componentDidMount()
    useEffect(() => {

        categoryHttp
            .list<{data: Category[]}>()
            .then(({data}) => setData(data as any));

        // httpVideo.get('categories').then(
        //     (response:any) => setData(response.data)
        // )
    }, [])

    return (
        <MUIDataTable
            columns={columnsDefinitions}
            data={data}
            title="Listagem de categorias"/>
    );
};

export default Table;