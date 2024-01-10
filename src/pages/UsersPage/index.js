import {useEffect, useState} from "react";
import axios from 'axios'
import {Typography, Table, Spin} from "antd";
import './styles.css'
import {useNavigate} from "react-router-dom";

const { Title } = Typography;

const columns = [
    {
        title: 'ID',
        key: 'id',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
    },
    {
        title: 'Phone',
        key: 'phone',
        dataIndex: 'phone',
    }
]

export default function UsersPage () {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => setData(response.data))
    }, []);

    const detailShow = (id) =>{
        navigate(`/user/posts/${id}`)
    }

    return (
        <div className="users__body">
            <Title>Users</Title>
            { data.length === 0 ?
                <Spin />
                :
                <Table
                 columns={columns}
                 dataSource={data}
                 scroll={{x: 700}}
                 onRow={(r) => ({
                     onClick: () => detailShow(r.id),
                 })}
                 rowKey="id"
                />
            }
        </div>
    )
}
