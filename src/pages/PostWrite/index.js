import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container } from './styles';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

function PostWrite(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <Button
                    title='글 작성하기'
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWrite;
