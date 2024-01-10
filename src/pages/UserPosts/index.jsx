import {useParams} from "react-router-dom";
import axios from 'axios'
import {Typography, Card} from "antd";
import './styles.css'
import {useEffect, useState} from "react";


const {Title} = Typography
export default function UserPosts () {
    const [userData, setUserData] = useState()
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => setUserData(response.data))
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(response => setPosts(response.data))
    }, []);


    return (
        <div className='user-posts__body'>
            <Title>{userData?.name} posts</Title>
            <div className="user-posts__list">
                {posts.map((post) => <Card title={post.title} style={{ width: 300, marginTop: '10px' }} key={post.id}>{post.body}</Card> )}
            </div>
        </div>
    )
}
