import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MakeGroup from './makegroup';
import logo from '../../assets/memories/logo.png';


const Home = () => {
    const navigate = useNavigate();
    const [isPublicView, setIsPublicView] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const groupId = 1;

    const handleCreateGroup = () => {
        navigate("/makegroup"); // makegroup으로 이동
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

                    {isPublicView ? (
                        <div className="posts-list"></div>
                    ) : (
                        <div className="posts-list"></div>
                    )}
                    <button className="load-more-btn">더보기</button>
                </div>
            </div>
        </>
    );
};

export default Home;
