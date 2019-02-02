import React from 'react';

export default ({ data, renderElement }) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {
                data.map((e) => {
                    return (
                        <div style={{
                            flex: '1',
                            minWidth: '180px',
                            margin: '8px'
                        }}>
                            {renderElement(e)}
                        </div>
                    )
                })
            }
        </div>
    )
};