import React from 'react';
import {Link} from "react-router-dom";

const Index: React.FC = () => {
    return (
        <div>
            <Link to="/old">
                <p>옛날에 하던것</p>
            </Link>
            <Link to="/new">
                <p>새로 배운것</p>
            </Link>
        </div>
    );
};

export default Index;