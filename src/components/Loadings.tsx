import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Loadings: React.FC = () => {
    return (
        <>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
        </>
    );
};

export default Loadings;
