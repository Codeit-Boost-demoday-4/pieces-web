import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container } from './styles';
import Button from '../../components/Button';
import PostList from './components/PostList';
import data from '../../dummyData/postData.json';

function Group(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title='글 작성하기'
                    onClick={() => {
                        navigate('/post-write');
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default Group;
