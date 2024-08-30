import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper, Container, PostContainer, TitleText, Image, ContentText, CommentLabel } from './styles';
import CommentList from '../Group/components/CommentList';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import data from '../../dummyData/postData.json';

function PostView() {
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const { postId } = useParams();

    const post = data.find((item) => item.id === parseInt(postId, 10));

    if (!post) {
        return (
            <Wrapper>
                <Container>
                    <TitleText>포스트를 찾을 수 없습니다.</TitleText>
                    <Button title="홈으로 가기" onClick={() => navigate('/')} />
                </Container>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Container>
                <Button title="뒤로 가기" onClick={() => navigate('/')} />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    {post.image && <Image src={require(`../../../${post.image}`).default} alt={post.title} />}
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
                <Button title="댓글 작성하기" onClick={() => {
                    // 댓글 작성 로직 추가 필요
                    console.log("댓글 작성됨:", comment);
                    setComment('');
                }} />
            </Container>
        </Wrapper>
    );
}

export default PostView;