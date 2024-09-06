// Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MakeGroup from './makegroup';
import GroupAuth from './GroupAuth.js';
import logo from '../../assets/memories/logo.png';
import PostItem from '../Group/PostItem/index.js';
import { dummyPosts } from "../Group/dummyPosts.js";

const Home = () => {
    const navigate = useNavigate();
    const [isPublicView, setIsPublicView] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const groupId = 1;

    const handleCreateGroup = () => {
        navigate("/makegroup");
    };

    const handleShowPublic = () => {
        setIsPublicView(true);
    };

    const handleShowPrivate = () => {
        setIsPublicView(false);
    };

    const handleGroupClick = () => {
        navigate(`/group/${groupId}`);
    };

    const LogoComponent = () => {
        return <img src={logo} alt="Logo" style={{ display: 'block', margin: '0 auto' }} />;
    };

    const handlePostClick = (post) => {
        if (isPublicView) {
            handleGroupClick();
        } else {
            navigate("/GroupAuth");
        }
    };

    const filteredPosts = dummyPosts.filter(
        (post) =>
            post.isPublic === isPublicView && 
            (post.title.includes(searchQuery) || post.tags.some(tag => tag.includes(searchQuery)))
    );

    return (
        <>
            <button onClick={handleCreateGroup} className="create-group-btn">
                그룹 만들기
            </button>
            <div className="header-container">
                <LogoComponent />
            </div>
            <div className="home-layout">
                <div className="posts-container">
                    <div className="post-mid-container">
                        <button
                            className={`public-button ${isPublicView ? "active" : ""}`}
                            onClick={handleShowPublic}
                        >
                            공개
                        </button>
                        <button
                            className={`public-button ${!isPublicView ? "active" : ""}`}
                            onClick={handleShowPrivate}
                        >
                            비공개
                        </button>
                        <input
                            className="search-input"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="태그 혹은 제목을 입력해주세요"
                        />
                    </div>

                    <div className="posts-list">
                        {filteredPosts.map((post) => (
                            <PostItem
                                key={post.id}
                                nickname={post.nickname}
                                title={post.title}
                                imageUrl={post.imageUrl}
                                tags={post.tags}
                                location={post.location}
                                moment={post.moment}
                                handleClick={() => handlePostClick(post)}
                                showImage={isPublicView} // 이미지를 표시할지 여부
                            />
                        ))}
                    </div>
                    <button className="load-more-btn">더보기</button>
                </div>
            </div>
        </>
    );
};

export default Home;
